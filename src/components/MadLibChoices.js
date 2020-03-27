import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function MadLibForm({ handleStoryChoice }) {
  return (
      <div className="text-center rounded py-3 px-3 madlib-form-container" style={{width: "auto"}}>
          <h2 className="text-center step-title" style={{width: "auto"}}>STEP 2: Choose your story</h2>
          <div className="d-inline-block">

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/halloweenicon.jpg')} alt="Halloween" name="halloween" width="58" height="58" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/fourthjulyicon.jpg')} alt="Fourth of July" name="fourthjuly" width="58" height="58" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/xmasicon.jpg')} alt="Christmas" name="xmas" width="58" height="58" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/thanksgivingicon.jpg')} alt="Thanksgiving" name="thanksgiving" width="58" height="58" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/nyeveicon.jpg')} alt="New Year's Eve" name="nye" width="58" height="58" />
          </div>
      </div>
  );
}

export default MadLibForm;
