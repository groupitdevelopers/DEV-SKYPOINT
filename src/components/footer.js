import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Footer = props => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function handleClick() {}

  function links(arr) {
    let response = []

    arr.map((lnk, index) =>
      response.push(
        <div className='footerLink' key={index}>
          <a href={
            lnk.link.uid === null ? lnk.link.url : '/'+lnk.link.uid
            }
          >
            {lnk.link_text}
          </a>
        </div>
      )
    )
    return response
  }

  const footer = useStaticQuery(graphql`
    {
      prismicFooter {
        data {
          bottom_text
          footer_links {
            link {
              url
              uid
            }
            link_text
          }
        }
      }
    }
  `)

  return (
    <>
      {/* Menu Medium Large */}
        <section className='footerWrapper mt-3 mdV lgV'>
          <div className='container pb-4 '>
            <div className='row'>
              {footer.prismicFooter.data.footer_links.length > 5 && (
                <>
                  <div className='col_quarter pl-0'>
                    {links(footer.prismicFooter.data.footer_links.slice(0, 5))}
                  </div>
                  <div className='col_quarter pl-0'>
                    {links(footer.prismicFooter.data.footer_links.slice(5))}
                  </div>
                </>
              )}
              {footer.prismicFooter.data.footer_links.length <= 5 && (
                <div className='col_half'>
                  {links(footer.prismicFooter.data.footer_links.slice(0, 5))}
                </div>
              )}
              <div className='col_quarter pl-0'>
                <div className='footerHeaderText row'>
                  <div className='col'>Connect with us</div> 
                </div>
                <div className='row mb-2'>
                  <button
                    onClick={() =>
                      openInNewTab('https://www.instagram.com/skypoint_au/')
                    }
                    className='col iconSocial iconIns'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                  <button
                    onClick={() =>
                      openInNewTab('https://www.facebook.com/skypoint')
                    }
                    className='col iconSocial iconFac'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                  <button
                    onClick={() =>
                      openInNewTab('https://www.youtube.com/@SkyPointAU')
                    }
                    className='col iconSocial iconYou'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                </div>
              </div>
              <div className='col_quarter pl-0'>
                <div className='footerHeaderText row'>
                  <div className='col'>Ardent Leisure Brands</div>
                </div>
                <div className='row mb-2'>
                  <button
                    onClick={() =>
                      openInNewTab('https://www.dreamworld.com.au')
                    }
                    className='btn col icon iconDW'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                  <button
                    onClick={() => openInNewTab('https://www.skypoint.com.au')}
                    className='btn col icon iconSky'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                  <button
                    onClick={() =>
                      openInNewTab(
                        'https://www.dreamworld.com.au/rides-attractions/whitewater-world'
                      )
                    }
                    className='btn col icon iconWW'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                </div>
                <div className='row'>
                  <button
                    onClick={() => openInNewTab('https://www.dwf.com.au')}
                    className='btn col icon iconDWF'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                  <button
                    onClick={() =>
                      openInNewTab('https://lego.dreamworld.com.au/')
                    }
                    className='btn col icon iconLego'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                  <button
                    onClick={() =>
                      openInNewTab('https://moonlightnightmarket.com.au')
                    }
                    className='btn col icon iconMO'
                    onKeyDown={handleClick()}
                    aria-label='btn'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col bg-primary txt-white txt-center txt-sm py-1'>
              {footer.prismicFooter.data.bottom_text}
            </div>
          </div>
        </section>
    </>
  )
}

export default Footer
