import React from 'react';
import Hero from '../components/Hero';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaHeadset, FaRocket } from 'react-icons/fa';

function Home() {
  const highlights = [
    {
      icon: <FaCode size={40} />,
      title: 'Software Development',
      description: 'Building robust, scalable applications using modern technologies and best practices.'
    },
    {
      icon: <FaHeadset size={40} />,
      title: 'Virtual Assistance',
      description: 'Providing professional administrative support and project management expertise.'
    },
    {
      icon: <FaRocket size={40} />,
      title: 'Problem Solver',
      description: 'Transforming complex challenges into elegant, efficient solutions.'
    },
    {
      icon: <FaCode size={40} />,
      title: 'API Development',
      description: 'Designing and implementing secure and efficient APIs for seamless integration.'
    }
    
  ];

  return (
    <>
      <Hero />
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5" data-aos="fade-up">
            <Col>
              <h2 className="display-5 fw-bold mb-3">What I Offer</h2>
              <p className="lead text-muted">
                Combining technical expertise with exceptional service delivery
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {highlights.map((item, idx) => (
              <Col md={4} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <Card className="h-100 border-0 shadow-sm hover-lift">
                  <Card.Body className="text-center p-4">
                    <div className="text-primary mb-3">{item.icon}</div>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
