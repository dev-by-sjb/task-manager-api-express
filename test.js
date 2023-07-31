// const func1 = () => {
//   const a = 10;

//   return () => {
//     console.log(a);
//   };
// };

/* function outer() {
  for (var i = 1; i <= 5; i++) {
    function inner(x) {
      setTimeout(function () {
        console.log(x);
      }, 3000);
    }
    inner(i);
  }
}
outer(); */

// const thing1 = function func1() {
//   const a = 1 + 1;
// };

// function func2(fn) {
//   return function () {
//     fn;
//   };
// }

// const x = func2(function func1() {
//   const a = 1;
// });

// console.log(x);

// function outmost() {
//   let c = 30;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }

// outmost()("hello")();

/* const privateCount = (() => {
  let count = 0;
  console.log(`Count is ${count}`);

  return () => {
    count += 5;
    console.log(count);
  };
})();

privateCount();
privateCount();
privateCount();
privateCount(); */

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

// // console.log(bankAcc);
