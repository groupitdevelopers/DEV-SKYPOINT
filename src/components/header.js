import * as React from "react"
import { useEffect, useState } from "react"
import { PrismicRichText } from "@prismicio/react"
import { useStaticQuery, graphql } from "gatsby"
import MobileMenuList from "./mobileMenu"
import { Link } from "gatsby"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40)
    })
  }, [])

  function handleClick() {}

  function menuToggle() {
    setIsMenuOpen(wasMenuOpened => !wasMenuOpened)
  }

  function headerLink(str) {
    let link = str.replace(/[^a-zA-Z]/g, "")
    return link.toLowerCase()
  }

  function handleKeyDown() {}

  const headerElement = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          background
          text_colour
          top_message_switch
          top_message {
            richText
          }
          menu_items {
            label
            link {
              uid
              url
            }
            main_menu
            anchor_id
          }
        }
      }
    }
  `)

  function MenuList() {
    let arr = headerElement.prismicNavigation.data.menu_items
    let mList = []

    arr.forEach(obj => {
      let fullLink = '/'

      if (obj.link.uid) {
        fullLink = obj.anchor_id
        ? "/" + obj.link.uid + "/#" + obj.anchor_id
        : "/" + obj.link.uid
      }
      else {
        if (obj.link.url) {
          fullLink = obj.link.url
        }
      }

      if (mList) {
        const index = mList.findIndex(m => m.menu === obj.main_menu)
        if (index > -1) {
          mList[index].subMenu.push(obj.label)
          mList[index].link.push(fullLink)
        } else {
          mList.push({
            menu: obj.main_menu,
            subMenu: [obj.label],
            link: [fullLink],
          })
        }
      } else {
        mList.push({
          menu: obj.main_menu,
          subMenu: [obj.label],
          link: [fullLink],
        })
      }
    })

    return mList
  }

  return (
    <>
      {headerElement.prismicNavigation.data.top_message_switch && (
        <section
          className={`welcomeMessageWrapper bg-${headerElement.prismicNavigation.data.background}`}
        >
          <PrismicRichText
            className={`txt-${headerElement.prismicNavigation.data.text_colour} `}
            field={headerElement.prismicNavigation.data.top_message.richText}
            components={{
              hyperlink: ({ node, children, key }) => (
                <>
                  {node.data.uid &&(
                    <Link to={`/${node.data.uid}`} key={key}>
                      {children}
                    </Link>
                  )}
                  {!node.data.uid &&(
                    <Link to={node.data.url} key={key}>
                      {children}
                    </Link>
                  )}
                </>
              )
            }}
          />
        </section>
      )}
      <section className="menuWrapper">
        {/* Mobile Menu Extra Small and Small */}
          <div className="xsV smV">
            <nav className={scroll ? "stickyMobileMenu mobileMenu" : "mobileMenu"}>
              <ul>
                <li key="logoKeyMobile">
                  <a href="/" aria-label="Home Page">
                    <div className="mobileLogo"></div>
                  </a>
                </li>
                <li key="menuMobile">
                  <div
                    role="button"
                    tabIndex={0}
                    className={`${isMenuOpen ? "menuLogoCross" : "menuLogo"}`}
                    aria-label="label"
                    onClick={menuToggle}
                    onKeyDown={handleKeyDown}
                  ></div>
                </li>
              </ul>
            </nav>
            {isMenuOpen && (
              <div className="mobileSubMenu">
                <ul>
                  {MenuList().map((m, i) => ( 
                   <MobileMenuList key={'menulist-'+i} menu={m} index={i} onClick={menuToggle} />
                  ))}
                </ul>
                <div className="social">
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
            )}
            <a 
              role="button"
              tabIndex={0}
              className="btn btn-primary entryTicket"
              href="/tickets"
            >
              BUY TICKETS
            </a>
          </ div>

        {/* Menu Medium Large */}
        <div className="mdV lgV">
          <nav className={scroll ? "stickyMenu menu" : "menu"}>
            <ul>
              <li key="logoKeyDesktop">
                <a href="/" aria-label="Home Page">
                  <div className="logo"></div>
                </a>
              </li>
              {MenuList().map((m, i) => (
                <span key={i}>
                  {(m.menu !== "More") && (
                    <li key={"Menu-"+i}>
                      <a href={"/" + headerLink(m.menu)}>{m.menu}</a>
                      {m.subMenu && (
                        <ul>
                          {m.subMenu.map((sm, j) => (
                            <li key={'Submenu-'+j}>
                              {m.link[j] && <a href={m.link[j]}>{sm}</a>}
                              {!m.link[j] && <a href="/" aria-label="Home Page">{sm}</a>}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )} 
                </span>
              ))}
              <li key="buttonKey">
                <a 
                  className="btn btn-primary entryTicketDesktop"
                  href="/tickets"
                >
                  BUY TICKETS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Header
