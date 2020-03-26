import React from 'react';
import Title from './components/Title';
import MadLibForm from './components/MadLibForm';
import './App.sass';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Title />
      <Container fluid>
        <Row className='justify-content-center'>
          <MadLibForm />
        </Row>
      </Container>
    </div>
  );
}

export default App;
