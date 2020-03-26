import React, { useState } from 'react';
import Title from './components/Title';
import MadLibForm from './components/MadLibForm';
import MadLibChoices from './components/MadLibChoices';
import MadLibStory from './components/MadLibStory';
import './App.sass';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const [madLibs, setMadLibs] = useState({
    nounOne: "",
    nounTwo: "",
    nounThree: "",
    nounFour: "",
    nounFive: "",
    verbOne: "",
    verbTwo: "",
    adjectiveOne: "",
    adjectiveTwo: "",
    nameMadLib: ""
  });

  const [holidayChoices, setHolidayChoices] = useState({
    showChoices: false,
    userChoice: "default"
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log("Name: " + name);
    // console.log("Value: " + value);
    setMadLibs({...madLibs, [name]: value.trim() });
    console.log(madLibs);
  }

  function handleSubmit(event) {
    event.preventDefault();

    for (var key in madLibs) {
      if (madLibs[key] === "") {
        return document.getElementsByName(key)[0].focus();
      }
    }

    return setHolidayChoices({...holidayChoices, showChoices: true});
  }

  function handleStoryChoice(event) {
    setHolidayChoices({...holidayChoices, userChoice: event.target.name});
  }

  return (
    <div>
      <Title title={holidayChoices.userChoice} />
      <Container fluid>
        <Row className='justify-content-center py-5'>

          <Col md={6} lg={5} xl={4}>
          {
          // 
          holidayChoices.showChoices ? 
          
          <MadLibChoices handleStoryChoice={handleStoryChoice} /> 
          
          : 
          
          <MadLibForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
          
          }

          {holidayChoices.userChoice !== "default" ? <MadLibStory userChoice={holidayChoices.userChoice} madLibs={madLibs} /> : ""}

    
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
