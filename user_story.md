1. User send ether and receives bEther
2. bEther is a asset bearing yield and can be use as collateral
3. User can borrow ether (needs bEther as collateral (LTV 80%))

exchangeRate = (getCash() + totalBorrows() - totalReserves()) / totalSupply()

getCash
Cash is the amount of underlying balance owned by this cToken contract. One may query the total amount of cash currently available to this market.

totalBorrows
Total Borrows is the amount of underlying currently loaned out by the market, and the amount upon which interest is accumulated to suppliers of the market.

totalReserves
Reserves are an accounting entry in each cToken contract that represents a portion of historical interest set aside as cash which can be withdrawn or transferred through the protocol's governance.
A small portion of borrower interest accrues into the protocol, determined by the reserve factor.

totalSupply
Total Supply is the number of tokens currently in circulation in this cToken market. It is part of the EIP-20 interface of the cToken contract.

/\*
_ Calculate the interest accumulated into borrows and reserves and the new index:
_ simpleInterestFactor = borrowRate _ blockDelta
_ interestAccumulated = simpleInterestFactor _ totalBorrows
_ totalBorrowsNew = interestAccumulated + totalBorrows
_ totalReservesNew = interestAccumulated _ reserveFactor + totalReserves
_ borrowIndexNew = simpleInterestFactor _ borrowIndex + borrowIndex
\*/

accrualBlockNumberPrior = initialize with current block number

blockDelta = subUint(currentBlock, accrualBlockNumberPrior)

simpleInterestFactor = borrowRateMantissa, blockDelta
interestAccumulated = simpleInterestFactor, borrowPrior
totalReserve = mulScalarTruncateAddUInt(reserveFactorMantissa), interestAccumulated, reservesPrior
