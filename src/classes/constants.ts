import { PublicKey } from "@solana/web3.js";

export const WAD = "1".concat(Array(18 + 1).join("0"));
export const WANG = "1".concat(Array(36 + 1).join("0"));
export const U64_MAX = "18446744073709551615";

export const RELEND_PRODUCTION_PROGRAM_ID = new PublicKey(
  "So1endDq2YkqhipRh3WViPa8hdiSpxWy6z3Z6tMCpAo"
);
// export const RELEND_DEVNET_PROGRAM_ID = new PublicKey("ALend7Ketfx5bxh6ghsCDXAoDrhvEmsXT3cynB6aPLgx")
export const RELEND_DEVNET_PROGRAM_ID = new PublicKey(
  "2To33scbpBECFZwooXy2tWe13G1dpQA5Gem1LdYDkby5"
);
export const RELEND_TESTNET_PROGRAM_ID = new PublicKey(
  "2To33scbpBECFZwooXy2tWe13G1dpQA5Gem1LdYDkby5"
);
export const RELEND_BETA_PROGRAM_ID = new PublicKey(
  "BLendhFh4HGnycEDDFhbeFEUYLP4fXB5tTHMoTX8Dch5"
);

export function getProgramId(environment?: string) {
  switch (environment) {
    case "mainnet-beta":
    case "production":
      return RELEND_PRODUCTION_PROGRAM_ID;
      break;
    case "devnet":
      return RELEND_DEVNET_PROGRAM_ID;
      break;
    case "testnet":
      return RELEND_TESTNET_PROGRAM_ID;
      break;
    case "beta":
      return RELEND_BETA_PROGRAM_ID;
      break;
  }

  throw Error(`Unsupported environment: ${environment}`);
}
