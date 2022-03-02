import { ethers } from "hardhat";

async function main() {
  const BondToken = await ethers.getContractFactory("BondToken");
  const token = await BondToken.deploy();

  await token.deployed();

  console.log("BondToken deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
