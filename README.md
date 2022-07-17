# RInkeby-Faucet
A smart contract hosted on a website through which users can receive rinkeby ethereum and can also donate to the contract.

The repository is divided into two sections, the frontend, and the backend

--BACKEND
Languages used : Solidity, Javascript

Solidity is used to create a smart contract consisting mainly of two functions (send and withdraw)
"send" function receives rinkeby ethereum
"withdraw" function is used to send 0.01 ethereum to the user

and the contract is deployed on rinkeby blockchain using javascript and hardhat (an ethereum development environment)

--FRONTEND
Languages used : HTML, CSS, Javascript

The website is created using HTML, CSS and bootstrap

"scripts.js" file is attached to the front through which we interact with our contract using ethers.js. We use the contract address and ABI of our 
deployed contract to use the functions made in our solidity file
