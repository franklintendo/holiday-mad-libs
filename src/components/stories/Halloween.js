import React from "react";

function Halloween({  madLibs }) {

    return(
        <div>
            <p>The door bell rang. <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> ran to the door to greet the trick-or-treaters. Three little kids stood waiting.</p>

            <p>"Hi! What are you supposed to be?" <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> asked the little girl to the left.</p>

            <p>"I’m a <span style={{fontWeight: "bold"}}>{madLibs.nounOne}!</span>" she beamed.</p>

            <p>“Isn’t that sweet?” <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> dropped a <span style={{fontWeight: "bold"}}>{madLibs.nounTwo}</span> in her bag and turned to the boy standing next to her. “Wow! Your costume’s really gruesome! Maybe the ugliest thing I’ve seen all night!”</p>

            <p>“I’m not wearing a costume,” said the boy.</p>

            <p>“Oh … right.” <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> placed a <span style={{fontWeight: "bold"}}>{madLibs.nounTwo}</span> in his bag and turned to the last trick-or-treater. “What are you supposed to be, big guy?”</p>

            <p>“Give me some candy, you <span style={{fontWeight: "bold"}}>{madLibs.nounThree}</span>-chinned fuddy-duddy!”</p>

            <p>“Oh, I know what you are. You’re a real <span style={{fontWeight: "bold"}}>{madLibs.adjectiveOne}</span> dingle berry! Haven’t you heard to always respect your elders?'”</p>

            <p>The boy took his mask off and <span style={{fontWeight: "bold"}}>{madLibs.verbOne}</span> it against <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}’s</span> face. <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> collapsed to the floor. “Let’s take all of the <span style={{fontWeight: "bold"}}>{madLibs.nounFive}</span> here!” yelled the boy.</p>

            <p>The kids began looting <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}’s</span> house. They found all of the <span style={{fontWeight: "bold"}}>{madLibs.nounFive}</span> they could find, took <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}’s</span> prized <span style={{fontWeight: "bold"}}>{madLibs.nounFour}</span>, and turned the house upside-down in the pursuit of candy. Finally, they knocked over <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}’s</span> flat-screen television and rode it down the street like a soapbox derby car.</p>

            <p>When <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> regained consciousness, <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> saw two medics <span style={{fontWeight: "bold"}}>{madLibs.verbTwo}</span> on the sidewalk.</p>

            <p>“Hey! I’m in need of medical help! I think I’ve broken my nose!” cried <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span>.</p>

            <p>“We’re not medics. We’re just dressed like this for Halloween,” responded one of the costumed medics. “Do you happen to have any taffy? We are <span style={{fontWeight: "bold"}}>{madLibs.adjectiveTwo}</span> men and we feel like we deserve some.”</p>
        </div>
    )
}

export default Halloween;