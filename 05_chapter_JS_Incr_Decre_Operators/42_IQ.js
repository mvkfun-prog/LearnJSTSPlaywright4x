let i = 1;
let result = i++ + ++i;
console.log(result,i );

let a = 100;

console.log(a++ + ++a +a++ + ++a);

console.log(a);


//========
let data = 5;
let line = " ";
for (let i = 1; i <= 10; i++) {
    let output = `${data} x ${i} = ${data * i}`;
    line += output + " "   
}
console.log(line);

    

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
