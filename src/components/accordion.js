import React, { useState } from "react"

const Accordion = ({
  title,
  content,
  headerType,
  headerColor,
  list,
  isListType,
}) => {
  const [isActive, setIsActive] = useState(false)
  const isOdd = require("is-odd")
  const List = ({ number }) => {
    if (number < 10) number = "0" + (number + 1)
    return number
  }

  return (
    <>
      {isListType && (
        <div className="accordionItem">
          {/* Mobile Menu Extra Small and Small */}
              <div className="mobileLeftSide xsV smV">
                <div className="middleLine"></div>
                <div className={`listBox bg-${headerType}`}>
                  <List number={list} />
                </div>
              </div>
              <div className="mobileRightSide xsV smV">
                <div
                  className={`accordionTitle col p-0 mb-1 txt-${headerColor}`}
                >
                  {title}
                </div>
                <div className="accordionContent">{content}</div>
              </div>
          
          {/* Menu Medium Large */}
            {/* <div className="mdV lgV"> */}
              <div className="leftSide mdV lgV">
                {isOdd(list) && (
                  <>
                    <div
                      className={`accordionTitle col p-0 mb-1 txt-${headerColor}`}
                    >
                      {title}
                    </div>
                    <div className="accordionContent">{content}</div>
                  </>
                )}
              </div>
              <div className="middle mdV lgV">
                <div className="middleLine"></div>
                <div className={`listBox bg-${headerType}`}>
                  <List number={list} />
                </div>
              </div>
              <div className="rightSide mdV lgV">
                {!isOdd(list) && (
                  <>
                    <div
                      className={`accordionTitle col p-0 mb-1 txt-${headerColor}`}
                    >
                      {title}
                    </div>
                    <div className="accordionContent">{content}</div>
                  </>
                )}
              </div>
            {/* </div> */}
          </div>
      )}

      {!isListType && (
        <div className="accordionItem row">
          <div className={`bg-${headerType} col_2-12 txt-white accordionList`}>        
              <List number={list} />            
          </div>
          <div
            className={`accordionTitle col txt-${headerColor}`}
            onClick={() => setIsActive(!isActive)}
            role="presentation"
          >
            <div>{title}</div>
            <div className={`txt-${headerColor}`}>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className="accordionContent">{content}</div>}
        </div>
      )}
    </>
  )
}

export default Accordion
