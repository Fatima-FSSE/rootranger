
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const developers = [
  {
    name: "Fatima",
    role: "Full Stack Developer",
    about:
      "Fatima is a passionate frontend developer with a knack for creating beautiful interfaces.",
    skills: ["Java","JavaScript","React","Node","HTML", "CSS", "Bootstrap"],
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

export default function AboutPage() {
  return (
    <>
    <main >
    <Navbar/>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Meet Our Developers</h1>
      <div className="row">
        {developers.map((developer, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100">
              <Image
                src={developer.image}
                alt={developer.name}
                className="card-img-top"
                width={400}
                height={400}
                style={{ objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{developer.name}</h5>
                <p className="card-text">
                  <strong>Role:</strong> {developer.role}
                </p>
                <p className="card-text">{developer.about}</p>
                <p className="card-text">
                  <strong>Skills:</strong> {developer.skills.join(", ")}
                </p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between">
                    <Link href={developer.linkedin} target="_blank" className="btn btn-success">
                      LinkedIn
                    </Link>
                    <Link href={developer.github} target="_blank" className="btn btn-dark">
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-center mb-4">Team: Synergy Squad</h1>
    </div>
    </main>
    <Footer/>
    </>
  );
}
