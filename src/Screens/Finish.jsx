import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../Components/Box';

const Finish = () =>{
    const navigate = useNavigate();
    return(
        <>
            <div className='bodyQues'>
            </div>
            <div className='finishBox'>
                <h2 className='text-primary fw-bold'>Thank you for Playing.</h2>
                <div className={"text-danger position-relative d-flex justify-content-center pt-3"} >
                    <div className="shape-outer hexagon" onClick={()=>navigate('/')}>
                        <div className="shape-inner hexagon">
                            <p className="text-white text-center py-auto my-2 fw-bold " >Home</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Finish;