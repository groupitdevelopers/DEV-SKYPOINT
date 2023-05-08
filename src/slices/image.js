import React from "react"

export const Image = props => {
  const anchorId = props.slice.primary.anchor_id
  
  return (
    <section 
      className="container imageWrapper"
      id = {anchorId}
      >
      <div className="row">
        <div className="col p-0">
          <img
            src={props.slice.primary.image.url}
            alt={props.slice.primary.image.alt}
          />
        </div>
      </div>
    </section>
  )
}
