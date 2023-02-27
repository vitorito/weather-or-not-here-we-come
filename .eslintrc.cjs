module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "next",
        "prettier"
    ],
    "globals": {
        "JSX": true,
    },
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": "off",
        "import/extensions": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "import/no-anonymous-default-export": [2, { "allowObject": true }],
        "react/no-array-index-key": "off"
    }
};
