import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import About from './components/About'

type Experience = {
  title: string
  company: string
  location: string
  period: string
  highlights: string[]
  tags: string[]
}

type Project = {
  title: string
  description: string
  tags: string[]
  links?: { label: string; href: string }[]
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer III',
    company: 'Elsevier India',
    location: 'Bangalore, India',
    period: 'Dec 2021 – Present',
    highlights: [
      'Designed and developed full-stack web application using Spring Boot (Java 17) microservices backend and Single-SPA microfrontend architecture with React and TypeScript, enabling manual curation and validation of research metadata entities.',
      'Implemented REST APIs for registry operations handling data ingestion, validation, duplicate detection, entity resolution, and relationship management, ensuring seamless integration between frontend and backend systems.',
      'Researched and implemented enterprise Single Sign-On with Azure Active Directory (Federated Identity Provider), AWS Cognito (Service Provider), and Microsoft Authentication Library (MSAL) for secure platform access.',
      'Built and published reusable React + TypeScript component library packaged with Rollup as NPM module, accelerating development velocity and ensuring UI consistency across multiple teams and applications.',
      'Designed CI/CD pipelines using Jenkins, Spinnaker, and GitHub Actions for automated AWS deployments via Terraform and Helm Charts, reducing deployment time by ~40% across all environments.',
      'Optimized Terraform-based AWS infrastructure (EKS, S3, CloudFront, IAM), reducing operational costs by 25% while supporting high-volume data processing workflows.',
      'Collaborated with tech lead, backend engineers, and product managers in Agile environment, participating in architecture reviews and technical decision-making to deliver scalable, cost-effective platform capabilities supporting entity resolution and metadata management.'
    ],
    tags: ['Spring Boot', 'Java 17', 'React', 'TypeScript', 'Single-SPA', 'AWS', 'Terraform', 'CI/CD', 'Azure AD', 'AWS Cognito', 'MSAL']
  },
  {
    title: 'Software Engineer',
    company: 'Aithent Technologies Pvt Ltd',
    location: 'Gurugram, India',
    period: 'Jan 2020 – Dec 2021',
    highlights: [
      'Developed backend services using Java, Jersey Framework (JAX-RS), and Oracle 11g for healthcare application, implementing secure data processing workflows compliant with healthcare industry standards.',
      'Designed and implemented RESTful APIs with authentication/authorization mechanisms, ensuring secure and efficient processing of patient records and healthcare data.',
      'Improved application performance through optimized SQL queries, database indexing, and refactored backend logic, enhancing system stability and response times.',
      'Participated across full SDLC from requirement analysis through production release, collaborating with QA and product teams in Agile environment to deliver reliable, compliant solutions.',
      'Optimized Oracle 11g database operations including stored procedures, triggers, and complex queries for high-volume healthcare transaction processing.'
    ],
    tags: ['Java', 'Jersey Framework', 'JAX-RS', 'Oracle 11g', 'REST APIs', 'Healthcare', 'SQL Optimization']
  },
  {
    title: 'Software Engineer',
    company: 'HappyMongo Online Solutions Pvt Ltd',
    location: 'Bangalore, India',
    period: 'June 2018 – Dec 2019',
    highlights: [
      'Maintained and enhanced legacy web applications built with native HTML, CSS, JavaScript, and jQuery, delivering new features and improving performance through code optimization and refactoring.',
      'Led development of machine learning web application using Java, Struts Framework, and MySQL, enabling users to train models with images, voice, and video, with real-time prediction capabilities integrated with Python-based ML backend.',
      'Designed and implemented MySQL database schemas and data models, ensuring optimal storage and retrieval performance for ML training data and application workflows.',
      'Developed proof-of-concepts for emerging technologies including Web AR and 8th Wall, exploring augmented reality capabilities and demonstrating feasibility for product features.',
      'Built responsive user interfaces using JavaScript, jQuery, and modern web technologies, collaborating with ML team to integrate Python models for training and prediction workflows.'
    ],
    tags: ['Java', 'Struts Framework', 'MySQL', 'JavaScript', 'jQuery', 'Machine Learning', 'Web AR', 'Python Integration']
  }
]

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
                    <a className="btn btn-primary" href="#experience">View experience</a>
                    <a className="btn btn-outline-secondary" href="#work">Projects</a>
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

        {/* Experience */}
        <section className="mb-4" id="experience">
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-primary mb-1">Professional Experience</h2>
              <p className="text-muted mb-4">7+ years building scalable enterprise applications.</p>

              {experiences.map((exp, idx) => (
                <div key={exp.company} className={idx < experiences.length - 1 ? 'mb-4 pb-4 border-bottom border-secondary border-opacity-25' : ''}>
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                    <div>
                      <h4 className="mb-1">{exp.title}</h4>
                      <div className="text-muted">
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                    <Badge bg="secondary" className="px-3 py-2">
                      {exp.period}
                    </Badge>
                  </div>

                  <ul className="mb-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted mb-2">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} bg="secondary" className="px-3 py-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
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
