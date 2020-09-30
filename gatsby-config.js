module.exports = {
    siteMetadata: {
        title: 'Mark Vasilkov',
        shortName: 'mvasilkov',
        description: 'Computer programmer and security enthusiast from Israel',
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: '@primer/gatsby-theme-doctocat',
            options: {
                icon: './static/favicon.svg',
            },
        },
    ],
}
