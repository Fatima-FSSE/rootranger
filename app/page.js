"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main>
      <Navbar />
      <div className="column">
        <div className="garder-helper">
          {session ? (
            <Link className="nav-link" href="/chatbot">
              Gardern Helper
            </Link>
          ) : null}
        </div>
        <div className="container">
          {/* Carousel */}
          <div
            id="carouselExampleCaptions"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                data-bs-ride="carousel"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="1.jpg" className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src="2.jpg" className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src="3.jpg" className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="carousel-item">
                <img src="4.jpg" className="d-block w-100" alt="Slide 4" />
              </div>
              <div className="carousel-item">
                <img src="5.jpg" className="d-block w-100" alt="Slide 5" />
              </div>
              <div className="carousel-item">
                <img src="6.jpg" className="d-block w-100" alt="Slide 6" />
              </div>
              <div className="carousel-item">
                <img src="7.jpg" className="d-block w-100" alt="Slide 7" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Feature Section */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <i className="bi bi-star-fill mb-3"></i>
                    <h5 className="card-title">Feature One</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <i className="bi bi-lightning-fill mb-3"></i>
                    <h5 className="card-title">Feature Two</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <i className="bi bi-heart-fill mb-3"></i>
                    <h5 className="card-title">Feature Three</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card&apos;s content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
