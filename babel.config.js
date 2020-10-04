module.exports = function (api) {
    api.cache(true)

    const presets = ['babel-preset-gatsby']
    const plugins = ['@babel/plugin-transform-react-jsx']

    return {
        presets,
        plugins,
    }
}
