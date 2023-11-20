import { linkResolver } from "./link-resolver";
import { componentResolverFromMap } from 'gatsby-plugin-prismic-previews'
import pageTemplate from "../../src/templates/page";
import subPageTemplate from "../../src/templates/subPage";

export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: 
      componentResolverFromMap({
        page: pageTemplate,
        subPage: subPageTemplate
      })
    }
]