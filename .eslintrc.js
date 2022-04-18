module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': [0],
    'import/extensions': 'off',
    'import/no-unresolved': [0],
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'react/react-in-jsx-scope': [0],
    'react/jsx-props-no-spreading': [0],
    'react/destructuring-assignment': [0],
    'react/prop-types': 'off',
    'no-unused-vars': [0],
    'no-shadow': [0],
    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/no-shadow': [1],
    'max-len': ['warn'],
    'consistent-return': [0],
    'no-await-in-loop': [0],
    'prefer-const': 'warn',
    'no-param-reassign': 'off'
  },
  settings: {
    'import/ignore': ['.css', 'node_modules/', '.scss'],
  },
};
