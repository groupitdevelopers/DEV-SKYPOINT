import React from "react"
import { setGlobalState, useGlobalState} from "../components/store"

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

  const [windowWidth] = useGlobalState("windowWidth")
  
  function showIframe() {
    setGlobalState("showSubscribe", true)
  }

  function allowModal() {
    let allow = false
    if (buttonTarget === "Modal" && windowWidth > 550) {
      // if (buttonTarget === "Modal") {
      allow = true 
      setGlobalState("modalLink", fullLink)
    }
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