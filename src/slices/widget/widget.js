import React from "react"

const Widget = ({ icon, header, title, iconColor, headerType, widgetType }) => {
  return (
    <div className="col">
      {widgetType && (
        <div className="row widget widgetLeftIcon">
          <div className={`icon ${icon} bg-${iconColor}`}></div>
          <div className="col">
            <div className={`h4 m-0 txt-${headerType} font-weight-6`}>
              {header}
            </div>
            <p className="txt-lg m-0">{title}</p>
          </div>
        </div>
      )}
      {!widgetType && (
        <div className="widget">
          <div className="row center">
            <div className={`col icon ${icon} bg-${iconColor}`}></div>
          </div>
          <div className="row">
            <div
              className={`data h4 txt-center m-0 txt-${headerType} font-weight-6`}
            >
              {header}
              <p className="txt-md m-0">{title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Widget
