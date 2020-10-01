const fontDisplay = require('./postcss/font-display')

module.exports = {
    siteMetadata: {
        title: 'Mark Vasilkov',
        shortName: 'mvasilkov',
        description: 'Computer programmer and security enthusiast from Israel',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [fontDisplay()],
            },
        },
        {
            resolve: '@primer/gatsby-theme-doctocat',
            options: {
                icon: './static/favicon.svg',
            },
        },
    ],
}
