import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaProjectDiagram, FaTools } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
const About = () => {
  return (
    <div className="container mt-5">
      {/* Profile Section */}
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={require('./Images/vishal.png')}
            alt="Profile"
            className="rounded-circle img-fluid shadow-lg border border-3 border-primary p-2"
          />
        </div>
        <div className="col-md-8">
          <h2 className="fw-bold text-primary">Hey, I'm Arya Vishal</h2>
          <p className="lead text-muted">
            A passionate <strong>Computer Engineer</strong> specializing in Machine Learning, Web Development, Cloud Computing, and Open-Source Contribution.
            I love solving real-world problems through innovative technologies.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <section className="mt-5 p-4 bg-light rounded shadow">
        <h3 className="fw-bold text-center text-secondary">My Skills & Expertise</h3>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <FaTools size={40} className="text-primary" />
            <h5 className="mt-2">Full-Stack Development</h5>
            <p className="text-muted">HTML, CSS, JavaScript, React, Node.js, Bootstrap</p>
          </div>
          <div className="col-md-4">
            <FaProjectDiagram size={40} className="text-success" />
            <h5 className="mt-2">AI & Machine Learning</h5>
            <p className="text-muted">Python, TensorFlow, OpenAI, Deep Learning</p>
          </div>
          <div className="col-md-4">
            <FaEnvelope size={40} className="text-danger" />
            <h5 className="mt-2">Cloud & DevOps</h5>
            <p className="text-muted">AWS, Docker, Kubernetes, CI/CD</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-5 text-center p-4 bg-dark text-light rounded shadow">
        <h3 className="fw-bold">Let's Connect</h3>
        <p>Interested in working together? Feel free to reach out!</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-effect">
            <FaLinkedin size={20} className="me-2" /> LinkedIn
          </a>
          <a href="https://github.com/aryaVishal1706" target="_blank" rel="noopener noreferrer" className="btn btn-dark hover-effect">
            <FaGithub size={20} className="me-2" /> GitHub
          </a>
          <a href="mailto:your-email@example.com" className="btn btn-danger hover-effect">
            <FaEnvelope size={20} className="me-2" /> Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
