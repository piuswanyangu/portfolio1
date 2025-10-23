import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload, FaProjectDiagram } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <div data-aos="fade-up">
              <h1 className="display-3 fw-bold mb-4">
                Hello, I'm <span className="text-primary">Pius Wanyangu</span>
              </h1>
              <h2 className="h3 text-muted mb-4">
                Software Engineer & Virtual Assistant
              </h2>
              <p className="lead mb-5">
                I’m a results-driven Software Engineer and Virtual Assistant who combines technical skill with strong organizational ability. 
                I build efficient, responsive web applications and provide reliable administrative support that helps teams stay productive. 
                With experience in full-stack development, AWS cloud computing, and office management, I bring both precision and creativity to every project. 
                My focus is on solving problems, streamlining workflows, and delivering dependable results that drive impact.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Button 
                  variant="primary" 
                  size="lg" 
                  href="/resume.pdf" 
                  download
                  className="px-4"
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  href="/projects"
                  className="px-4"
                >
                  <FaProjectDiagram className="me-2" />
                  View Projects
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;