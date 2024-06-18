import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MapComponent = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.507456344678!2d79.5526!3d11.7722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53049a52c548f5%3A0x170f30d59db72fb5!2sPanruti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1683431667877!5m2!1sen!2sin`;

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={8} className="mx-auto">
          <div className="contactright relative">
            <iframe
              title="Google Maps"
              src={mapUrl}
              width="100%"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: "0px" }}
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MapComponent;
