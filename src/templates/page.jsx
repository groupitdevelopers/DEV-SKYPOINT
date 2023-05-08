import  React from "react"
import { graphql } from "gatsby"
import { SliceZone } from "@prismicio/react"
import { components } from "../slices"
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import Layout from "../components/layout";
import Seo from "../components/seo";


const PageTemplate = ({ data, location }) => {
  
  return (
    <Layout location={location}>
      <SliceZone
            slices={data.prismicHomepage.data.body}
            components={components}
        />
    </Layout>
  )
}

export const Head = ({ data }) => {
    const seoData = data.prismicHomepage.data
    return <Seo seoData={seoData} />
  }

export const query = graphql`
  {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageDataBodyHero {
            id
            slice_type
            items {
              button_type
              button_text
              button_link {
                url
                uid
              }
            }
            primary {
              background_type
              title
              background {
                url
              }
              header_text
              video {
                url
              }
              page_type
              anchor_id
            }
          }
          ... on PrismicHomepageDataBodyText {
            id
            slice_type
            primary {
              button_text
              button_type
              header_text
              header_type
              sub_header
              button_link {
                url
                uid
              }
              type
              anchor_id
              anchor_link
              accesso_keyword
              accesso_packageid
              accesso_promo_code
            }
          }
          ... on PrismicHomepageDataBodyDoubleCard {
            id
            slice_type
            primary {
              body_text
              button_link {
                url
                uid
              }
              button_text
              button_type
              header_text
              text_box_background
              text_color
              header_type
              image_position
              anchor_id
              accesso_keyword
              accesso_packageid
              accesso_promo_code
              anchor_link
            }
            items {
              image {
                url
              }
            }
          }
          ... on PrismicHomepageDataBodyBox {
            id
            slice_type
            items {
              background {
                url
              }
              flag
              flag_text
              flag_type
              title
              link {
                url
                uid
              }
              text_colour
              button_text
              button_type
              accesso_keyword
              accesso_packageid
              accesso_promo_code
              anchor_link
            }
            primary {
              anchor_id
            }
          }
          ... on PrismicHomepageDataBodyImage {
            slice_type
            primary {
              image {
                url
              }
              anchor_id
            }
          }
          ... on PrismicHomepageDataBodyAccordion {
            id
            items {
              header_text
              according_title {
                richText
              }
            }
            primary {
              header_text_color
              header_type
              type
              anchor_id
            }
            slice_type
          }
          ... on PrismicHomepageDataBodyDashboard {
            id
            primary {
              header_type
              icon_type
              widget_type
              main_header
              anchor_id
            }
            items {
              header_text
              icon
              title_text
            }
            slice_type
          }
          ... on PrismicHomepageDataBodyCarousel {
            id
            slice_type
            primary {
              button_type
              text_type
              anchor_id
            }
            items {
              after_pay_text
              afterpay_logo
              button_link {
                url
                uid
              }
              button_text
              image {
                url
              }
              price
              ticket_text
              ticket_title
              under_price_text
              accesso_keyword
              accesso_packageid
              accesso_promo_code
              anchor_link
            }
          }
          ... on PrismicHomepageDataBodyContactform {
            id
            slice_type
            primary {
              form_type
              anchor_id
            }
          }
          ... on PrismicHomepageDataBodyInfobox {
            id
            primary {
              info_text {
                richText
              }
              anchor_id
            }
            slice_type
          }
          ... on PrismicHomepageDataBodyOpeninghours {
            id
            items {
              close
              date
              open
            }
            slice_type
            primary {
              anchor_id
            }
          }
          ... on PrismicHomepageDataBodySubscribeForm {
            id
            slice_type
            primary {
              button_text
              button_type
            }
          }
          ... on PrismicHomepageDataBodyRichText {
            id
            slice_type
            items {
              center_rich_text {
                richText
              }
              rich_text {
                richText
              }
            }
          }
        }
        meta_description
        meta_keywords
        tab_title
        og_description
        og_title
        og_type
        og_url
      }
      uid
    }
  }
`

export default withPrismicPreview(PageTemplate);