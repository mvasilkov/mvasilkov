// const fontDisplay = require('./postcss/font-display')

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
    ],
}
