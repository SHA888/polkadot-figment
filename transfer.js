const { ApiPromise, Keyring } = require("@polkadot/api");
const { HttpProvider } = require("@polkadot/rpc-provider");
require("dotenv").config();

const main = async () => {
  const httpProvider = new HttpProvider(process.env.DATAHUB_URL);
};
