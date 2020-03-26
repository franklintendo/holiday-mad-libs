import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Title() {

  let version = "default";

  return (
      <Container fluid className="default-title">
        <Row>
          <Col className='text-center border-left border-right px-0'>
            <img className={`title--img ${version}-title--img`} src={require('../img/MadLibTitle.png')} alt="Holiday Mad Libs" />
          </Col>
        </Row>
      </Container>
  );
}

export default Title;