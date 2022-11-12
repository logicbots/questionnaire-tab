import React, { useEffect, useState } from 'react';
import Box from '../Components/Box';
import Data from '../DummyData/questionTable.json';

const Question = () =>{
    const [data,setData] = useState([]);

    const quizData = (arr,num) =>{
        var newArr = [...arr].sort(()=> 0.5 - Math.random());
        return newArr.slice(0,num);
    }
    useEffect(()=>{
        var list = quizData(Data,5);
        console.log("Hello world>>>>>",list)
        setData(list);
    },[])
    return(
        <>
            <div className='bodyQues'>
            </div>
            <div className='questionBox'>
                <Box page="question" data={quizData(Data,5)}/>
                {/* <Box page="questionChoice" boxStyle="mcq"/> */}
            </div>
        </>
    )
}

export default Question