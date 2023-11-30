import React from "react"
import { PrismicRichText } from "@prismicio/react"

export const RichText = props => {

const rt = props.slice.items

  return (
    <section className="container richTextWrapper">
        {rt.map((m, i) => (
          <div key={`RichText_`+i} field={m.rich_text.richText}>
            <PrismicRichText/>
            {m.center_rich_text.richText &&
              <div className="txt-center">
                <PrismicRichText field={m.center_rich_text.richText} />
              </div>
            }
          </div>
        ))}
    </section>
  )
}
