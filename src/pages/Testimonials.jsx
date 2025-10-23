import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sultan Daniel',
      role: 'CEO, Tech Startup',
      text: 'Outstanding work on our web application. The attention to detail and technical expertise exceeded our expectations. Highly recommend!',
      rating: 5
    },
    {
      name: 'Princess Grace',
      role: 'Project Manager, Digital Agency',
      text: 'Exceptional virtual assistant skills combined with technical knowledge. Made our project management seamless and efficient.',
      rating: 5
    },
    {
      name: 'Steve Mchina',
      role: 'Founder, E-commerce Platform',
      text: 'Delivered a robust, scalable solution on time and within budget. Great communication throughout the entire development process.',
      rating: 5
    },
    {
      name: 'Sarah Wairimu',
      role: 'Operations Director',
      text: 'Professional, reliable, and skilled. The perfect combination of technical ability and excellent client service.',
      rating: 5
    },
    {
      name: 'David Brown',
      role: 'CTO, SaaS Company',
      text: 'Impressive problem-solving skills and deep understanding of modern web technologies. A valuable addition to any project.',
      rating: 5
    },
    {
      name: 'Emily Achieng',
      role: 'Marketing Manager',
      text: 'Great experience working together. Always responsive, professional, and delivers high-quality work consistently.',
      rating: 5
    }
  ];

  return (
    <div className="py-5">
      <Container>
        <Row className="mb-5" data-aos="fade-up">
          <Col>
            <h1 className="display-4 fw-bold text-center mb-3">Client Testimonials</h1>
            <p className="lead text-center text-muted">
              What clients say about working with me
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonials.map((testimonial, idx) => (
            <Col md={6} lg={4} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="h-100 border-0 shadow-sm hover-lift">
                <Card.Body className="d-flex flex-column">
                  <div className="text-primary mb-3">
                    <FaQuoteLeft size={30} />
                  </div>
                  <Card.Text className="text-muted mb-4 flex-grow-1">
                    {testimonial.text}
                  </Card.Text>
                  <div className="mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-warning me-1" />
                    ))}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
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

export default Testimonials;