import React, { Component } from "react";
import "./slider.css";

export default class Slider extends Component {
  render() {
    return (
      <div className="row justify-content-center mt-2">
        <div className="col-lg-9">
          <div className="bd-example">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                />
                <li data-target="#carouselExampleCaptions" data-slide-to="1" />
                <li data-target="#carouselExampleCaptions" data-slide-to="2" />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://clothes-store-basket.s3-us-west-1.amazonaws.com/clothes/slide-2.jpg"
                    className=" w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://clothes-store-basket.s3-us-west-1.amazonaws.com/clothes/slide-3.jpg"
                    className=" w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="https://clothes-store-basket.s3-us-west-1.amazonaws.com/clothes/1stslide.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
