# JavaScript Callbacks & Promises: Cheat Sheet 🍕

> Personal reference notes. Analogy used throughout: ordering a pizza.

---

## 1. Why async exists

Some jobs take time: fetching data, reading a file, waiting on a timer.
JavaScript **does not stand at the door waiting**. It keeps running other code
and comes back when the job is done.

> 🍕 You order a pizza (20 min), then go play with your toys. When it arrives,
> someone tells you. Callbacks and Promises are two ways of saying
> *what happens when the pizza arrives*.

---

## 2. Callbacks: "ring my doorbell when ready"

A **callback** is a function you **pass to another function**, so that function can **call it later**.

```javascript
function orderPizza(whenReady) {
  console.log("🍕 Pizza is being made...");
  setTimeout(function () {
    whenReady("Pepperoni Pizza");   // 👈 the callback is called here
  }, 2000);
}

function eatPizza(pizza) {
  console.log("Yum! I'm eating " + pizza);
}

orderPizza(eatPizza);   // pass the function, NO brackets
console.log("🧸 Playing with toys while waiting...");
```

**Output:**
```
🍕 Pizza is being made...
🧸 Playing with toys while waiting...
Yum! I'm eating Pepperoni Pizza
```

### 🔑 Key points
- `whenReady` is **just a parameter name**, not a keyword. `banana` would work too.
- `orderPizza(eatPizza)` makes `whenReady = eatPizza`. Two names, **same function**.
- So `whenReady("Pepperoni Pizza")` is really `eatPizza("Pepperoni Pizza")`.
- Pass `eatPizza`, **not** `eatPizza()`. Brackets run it *now* and pass its result instead.
- `setTimeout` does **not** block: the next line runs straight away, and the timer fires later.

### 🔍 Step-by-step trace
1. `orderPizza(eatPizza)` runs, and `whenReady` now points to `eatPizza`.
2. Prints `🍕 Pizza is being made...`
3. `setTimeout` sets a 2-second alarm ⏰, and `orderPizza` finishes.
4. Prints `🧸 Playing with toys while waiting...`
5. 2 seconds later: `whenReady("Pepperoni Pizza")` → `eatPizza("Pepperoni Pizza")`
6. Prints `Yum! I'm eating Pepperoni Pizza`

```
orderPizza(eatPizza)
     │
     ▼
whenReady = eatPizza
     │
     ▼  ⏰ 2 seconds...
whenReady("Pepperoni Pizza")  ==  eatPizza("Pepperoni Pizza")
     │
     ▼
"Yum! I'm eating Pepperoni Pizza"
```

### Functions are values
```javascript
function sayHi(name) { console.log("Hi " + name); }
const sameThing = sayHi;   // copy the function (no brackets)
sameThing("Ravi");         // "Hi Ravi"
```

### Error-first callbacks (Node.js style)
```javascript
function orderPizza(callback) {
  setTimeout(() => {
    const ovenBroken = false;
    if (ovenBroken) callback("Oven is broken!", null);  // error first
    else callback(null, "Cheese Pizza");                // no error, result second
  }, 1000);
}

orderPizza(function (error, pizza) {
  if (error) console.log("😢 " + error);
  else console.log("😋 Eating " + pizza);
});
```

### Inline (arrow) callback
```javascript
orderPizza(pizza => console.log("Eating " + pizza));
```

---

## 3. Callback hell 👹 (pyramid of doom)

Steps that wait on each other nest deeper and drift right:

```javascript
orderPizza(function (pizza) {
  getDrink(function (drink) {
    getIceCream(function (iceCream) {
      brushTeeth(function () {
        console.log("All done! 😴");
      });
    });
  });
});
```
❌ Hard to read · ❌ hard to debug · ❌ error handling at every level

---

## 4. Promises: the restaurant buzzer 📟

A **Promise** is an object standing for a value that will arrive later.

| State | Meaning | Pizza story |
|---|---|---|
| ⏳ **Pending** | Still waiting | Pizza in the oven |
| ✅ **Fulfilled** (resolved) | It worked | Pizza is ready |
| ❌ **Rejected** | Something went wrong | Oven broke |

