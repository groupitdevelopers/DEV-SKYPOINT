import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { repositoryConfigs } from "./config/prismic/previews";
import "./src/skypoint.scss"

export const shouldUpdateScroll = () => false

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    {element}
  </PrismicPreviewProvider>
);
