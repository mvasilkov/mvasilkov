'use strict'

const doctocat = require('@primer/gatsby-theme-doctocat/gatsby-config')
// const fontDisplay = require('./postcss/font-display')

const cache = require.cache[require.resolve('@primer/gatsby-theme-doctocat/gatsby-config')]
cache.exports = options => {
    const result = doctocat(options)
    result.plugins = result.plugins.filter(plugin => plugin.resolve !== 'gatsby-plugin-mdx')
    return result
}

module.exports = {
    siteMetadata: {
        title: 'Mark Vasilkov',
        shortName: 'mvasilkov',
        description: 'Computer programmer and security enthusiast from Israel',
        imageUrl: 'https://repository-images.githubusercontent.com/295674090/836f5880-072c-11eb-8b24-d9fb88898863',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                // postCssPlugins: [fontDisplay()],
            },
        },
        {
            resolve: '@primer/gatsby-theme-doctocat',
            options: {
                icon: './static/favicon.svg',
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                defaultLayouts: {
                    default: require.resolve('@primer/gatsby-theme-doctocat/src/components/layout.js'),
                },
                remarkPlugins: [
                    require('remark-math'),
                ],
                rehypePlugins: [
                    require('rehype-katex'),
                ],
            },
        },
    ],
}
