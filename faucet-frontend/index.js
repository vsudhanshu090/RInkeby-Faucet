import { ethers } from "./ethers.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const getETHButton = document.getElementById("getETH");
const donateButton = document.getElementById("receiveETH");

connectButton.onclick = connect;
getETHButton.onclick = getETH;
donateButton.onclick = receiveETH;


async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "connected";
  } else {
    connectButton.innerHTML = "Please install metamask";
  }
}

async function getETH() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const transactionResponse = await contract.withdraw();
    await transactionResponse.wait(1);
  }
}

async function receiveETH() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const transactionResponse = await contract.send({
      value: ethers.utils.parseEther("0.1"),
    });
    //await transactionResponse.wait(1);
  }
}
