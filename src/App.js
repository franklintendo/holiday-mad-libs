import React, { useState } from 'react';
import Title from './components/Title';
import MadLibForm from './components/MadLibForm';
import MadLibChoices from './components/MadLibChoices';
import MadLibStory from './components/MadLibStory';
import './App.sass';
import { Container, Row, Col } from 'react-bootstrap';
import { TransitionGroup, CSSTransition, Transition } from "react-transition-group";

function App() {

  const [showForm, setShowForm] = useState(true);
  const [showChoices, setShowChoices] = useState(false);
  const [showStory, setShowStory] = useState(false);

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
    userChoice: "default"
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setMadLibs({...madLibs, [name]: value.trim() });
  }

  function handleSubmit(event) {
    event.preventDefault();

    for (var key in madLibs) {
      if (madLibs[key] === "") {
        return document.getElementsByName(key)[0].focus();
      }
    }

    setHolidayChoices({...holidayChoices, showChoices: true});
    setShowForm(false);
    setShowChoices(true);
    return;
  }

  function handleStoryChoice(event) {
    setHolidayChoices({...holidayChoices, userChoice: event.target.name});
    return setShowStory(true);
  }

  return (
    <div>
      <Title title={holidayChoices.userChoice} />
      <Container fluid>
        <Row className='justify-content-center py-5'>

          
          
          <CSSTransition in={showForm} timeout={750} classNames="transition-form" appear={true} unmountOnExit={true}>
            <Col md={6} lg={5} xl={4}>
              <MadLibForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </Col>
          </CSSTransition>

          <CSSTransition in={showChoices} timeout={750} classNames="transition-choices" unmountOnExit={true}>
            <Col className="col-md-auto">
              <MadLibChoices handleStoryChoice={handleStoryChoice} />
            </Col>
          </CSSTransition> 

          <CSSTransition in={showStory} timeout={750} classNames="transition-choices" unmountOnExit={true}>
            <Col lg={5}>
              <MadLibStory userChoice={holidayChoices.userChoice} madLibs={madLibs} />
            </Col>
          </CSSTransition>

        </Row>
      </Container>
    </div>
  );
}

export default App;
