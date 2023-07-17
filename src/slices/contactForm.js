import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    Name: yup.string().min(1),
    Email: yup.string().required().email(),
    Phone: yup
      .number()
      .typeError("Please Use Valid Number")
      .required()
      .positive(),
    Message: yup.string().min(5),
    Company: yup.string(),
    PostCode: yup.string(),
    Day:  yup.string(),
    Month: yup.string(),
    Year:  yup.string()
  })
  .required()

export const Contactform = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const formType = props.slice.primary.form_type
  const [Day,setDay]=useState('')
  const [Month,setMonth]=useState('')
  const [Year,setYear]=useState('')
  const [errorSubmit, setErrorSubmit] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [form, setForm] = useState("0")
  const [formSuccess, setFormSuccess] = useState(false)
  const [people, setPeolple] = useState("0")
  const onSubmit = data => submit(data)
  const anchorId = props.slice.primary.anchor_id
  let days=["Day"]
  let months=["Month","January","February","March","April","May","June","July","August","September","October","November","December"]
  let years=["Year", "2023", "2024"]
  let formTypes=["SkyPoint General Enquiry", "SkyPoint Events Enquiry", "SkyPoint Climb Enquiry"]

  for (let i=0; i<31; i++) {days.push(i+1)}

  function changePeople(e) {
    setPeolple(e)
  }

  const submit = async data => {
    setLoadingSubmit(true)
    let emailAddress = "automation.robot@ardentleisure.com"
    let subject = ""
    let content = `First Name: ${data.Name} - Email: ${data.Email} - Message: ${data.Message} - Phone: ${data.Phone}`

    if (formType === "Event") {
      subject = "SkyPoint Event Booking"
      content = content + ` - Company: ${data.Company} - Number of Guest: ${data.PostCode} - Event Date: ${Day} ${Month} ${Year}`
    }
    else {
      switch (form) {
        case "0":
          subject = "General Inquiry Form"
          break
        case "1":
          subject = "Table Reservation Form"
          break
        case "2":
          subject = "Climb Inquiry Form"
          break
        default:
          subject = ""
      }

      if (form === "1") {
        content = content + ` - People: ${people} people`
      }
    }

    let tokenLink = "https://spforms.ardentleisure.com/parksapi/gettoken"
    let token = ""
    let link = `https://spforms.ardentleisure.com/parksapi/Email?emailAddress=${emailAddress}&subject=${subject}&content=${content}`

    await fetch(tokenLink, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
      },
      body: JSON.stringify({
        Username: "ParksWeb",
        Password: "EC52AB07-5D9E-48F5-9F53-1984D43AD698",
      }),
    })
      .then(response => response.json())
      .then(data => {
        token = data.token
        fetch(link, {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            accept: "text/plain",
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then(response => response.json())
          .then(responseData => {
            if (responseData) {
              setLoadingSubmit(false)
              setFormSuccess(true)
            } else {
              setErrorSubmit(true)
              setLoadingSubmit(false)
            }
          })
          .catch(err => {
            setErrorSubmit(true)
            setLoadingSubmit(false)
          })
      })
      .catch(err => {
        setErrorSubmit(true)
        setLoadingSubmit(false)
      })
  }

  return (
    <section className="container contactFromWrapper" id={anchorId}>

 {/* CONTACT FORM */}

    {formType === "Contact" && (
      <>
      {formSuccess && (
        <>
          <div className="row mt-4">
            <div className="col p-0"></div>
              <p className="txt-primary">Thank you for getting in touch!</p>
            <div className="col p-0"></div>
          </div>
          <div className="row mb-4">
            <div className="col p-0"></div>
              <p className="txt-primary">One of our friendly team will get back to you within 2-5 business days. </p>
            <div className="col p-0"></div>
          </div>
        </>
      )}

      {!formSuccess && (
        <>
          <h3 className="txt-center my-1">Contact Form</h3>
          <div className="row">
            <div className="col p-0"></div>
            <div className="formWrapper">
              <div className="row">
                <div className="col txt-center">
                  <p>
                    Please select from the below drop-down menu the enquiry form you require.
                  </p>
                  <select
                    value={form}
                    onChange={e=>setForm(e.target.value)}
                    className="selectFull"
                  >
                    {
                      formTypes.map((m, i)=><option key={i} value={i}>{m}</option>)
                    }
                  </select>
                </div>
              </div>
            </div>
            <div className="col p-0"></div>
          </div>
          {form === "1" && (
            <div className="row">
              <div className="col p-0"></div>
              <div className="formWrapper">
                <div className="col">
                    <p>
                      SkyPoint Bistro + Bar is a casual dining experience; we do not
                      require bookings for groups of 9 people and under.
                    </p>
                    <select
                      name="people"
                      onChange={event => changePeople(event.target.value)}
                      className="selectFull"
                    >
                      <option value="0">Select how many people</option>
                      <option value="10-15">10 - 15 people</option>
                      <option value="16-29">16 - 29 people</option>
                      <option value="over29">Over 29 people</option>
                    </select>
                    {people !== "0" && (
                      <div>
                        <h4>Table Reservations</h4>
                        <p>
                          SkyPoint Bistro + Bar is a casual dining experience; we do
                          not require bookings for groups of 9 people and under.
                        </p>
                        <p>
                          If your group is between <b>10 - 15 people</b>, please
                          contact our team on 07 5582 2700 or info@skypoint.com.au
                          with the date, timeof the request, full name, phone number
                          and number of people for your booking. Our team will
                          confirm your booking within 24 hours
                        </p>
                        <p>
                          If your group is between <b>16 and 29 people</b>; We love
                          a good gathering, however there may be some restrictions
                          to menu items to ensure we can deliver a great experience
                          to your group. Please contact us on 07 5582 2700 or
                          info@skypoint.com.au whereour team can advise of the
                          options available
                        </p>
                        <p>
                          If your group <b>exceeds 29 people</b>, Sounds like a
                          party! Please contact our events team at
                          events@skypoint.com.au who willwalk you through our event
                          packages available for larger groups.
                        </p>
                        <p>
                          All table reservations will be held for 15 minutes
                          following the reservation time. Reserved tables not
                          arrived by 15 minutes maybe released to other guests.
                        </p>
                        <p>
                          Due to high volume, group reservations for breakfast are
                          limited to 7:30am only. Unfortunately, we are unable to
                          reservetables after this time.
                        </p>
                      </div>
                    )}
                </div>
              </div>
              <div className="col p-0"></div>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col p-0"></div>
              <div className="formWrapper">
                <div className="row">
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("Name")}
                      placeholder="Name"
                    />
                    <div className="error">{errors.Name?.message}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("Email")}
                      placeholder="Email Address"
                    />
                    <div className="error">{errors.Email?.message}</div>
                  </div>
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("Phone")}
                      placeholder="Phone"
                    />
                    <div className="error">{errors.Phone?.message}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <textarea
                      className="inputTextarea"
                      {...register("Message")}
                      placeholder="Your Message"
                    />
                    <div className="error">{errors.Message?.message}</div>
                  </div>
                </div>
                {errorSubmit && (
                  <div className="txt-center error">
                    Submit error please try again later!
                  </div>
                )}
                <div className="row">
                  <div className="col txt-center">
                    {!loadingSubmit && (
                      <input
                        className="btn btn-primary btn-lg px-5"
                        type="submit"
                      />
                    )}
                    {loadingSubmit && (
                      <div className="btn btn-secondary btn-lg px-5">
                        Loading...
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col p-0"></div>
            </div>
          </form>
          </>
        )}
      </>
    )}

 {/* EVENT FORM */}

    {formType === "Event" && (
      <>
      {formSuccess && (
        <>
          <div className="row mt-4">
            <div className="col p-0"></div>
              <p className="txt-primary">Thank you for getting in touch!</p>
            <div className="col p-0"></div>
          </div>
          <div className="row mb-4">
            <div className="col p-0"></div>
              <p className="txt-primary">One of our friendly team will get back to you within 2-5 business days. </p>
            <div className="col p-0"></div>
          </div>
        </>
      )}

      {!formSuccess && (
      <>
        <h3 className="txt-center my-1">Enquire Today</h3>
        <div className="row">
          <div className="col"></div>
          <div className="col p-0 txt-center">
            <p>
              Please fill out the details below and one of our friendly SkyPoint Events team members will be in contact with you shortly to discuss your enquiry.
            </p>
          </div>
          <div className="col"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col p-0"></div>
              <div className="formWrapper">
                <div className="row">
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("Name")}
                      placeholder="Name"
                    />
                    <div className="error">{errors.Name?.message}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("Company")}         
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("Email")}
                      placeholder="Email Address"
                    />
                    <div className="error">{errors.Email?.message}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("Phone")}
                      placeholder="Phone"
                    />
                    <div className="error">{errors.Phone?.message}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      className="inputText"
                      type="text"
                      {...register("PostCode")}
                      placeholder="Number of guests"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="labelLight">
                      Event Date
                    </div>
                    <div className="d-flex">
                      <select value={Day} onChange={e=>setDay(e.target.value)}>
                        {
                          days.map(d=><option key={d} value={d}>{d}</option>)
                        }
                      </select>
                      <select value={Month} onChange={e=>setMonth(e.target.value)}>
                        {
                          months.map((m, i)=><option key={i} value={m}>{m}</option>)
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
                    <textarea
                      className="inputTextarea"
                      {...register("Message")}
                      placeholder="Please provide details on the type of event you're looking to host (Dinner/Lunch/Cocktail/Conference/Other)"
                    />
                  </div>
                </div>
                {errorSubmit && (
                  <div className="txt-center error">
                    Submit error please try again later!
                  </div>
                )}
                <div className="row">
                  <div className="col txt-center">
                    {!loadingSubmit && (
                      <input
                        className="btn btn-primary btn-lg px-5"
                        type="submit"
                      />
                    )}
                    {loadingSubmit && (
                      <div className="btn btn-secondary btn-lg px-5">
                        Loading...
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col p-0"></div>
            </div>
          </form>
          </>
        )}
      </>
    )}
  </section>
  )
}
