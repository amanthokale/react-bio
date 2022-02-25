import React from 'react';

export default function app() {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Contact Us</h1>
      <div className="container d-flex justify-content-center align-items-center contactcard">
        <form>
          <div className="form-outline mb-4 contactcard">
            <input type="text" id="form4Example1" className="form-control " />
            <label className="form-label" htmlFor="form4Example1">
              First Name
            </label>
          </div>
          <div className="form-outline mb-4">
            <input type="text" id="form4Example1" className="form-control" />
            <label className="form-label" htmlFor="form4Example1">
              Last Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="form4Example2" className="form-control" />
            <label className="form-label" htmlFor="form4Example2">
              Email address
            </label>
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="form4Example3"
              rows="4"
            ></textarea>
            <label className="form-label" htmlFor="form4Example3">
              Message
            </label>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="form4Example4"
              checked
            />
            <label className="form-check-label" htmlFor="form4Example4">
              Send me a copy of this message
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
