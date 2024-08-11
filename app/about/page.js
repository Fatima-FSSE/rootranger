import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const developers = [
    {
      name: "Fatima",
      role: "Full Stack Developer",
      about:
        "Fatima is a passionate frontend developer with a knack for creating beautiful interfaces.",
      skills: ["React", "CSS", "Bootstrap", "JavaScript"],
      image: "/fatima.jpeg",
      linkedin: "https://linkedin.com/in/fatima",
      github: "https://github.com/fatima",
    },
    {
      name: "Descartes",
      role: "Full Stack Developer",
      about:
        "Descartes ensures all data flows seamlessly and securely in our applications.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      image: "/descartes.jpeg",
      linkedin: "https://linkedin.com/in/descartes",
      github: "https://github.com/descartes",
    },
    {
      name: "Ahmed",
      role: "Full Stack Developer",
      about:
        "Ahmed loves tackling complex problems and turning them into simple solutions.",
      skills: ["React", "Node.js", "Express", "MongoDB"],
      image: "/ahmed.jpeg",
      linkedin: "https://linkedin.com/in/ahmed",
      github: "https://github.com/ahmed",
    },
  ];

  return (
    <main
      className="container-fluid vh-100"
      style={{ backgroundColor: "#2e7d32", overflow: "hidden" }}
    >
      <Navbar />
      <h1 className="text-center text-white mb-3 pt-3">Meet Our Team</h1>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <div
          id="developerCarousel"
          className="carousel slide w-50"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {developers.map((dev, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={dev.name}
              >
                <img
                  src={dev.image}
                  className="rounded mx-auto d-block"
                  alt={`Slide of ${dev.name}`}
                  style={{ maxHeight: "650px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block text-dark">
                  <h5>{dev.name}</h5>
                  <p>{dev.about}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="row w-100 justify-content-center mt-3">
            {developers.map((dev) => (
              <div
                className="col-md-4 d-flex align-items-stretch"
                key={dev.name}
              >
                <div className="card bg-light m-2">
                  <img
                    src={dev.image}
                    className="card-img-top"
                    alt={dev.name}
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{dev.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-center">
                      {dev.role}
                    </h6>
                    <p className="card-text">{dev.skills.join(", ")}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        className="btn btn-primary btn-sm"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={dev.github}
                        target="_blank"
                        className="btn btn-secondary btn-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
