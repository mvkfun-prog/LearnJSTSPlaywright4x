//Cold code --> runs at interpretor level
let a = 10;
console.log(a);

// Hot Code -- > Complex code, runs at compiler level
//  for (let a = 0; a < 100000; a++) {
//     console.log(a);
//     badCodeFn();
// }

// function badCodeFn() {
//     console.log("Hello");
// }