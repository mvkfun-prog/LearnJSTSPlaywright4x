# LearnJSTSPlaywright4x

Practice code and notes from learning JavaScript, TypeScript and Playwright for test automation. Each chapter folder holds small, numbered files that can be run on their own.

## Chapters

| Folder | Topic | What is inside |
|---|---|---|
| [00_chapter_Prompt_Eng](00_chapter_Prompt_Eng/) | Prompt engineering for QA | RICE-POT prompt notes, a generic QA template, a VWO test plan, and a sample [Selenium 4 + TestNG framework](00_chapter_Prompt_Eng/Selenium_Framework/) |
| [01_chapter_JS_Basics](01_chapter_JS_Basics/) | JavaScript basics | Hello World and simple math with `console.log` |
| [02_chapter_JS_Keywords_Literals](02_chapter_JS_Keywords_Literals/) | Keywords and identifiers | How the JS engine runs code, keywords, identifier rules, comments, interview questions, and [notes](02_chapter_JS_Keywords_Literals/Keywords_and_Identifiers.md) |
| [03_chapter_JS_Literals](03_chapter_JS_Literals/) | Literals and data types | Numbers, BigInt, `null`, `undefined` and special values |
| [04_chapter_JS_Operators](04_chapter_JS_Operators/) | Operators | Assignment, arithmetic, comparison, logical, string, ternary (including nested) and `typeof`, with interview questions |
| [05_chapter_JS_Incr_Decre_Operators](05_chapter_JS_Incr_Decre_Operators/) | Increment, decrement and nullish | Pre and post `++` / `--`, interview questions, and the `??` operator |
| [06_chapter_Statements_Condition](06_chapter_Statements_Condition/) | Conditional statements | `if`, `if...else`, nested and multiple `else if`, and turning a ternary into `if...else` |
| [07_chapter_switch](07_chapter_switch/) | `switch` statement | Basic `switch`, matching API status codes, grouping cases, and interview questions |
| [08_chapter_User_Input](08_chapter_User_Input/) | Reading user input | Browser `prompt()`, Node's `readline`, the `prompt-sync` package, and reading standard input with `fs` |

Files named `*_IQ.js` are interview-question exercises.

## Running the examples

You need [Node.js](https://nodejs.org/) installed. Run any file with `node`:

```bash
node 01_chapter_JS_Basics/001_HelloWorld.js
```

### Files that ask for input

The files in `08_chapter_User_Input` wait for you to type something, so run them from the terminal with `node`. The VS Code Code Runner Output panel can't accept typing, and the program will hang there.

- `59_UI.js` uses `prompt()`, which exists only in the browser. Run it in the browser console, not with Node.
- `61_Prompt_sync.js` needs the `prompt-sync` package. Install it first with `npm install prompt-sync`.
- `62_FS_readFile.js` reads until the input ends. After typing, press Enter, then end the input: **Ctrl + Z** then Enter on Windows, or **Ctrl + D** on macOS and Linux.

If a program gets stuck, press **Ctrl + C** in the terminal, or **Ctrl + Alt + M** for Code Runner.

The Selenium framework is a separate Java project with its own [README](00_chapter_Prompt_Eng/Selenium_Framework/README.md).
