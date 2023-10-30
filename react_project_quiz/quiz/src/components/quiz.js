import React,{useState} from 'react';
import {QuizData} from '../Data/QuizData';
import Result from './result';

import './quiz.css'
function Quiz()
{
    const [ind,setInd]=useState(0);
    const [btext,setBtext]=useState("Next");
    const [score,setScore]=useState(0);
    const [clicked,setClicked]=useState(0);
    const [result,setResult]=useState(false);
     const clickHandler=()=> {
        scoreHandler();
        setInd(ind+1);
       
        setClicked(0);
        if(ind===QuizData.length-1)
        {
            setResult(true);
        }

    }
    function prevHandler(){
        if(ind!==0)
        setInd(ind-1);
    }
    function scoreHandler()
    {
        if(clicked===QuizData[ind].answer)
        setScore(score+1);
    }
    const resetAll=()=>
    {
        setClicked(0);
        setInd(0);
        setScore(0);
        setResult(false);
        setBtext("Next");
    }



    return(
        <div className='wrapper'>
            <p className='head'>Quiz App</p>
            {
                result ? (<Result score={score} totalScore={QuizData.length} tryagain={resetAll}/>):
                (
                    <div className='q-container'>
                    <div className='ques'>
                        <span className='qn'>{ind+1}</span>
                        <span className='q'>{QuizData[ind].question}</span> 
                    </div>
    
    
                    <div className='option-container'>
                        {QuizData[0].options.map((options,i)=>{
                            return (
                                <button className='option-btn' onClick={()=> setClicked(i+1)}>{QuizData[ind].options[i]} </button>
                            )
                        })}
                           
                    </div>
                    <div className='buttons'>
                        <button className='btn btn2' onClick={prevHandler}>Previous</button>
                        <button className='btn' onClick={clickHandler}>{btext}</button> 
                    </div>

                    
                </div>
                )
            }
            <div className='footer'>
                <p>© Made by Jagpreet Singh Khurana</p>
                <div className="links">
                    
                </div> 
                </div>
            </div>

               
    );
}
export default Quiz;