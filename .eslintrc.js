module.exports = {
    extends: ["airbnb-base", "prettier"],
    parser: "@babel/eslint-parser",
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    rules: {
        "no-console": 0,
        "import/prefer-default-export": 0,
        "prefer-template": 0,
    },
};