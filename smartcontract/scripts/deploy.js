const hre = require("hardhat");
const {ethers} = require("ethers");

async function main() {
  const chai = await hre.ethers.getContractFactory("Chai");
  const contract = await chai.deploy();

  await contract.deployed();
  console.log( `Chai contract Address:`, contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
