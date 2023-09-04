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
    address: "C2UDScHU1ex5hDUok5hT1G7TQgK7Qgrb5J66U5sTpr22",
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
          mint: "EP8rDeKVTfoB7awdGT1eM6XDNqjuoUTUWijEmFNvfhkT",
          name: "ReBTC",
          symbol: "ReBTC",
          volume24h: 9469492.009525744,
        },
        pythOracle: "C2UDScHU1ex5hDUok5hT1G7TQgK7Qgrb5J66U5sTpr25",
        switchboardOracle: "C2UDScHU1ex5hDUok5hT1G7TQgK7Qgrb5J66U5sTpr23",
        address: "EoKWjZdRNpjk19n7Ys4Q8UWsS6VrAPFc5tdsJTcyGmXG",
        collateralMintAddress: "3re7zBt3EKycwzC1vXJTrprH39YbFK5HdFC2EB9yNCrK",
        collateralSupplyAddress: "5Ndhmf8RW9NUsHeDpFDe41tyj9khp4tEtnwp5mwi3jw3",
        liquidityAddress: "981pAHyEAN8aGKhG9X6p9CiH91rcGTRx2EwJvYFYRsr8",
        liquidityFeeReceiverAddress:
          "GrGPW4p5EuKpcAHTsmkCst4CbaTjzmxmtEaUUDtnm9tm",
        userBorrowCap: 300000,
        userSupplyCap: 150000,
      },
    ],
    lookupTableAddress: "89ig7Cu6Roi9mJMqpY8sBkPYL2cnqzpgP16sJxSUbvct",
  },
];
