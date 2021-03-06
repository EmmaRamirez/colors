# Stateless Colors ✨

[![npm version](https://badge.fury.io/js/stateless-colors.svg)](https://badge.fury.io/js/stateless-colors)
[ ![Codeship Status for BeStateless/stateless-colors](https://app.codeship.com/projects/8ba90230-db79-0134-7718-125507c76e50/status?branch=master)](https://app.codeship.com/projects/204044) [![codecov](https://codecov.io/gh/BeStateless/stateless-colors/branch/master/graph/badge.svg)](https://codecov.io/gh/BeStateless/stateless-colors)

A tiny palette manager and color manipulation tool for Stateless.

**Features** 😍

- Flexible access to color palettes & themes for projects
- Manipulate any color, any way, into any format
- Track how you use colors in your repo more efficiently by centralizing design components
- Works seamlessly with whatever--React, Angular, plain JS

## Installation

```
npm install --save stateless-colors
```

If you want to build your own copy, git clone and then run `npm i`, `npm run build`.

⚠️️ **IMPORTANT**: make sure to shrinkwrap or stay consistent with which package you choose. A breaking-change semver-wise for this project is when any value changes its color, or the color itself changes.

### Importing

The project currently accepts ES6-styled imports, i.e.

```javascript
import 'stateless-colors';

import { colors } from 'stateless-colors';

import { colors, lightTheme } from 'stateless-colors';
```


## API

### `colors(options).[name]`

```javascript
@options Object { theme }
@name identifiers
```

Returns, as a string, the color of the specified name. Names can be a specific color from a palette (i.e. navyBlue), or an Element/Component type (i.e. headerBackground, headerText, logoColor).
You can also call metadata about the colors.

Examples

```javascript
colors().headerText
colors('Spring Breeze').headerText
colors('Tomorrow').info
const theme = colors('Desert Night');
background.style.background = theme.bodyBackground;
```

### `colors(options).[name].[function]`

You can chain a number of manipulation functions to the colors that stateless-colors emits.

**note**: For now, when chaining methods, you'll have to append it by calling color.

### `Color(colorName)`

A wrapper around colors that adds multiple methods. Each color in colors is simply calling the `color` property of `Color`.

#### `lighten(percentage)`

Returns a lightened version of the color.

#### `darken(percentage)`

Returns a darkened version of the color.

#### `saturate(percentage)`

Returns a saturated version of the color.

#### `desaturate(percentage)`

Returns a desaturated version of the color.


## Contributing

Contributions are always accepted. Themes are always a huge plus 👍
