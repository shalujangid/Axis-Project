import { Component } from "react";
import "../App.css";
import search from "../img/search.avif";
import search2 from "../img/search2.avif";
import search3 from "../img/search3.jpg";
import front from "../img/fronti.jpeg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import job1 from "../img/job1.avif";
import { withRouter } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
class Home extends Component {
  render() {
    return (
      <div style={{ "background-color": "#08091d" }}>
        <br></br>
          <center>
        <div style={{ width: "80%" }}>
            <Carousel style={{}}>
              <Carousel.Item>
                <img
                  style={{ height: "550px" }}
                  className="d-block w-100"
                  src={img3}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2><b style={{color:'white'}}>Welcome To Dream Jobs</b></h2>
                  <p><b>If opportunity doesn’t knock, build a door.</b></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={img4}
                  alt="Second slide"
                />
                <Carousel.Caption>
                <h2><b style={{color:'white'}}>Welcome To Dream Jobs</b></h2>
                  <p><b>If opportunity doesn’t knock, build a door.</b></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={img5}
                  alt="Third slide"
                />
                <Carousel.Caption>
                <h2><b style={{color:'white'}}>Welcome To Dream Jobs</b></h2>
                  <p><b>If opportunity doesn’t knock, build a door.</b></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
          </center>
        <br></br>
        <br></br>
        <center>
          <h1 style={{ color: "white" }}>Our Stories</h1>
        </center>
        <div
          id="carouselExampleControls"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card-wrapper container-sm d-flex  justify-content-around">
                <div class="card  " style={{ width: "18rem" }}>
                  <img src={search} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Handy</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={search2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Responsive</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={search3} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Great Source</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-wrapper container-sm d-flex   justify-content-around">
                <div class="card  " style={{ width: "18rem" }}>
                  <img src={job1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={img2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-wrapper container-sm d-flex  justify-content-around">
                <div class="card " style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src="https://source.unsplash.com/collection/190727/1600x900"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Easy To Use</h5>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> <br></br>
      </div>
    );
  }
}
export default withRouter(Home);
