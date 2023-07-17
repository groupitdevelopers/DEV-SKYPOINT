import React from "react"
import Button from '../components/button'
import { PrismicRichText } from "@prismicio/react"

export const DoubleCardCustom = props => {
  const anchorId = props.slice.primary.anchor_id
  const visible = props.slice.primary.visible
  const data = props.slice.primary
  const richText = props.slice.primary.text_field.richText

  function Images() {
    let images = []
    let response
    props.slice.items.map(img => images.push(img.image.url))

    switch (images.length) {
      case 1:
        response = (
          <img className="singleImage" src={images[0]} alt={images[0]} />
        )
        break
      case 2:
        response = (
          <div className="row">
            <div className="col_half doubleLeftImage">
              <img src={images[0]} alt={images[0]} />
            </div>
            <div className="col_half doubleRightImage">
              <img src={images[1]} alt={images[1]} />
            </div>
          </div>
        )
        break
      case 3:
        response = (
          <div className="row">
            <div className="col_half tripleLeftImage">
              <img src={images[0]} alt={images[0]} />
            </div>
            <div className="col_half p-0 tripleRightImage">
              <div className="col ml-1 tripleTopImage">
                <img src={images[1]} alt={images[1]} />
              </div>
              <div className="col ml-1 tripleBottomImage">
                <img src={images[2]} alt={images[2]} />
              </div>
            </div>
          </div>
        )
        break
      default:
        response = (
          <div className="pt-6 txt-center">
            <h1>NO IMAGES</h1>
          </div>
        )
    }
    return response
  }

  return (
    <>
    { visible && (
      <section
        className="container doubleCardWrapper"
        id = {anchorId}
      >
        {/* Mobile Menu Extra Small and Small */}
        <div className="xsV smV">
            <div className="row">
              <div className="col p-0">
                <Images />
              </div>
            </div>
            <div
              className={`doubleCardRight col bg-${props.slice.primary.text_box_background} txt-${props.slice.primary.text_color}`}
            >
              <PrismicRichText field={richText} />
              <Button 
                      buttonText={data.button_text}
                      buttonType={data.button_type}
                      buttonLinkUrl={data.button_link.url}
                      buttonLinkUid={data.button_link.uid}
                      buttonAnchorLink={data.anchor_link}
                      accessoPromo={data.accesso_promo_code}
                      accessoKeyword={data.accesso_keyword}
                      accessoPackageId={data.accesso_packageid}
                    />
            </div>
          </div>
        {/* Menu Medium Large */}
        <div className="mdV lgV">
            {props.slice.primary.image_position ? (
              <div className="row">
                <div className="col_half box_padding_right">
                  <Images />
                </div>
                <div className="col_half box_padding_left">
                  <div
                    className={`doubleCardRight col bg-${props.slice.primary.text_box_background} txt-${props.slice.primary.text_color}`}
                  >
                    <PrismicRichText field={richText} />
                    <Button 
                      buttonText={data.button_text}
                      buttonType={data.button_type}
                      buttonLinkUrl={data.button_link.url}
                      buttonLinkUid={data.button_link.uid}
                      buttonAnchorLink={data.anchor_link}
                      accessoPromo={data.accesso_promo_code}
                      accessoKeyword={data.accesso_keyword}
                      accessoPackageId={data.accesso_packageid}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col_half box_padding_right">
                  <div
                    className={`doubleCardLeft col bg-${props.slice.primary.text_box_background} txt-${props.slice.primary.text_color}`}
                  >
                    <PrismicRichText field={richText} />
                    <Button 
                      buttonText={data.button_text}
                      buttonType={data.button_type}
                      buttonLinkUrl={data.button_link.url}
                      buttonLinkUid={data.button_link.uid}
                      buttonAnchorLink={data.anchor_link}
                      accessoPromo={data.accesso_promo_code}
                      accessoKeyword={data.accesso_keyword}
                      accessoPackageId={data.accesso_packageid}
                    />
                  </div>
                </div>
                <div className="col_half box_padding_left">
                  <Images />
                </div>
              </div>
            )}
          </div>
      </section>
    )}
    </>
  )
}