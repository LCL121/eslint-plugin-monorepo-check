# eslint-plugin-monorepo-check

check monorepo

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-monorepo-check`:

```
$ npm install eslint-plugin-monorepo-check --save-dev
```


## Usage

Add `monorepo-check` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "monorepo-check"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "monorepo-check/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





