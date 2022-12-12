module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1,{ "extensions": [".js"]}],
        "import/prefer-default-export": "off",
        "semi": ["off"],
        "quotes": [1,"single"],
        "no-shadow": "off",
        "react/button-has-type": "off",
        "react/prop-types":"off",
        "default-param-last": "off"
  },
};