Once fulfilled or rejected, it is **settled** and never changes again.

### Creating (the kitchen side)
```javascript
function orderPizza() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const ovenBroken = false;
      if (ovenBroken) reject("Oven is broken!");   // ❌
      else resolve("Pepperoni Pizza");             // ✅
    }, 2000);
  });
}
```
- `resolve(value)` means success, here's the value.
- `reject(reason)` means failure, here's the error.

### Using (the customer side)
```javascript
orderPizza()
  .then(pizza => console.log("😋 Eating " + pizza))    // on success
  .catch(error => console.log("😢 " + error))          // on failure
  .finally(() => console.log("🧽 Table cleaned"));      // always runs
```

### Chaining ✨ (the fix for callback hell)
Return a Promise from `.then()` and the next `.then()` waits for it.
**One `.catch()` covers every step.**

```javascript
orderPizza()
  .then(pizza => getDrink())
  .then(drink => getIceCream())
  .then(iceCream => brushTeeth())
  .then(() => console.log("All done! 😴"))
  .catch(error => console.log("😢 " + error));
```

### Running several at once
| Method | Resolves when | Rejects when |
|---|---|---|
| `Promise.all([...])` | All succeed (array of results) | Any one fails |
| `Promise.allSettled([...])` | All finish, success or not | Never |
| `Promise.race([...])` | The first one settles | The first one settles with an error |
| `Promise.any([...])` | The first one succeeds | All fail |

---

## 5. async / await 🪄 (Promises in a nice outfit)

```javascript
async function dinnerTime() {
  try {
    const pizza = await orderPizza();   // pause THIS function until it settles
    console.log("😋 Eating " + pizza);

    const drink = await getDrink();
    console.log("🥤 Drinking " + drink);
  } catch (error) {
    console.log("😢 " + error);         // same job as .catch()
  }
}

dinnerTime();
```

- `async` marks a function that contains waiting. It **always returns a Promise**.
- `await` pauses **only that function**, not the whole program.
- `await` works inside `async` functions (and at the top level of ES modules).
- `try / catch` handles rejections, like `.catch()`.

Parallel instead of one-by-one:
```javascript
const [pizza, drink] = await Promise.all([orderPizza(), getDrink()]);
```

---

## 6. Recap 🎒

| Idea | Kid version | Grown-up version |
|---|---|---|
| **Callback** | "Ring my doorbell when done" | Function passed to another function, called later |
| **Callback hell** | The sideways staircase | Deeply nested callbacks |
| **Promise** | Restaurant buzzer 📟 | Object for a future value: pending / fulfilled / rejected |
| **`.then` / `.catch`** | "If yummy do this, if broken do that" | Handle success / failure |
| **`async` / `await`** | Promises in a nice outfit | Cleaner syntax on top of Promises |

## 7. Common mistakes ⚠️

- Passing `fn()` instead of `fn` as a callback: it runs immediately.
- Forgetting `return` inside `.then()`: the next `.then()` gets `undefined` and doesn't wait.
- No `.catch()` / `try...catch`: "Unhandled promise rejection" warnings.
- `await` outside an `async` function (outside ES modules): syntax error.
- Awaiting independent jobs one by one: slower than `Promise.all`.
- Expecting async code to finish before the next line: it never does.

## 8. Practice 📝

Rewrite with `async/await`:

```javascript
function waitAndSay(word, ms) {
  return new Promise(resolve => setTimeout(() => resolve(word), ms));
}

waitAndSay("Hello", 1000)
  .then(w => { console.log(w); return waitAndSay("World", 1000); })
  .then(w => console.log(w));
```

<details>
<summary>Show answer</summary>

```javascript
async function sayBoth() {
  const first = await waitAndSay("Hello", 1000);
  console.log(first);
  const second = await waitAndSay("World", 1000);
  console.log(second);
}

sayBoth();
```
</details>
