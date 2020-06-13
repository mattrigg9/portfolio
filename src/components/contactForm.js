import React from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { FaCheckCircle } from "react-icons/fa"
import { Link } from "gatsby"

const FORM_URL = "https://formspree.io/xgenypqq"

const postData = async (url, data = {}) =>
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })

function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  }
  const [formData, updateFormData] = React.useState(initialFormData)
  const [submitted, updateSubmissionStatus] = React.useState(false)

  const handleChange = e => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await postData(FORM_URL, formData)
    updateSubmissionStatus(true)
  }

  return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionLeaveTimeout={200}
        transitionEnterTimeout={200}
      >
        {submitted && (
          <div className="d-flex flex-column align-items-center my-8">
            <FaCheckCircle className="text-success" size="8rem" />
            <h1 className="mt-4">Thanks!</h1>
            <p className="text-center">
              I appreciate you reaching out. I'll be in touch with you shortly.
            </p>
            <Link
              to="/"
              className="btn btn-primary cta no-link-style text-dark mt-4"
            >
              Go Back
            </Link>
          </div>
        )}
      </ReactCSSTransitionGroup>

      {!submitted && (
        <div>
          <h1>Reach out</h1>
          <p>Would you like to start a project together? Let's have a chat.</p>
          <form
            action={FORM_URL}
            method="POST"
            className="mt-5"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="name" id="nameLabel">
                    Name
                  </label>
                  <input
                    aria-describedby="Name"
                    aria-labelledby="nameLabel"
                    aria-required
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    type="text"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="email" id="emailLabel">
                    Email
                  </label>
                  <input
                    aria-describedby="emailHelp"
                    aria-labelledby="emailLabel"
                    aria-required
                    className="form-control"
                    name="_replyto"
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    type="email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="message" id="messageLabel">
                    Message
                  </label>
                  <textarea
                    aria-describedby="Message to Send"
                    aria-labelledby="messageLabel"
                    aria-required
                    className="form-control"
                    name="message"
                    onChange={handleChange}
                    required
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary cta mt-3">
              Send Message
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default ContactForm
