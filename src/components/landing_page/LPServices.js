import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../../styles/landing_page_css/LPServices.css';

const services = [
  {
    title: 'Custom Models Training',
    description: 'Training machine learning models with deep learning algorithms and datasets from various industries.',
  },
  {
    title: 'Model Deployments',
    description: 'Easy setup and compatibility with all models for deployment.',
  },
  {
    title: 'Open Source Models',
    description: 'Access to industry-grade open-source models for applications.',
  },

  {
    title: 'Finetune Models',
    description: 'Fine tune models from various sources to meet the need of your applications.',
  }
];

const ServiceCard = ({ title, description }) => (
  <Card className="custom-card mb-4">
    <Card.Body>
      <Card.Title className='card-title'><b>{title}</b></Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="success" className="explore-button">Explore Now</Button>
    </Card.Body>
  </Card>
);

const LPServices = () => (
  <Container fluid className="services-container" >
    <h2 className="my-4 ourservicetext"><b>Our Services</b></h2>
    <Row className="Cards-container">
      {services.map((service, index) => (
        <Col key={index} md={4}>
          <ServiceCard title={service.title} description={service.description} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default LPServices;
