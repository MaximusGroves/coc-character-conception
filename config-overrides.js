const { override, addBabelPlugin, babelInclude } = require('customize-cra');
const path = require('path');

module.exports = override(
    addBabelPlugin('@babel/plugin-proposal-optional-chaining'),
    addBabelPlugin('@babel/plugin-proposal-nullish-coalescing-operator'),
    babelInclude([
        path.resolve('src'),
        path.resolve('node_modules/@react-spring/core'),
        path.resolve('node_modules/@react-spring/shared')
    ])
);
