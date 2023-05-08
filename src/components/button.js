import React from "react"

const Button = ({
    buttonText,
    buttonType,
    buttonLinkUrl,
    buttonLinkUid,
    buttonAnchorLink,
    accessoPromo,
    accessoKeyword,
    accessoPackageId
}) => {

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
      {fullLink && (
        <a
          href={fullLink}
            className={`btn btn-${buttonType}`}
        >
          {buttonText}
        </a>
      )}
      {!fullLink && (
        accesso()
      )}
    </>
  )
}

export default Button