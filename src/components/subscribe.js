import React, { useState } from "react"
import { setGlobalState, useGlobalState } from "./store"
import { useStaticQuery, graphql } from "gatsby"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    Name: yup.string().min(1, "errorBorder"),
    Email: yup.string().required().email("errorBorder"),
    PostCode: yup.string()
  })
  .required()

const SubscribeForm = () => {
    const [showSubscribe] = useGlobalState("showSubscribe")
    const [Day,setDay]=useState('')
    const [Month,setMonth]=useState('')
    const [Year,setYear]=useState('')
    let days=["Day"]
    let months=["Month","January","February","March","April","May","June","July","August","September","October","November","December"]
    let years=["Years"]
    
    for (let i=0; i<31; i++) {days.push(i+1)}
    for (let i=1923; i<2005; i++) {years.push(i+1)}

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })

    const [loadingSubmit, setLoadingSubmit] = useState(false)
    const onSubmit = data => submit(data)
    
    const submit = async data => {
      setLoadingSubmit(true)
      
      let link = "https://api.createsend.com/api/v3.3/subscribers/a0c0bef629270a3354e73b4b3a7f3c99.json"
      let user = "Iz3s1AcQ7cUXqm/haSNHkYlkB2GKkiytBn3A1ReNYPc0TzlEgvaNvm/MWvHr0mNLeFkj8I9zBoLFd03Q+YAducqhb4GLlhVdn/6Ez047i6ODlG5l0d/rFlDzlxI6zNEefyqp87H+CSMCtviRx7nXRw=="
      
      fetch(link, {
        method: "POST",
        headers: {
          "Authorization": `Basic ${user}`,
          "Content-type": "application/json",
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
        },
        body: JSON.stringify({
          "Name": `${data.Name}`,
          "EmailAddress": `${data.Email}`,
          "CustomFields": [
            {
              "Key" : "dateofBirth",
              "Value" : `${Year}/${Month}/${Day}`
            },
            {
              "Key" : "postcode",
              "Value" : `${data.PostCode}`
            }
          ],
          "Resubscribe": "true",
          "RestartSubscriptionBasedAutoresponders": "true",
          "ConsentToTrack": "Yes"
        })
      })
      .then(resp => {
        console.log("RESP: ", resp)
      })

    }

    function hideSubscribe() {
      setGlobalState("showSubscribe", false)
    }
  
    function handleKeyDown() {}

    const subscribeElement = useStaticQuery(graphql`{
      allPrismicSubscribeform {
        nodes {
          data {
            subscribe_button_text
            subscribe_check_box_text
            subscribe_dob_label
            subscribe_email_place_holder
            subscribe_email_label
            subscribe_link {
              uid
              url
            }
            subscribe_link_text
            subscribe_name_label
            subscribe_name_place_holder
            subscribe_postcode_label
            subscribe_postcode_place_holder
            subscribe_text
            subscribe_timer
            subscribe_type
            subscriber_header_text
          }
        }
      }
    }
  `)

  const subscribeData = subscribeElement.allPrismicSubscribeform.nodes[0].data

  if (typeof window !== 'undefined') {
    localStorage.setItem("delaySubscribeTime", subscribeData.subscribe_timer)
  }
 
    return (
      <>
        {showSubscribe && (
          <div className="accesso ">
            <div className="closeWrapper">
              <div
                className="closeEntry"
                role="button"
                aria-label="hideSubscribe"
                tabIndex={0}
                onClick={hideSubscribe}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="accessoFrame subscribeFrame">
              <div className="subscribeForm">
                <div className="row">
                  <div className="col txt-center">
                    <h3 className="txt-primary m-1">
                      {subscribeData.subscriber_header_text}
                    </h3>
                    <p>
                      {subscribeData.subscribe_text}
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formWrapper">
                      <div className="row">
                        <div className="col">
                        <label>
                        {subscribeData.subscribe_name_label}
                        </label>
                          <input
                            className = {`inputText ${errors.Name?.message}`}
                            type="text"
                            {...register("Name")}
                            placeholder={subscribeData.subscribe_name_place_holder}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label>
                            {subscribeData.subscribe_email_label}
                          </label>
                          <input
                            className = {`inputText ${errors.Name?.message}`}
                            type="text"
                            {...register("Email")}
                            placeholder={subscribeData.subscribe_email_place_holder}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <label>
                            {subscribeData.subscribe_dob_label}
                          </label>
                          <div className="d-flex">
                            <select value={Day} onChange={e=>setDay(e.target.value)}>
                              {
                                days.map(d=><option key={d} value={d}>{d}</option>)
                              }
                            </select>
                            <select value={Month} onChange={e=>setMonth(e.target.value)}>
                              {
                                months.map((m, i)=><option key={i} value={i}>{m}</option>)
                              }
                            </select>
                            <select value={Year} onChange={e=>setYear(e.target.value)}>
                              {
                                years.map(y=><option key={y} value={y}>{y}</option>)
                              }
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                        <label>
                            {subscribeData.subscribe_postcode_label}
                          </label>
                          <input
                            className="inputText"
                            placeholder={subscribeData.subscribe_postcode_place_holder}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col txt-center">
                          <a
                            className="link"
                            href={"/" + subscribeData.subscribe_link.uid}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {subscribeData.subscribe_link_text}
                          </a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <input type="checkbox"></input>
                          <label>
                            {subscribeData.subscribe_check_box_text}
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col txt-center">
                          {(errors.Name || errors.Email) &&
                            <p
                              className="txt-primary">
                              Oops, please fix the highlighted fields
                            </p>
                          }
                          {!loadingSubmit && (
                            <input
                              className="btn btn-primary btn-lg px-5"
                              type="submit"
                              value={subscribeData.subscribe_button_text}                          />
                          )}
                          {loadingSubmit && (
                            <div className="btn btn-secondary btn-lg px-5">
                              Loading...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </>
    )
}

export default SubscribeForm