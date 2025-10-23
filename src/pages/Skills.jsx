import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, 
  FaHtml5, FaCss3Alt, FaAws, FaJs 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 95, icon: <FaJs size={30} />, color: 'warning' },
    { name: 'React', level: 90, icon: <FaReact size={30} />, color: 'info' },
    { name: 'Node.js', level: 88, icon: <FaNodeJs size={30} />, color: 'success' },
    { name: 'Express', level: 85, icon: <SiExpress size={30} />, color: 'dark' },
    { name: 'Python', level: 82, icon: <FaPython size={30} />, color: 'primary' },
    { name: 'MongoDB', level: 85, icon: <SiMongodb size={30} />, color: 'success' },
    { name: 'MySQL', level: 80, icon: <SiMysql size={30} />, color: 'info' },
    { name: 'HTML5', level: 95, icon: <FaHtml5 size={30} />, color: 'danger' },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt size={30} />, color: 'primary' },
    { name: 'AWS', level: 75, icon: <FaAws size={30} />, color: 'warning' },
    { name: 'REST APIs', level: 88, icon: <FaDatabase size={30} />, color: 'secondary' }
  ];

  const categories = {
    'Frontend Development': ['React', 'JavaScript', 'HTML5', 'CSS3'],
    'Backend Development': ['Node.js', 'Express', 'Python', 'REST APIs'],
    'Databases': ['MongoDB', 'MySQL'],
    'Cloud & DevOps': ['AWS']
  };

  return (
    <div className="py-5">
      <Container>
        <Row className="mb-5" data-aos="fade-up">
          <Col>
            <h1 className="display-4 fw-bold text-center mb-3">Technical Skills</h1>
            <p className="lead text-center text-muted">
              Comprehensive expertise across the full technology stack
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          {Object.entries(categories).map(([category, items], idx) => (
            <Col md={6} lg={3} key={idx} className="mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold text-primary mb-3">{category}</Card.Title>
                  <ul className="list-unstyled">
                    {items.map((item, i) => (
                      <li key={i} className="mb-2">
                        <span className="text-muted">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col>
            <h3 className="fw-bold mb-4 text-center" data-aos="fade-up">Proficiency Levels</h3>
          </Col>
        </Row>

        <Row className="g-4">
          {skills.map((skill, idx) => (
            <Col md={6} lg={4} key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className={`text-${skill.color} me-3`}>{skill.icon}</div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-bold">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <ProgressBar 
                        now={skill.level} 
                        variant={skill.color} 
                        className="progress-thin"
                      />
                    </div>
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

export default Skills;