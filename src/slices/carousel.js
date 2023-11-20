import React, { useState, useEffect } from "react"
import AliceCarousel from "react-alice-carousel"
import Button from '../components/button'
import "react-alice-carousel/lib/alice-carousel.css"

export const Carousel = props => {
  let buttonType = props.slice.primary.button_type
  let textType = props.slice.primary.text_type

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  const [isInfinite, setIsInfinite] = useState(false)
  const anchorId = props.slice.primary.anchor_id

  useEffect(() => {
    setIsInfinite(true)
  }, [])

  const items = []

  props.slice.items.map((carousel, index) =>
    items.push(
      <div className="itemWrapper">
        <div className={`item txt-${textType}`} data-value={index + 1}>
          <div className="row image">
            <img
              src={carousel.image.url}
              alt={carousel.image.url}
              className=""
            />
          </div>
          <div className="dataWrapper">
            <div className="row ticketWrap">
              <div className="col p-0 ticket">
                <div className="ticketText">
                  <div className="dayTicket">{carousel.ticket_text}</div>
                </div>
              </div>
              <div className="col p-0">
                <div className="row">
                  <div className="col p-0 price">
                    <div className="fromTxt">FROM</div>
                    <div className="dollar">$</div> {carousel.price}
                  </div>
                </div>
                <div className="row">
                  <div className="col p-0 priceTitle">
                    {carousel.under_price_text}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col p-0 afterPay">
                {carousel.after_pay_text} 
                {carousel.afterpay_logo &&
                  <div className="logo"></div>
                }
              </div>
            </div>
            <div className="row">
              <div className="col p-0 ticketTitle">{carousel.ticket_title}</div>
            </div>
            <div className="row">
              <div className="col p-0 d-flex">
                <Button 
                  buttonText={carousel.button_text}
                  buttonType={buttonType}
                  buttonLinkUrl={carousel.button_link.url}
                  buttonLinkUid={carousel.button_link.uid}
                  buttonAnchorLink={carousel.anchor_link}
                  accessoPromo={carousel.accesso_promo_code}
                  accessoKeyword={carousel.accesso_keyword}
                  accessoPackageId={carousel.accesso_packageid}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )

  return (
    <section className="container carouselWrapper" id={anchorId}>
      <AliceCarousel
        items={items}
        responsive={responsive}
        autoHeight={true}
        controlsStrategy="default"
        disableDotsControls={true}
        infinite={isInfinite}
        paddingLeft={20}
        paddingRight={20}
      />
    </section>
  )
}
