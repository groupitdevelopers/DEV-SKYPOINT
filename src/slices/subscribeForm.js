import React from "react"
import { setGlobalState, useGlobalState } from "../components/store"

const SubscribeForm = () => {
const [showSubscribe] = useGlobalState("showSubscribe")

function hideIframe() {
  setGlobalState("showSubscribe", false)
}

function doNothing(){
  return null
}

return (
  <>
    {showSubscribe && (
      <div className="subscribeModal">
        <div className="subscribeContent">
          <div className="popupOverlay">
            <div className="subscribeContainer">
                <div className="closeBtn" onClick={hideIframe} onKeyDown={doNothing()} role="presentation">
                  <svg viewBox="0 0 512 512" fill="#434d5d">
                    <path d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z" fillRule="evenodd" />
                  </svg>
                </div>
                <iframe 
                  className="iframe"
                  title="myFrame"
                  src="https://confirmsubscription.com/h/y/F07E98FF8A936783/forms/0A40235391EB5E85"
                  frameBorder="0"
                  marginWidth="0"
                  allowFullScreen 
                />
            </div>
          </div>
        </div>
      </div>
    )}
  </>
)}

export default SubscribeForm