import React from 'react'
import { PrismicRichText } from '@prismicio/react'

export const Infobox = props => {
  const anchorId = props.slice.primary.anchor_id
  return (
    <section
      className='container'
      id = {anchorId}
    >
      <div className='infoBoxWrapper'>
        <div className='infoLogo' />
        <PrismicRichText field={props.slice.primary.info_text.richText} />
      </div>
    </section>
  )
}
