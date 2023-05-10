import React from "react"

export const Table = props => {

const background = props.slice.primary.header_background
const text_color = props.slice.primary.header_text_color
 
  return (
    <section className="container tableWrapper">
        {props.slice.items.map((box, index) => (
            <div className="tableBox">
                <div className={`header bg-${background}`}>
                    <span className={`txt-${text_color}`}>
                        {box.header_text}
                    </span>
                </div>
                <div className="text">
                    {box.column}
                </div>
            </div>
        ))}

    </section>
  )
}