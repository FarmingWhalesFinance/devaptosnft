export const candyMachineAddress =
  "0x0f126529aa91cdf252598a995bb1929fde9d088de9bb78ae960eae95628d494b";
export const collectionName = "DEVAPTOS Example Collection"; // Case sensitive!
export const collectionCoverUrl =
  "https://cloudflare-ipfs.com/ipfs/QmNgWuZeB98dJp6Neq6tznqy1fg8Thi3WxZrjCnjhptwpw";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
  NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
  NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
  FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
  NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
  FAUCET_URL = null;
}
