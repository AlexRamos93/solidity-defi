# Solidity DeFi

This project is a simple lending/borrow protocol.

## Introduction

### How it works
Depositors can deposit DAI into the protocol's lending pool and receive bDAI (interest bearing DAI) in return. Subsequent the protocol deposits that amount of DAI inside AAVE Lending Pool to earn interest while waits a borrower or a depositor to withdraw.

Borrowers can deposit ether as collateral and borrow DAI up to 80% of its collateral value. When the value of the borrow surpass 80% of its collateral value, liquidation occurs.

**Note: The ether deposited as collateral is also deposited into AAVE's lending pool to earn interest*.

The protocol also has a reserve, this reserve receives all the interest of the deposits and collateral from AAVE's lending pool, and every time a lend is paid, the interest of the lending goes here.

Liquidation occurs every time the borrowed value if higher than 80% of the collateral's value.
The ether liquidated is swapped for DAI using Uniswap and that value goes to the reserve.

The protocols fees is calculated based on a variable call utilization ratio.

![utilization](https://user-images.githubusercontent.com/19571883/156420444-5765ef4b-5964-4cd0-9166-4e8f4a3217f1.png)

There's another variable called interest multiplier, this variable is used to calculate the borrow rate.

![interest](https://user-images.githubusercontent.com/19571883/156421094-61a6a2f0-38a5-42ff-90f4-62d4ad2c1ec9.png)

This indicators makes rates variable based on protocol usage.
When the protocol has a lower utilization ratio, it lower the deposit/borrow rate to attract more borrowers than depositors.
When the portocol usage is high, it increase the borrow/deposit rates, to attract deposits and drive borrowers away.

Borrow rate formula:

![borrow](https://user-images.githubusercontent.com/19571883/156422249-720a7c42-83c6-44f2-9762-23fbad29f93f.png)

Deposit rate formula:

![deposit](https://user-images.githubusercontent.com/19571883/156422277-84540016-fe1e-4913-b322-f2d4901178bf.png)

Each bDAI is convertible into a increasing quantity of DAI as interest accrues, the exchange rate between bDAI and DAI is calculated using this formula:

![exchangeRate](https://user-images.githubusercontent.com/19571883/156422758-12e88999-80b1-49fd-a625-375640340e94.png)

**Note: this formulas is inspired by Anchor protocol and Compound, this way is no sustainable, was made for study purposes only.*

## Getting started

Rename the ``.env.example`` file to ``.env`` and replace the credentials necessary.

**Note: the addresses are hardcoded on the contract for kovan testnet, if you want to deploy in another testnet or even deploy to mainnet, make sure to change the addresses on the contract* 
## Instaling
``$ npm install``

## Testing

``$ npm test``
### Deploy
``npm run deploy`` 
### Verify contract
``npm run verify "CONTRACT ADDRESS"``

