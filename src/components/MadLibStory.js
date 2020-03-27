import React from "react";
import Halloween from "./stories/Halloween";
import FourthJuly from "./stories/FourthJuly";
import Christmas from "./stories/Christmas";
import Thanksgiving from "./stories/Thanksgiving";
import NewYearsEve from "./stories/NewYearsEve";
import { Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

function MadLibStory({ userChoice, madLibs }) {

    function renderStory(userChoice) {
        switch(userChoice) {
            case "halloween":
                return (
                    <CSSTransition in={true} timeout={750} classNames="transition-choices" appear={true}>
                        <Halloween madLibs={madLibs} />
                    </CSSTransition>
                )
            case "fourthjuly":
                return (
                    <CSSTransition in={true} timeout={750} classNames="transition-choices" appear={true}>
                        <FourthJuly madLibs={madLibs} />
                    </CSSTransition>
                )
            case "xmas":
                return (
                <Christmas madLibs={madLibs} />
                
                )
            case "thanksgiving":
                return (<Thanksgiving madLibs={madLibs} />)
            case "nye":
                return (<NewYearsEve madLibs={madLibs} />)
            default:
                return <p>Let's get it started!</p>
        }
    }

    return(
        <Col md={7} className="madlib-story-container rounded px-4 py-4">
            {renderStory(userChoice)}
            <div className="text-center">
                <img src={require(`../img/story/${userChoice}1.jpg`)} alt={userChoice} className="mx-3 my-3" />
                <img src={require(`../img/story/${userChoice}2.jpg`)} alt={userChoice} className="mx-3 my-3" />
            </div>
        </Col>
    )
}

export default MadLibStory;