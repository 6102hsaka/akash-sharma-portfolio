/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Akash Sharma Porfolio`,
        description: `Akash Sharma Portfolio webapp build using react js, gatsby, sass, firebase`,
        siteUrl: `https://akash-sharma-portfolio.web.app/`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `{
                    site {
                      siteMetadata {
                        siteUrl
                      }
                    }
                    allSitePage {
                      nodes {
                        path
                      }
                    }
                    allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                }`,
                resolvePages: ({
                    allSitePage: { nodes: sitePages },
                    allFile: { edges: pageFiles },
                }) => {
                    return sitePages.map((page) => {
                        const pageFile = pageFiles.find(({ node }) => {
                            const fileName =
                                node.name === "index" ? "/" : `/${node.name}/`;
                            return page.path === fileName;
                        });

                        return { ...page, ...pageFile?.node?.fields };
                    });
                },
                serialize: ({ path }) => {
                    return {
                        url: path,
                        lastmod: new Date().toLocaleDateString("en-US"),
                    };
                },
                createLinkInHead: true,
            },
        },
        `gatsby-plugin-robots-txt`,
    ],
};
