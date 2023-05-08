import React from "react"
import { setGlobalState } from "../components/store"

export const SubscribeForm = props => {
    const buttonType = props.slice.primary.button_type
    const text = props.slice.primary.button_text

    function showSubscribe() {
        setGlobalState("showSubscribe", true)
    }

    return (
        <section className="container subscribeFromWrapper">
            <div className="row">
                <div className="col p-0 txt-center">
                    <button 
                        className={`btn btn-${buttonType}`}
                        onClick={showSubscribe}
                    >
                        {text}
                    </button>
                </div>
            </div>
        </section>
    )
}