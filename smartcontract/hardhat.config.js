require ("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-ethers");

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "Goerli",
  networks: {
    hardhat: {
    },
    Goerli: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};