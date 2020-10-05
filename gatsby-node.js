exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type !== 'Mdx')
        return

    const file = getNode(node.parent).relativePath

    createNodeField({
        node,
        name: 'created',
        value: 0,
    })
    createNodeField({
        node,
        name: 'updated',
        value: 0,
    })
}
