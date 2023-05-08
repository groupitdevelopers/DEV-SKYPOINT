import React from "react"
import { PrismicRichText } from "@prismicio/react"
import Accordion from "../components/accordion"

export const According = props => {
  let isListType = props.slice.primary.type === "Listed"
  const anchorId = props.slice.primary.anchor_id

  return (
    <section 
      className="container accordionWrapper"
      id = {anchorId}
      >
      <div className={`${props.slice.primary.type}`}>
        {props.slice.items.map((accordion, index) => (
          <div className="row" key={`key_${index}`}>
            <div className="col p-0">
              <Accordion
                title={accordion.header_text}
                content={
                  <PrismicRichText field={accordion.according_title.richText} />
                }
                headerType={props.slice.primary.header_type}
                headerColor={props.slice.primary.header_text_color}
                list={parseInt(index)}
                isListType={isListType}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
