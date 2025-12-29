import React from 'react';
import Hero from '../components/Hero';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaHeadset, FaRocket, FaPlug } from 'react-icons/fa';
import './Home.css'; // Import the CSS file below

function Home() {
  const highlights = [
    {
      icon: <FaCode size={50} />,
      title: 'Software Development',
      description: 'Building robust, scalable applications using modern technologies and best practices.',
      colorClass: 'icon-purple'
    },
    {
      icon: <FaHeadset size={50} />,
      title: 'Virtual Assistance',
      description: 'Providing professional administrative support and project management expertise.',
      colorClass: 'icon-pink'
    },
    {
      icon: <FaRocket size={50} />,
      title: 'Problem Solver',
      description: 'Transforming complex challenges into elegant, efficient solutions.',
      colorClass: 'icon-blue'
    },
    {
      icon: <FaPlug size={50} />,
      title: 'API Development',
      description: 'Designing and implementing secure and efficient APIs for seamless integration.',
      colorClass: 'icon-green'
    }
  ];

  return (
    <>
      <Hero />
      <section className="services-section py-5">
        <Container>
          <Row className="text-center mb-5" data-aos="fade-up">
            <Col>
              <h2 className="section-title display-5 fw-bold mb-3">What I Offer</h2>
              <p className="section-subtitle lead">
                Combining technical expertise with exceptional service delivery to help you achieve your goals
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {highlights.map((item, idx) => (
              <Col md={6} lg={3} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Card className="service-card h-100 border-0">
                  <Card.Body className="text-center p-4">
                    <div className={`service-icon ${item.colorClass} mb-4 mx-auto`}>
                      {item.icon}
                    </div>
                    <Card.Title className="fw-bold mb-3">{item.title}</Card.Title>
                    <Card.Text className="card-description">{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="cta-section py-5">
        <Container className="py-4">
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h2 className="display-6 fw-bold mb-4">Ready to Start Your Project?</h2>
              <p className="lead mb-4 cta-text">
                Let's collaborate to bring your ideas to life with cutting-edge technology and dedicated support
              </p>
              <button className="btn btn-light btn-lg px-5 py-3 fw-semibold">
                Contact Me Today
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;