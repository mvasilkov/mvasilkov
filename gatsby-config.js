module.exports = {
    siteMetadata: {
        title: 'Mark Vasilkov',
        shortName: 'mvasilkov',
        description: 'Computer programmer and security enthusiast from Israel',
    },
    plugins: [
        {
            resolve: '@primer/gatsby-theme-doctocat',
            options: {
                icon: './static/icon.svg',
            },
        },
    ],
}
