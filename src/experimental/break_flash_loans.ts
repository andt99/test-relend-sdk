/* eslint-disable no-unused-vars */
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { Connection, Keypair, PublicKey, Transaction } from "@solana/web3.js";
import {
  RelendMarket,
  SOLEND_BETA_PROGRAM_ID,
  flashBorrowReserveLiquidityInstruction,
  flashRepayReserveLiquidityInstruction,
} from "../../dist";

// const SOLANA_RPC_ENDPOINT = "https://api.devnet.solana.com"
const SOLANA_RPC_ENDPOINT = "https://api.testnet.solana.com";

const connection = new Connection(SOLANA_RPC_ENDPOINT);

const WALLET_PRIVATE_KEY: number[] = JSON.parse(
  process.env.WALLET_PRIVATE_KEY || "[]"
);
export const USER_KEYPAIR = Keypair.fromSecretKey(
  Uint8Array.from(WALLET_PRIVATE_KEY)
);

const getATA = async (mintAddress: PublicKey, owner: PublicKey) => {
  return getAssociatedTokenAddress(mintAddress, owner);
};

const main = async () => {
  const payer = USER_KEYPAIR;

  const lendingMarketKey = new PublicKey(
    "HB1cecsgnFPBfKxEDfarVtKXEARWuViJKCqztWiFB3Uk"
  );

  // main pool
  const market = await RelendMarket.initialize(
    connection,
    "beta",
    lendingMarketKey.toString()
  );

  const solReserve = market.reserves.find(
    (res) => res.config.liquidityToken.symbol == "SOL"
  );
  const msolReserve = market.reserves.find(
    (res) => res.config.liquidityToken.symbol == "mSOL"
  );

  if (!solReserve || !msolReserve) {
    console.log("Can't find both reserves.");
    return;
  }
  console.log(solReserve!.config.address);

  // turbo sol pool
  const marketTurbo = await RelendMarket.initialize(
    connection,
    "beta",
    "Az4MpWtMcpENQZwbEbTnrgyd2qk3wsMwQXimadUiHSQp"
  );
  const solReserveTurbo =
    marketTurbo.reserves.find(
      (res) => res.config.liquidityToken.symbol == "SOL"
    ) ?? null;

  if (!solReserveTurbo) {
    console.log("Can't find turbo sol reserve");
    return;
  }

  const solATA = await getATA(
    new PublicKey(solReserve.config.liquidityToken.mint),
    payer.publicKey
  );

  console.log(solReserveTurbo.config.liquidityAddress);

  const tx = new Transaction();

  tx.add(
    flashBorrowReserveLiquidityInstruction(
      // liquidity amount
      1e9,

      // source liquidity
      new PublicKey(solReserve.config.liquidityAddress),

      // destination liquidity
      solATA,

      // reserve address
      new PublicKey(solReserve.config.address),

      // lending market address
      new PublicKey(market.config.address),

      // program id
      SOLEND_BETA_PROGRAM_ID
    ),
    flashRepayReserveLiquidityInstruction(
      // liquidity amount
      1e9,

      // index of flash borrow instruction
      0,

      // source liquidity
      solATA,

      // destination liquidity
      new PublicKey(solReserve.config.liquidityAddress),

      // fee receiver
      new PublicKey(solReserve.config.liquidityFeeReceiverAddress),

      // host fees
      solATA,

      // reserve address
      new PublicKey(solReserve.config.address),

      // lending market address
      new PublicKey(market.config!.address),

      // user transfer authority
      payer.publicKey,

      // program id
      SOLEND_BETA_PROGRAM_ID
    )
  );

  const sig = await connection.sendTransaction(tx, [payer]);
  console.log(`https://solscan.io/tx/${sig}`);

  await connection.confirmTransaction(sig);
};

main();
