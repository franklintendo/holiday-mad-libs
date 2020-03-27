import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

function MadLibForm({ handleInputChange, handleSubmit }) {
  return (
      <div>
          <h2 className="text-center step-title">STEP 1: Type in the text fields</h2>
          <Form>
            <Form.Group controlId="noun-one">
              <Form.Label>Noun 1 <small>(singular)</small></Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="nounOne" placeholder="Enter a singular noun" />
            </Form.Group>

            <Form.Group controlId="noun-two">
              <Form.Label>Noun 2 <small>(singular)</small></Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="nounTwo" placeholder="Enter a singular noun" />
            </Form.Group>

            <Form.Group controlId="noun-three">
              <Form.Label>Noun 3 <small>(singular)</small></Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="nounThree" placeholder="Enter a singular noun" />
            </Form.Group>

            <Form.Group controlId="noun-four">
              <Form.Label>Noun 4 <small>(singular)</small></Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="nounFour" placeholder="Enter a singular noun" />
            </Form.Group>

            <Form.Group controlId="noun-five">
              <Form.Label>Noun 5 <small>(plural)</small></Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="nounFive" placeholder="Enter a plural noun" />
            </Form.Group>

            <Form.Group controlId="verb-one">
              <Form.Label>Verb 1 <small>(past tense)</small></Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="verbOne" placeholder="Enter a verb in the past tense" />
            </Form.Group>

            <Form.Group controlId="verb-two">
              <Form.Label>Verb 2 <small>("-ing" verb)</small></Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="verbTwo" placeholder='Enter a verb that ends in "-ing"'  />
            </Form.Group>

            <Form.Group controlId="adjective-one">
              <Form.Label>Adjective 1</Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="adjectiveOne" placeholder='Enter an adjective'  />
            </Form.Group>

            <Form.Group controlId="adjective-two">
              <Form.Label>Adjective 2</Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="adjectiveTwo" placeholder='Enter an adjective'  />
            </Form.Group>

            <Form.Group controlId="name-madlib">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={handleInputChange} type="text" name="nameMadLib" placeholder='Enter a name'  />
            </Form.Group>

            <div className="text-right">
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
      </div>
  );
}

export default MadLibForm;
