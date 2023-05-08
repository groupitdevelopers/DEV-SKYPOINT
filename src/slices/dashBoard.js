import React from "react"
// import Sunset from './widget/sunset'
import Widget from "./widget/widget"

export const Dashboard = props => {
  let iconType = props.slice.primary.icon_type
  let headerType = props.slice.primary.header_type
  let widgetType = props.slice.primary.widget_type
  const anchorId = props.slice.primary.anchor_id
  
  return (
    <section 
      className="container dashboardWrapper"
      id = {anchorId}
      >
      <div className="row">
        <div className={`col txt-center p-0 txt-${headerType}`}>
          <h2 className="m-1">{props.slice.primary.main_header}</h2>
        </div>
      </div>
      <div className="row">
        {props.slice.items.map((slice, index) => {
          // switch (slice.icon) {
          // case "Sunset":
          //     return <Sunset
          //                 key={index}
          //                 icon={slice.icon}
          //                 header={slice.header_text}
          //                 title={slice.title_text}
          //                 iconColor={iconType}
          //                 headerType={headerType}
          //                 widgetType={widgetType}
          //             />
          // default:
          return (
            <Widget
              key={index}
              icon={slice.icon}
              header={slice.header_text}
              title={slice.title_text}
              iconColor={iconType}
              headerType={headerType}
              widgetType={widgetType}
            />
          )
          // }
        })}
      </div>
    </section>
  )
}
