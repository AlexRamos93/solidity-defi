/**
 *
 * TODO TESTS USING MOCKS
 *
 */

import { expect, use } from "chai";
import { ethers } from "hardhat";
// import {
//   MockContract,
//   MockContractFactory,
//   smock,
// } from "@defi-wonderland/smock";
import { BondToken, BondToken__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

// use(smock.matchers);

// let fakeContract: MockContractFactory<BondToken__factory>;
// let fakeInstance: MockContract<BondToken>;

let addr1: SignerWithAddress;
let addr2: SignerWithAddress;

describe("Bond Token Contract", async () => {
  // it("should test", async () => {
  //   const Contract: BondToken__factory = await ethers.getContractFactory(
  //     "BondToken"
  //   );
  //   const instance: BondToken = await Contract.deploy();
  //   await instance.deployed();
  //   const aqui = await instance.bondAsset(ethers.utils.parseEther("100"));
  //   console.log(aqui);
  // });
});

// const setup = async () => {
//   [addr1, addr2] = await ethers.getSigners();
//   fakeContract = await smock.mock("BondToken");
//   fakeInstance = await fakeContract.deploy();
//   await fakeInstance.deployed();
// };
