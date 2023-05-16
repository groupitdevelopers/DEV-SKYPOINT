import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews"
// import { withPreviewResolver } from 'gatsby-source-prismic'
const { linkResolver } = require("../../config/prismic/link-resolver")

const PreviewPage = ({ isPreview, ...props }) => {
  if (isPreview === false) return "Not a preview!";

  return (
    <small style={{ textAlign: "center", marginTop: "30px", display: "block" }}>
      Loading...
    </small>
  );
};

export default withPrismicPreviewResolver(PreviewPage)
// export default withPreviewResolver(PreviewPage, {
  // repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
  // linkResolver: () => linkResolver,
// })