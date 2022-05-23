import React, { useState } from "react";

const EightBall = (answers) => {
    const [msg, setmsg] = useState("Think of a question...")
    const [color, setcolor] = useState("black")

    console.log(answers)

    const handleClick = () => {
        console.log(answers.answers[5].msg)
        setmsg(answers.answers[Math.floor(Math.random() * answers.answers.length)].msg)
        setcolor(answers.answers[Math.floor(Math.random() * answers.answers.length)].color)
    }

    return (

        <div style={{ backgroundColor: color, borderRadius: "50%", height: "125px", width: "125px", display: "inline-block", padding: "10%", color: "white" }} onClick={handleClick} >
            {msg}
        </div>
    )
}

export default EightBall