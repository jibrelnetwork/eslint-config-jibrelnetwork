module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "jest": true,
    "node": true,
    "browser": true,
    "jest/globals": true
  },
  "extends": [
    "airbnb",
    "plugin:fp/recommended",
    "plugin:jest/recommended",
    "plugin:ramda/recommended",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "plugin:flowtype/recommended",
    "plugin:eslint-comments/recommended"
  ],
  "plugins": [
    "fp",
    "more",
    "jest",
    "react",
    "ramda",
    "unicorn",
    "jsx-a11y",
    "flowtype",
    "eslint-comments"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  "rules": {
    "semi": [2, "never"],
    "no-var": 2,
    "quotes": [2, "single"],
    "max-len": [2, 100],
    "new-cap": 0,
    "no-console": 1,
    "func-style": [2, "declaration", { "allowArrowFunctions": true }],
    "quote-props": 0,
    "no-continue": 0,
    "comma-dangle": [2, "always-multiline"],
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "padded-blocks": 0,
    "require-yield": 1,
    "global-require": 0,
    "no-else-return": 0,
    "prefer-template": 2,
    "linebreak-style": 0,
    "arrow-body-style": [2, "as-needed"],
    "no-nested-ternary": 0,
    "no-confusing-arrow": 0,
    "object-curly-newline": [2, {
      "multiline": true,
      "consistent": true
    }],
    "no-underscore-dangle": 0,
    "no-use-before-define": 2,
    "no-constant-condition": [2, { "checkLoops": false }],
    "class-methods-use-this": 1,
    "function-paren-newline": 0,
    "newline-per-chained-call": [2, { "ignoreChainWithDepth": 4 }],

    "import/named": 2,
    "import/default": 2,
    "import/namespace": 2,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,

    "indent": [2, 2, {
      "SwitchCase": 1,
      "MemberExpression": 1,
      "VariableDeclarator": 1,
      "FunctionDeclaration": {
        "parameters": "first"
      },
      "FunctionExpression": {
        "parameters": "first"
      },
      "CallExpression": {
        "arguments": "first"
      },
      "ArrayExpression": "first",
      "ObjectExpression": "first"
    }],

    "no-multi-spaces": [2, {
      "exceptions": {
        "Property": true,
        "VariableDeclarator": true,
        "ImportDeclaration": true
      }
    }],

    "react/no-typos": 0,
    "react/prop-types": [2, { "skipUndeclared": true }],
    "react/no-set-state": 0,
    "react/no-string-refs": 1,
    "react/no-find-dom-node": 1,
    "react/require-extension": 0,
    "react/forbid-prop-types": 2,
    "react/no-array-index-key": 2,
    "react/no-unused-prop-types": 2,
    "react/require-default-props": 2,
    "react/prefer-stateless-function": 1,
    "react/default-props-match-prop-types": 0,

    "react/jsx-key": 2,
    "react/jsx-indent": [2, 2],
    "react/jsx-no-bind": [1, { "allowArrowFunctions": true }],
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-curly-spacing": [2, {
      "when": "never",
      "allowMultiline": false
    }],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-filename-extension": [2, {
      "extensions": [".js"]
    }],
    "react/jsx-max-props-per-line": [2, { "maximum": 5 }],
    "react/jsx-closing-bracket-location": 2,

    "jsx-a11y/aria-props": 1,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/label-has-for": 1,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/role-supports-aria-props": 1,
    "jsx-a11y/role-has-required-aria-props": 1,
    "jsx-a11y/mouse-events-have-key-events": 1,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,

    "jsx-quotes": [2, "prefer-single"],

    "more/no-window": 0,
    "more/no-void-map": 2,
    "more/no-c-like-loops": 2,
    "more/prefer-includes": 2,
    "more/force-native-methods": 2,
    "more/no-duplicated-chains": 2,
    "more/no-numeric-endings-for-variables": 2,

    "fp/no-let": 2,
    "fp/no-nil": 0,
    "fp/no-this": 0,
    "fp/no-class": 2,
    "fp/no-loops": 0,
    "fp/no-throw": 0,
    "fp/no-mutation": [2, {
      "allowThis": true,
      "exceptions": [
        { "property": "href" },
        { "property": "innerHTML" },
        { "property": "propTypes" },
        { "property": "defaultProps" },
        { "property": "contextTypes" },
        { "property": "asyncReducers" },
        { "property": "childContextTypes" }
      ]
    }],
    "fp/no-rest-parameters": 2,
    "fp/no-unused-expression": 0,
    "fp/no-mutating-methods": [2, {
      "allowedObjects": ["_", "history", "router"]
    }],

    "unicorn/filename-case": 0,
    "unicorn/regex-shorthand": 0,
    "unicorn/explicit-length-check": 0
  }
}
