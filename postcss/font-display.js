const postcss = require('postcss')

const declaration = {
    prop: 'font-display',
    value: 'swap',
}

function fontDisplay() {
    return root => {
        root.walkAtRules('font-face', rule => {
            rule.append(postcss.decl(declaration))
        })
    }
}

module.exports = postcss.plugin('postcss-font-display', fontDisplay)
