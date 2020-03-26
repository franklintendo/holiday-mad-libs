import React from "react";

function FourthJuly({  madLibs }) {

    return(
        <div>
            <p>The fireworks pierced the night sky with <span style={{fontWeight: "bold"}}>{madLibs.adjectiveOne}</span> colors. They formed the shape of a <span style={{fontWeight: "bold"}}>{madLibs.nounOne}</span> upon exploding. On the ground, Bubba flipped a <span style={{fontWeight: "bold"}}>{madLibs.nounTwo}</span> on the grill and let it sizzle.</p>

            <p>“Hey <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span>!” Clem called out. <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> was <span style={{fontWeight: "bold"}}>{madLibs.verbTwo}</span> on the ground while eating a hot dog. “Glue is an adhesive, not a condiment!”</p>

            <p>“Mmmrppphh!” yelled <span style={{fontWeight: "bold"}}>{madLibs.nameMadLib}</span> in response.</p>

            <p>Clem chuckled to himself. He stuck his spatula under the <span style={{fontWeight: "bold"}}>{madLibs.nounTwo}</span> and flipped it up in the air. A bald eagle <span style={{fontWeight: "bold"}}>{madLibs.verbOne}</span> down and caught the <span style={{fontWeight: "bold"}}>{madLibs.nounTwo}</span> in its mouth.</p>

            <p>“AMERICA!” Clem blurted out in <span style={{fontWeight: "bold"}}>{madLibs.adjectiveTwo}</span> joy.</p>

            <p>The bald eagle winked at Clem and spit out a <span style={{fontWeight: "bold"}}>{madLibs.nounThree}</span>. A single tear crawled down Clem’s cheek.</p>
        </div>
    )
}

export default FourthJuly;