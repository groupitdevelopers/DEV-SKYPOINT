import React from "react"

const Sunset = ({ icon, header, title, iconColor, headerType, widgetType }) => {
  // const [data, setData] = React.useState({});
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
  //     setData({"sunset":data})
  //   };

  //   sunData()

  return (
    <>
      <div className="col">
        <div className="row widget">
          <div className={`col_4-24 icon ${icon} bg-${iconColor}`}></div>
          <div className="col_20-24">
            <div className={`h4 m-0 txt-${headerType} font-weight-6`}>
              {header}
            </div>
            {/* <p className='txt-lg m-0'>{data.sunset}</p> */}
            <p className="txt-lg m-0">7:00pm</p>
            <span className="txt-md"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sunset
