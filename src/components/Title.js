import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Title({ title }) {

  return (
      <Container fluid className={`container--title ${title}-title`}>
        <Row>
          <Col className='text-center border-left border-right px-0 py-3'>
            <img className={`title--img ${title}-title--img`} src={require(`../img/titles/${title}.png`)} alt="Holiday Mad Libs" />
          </Col>
        </Row>
      </Container>
  );
}

export default Title;