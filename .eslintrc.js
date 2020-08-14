module.exports = {
    root: true,
    env: {
        "node": true,
        "browser": true,
        "es6": true
    },
    "parser": "vue-eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        parser: "babel-eslint",
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};