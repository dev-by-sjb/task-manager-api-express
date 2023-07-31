# Read me

## Items

1. Get this book soon.
2. Laptop

```js
const debitAcc = ((amount) => {
  let bankAcc = amount;

  console.log(`Initial Bank Balance is: $${bankAcc}`);

  return (debit) => {
    if (debit <= 0 || !debit) {
      console.log(`Please Provide payment`);
      return;
    }

    if (debit > bankAcc) {
      console.log(
        `You can not perform this transaction, you do not have enough balance in your account. Your current account balance is $${bankAcc}.`
      );
      return;
    }

    bankAcc -= debit;
    console.log(
      `Your transaction was successful! Your remaining balance is $${bankAcc}.`
    );
    return;
  };
})(1000);

debitAcc(200);
debitAcc(342);
```
