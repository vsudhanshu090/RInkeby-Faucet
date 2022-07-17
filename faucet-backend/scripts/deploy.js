const { ethers, run, network } = require("hardhat");

async function main() {
  //PART-1 (deploying our contract)
  const rinkebyFaucetFactory = await ethers.getContractFactory("faucet");

  console.log("Deploying Contract...");
  const rinkebyFaucet = await rinkebyFaucetFactory.deploy();
  await rinkebyFaucet.deployed();
  console.log(`Deployed contract to: ${rinkebyFaucet.address}`);

  //PART-2 (verifying our contract on etherscan)
  if (network.config.chainId == 4) {
    //chainid of rinkeby is 4
    console.log("Waiting for block confirmations");
    await rinkebyFaucet.deployTransaction.wait(3); //waits for 3 block confirmations to make sure its actually deployed and then verifies
    await verify(rinkebyFaucet.address, []);
  }

  //PART-3 (interacting with our contract)
  // const transactionResponse = await rinkebyFaucet.send({value: ethers.utils.parseEther("0.1")});
  // await transactionResponse.wait(1);
}

//both are equivalent
//async function verify(contract_address, args) {
const verify = async (contract_address, args) => {
  console.log("Verifying contract on etherscan...");
  try {
    await run("verify:verify", {
      address: contract_address,
      constructorArguments: args,
    });
  } catch (e) {
    if ((e.message.toLowerCase().includes = "already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
