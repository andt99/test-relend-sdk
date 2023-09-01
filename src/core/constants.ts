export const POSITION_LIMIT = 6;
export const SOL_PADDING_FOR_INTEREST = "1000000";
export const SLOTS_PER_YEAR = 63072000;
export const SOLEND_ADDRESSES = [
  "5pHk2TmnqQzRF9L6egy5FfiyBgS7G9cMZ5RFaJAvghzw",
  "yaDPAockQPna7Srx5LB2TugJSKHUduHghyZdQcn7zYz",
  "81KTtWjRndxGQbJHGJq6EaJWL8JfXbyywVvZReVPQd1X",
  "GDmSxpPzLkfxxr6dHLNRnCoYVGzvgc41tozkrr4pHTjB",
];

export const RELEND_INFO = [
  {
    name: "main",
    isPrimary: true,
    description: "",
    creator: "F72qg2teDKus7FGsFvpoWEYoVnC6LgKbBzPGCEE31rjj",
    address: "4UpD2fh7xH3VP9QQaXtsS1YY3bxzWhtfpks7FatyKvdY",
    hidden: false,
    isPermissionless: false,
    authorityAddress: "4iXmFbrBu32eStadyNmJeKndyWZFXdbrjyiwPLmgo7Fq",
    owner: "F72qg2teDKus7FGsFvpoWEYoVnC6LgKbBzPGCEE31rjj",
    reserves: [
      {
        liquidityToken: {
          coingeckoID: "serum",
          decimals: 6,
          logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt/logo.png",
          mint: "SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt",
          name: "Serum",
          symbol: "SRM",
          volume24h: 9469492.009525744,
        },
        pythOracle: "3NBReDRTLKMQEKiLD5tGcx4kXbTf88b7f2xLS9UuGjym",
        switchboardOracle: "CUgoqwiQ4wCt6Tthkrgx5saAEpLBjPCdHshVa4Pbfcx2",
        address: "EP8rDeKVTfoB7awdGT1eM6XDNqjuoUTUWijEmFNvfhkT",
        collateralMintAddress: "4CxGuD2NMr6zM8f18gr6kRhgd748pnmkAhkY1YJtkup1",
        collateralSupplyAddress: "D52HyVBEMWy2WBptV5zsPuYS8W8C62gYjYKuVzaK1ruM",
        liquidityAddress: "4JHVBtmMPFyRpidxHtM8gVjGuLBXhaXCF4jNFFKBdGpb",
        liquidityFeeReceiverAddress:
          "AkwRd7hZ35BmnYvj9S5PgVpiBQfuzxaapshJe9PCN5hh",
        userBorrowCap: 300000,
        userSupplyCap: 150000,
      },
    ],
    lookupTableAddress: "89ig7Cu6Roi9mJMqpY8sBkPYL2cnqzpgP16sJxSUbvct",
  },
];
