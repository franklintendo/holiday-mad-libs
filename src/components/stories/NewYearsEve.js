import React from "react";

function NewYearsEve({  madLibs }) {

    return(
        <div>
            <p>
                “3! 2! 1! HAPPY NEW YEAR!” 
            </p>
            <p>
                "I think it's going to be a <span style={{fontWeight: "bold"}}>{madLibs.adjectiveTwo}</span> one!" shouted <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span>.
            </p>
            <p>
                Everyone was sharing their <span style={{fontWeight: "bold"}}>{madLibs.adjectiveOne}</span> New Year’s resolutions with each other.
            </p>
            <p>
                Ricky vowed to start <span style={{fontWeight: "bold"}}>{madLibs.verbTwo}</span> every morning to lose weight.
            </p>
            <p>
                Sarah wanted to use her <span style={{fontWeight: "bold"}}>{madLibs.nounOne}</span> to fight crime.
            </p>
            <p>
                Jim decided to start training to become a <span style={{fontWeight: "bold"}}>{madLibs.nounTwo}</span>.
            </p>
            <p>
                Randall promised to do better and aspire to be more like a <span style={{fontWeight: "bold"}}>{madLibs.nounThree}</span>
            </p>
            <p>
                Hillary <span style={{fontWeight: "bold"}}>{madLibs.verbOne}</span> at the chance to reinvent herself by starting a career in juggling <span style={{fontWeight: "bold"}}>{madLibs.nounFive}</span>.  
            </p>
            <p>
                <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> promised to start every conversation with a stranger by taking out a <span style={{fontWeight: "bold"}}>{madLibs.nounFour}</span> and proclaiming “Isn’t this interesting?”
            </p>
        </div>
    )
}

export default NewYearsEve;