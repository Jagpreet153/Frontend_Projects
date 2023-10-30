import React from "react";
function Result(props)
{
    return(
        <div className="q-container">
                <div className="scores">
                    <div className="yourscore"> Your Score:{props.score}</div>
                    <div className="total">Total Score : {props.totalScore}</div>
                    
                <button onClick={props.tryagain} className="try">Try Again </button>
                </div>

        </div>

    )
}

export default Result;