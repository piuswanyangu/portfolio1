import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    { icon: <FaEnvelope size={24} />, label: 'Email', value: 'wanyangupius@gmail.com', link: 'mailto:wanyangupius@gmail.com' },
    { icon: <FaPhone size={24} />, label: 'Phone', value: '+254-792-342-944', link: 'tel:+254792342944' },
    { icon: <FaMapMarkerAlt size={24} />, label: 'Location', value: 'Nairobi, Kenya', link: null },
    { icon: <FaLinkedin size={24} />, label: 'LinkedIn', value: 'linkedin.com/in/pius-wanyangu', link: 'https://linkedin.com/in/pius-wanyangu' },
    { icon: <FaGithub size={24} />, label: 'GitHub', value: 'github.com/pius-wanyangu', link: 'https://github.com/piuswanyangu' }
  ];

  return (
    <div className="py-5">
      <Container>
        <Row className="mb-5" data-aos="fade-up">
          <Col>
            <h1 className="display-4 fw-bold text-center mb-3">Get In Touch</h1>
            <p className="lead text-center text-muted">
              Let's discuss your next project or opportunity
            </p>
          </Col>
        </Row>

        {showAlert && (
          <Row className="mb-4">
            <Col>
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Message Sent Successfully!</Alert.Heading>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </Alert>
            </Col>
          </Row>
        )}

        <Row className="g-4">
          <Col lg={5} data-aos="fade-right">
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Contact Information</h4>
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="d-flex align-items-start mb-3">
                    <div className="text-primary me-3 mt-1">{info.icon}</div>
                    <div>
                      <h6 className="fw-bold mb-1">{info.label}</h6>
                      {info.link ? (
                        <a href={info.link} className="text-muted text-decoration-none">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted mb-0">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm bg-primary text-white">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3">Why Work With Me?</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✓ 2+ years of experience</li>
                  <li className="mb-2">✓ Fast response time</li>
                  <li className="mb-2">✓ Quality-focused delivery</li>
                  <li className="mb-2">✓ Excellent communication</li>
                  <li className="mb-2">✓ Competitive rates</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={7} data-aos="fade-left">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Send Me a Message</h4>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" size="lg" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
