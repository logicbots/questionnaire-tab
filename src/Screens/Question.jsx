import React, { useEffect, useState } from 'react';
import Box from '../Components/Box';
import Data from '../DummyData/questionTable.json';
import leftLogo from '../assets/5years.png';
import rightLogo from '../assets/cbic.png'

const Question = (props) =>{
    const [data,setData] = useState([]);
    const [count,setCount] = useState(0);
    const quizData = (arr,num) =>{
        var newArr = [...arr].sort(()=> 0.5 - Math.random());
        return newArr.slice(0,num);
    }
    useEffect(()=>{
        if(count === 0){
            var list = quizData(Data,5);
            //console.log("Hello world>>>>>",list)
            setData(list);
        }
        setCount(count+1);
    },[])

    return(
        <>
            <div className='bodyQues'>
            </div>
            <div className='logo-div'>
                <div className='left-logo pt-4 ps-4'>
                    <img className='left-logo-img' src={leftLogo}/>
                </div>
                <div className='right-logo pt-3 pe-4'>
                    <img className='right-logo-img' src={rightLogo}/>
                </div>
            </div>
            <div className='questionBox'>
                <Box page="question" data={quizData(Data,5)}/>
                {/* <Box page="questionChoice" boxStyle="mcq"/> */}
            </div>
        </>
    )
}

export default Question