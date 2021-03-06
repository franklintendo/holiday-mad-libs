import React, { useState } from 'react';
import Title from './components/Title';
import MadLibForm from './components/MadLibForm';
import MadLibChoices from './components/MadLibChoices';
import MadLibStory from './components/MadLibStory';
import './App.sass';
import { Container, Row, Col } from 'react-bootstrap';
import { CSSTransition } from "react-transition-group";

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

  async function handleReturnToForm(event) {
    event.preventDefault();

    setShowForm(true);
    setShowChoices(false);
    setShowStory(false);
    return fillValuesWithState();
  }

  function fillValuesWithState() {
    setTimeout(() => {
      for (var key in madLibs) {
        let input = document.getElementsByName(key)[0];
        input.value = madLibs[key];
      }
      document.getElementsByName('nounOne')[0].focus();
    }, 1000);

  }

  function handleSubmit(event) {
    event.preventDefault();

    for (var key in madLibs) {
      if (madLibs[key] === "") {
        return document.getElementsByName(key)[0].focus();
      }
    }

    setShowForm(false);
    setShowChoices(true);
    return;
  }

  function handleStoryChoice(event) {
    setHolidayChoices({...holidayChoices, userChoice: event.target.name});
    setBackgroundColor();
    return setShowStory(true);
  }

  function setBackgroundColor() {
    let root = document.getElementsByTagName( 'html' )[0];
    root.setAttribute('class', `${holidayChoices.userChoice}-title`);
  }

  setBackgroundColor();

  return (
    <div>
      <Title title={holidayChoices.userChoice} />
      <Container fluid>
        <Row className='content-row justify-content-center pb-5 pt-3'>

          <CSSTransition in={showForm} timeout={750} classNames="transition-form" appear={true} unmountOnExit={true}>
            <Col md={7} lg={6} xl={5} className="rounded py-3 px-3 madlib-form-container mx-3">
              <MadLibForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </Col>
          </CSSTransition>

          <CSSTransition in={showChoices} timeout={750} classNames="transition-choices" unmountOnExit={true}>
            <Col className="col-md-auto">
              <MadLibChoices handleStoryChoice={handleStoryChoice} handleReturnToForm={handleReturnToForm} />
            </Col>
          </CSSTransition> 

          <CSSTransition in={showStory} timeout={750} classNames="transition-choices" unmountOnExit={true}>
              <MadLibStory userChoice={holidayChoices.userChoice} madLibs={madLibs} handleReturnToForm={handleReturnToForm} />
          </CSSTransition>

        </Row>
      </Container>
    </div>
  );
}

export default App;
