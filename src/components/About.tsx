import React from 'react'
import { Card, Row, Col, Badge } from 'react-bootstrap'

const skillCategories = {
  Backend: ['Java 17', 'Spring Boot', 'Microservices', 'REST APIs', 'Jersey Framework (JAX-RS)'],
  Frontend: ['React.js', 'TypeScript', 'JavaScript', 'Single-SPA', 'jQuery'],
  'Cloud & DevOps': ['AWS (EKS, S3, CloudFront, IAM, Cognito)', 'Terraform', 'Helm', 'Jenkins', 'GitHub Actions', 'Spinnaker', 'Docker'],
  Databases: ['Oracle 11g', 'MySQL', 'PostgreSQL', 'SQL'],
  Messaging: ['Apache Kafka']
}

export default function About() {
  return (
    <Card className="shadow-sm" id="about">
      <Card.Body>
        <Row>
          <Col lg={7}>
            <h2 className="text-primary mb-4">About Me</h2>
            <p className="lead">
              Software Engineer III with 7+ years of experience building scalable, enterprise-grade 
              full-stack applications across healthcare, publishing, and ML domains.
            </p>
            <p>
              Currently at Elsevier India, I work on cloud-native microservices using Spring Boot and 
              Single-SPA microfrontend architecture with React and TypeScript. My work spans REST API design, 
              identity management with Azure AD and AWS Cognito, and CI/CD automation via Jenkins, Spinnaker, 
              and GitHub Actions on AWS.
            </p>
            <p>
              Previously built healthcare data platforms at Aithent Technologies and led ML web application 
              development at HappyMongo — including AR proof-of-concepts and Python-integrated prediction workflows.
            </p>
          </Col>
          <Col lg={5}>
            <h4 className="mb-3">Core Skills</h4>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="mb-3">
                <div className="text-muted small mb-2">{category}</div>
                <div className="d-flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      bg="secondary" 
                      className="px-3 py-2"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
