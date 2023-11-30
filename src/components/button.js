import React, { useState, useEffect } from "react"
import { setGlobalState} from "../components/store"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

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

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function showIframe() {
    setGlobalState("showSubscribe", true)
  }

  function allowModal() {
    let allow = false
    if (buttonTarget === "Modal" && windowDimensions.width > 550) { allow = true }
    console.log("ALLOW:", allow)
    return allow
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
      {/* {buttonTarget === "Modal" && ( */}
      {allowModal() && (
        <button
          onClick={showIframe}
          className={`btn btn-${buttonType}`}
        >
          {buttonText}
        </button>
      )}

      {/* {buttonTarget !== "Modal" && ( */}
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