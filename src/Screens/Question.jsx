import React from 'react';
import Box from '../Components/Box';

const Question = () =>{
    return(
        <>
            <div className='bodyQues'>
            </div>
            <div className='questionBox'>
                <Box page="question" />
                <Box page="questionChoice" boxStyle="mcq"/>
            </div>
        </>
    )
}

export default Question