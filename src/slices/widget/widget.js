import React from "react"
const Widget = ({ icon, header, title, iconColor, headerType, widgetType }) => {

  // const [sunsetData, setSunsetData] = React.useState({})
  // const sunData = async () => {
  //     const response = await fetch('https://api.sunrise-sunset.org/json?lat=-28.016666&lng=153.399994&date=today&formatted=0');
  //     let data = await response.json();
  //     let date = data.results.sunset
  //     let tzString = 'Australia/Brisbane'
  //     let dt = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
  //     let hours = dt.getHours()
  //     let minutes = dt.getMinutes()
  //     let ampm = hours >= 12 ? 'PM' : 'AM'
  //     hours = hours % 12
  //     hours = hours ? hours : 12
  //     minutes = minutes < 10 ? '0'+minutes : minutes
  //     data = hours + ':' + minutes + ' ' + ampm
  //     setSunsetData({"sunset":data})
  // }

  // sunData()

  // switch (icon){
  //   case "Sunset":
  //     title = sunsetData.sunset
  //   break;   
  //   default:
  // }


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
