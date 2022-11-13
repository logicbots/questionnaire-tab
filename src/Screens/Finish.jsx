import React from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import img from '../assets/QR1.jpg'

const Finish = (props) =>{
    const { score:{score}} = props;
    const navigate = useNavigate();

    //console.log("Hello>>>>",score);
    return(
        <>
            <div className='bodyQues'>
            </div>
            <div className='finishBox'>
                <h1 className='text-ty text-center'>THANK YOU</h1>
                <div className='message-box text-center'>
                    <p className='text-score text-center'>for participating in the Quiz.<br/>your score is {score}/5</p>
                    <img className='image text-center' src={img}/>
                </div>
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

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps,null)(Finish);