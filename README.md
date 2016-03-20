# eslint-plugin-vue

eslint plugin for vue component files (I mean, `.vue` files).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-vue`:

```
$ npm install eslint-plugin-vue --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-vue` globally.

## Usage

Add `vue` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "vue"
    ]
}
```

## License

MIT
