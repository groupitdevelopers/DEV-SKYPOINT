const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions
  const homePage = path.resolve(`./src/templates/page.jsx`)
  const subPage = path.resolve(`./src/templates/subPage.jsx`)

  // const pages = await graphql(`
  //   query {
  //     allPrismicSubpage {
  //       nodes {
  //         id
  //         url
  //         type
  //       }
  //     }
  //     allPrismicHomepage {
  //       nodes {
  //         id
  //         url
  //         type
  //       }
  //     }
  //   }
  // `)

  createPage({
    path: "/",
    component: homePage,
    context: {
       id: "homePage"
     },
   });

  // for (const page of queryResult.data.allPrismicSubpage.nodes ?? []) {
  //     createPage({
  //       path: page.url,
  //       component: path.resolve(__dirname, 'src/templates/subPage.js'),
  //       context: { id: page.id }
  //     })
  //   }

  // pages.data.allPrismicSubpage.nodes.forEach((page) => {
  //   createPage({
  //     path: page.url,
  //     component: path.resolve(__dirname, 'src/templates/subPage.js'),
  //     context: { ...page },
  //   })
  // })

  // pages.data.allPrismicHomepage.nodes.forEach((page) => {
  //   createPage({
  //     path: "/",
  //     component: path.resolve(__dirname, 'src/templates/page.js'),
  //     context: { ...page },
  //   })
  // })

  // const redirections = await graphql(`
  //   query {
  //     prismicRedirections {
  //       data {
  //         redirections {
  //           from
  //           to
  //         }
  //       }
  //     }
  //   }
  // `)

  // const redirects = redirections.data.prismicRedirections.data.redirections

  // redirects.forEach(redirect => {
  //   createRedirect({
  //     fromPath: redirect.from,
  //     toPath: redirect.to
  //   })
  // })


  // createPage({
  //   path: "/",
  //   component: homePage,
  //   context: {
  //     id: "homePage"
  //   },
  // });


  // for (const page of queryResult.data.allPrismicSubpage.nodes ?? []) {
  //   createPage({
  //     path: page.url,
  //     component: subPage,
  //     context: { id: page.id }
  //   })
  // }
}
