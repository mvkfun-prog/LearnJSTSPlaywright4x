var name = "Pramod";

var firstName = "Pramod";
var This_is_a_very_long_name_variable = "Pramod";

var lastName = "Dutta"; // CamelCase

// Naming Conventions (Cases)
// ============================================
// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";

// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
// MAX_SIZE  =90;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";

// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array

// with var - prints 3, 3, 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10);
}

// with let - prints 0, 1, 2
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 10);
}

let a=1;
//let a=2; //Sybtax error a has already been declared

const obj = {n: 1};
console.log("Value of n from obj: " + obj.n);
obj.n = 2; //you can update the value
console.log("Value of n from obj: " + obj.n);
//obj = {n: 3}; //but you cannot assign a new value directly for a const

