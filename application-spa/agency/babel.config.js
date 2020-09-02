module.exports = {
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime",
        'babel-plugin-styled-components',
        '@babel/plugin-syntax-jsx'
    ],
    presets: ['@babel/preset-env', '@babel/preset-react']
};