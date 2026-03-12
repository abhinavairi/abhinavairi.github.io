import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import About from './components/About'

type Project = {
  title: string
  description: string
  tags: string[]
  links?: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: 'Kafka-Based Fraud Detection System',
    description:
      'Production-ready real-time fraud detection system processing 10,000+ transactions/minute with 5 concurrent fraud detection algorithms. Features horizontal scaling with 3-partition architecture, Avro schema evolution, and live Streamlit dashboard. Achieved 11,649 TPS burst with 100% success rate.',
    tags: ['Apache Kafka', 'Python', 'Avro', 'Streamlit', 'Docker', 'Real-time Processing'],
    links: [
      { label: 'Github', href: 'https://github.com/abhinavairi/kafka-based-fraud-detection' }
    ]
  },
  {
    title: 'Enterprise SSO & Identity Management',
    description:
      'Implemented comprehensive Single Sign-On solution integrating Azure AD and AWS Cognito, serving thousands of enterprise users with enhanced security using Microsoft Authentication Library (MSAL).',
    tags: ['Azure AD', 'AWS Cognito', 'MSAL', 'Spring Boot', 'React']
  },
  {
    title: 'Reusable React Component Library',
    description:
      'Built and published an enterprise-grade React + TypeScript component library using Rollup bundler as NPM module, accelerating development across multiple teams and ensuring UI consistency.',
    tags: ['React', 'TypeScript', 'Rollup', 'NPM', 'Component Design']
  },
  {
    title: 'Human-in-the-Loop (HITL) UI Web Application',
    description:
      'Developed a micro-frontend web application using React, TypeScript, Single Spa, and Webpack to enable seamless integration of multiple independent modules into a unified user interface, enhancing scalability and maintainability.',
    tags: ['React', 'TypeScript', 'Single Spa', 'Webpack']
  }
]

export default function App() {
  return (
    <div className="app" id="top">
      <Header />

      <Container className="py-5">
        {/* Hero */}
        <section className="mb-4">
          <Card className="shadow-sm">
            <Card.Body>
              <Row className="align-items-center g-4">
                <Col lg={8}>
                  <h1 className="mb-2">Building scalable full-stack systems with microservices, microfrontends, and cloud-native infrastructure.</h1>
                  <p className="lead mb-3">
                    I'm Abhinav — a full-stack engineer with 7+ years of experience. I build backend services with Spring Boot, 
                    frontend apps with React and TypeScript, and deploy them on AWS. I've worked on microservices, microfrontends, 
                    CI/CD pipelines, and identity management — mostly for large-scale enterprise platforms.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <a className="btn btn-primary" href="#work">View projects</a>
                    <a className="btn btn-outline-secondary" href="#contact">Get in touch</a>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="d-flex flex-column gap-2">
                    <div className="text-muted small">Currently</div>
                    <div className="fw-semibold">Software Engineer III</div>
                    <div className="text-muted">Elsevier India • Bangalore</div>
                    <div className="d-flex gap-3 mt-3">
                      <a className="text-decoration-none" href="https://github.com/abhinavairi" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                      <a className="text-decoration-none" href="https://www.linkedin.com/in/abhinavairi/" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                      <a className="text-decoration-none" href="mailto:abhinavairi@outlook.com" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>

        {/* About */}
        <section className="mb-4">
          <About />
        </section>

        {/* Work */}
        <section className="mb-4" id="work">
          <Card className="shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-end justify-content-between flex-wrap gap-2">
                <div>
                  <h2 className="text-primary mb-1">Key Projects</h2>
                  <p className="text-muted mb-0">Notable implementations from my work at Elsevier India.</p>
                </div>
              </div>

              <Row className="mt-3 g-3">
                {projects.map((p) => (
                  <Col key={p.title} md={6}>
                    <Card className="h-100">
                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <div>
                            <Card.Title className="mb-2">{p.title}</Card.Title>
                          </div>
                        </div>

                        <Card.Text className="text-muted">{p.description}</Card.Text>

                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {p.tags.map((t) => (
                            <Badge key={t} bg="secondary" className="px-3 py-2">
                              {t}
                            </Badge>
                          ))}
                        </div>

                        {p.links && p.links.length > 0 && (
                          <div className="mt-auto d-flex gap-2">
                            {p.links.map((l) => (
                              <a key={l.label} href={l.href} className="btn btn-outline-secondary btn-sm">
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-4" id="contact">
          <Card className="shadow-sm">
            <Card.Body>
              <Row className="align-items-center g-4">
                <Col lg={8}>
                  <h2 className="text-primary mb-2">Let's build something</h2>
                  <p className="text-muted mb-0">
                    For opportunities, collaborations, or just a quick hello — reach out.
                  </p>
                </Col>
                <Col lg={4}>
                  <div className="d-grid gap-2">
                    <a href="mailto:abhinavairi@outlook.com" className="btn btn-primary">
                      Email me
                    </a>
                    <a href="https://github.com/abhinavairi" className="btn btn-outline-secondary">GitHub</a>
                    <a href="https://www.linkedin.com/in/abhinavairi/" className="btn btn-outline-secondary">LinkedIn</a>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
      </Container>

      <footer className="py-4 text-center">
        <Container>
          <span className="text-muted">
            © {new Date().getFullYear()} Abhinav Airi — Software Engineer
          </span>
        </Container>
      </footer>
    </div>
  )
}
