import React from "react";
import Halloween from "./stories/Halloween";
import FourthJuly from "./stories/FourthJuly";
import Christmas from "./stories/Christmas";
import Thanksgiving from "./stories/Thanksgiving";
import NewYearsEve from "./stories/NewYearsEve";

function MadLibStory({ userChoice, madLibs }) {

    function renderStory(userChoice) {
        switch(userChoice) {
            case "halloween":
                return <Halloween madLibs={madLibs} />
            case "fourthjuly":
                return <FourthJuly madLibs={madLibs} />
            case "xmas":
                return <Christmas madLibs={madLibs} />
            case "thanksgiving":
                return <Thanksgiving madLibs={madLibs} />
            case "nye":
                return <NewYearsEve madLibs={madLibs} />
            default:
                return <p>Let's get it started!</p>
        }
    }

    return(
        <div>
            {renderStory(userChoice)}
        </div>
    )
}

export default MadLibStory;