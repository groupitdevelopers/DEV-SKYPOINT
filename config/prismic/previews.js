import { linkResolver } from "./link-resolver";

import pageTemplate from "../../src/templates/page";
import subPageTemplate from "../../src/templates/subPage";


/**
 * Prismic preview configuration for each repository in your app. This set of
 * configuration objects will be used with the `PrismicPreviewProvider`
 * higher order component.
 *
 * If your app needs to support multiple Prismic repositories, add each of
 * their own configuration objects here as additional elements.
 *
 */
export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: {
      page: pageTemplate
    },
  },
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: {
      page: subPageTemplate
    },
  }
]
