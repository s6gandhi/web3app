
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const COINMARKET_CAP = process.env.CoinMarketCAP_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: '0.8.8',
      },
      {
        version: '0.6.6',
      },
    ],
  },
  networks: {

    hardhat: {
      chainId: 31337,

    },

    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],

    },
  },
};

