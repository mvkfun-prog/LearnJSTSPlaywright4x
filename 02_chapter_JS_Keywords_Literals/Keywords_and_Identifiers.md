# Keywords and identifiers in JavaScript

**Keywords are words JavaScript already owns; identifiers are names you make up.** In `let age = 25;`, `let` is a keyword (JavaScript knows what it means) and `age` is an identifier (you chose it).

## Keywords

A keyword is a reserved word with a fixed meaning in the language. You cannot use one as a name for your own variable or function.

Common ones, grouped by what they do:

| Purpose | Keywords |
|---|---|
| Declaring things | `var`, `let`, `const`, `function`, `class` |
| Decisions | `if`, `else`, `switch`, `case`, `default` |
| Loops | `for`, `while`, `do`, `break`, `continue` |
| Functions | `return`, `async`, `await`, `yield` |
| Error handling | `try`, `catch`, `finally`, `throw` |
| Objects and classes | `new`, `this`, `super`, `extends`, `static` |
| Modules | `import`, `export` |
| Fixed values | `true`, `false`, `null` |
| Operators written as words | `typeof`, `instanceof`, `in`, `delete`, `void` |

If you try to use one as a name, you get an error:

```js
let if = 5;      // SyntaxError
let class = "A"; // SyntaxError
```

A few words are reserved for future use, such as `enum`, so avoid those too. Others, such as `implements`, `interface`, `private` and `public`, are reserved only in strict mode.

## Identifiers

An identifier is the name you give to a variable, function, class or parameter.

```js
let userName = "Vamsi";      // userName is an identifier
function addNumbers(a, b) {} // addNumbers, a, b are identifiers
class LoginPage {}           // LoginPage is an identifier
```

### Rules (break these and the code fails)

1. It can contain letters, digits, `_` and `$`.
2. It cannot start with a digit.
3. It cannot contain spaces or symbols such as `-`, `@`, `#`.
4. It cannot be a keyword.
5. It is case-sensitive: `age`, `Age` and `AGE` are three different names.

| Valid | Invalid | Why invalid |
|---|---|---|
| `name` | `1name` | starts with a digit |
| `_count` | `my-name` | contains a hyphen |
| `$price` | `my name` | contains a space |
| `user1` | `let` | is a keyword |
| `firstName` | `user@id` | contains `@` |

### Conventions (not enforced, but everyone follows them)

- **Variables and functions use camelCase:** `firstName`, `getUserData()`
- **Classes use PascalCase:** `LoginPage`, `UserAccount`
- **Fixed constants use UPPER_SNAKE_CASE:** `MAX_RETRIES`, `BASE_URL`
- **Names should say what they hold:** `totalPrice` is better than `tp` or `x`

## Things that often trip people up

- **`undefined`, `NaN` and `Infinity` are not keywords.** They are built-in global identifiers, so treat them as reserved and never reuse the names.
- **Some words are keywords only in certain places.** `let`, `static`, `async`, `await`, `of`, `get` and `set` can technically be used as names in some situations, but doing so is confusing, so don't.
- **Keywords are case-sensitive too.** `let If = 5;` works because `If` is not `if`, but it is a bad idea.

## Try it yourself

```js
let firstName = "Vamsi";   // valid
let _score = 90;           // valid
let $amount = 500;         // valid
const MAX_USERS = 100;     // valid

console.log(firstName, _score, $amount, MAX_USERS);

// Uncomment one at a time to see the error:
// let 2fast = "no";
// let my-var = 1;
// let return = 10;
```
