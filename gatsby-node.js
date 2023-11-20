const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // const { createRedirect } = actions
  const homePage = path.resolve(`./src/templates/page.jsx`)
  const subPage = path.resolve(`./src/templates/subPage.jsx`)

  const queryResult = await graphql(`
    query {
      allPrismicSubpage {
        nodes {
          id
          url
        }
      }
    }
  `)

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

  createPage({
    path: "/",
    component: homePage,
    context: {
      id: "homePage"
    },
  });

  // const redirects = redirections.data.prismicRedirections.data.redirections

  // redirects.forEach(redirect => {
  //   createRedirect({
  //     fromPath: redirect.from,
  //     toPath: redirect.to
  //   })
  // })

  for (const page of queryResult.data.allPrismicSubpage.nodes ?? []) {
    createPage({
      path: page.url,
      component: subPage,
      context: { id: page.id }
    })
  }
}
