const gitDates = require('./generated/git-dates.json')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type !== 'Mdx')
        return

    const file = 'content/' + getNode(node.parent).relativePath

    createNodeField({
        node,
        name: 'created',
        value: gitDates[file]?.created ?? 0,
    })
    createNodeField({
        node,
        name: 'updated',
        value: gitDates[file]?.modified ?? 0,
    })
}
