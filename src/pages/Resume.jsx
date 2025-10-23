import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { FaDownload, FaEye, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function Resume() {
  const experience = [
    {
      title: 'Senior Software Engineer',
      company: 'DevMint Solutions Ltd',
      period: '2022 - Present',
      description: 'Leading a team of developers to design and implement web applications. Responsible for code reviews, architecture planning, and mentoring junior staff.'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartUp Inc',
      period: '2024 - 2025',
      description: 'Built and maintained multiple client projects using modern JavaScript frameworks. Collaborated with cross-functional teams.'
    },
    {
      title: 'Virtual Assistant',
      company: 'Freelance',
      period: 'August - Present',
      description: 'Provided administrative support, project management, and customer service to various clients across different industries.'
    }
  ];

  const education = [
    {
      degree: 'Software Engineering Bootcamp',
      institution: 'Modcom Institute Of Technology',
      year: '2019',
      description: 'Focus on Software Engineering and Web Development'
    },
    {
      degree: 'Software Engineering Certification',
      institution: 'ALX Africa',
      year: '2025 - 2026',
      description: 'I will be graduating with technical experties in Advanced software engineering concepts.'
    }
  ];

  return (
    <div className="py-5">
      <Container>
        <Row className="mb-5" data-aos="fade-up">
          <Col>
            <h1 className="display-4 fw-bold text-center mb-3">Resume</h1>
            <p className="lead text-center text-muted mb-4">
              Download my complete professional resume
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Button 
                variant="primary" 
                size="lg" 
                href="/resume.pdf" 
                download
                className="px-4"
              >
                <FaDownload className="me-2" />
                Download PDF
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg"
                href="/resume.pdf"
                target="_blank"
                className="px-4"
              >
                <FaEye className="me-2" />
                View Online
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className="fw-bold mb-4" data-aos="fade-up">
              <FaBriefcase className="me-2 text-primary" />
              Professional Experience
            </h2>
            {experience.map((job, idx) => (
              <Card 
                className="mb-3 border-0 shadow-sm" 
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <h5 className="fw-bold mb-1">{job.title}</h5>
                      <h6 className="text-primary mb-2">{job.company}</h6>
                      <p className="text-muted mb-0">{job.description}</p>
                    </Col>
                    <Col md={4} className="text-md-end">
                      <Badge bg="secondary">{job.period}</Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        <Row>
          <Col>
            <h2 className="fw-bold mb-4" data-aos="fade-up">
              <FaGraduationCap className="me-2 text-primary" />
              Education
            </h2>
            {education.map((edu, idx) => (
              <Card 
                className="mb-3 border-0 shadow-sm" 
                key={idx}
                data-aos="fade-up"
              >
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <h5 className="fw-bold mb-1">{edu.degree}</h5>
                      <h6 className="text-primary mb-2">{edu.institution}</h6>
                      <p className="text-muted mb-0">{edu.description}</p>
                    </Col>
                    <Col md={4} className="text-md-end">
                      <Badge bg="secondary">{edu.year}</Badge>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;