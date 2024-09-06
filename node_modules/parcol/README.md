# `Parcol` Parse ANSI Colors
Parcol is a utility for parsing all [ANSI colors](https://npmjs.com/package/ansi-colors) methods in a string.

## Table of Contents
- [Syntax](#syntax)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [Using Parcol Multiple Times in a String](#using-parcol-multiple-times-in-a-string)
  - [Using Multiple Methods](#using-multiple-methods)
- [All Color Keys](#all-color-keys)
  - [Basic Colors](#basic-colors)
  - [Bright (Highlight) Colors](#bright-highlight-colors)
  - [Background Colors](#background-colors)
  - [Bright Background Colors](#bright-background-colors)
  - [Modifiers](#modifiers)
- [License](#license)

<br>

## Syntax
`~(color_key) (your_text)~`

We refer to the text enclosed between `~ ~` as parcol. Instead of the color key in the syntax above, you can find a table of color key methods converted to [Parcol keys](#all-color-keys) below `ANSI colors`.

The simplest usage example is `bl` for blue. So when you type `~bl ...~`, Parcol will convert your code to `c.blue("...")`.

<br>

## Installation

You can install Parcol into your project using your package manager like [npm](https://npmjs.com), [yarn](https://yarnpkg.com), [pnpm](https://pnpm.io), etc. Below is an example using `Yarn`.


```bash
yarn add parcol
```

<br>

## Usage

The following code demonstrates how Parcol converts text to specific ANSI colors. It will convert the text "blue" to c.blue("blue"), so the blue text will remain blue while other texts will not be modified.

```js
const { parcol } = require("parcol");

const my_text = "this is a ~bl blue~ message";

parcol.pit(my_text);
```

<br>

## Examples

Below are some usage examples for Parcol.

### Using Parcol Multiple Times in a String

It is possible to use Parcol multiple times in a single string expression.

```js
const { parcol } = require("parcol");

parcol.pit("~y hi~ ~r red~, my favorite color is ~bl blue~ but I also love ~m purple~");
```

### Using Multiple Methods

To apply more than one method, separate them with a comma (,). Here is an example using bl,d:

```js
const { parcol } = require("parcol");

// It sets the text to both blue and dim (bl,d).
parcol.pit("this is a ~bl,d blue~ message", "and this is ~d dim~ text");
```

## All Color Keys

You can find all Parcol color keys below. The tables consist of two columns: the first column lists the color keys available in Parcol, and the second column shows the corresponding method names in ANSI colors.

### Basic Colors
| parcol | ansi-colors |
|--------|-------------|
| `bc`   | black       |
| `bl`   | blue        |
| `c`    | cyan        |
| `gy`   | gray        |
| `g`    | green       |
| `m`    | magenta     |
| `r`    | red         |
| `y`    | yellow      |
| `w`    | white       |

<br>

### Bright (Hightlight) Colors
| parcol | ansi-colors  |
|--------|--------------|
| `bcb`  | blackBright  |
| `blb`  | blueBright   |
| `cb`   | cyanBright   |
| `gb`   | greenBright  |
| `mb`   | magentaBright|
| `rb`   | redBright    |
| `yb`   | yellowBright |
| `wb`   | whiteBright  |

<br>

### Background Colors
| parcol | ansi-colors |
|--------|-------------|
| `bgbc` | bgBlack     |
| `bgbl` | bgBlue      |
| `bgc`  | bgCyan      |
| `bgg`  | bgGreen     |
| `bgm`  | bgMagenta   |
| `bgr`  | bgRed       |
| `bgy`  | bgYellow    |
| `bgw`  | bgWhite     |

<br>

### Bright Background Colors
| parcol | ansi-colors    |
|--------|----------------|
| `bbcb` | bgBlackBright  |
| `bblb` | bgBlueBright   |
| `bcb`  | bgCyanBright   |
| `bgb`  | bgGreenBright  |
| `bmb`  | bgMagentaBright|
| `brb`  | bgRedBright    |
| `byb`  | bgYellowBright |
| `bwb`  | bgWhiteBright  |

<br>

### Modifiers
| parcol | ansi-colors |
|--------|-------------|
| `b`    | bold        |
| `d`    | dim         |
| `h`    | hidden      |
| `in`   | inverse     |
| `it`   | italic      |
| `rs`   | reset       |
| `u`    | underline   |
| `l`    | link        |
<br>

LICENSE : [MIT](LICENSE)