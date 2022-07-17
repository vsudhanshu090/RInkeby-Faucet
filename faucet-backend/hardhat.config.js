require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },

    localhost: {
      url: "http://127.0.0.1:8545/",
      //accounts: hardhat already provides 10 fake accounts
      chainId: 31337,
    },
  },

  solidity: "0.8.9",
};
