import React from 'react';

export default function app() {
  return (
    <>
      {/* <h1 className="text-center mt-5 mb-5">BIO</h1> */}
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card biocard">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/062.webp"
            className="card-img-top"
            alt="Chicago Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
