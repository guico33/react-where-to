module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "plugin:react/recommended",
      "plugin:prettier/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "babel"
    ],
    "rules": {
        "prettier/prettier": [
          "error", 
          { 
            "semi": false, 
            "trailingComma": "all", 
            "singleQuote": true, 
            "printWidth": 80
          }
        ],
        "object-curly-spacing": ["error", "always"],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "strict": 0,
        "react/prop-types": "off",
        "no-console": "off",
        "no-class-assign": "off",
        "indent": "off",
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single",
            { "avoidEscape": true }
        ],
        "semi": "off",
        "comma-dangle": ["error", {
          "arrays": "ignore",
          "objects": "ignore",
          "imports": "ignore",
          "exports": "never",
          "functions": "ignore"
      }]
    }
};