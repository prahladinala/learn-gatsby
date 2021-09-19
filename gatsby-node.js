// FETCH DATA AND GENERATE DATE TO THE PROJECT DETAILS PAGE
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    // GET ALL MARKDOWN FILES
    const { data } = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                    slug
                    }
                }
            }
        }      
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPages({
            path: '/projects/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.js'),
            context: { slug: node.frontmatter.slug }
        })
    })
}