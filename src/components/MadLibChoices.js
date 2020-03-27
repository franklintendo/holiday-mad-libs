import React from 'react';

function MadLibForm({ handleStoryChoice, handleReturnToForm }) {
  return (
      <div className="text-center rounded py-3 px-3 madlib-form-container" style={{width: "auto"}}>
          <h2 className="text-center" style={{width: "auto"}}>STEP 2: Choose your story</h2>
          <div className="d-inline-block">

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/halloweenicon.jpg')} alt="Halloween" name="halloween" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/fourthjulyicon.jpg')} alt="Fourth of July" name="fourthjuly" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/xmasicon.jpg')} alt="Christmas" name="xmas" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/thanksgivingicon.jpg')} alt="Thanksgiving" name="thanksgiving" />

            <img onClick={handleStoryChoice} className='holiday-btn mx-2 my-3' src={require('../img/icons/nyeveicon.jpg')} alt="New Year's Eve" name="nye" />

            <div className="text-center">
              <button onClick={handleReturnToForm} className='btn btn-primary btn-sm'>Return to form</button>
            </div>
          </div>
      </div>
  );
}

export default MadLibForm;
