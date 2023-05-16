import * as React from 'react'
import "./src/skypoint.scss"
export const shouldUpdateScroll = () => false

import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import { linkResolver } from './config/prismic/link-resolver'
import PageTemplate from './src/templates/page'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          page: PageTemplate,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)

// import * as React from "react";
// import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";

// import { repositoryConfigs } from "./config/prismic/previews";

// import "./src/skypoint.scss"

// export const wrapRootElement = ({ element }) => (
//   <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
//     {element}
//   </PrismicPreviewProvider>
// );

// export const onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: "en" });
// };