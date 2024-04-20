import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneanimation from "../../../src/animation/done.json";
import contactanimation from "../../../src/animation/contact.json";
import "./contact.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbjnqrwe");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        if you want to contact with me, it is from here.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "submit"}
          </button>
          <div
            style={{
              color: "var(--subtitle)",
              fontSize: "0.5rem",
              marginTop: "1rem",
            }}
          >
            {state.succeeded ? (
              <h1 className="flex">
                <Lottie
                  loop={false}
                  style={{ height: 20 }}
                  animationData={doneanimation}
                />
                Your message has been sent successfully
              </h1>
            ) : null}
          </div>
        </form>

        <div className="contact-animation">
          <Lottie style={{ height: 500 }} animationData={contactanimation} />
        </div>
      </div>
    </section>
  );
}
