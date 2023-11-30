import React, { useState, useEffect } from "react"
import { setGlobalState} from "../components/store"

const Button = ({
    buttonText,
    buttonType,
    buttonTarget,
    buttonLinkUrl,
    buttonLinkUid,
    buttonAnchorLink,
    accessoPromo,
    accessoKeyword,
    accessoPackageId
}) => {
  
  const [windowSize, setWindowSize] = useState(() => {
      // use a lazy initializer, which helps you have a cleaner
      // view into how this might be initialized in either CSR or SSR contexts
      return typeof window !== 'undefined' ? window.innerWidth : 0; // start with state at zero if we are on the server
      // naturally you can change `0` to whatever you prefer, or suits your needs best
  });

  useEffect(() => {
      // inside useEffect, the window is always present
      const updateWindowSize = () => {
          setWindowSize(window.innerWidth);
      };

      updateWindowSize(); // as soon as we are on the client, run this handler

      window.addEventListener('resize', updateWindowSize); // works only on resize events

      return () => {
          window.removeEventListener('resize', updateWindowSize); // clean up
      };
  }, []); // attach this once

  function showIframe() {
    console.log("SS",windowSize)
    setGlobalState("showSubscribe", true)
  }

  function allowModal() {
    let allow = false
    if (buttonTarget === "Modal" && windowSize > 550) {
      if (buttonTarget === "Modal") {
      allow = true 
      setGlobalState("modalLink", fullLink)
    }
    return allow
    }
  }

  let fullLink = buttonLinkUrl

  if (buttonLinkUid) {
    fullLink = buttonAnchorLink
    ? "/" + buttonLinkUid + "/#" + buttonAnchorLink
    : "/" + buttonLinkUid
  }

  function accesso(){
    if(accessoPromo) {
      return(
        <button
          data-accesso-promo = {accessoPromo}
          className={`btn btn-${buttonType}`}
        >
          {buttonText}
        </button>
      )
    }
    if(accessoKeyword) {
      return(
        <button
          data-accesso-keyword = {accessoKeyword}
          className={`btn btn-${buttonType}`}
        >
          {buttonText}
        </button>
      )
    }
    if(accessoPackageId) {
      return(
        <button
          data-accesso-package = {accessoPackageId}
          className={`btn btn-${buttonType}`}
        >
          {buttonText}
        </button>
      )
    }
  }

  return (
    <>
      {allowModal() && (
        <button
          onClick={showIframe}
          className={`btn btn-${buttonType}`}
        >
          {buttonText}
        </button>
      )}

      {!allowModal() && (
      <>
        {fullLink && (
          <a
            href={fullLink}
            target={buttonTarget === "New Tab" ? "_blank":"_self"}
            rel="noreferrer"
            className={`btn btn-${buttonType}`}
          >
            {buttonText}
          </a>
        )}
        {!fullLink && (
          accesso()
        )}
      </>
      )}
    </>
  )
}

export default Button