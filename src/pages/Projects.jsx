import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

function Projects() {
  return (
    <div className="py-5">
      <Container>
        <Row className="mb-5" data-aos="fade-up">
          <Col>
            <h1 className="display-4 fw-bold text-center mb-3">Featured Projects</h1>
            <p className="lead text-center text-muted">
              A showcase of my recent work and technical capabilities
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col md={6} lg={4} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <div className="project-image-container">
                  <div 
                    className="project-image" 
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color1} 0%, ${project.color2} 100%)`,
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <h3 className="text-white fw-bold">{project.title}</h3>
                  </div>
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3 flex-grow-1">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <Badge bg="primary" className="me-2 mb-2" key={i}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      href={project.github}
                      target="_blank"
                      className="flex-grow-1"
                    >
                      <FaGithub className="me-1" /> Code
                    </Button>
                    {project.live && (
                      <Button 
                        variant="primary" 
                        size="sm" 
                        href={project.live}
                        target="_blank"
                        className="flex-grow-1"
                      >
                        <FaExternalLinkAlt className="me-1" /> Live Demo
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;