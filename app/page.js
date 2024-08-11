"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
    <main>
    <Navbar />
    <div className="column">
      <div className="container">
        {/* Carousel */}
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-dark slide img-fluid"
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
              <img src="1.jpg" className="d-block w-100 img-fluid" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="2.jpg" className="d-block w-100 img-fluid" alt="Slide 2"/>
            </div>
            <div className="carousel-item">
              <img src="3.jpg" className="d-block w-100 img-fluid" alt="Slide 3"/>
            </div>
            <div className="carousel-item">
              <img src="4.jpg" className="d-block w-100 img-fluid" alt="Slide 4"/>
            </div>
            <div className="carousel-item">
              <img src="5.jpg" className="d-block w-100 img-fluid" alt="Slide 5"/>
            </div>
            <div className="carousel-item">
              <img src="6.jpg" className="d-block w-100 img-fluid" alt="Slide 6"/>
            </div>
            <div className="carousel-item">
              <img src="7.jpg" className="d-block w-100 img-fluid" alt="Slide 7"/>
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
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-star-fill mb-3"></i>
                  <h5 className="card-title">Personalized Plant Care Assistance</h5>
                  <p className="card-text">
                  The AI chatbot provides tailored care instructions for a wide range of indoor 
                  and outdoor plants and vegetables. Users can ask for specific advice based on 
                  the type of plant, current weather conditions, or their location, and the chatbot 
                  will offer detailed, step-by-step guidance on watering, pruning, fertilizing, and pest control.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-lightning-fill mb-3"></i>
                  <h5 className="card-title">Chat History and Progress Tracking</h5>
                  <p className="card-text">
                  The app saves users&apos; chat history, allowing them to revisit previous conversations and 
                  track their gardening progress over time. Users can refer back to earlier advice, 
                  check past interactions, and see how their plants have developed based on the AI&apos;s recommendations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-heart-fill mb-3"></i>
                  <h5 className="card-title">Seasonal Planting Tips</h5>
                  <p className="card-text">
                  The AI chatbot provides users with timely tips and reminders for seasonal planting. 
                  It offers advice on which plants and vegetables are best suited for the current season, 
                  helping users plan and maintain their gardens year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      </div>
    </main>
    <Footer />
    </>
  );
}
