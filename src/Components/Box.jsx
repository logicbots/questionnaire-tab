import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
//import Data from '../DummyData/questionTable.json';
import ansData from '../DummyData/answer.json';
import quesData from '../DummyData/question.json';
import {ReactComponent as QuesBg} from '../assets/ques.svg';
import { setScore } from "../action/setScore";
import {connect} from 'react-redux';

const Box = (props) =>{
    const {boxStyle = "",page="",str="",data=[]} = props;
    const navigate = useNavigate();
    //console.log("DATA>>>>>",quizdata);
    const [quizdata,setQuizdata] = useState(data);
    const [ques,setQues] = useState("");
    const [option,setOption] = useState([]);
    const optionAlpha = ["A","B","C","D"];
    const [class1,setClass1] = useState("");
    const [class2,setClass2] = useState("");
    const [class3,setClass3] = useState("");
    const [class4,setClass4] = useState("");
    const arr = [class1,class2,class3,class4];
    const [index,setIndex] = useState(0);
    const [correctCount,setCorrectCount] = useState(0);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const changeNavigation = () =>{
        //console.log("Clicked");
        navigate('/questions');
    }
    

    useEffect(()=>{
        if(page === 'question'){
            //console.log('In questions>>>',data);
            if(index < quizdata.length){
                //console.log(index);
                var qid = quizdata[index].qId;
                //console.log("qid>>>>",qid);
                quesData.map((val)=>{
                    val.qId === qid && setQues(val.value);
                    //console.log("value of question>>>>",ques)
                })
                //console.log("value of question>>>>",data[index].value)
                //setQues(data[index].value);
                setOption(quizdata[index].aId);
            }
            else{
                resetClass();
                props.setScore(correctCount);
                page === "question" && navigate('/finish');  
            }
            resetClass();
        }
    },[index])

    const resetClass = () =>{
        setClass1("");
        setClass2("");
        setClass3("");
        setClass4("");
    }

    const findAnswer = (id) =>{
        var value = ""
        ansData.map((val)=>{
            val.aID === id && ( value = val.value )
        })
        return value
    }

    const checkAnswer = async(id,i) =>{
        var flag = 0;
        var qid = quizdata[index].qId;
        var aid = quizdata[index].answerId;
        if(id === aid){
            //console.log("Anwer Id >>>>",(id));
            flag = 1;
            setCorrectCount(correctCount+1);
        }
        switch(i){
            case 0 :
                flag === 0 ? setClass1("bg-danger") : setClass1("bg-success")
                break
            case 1 :
                flag === 0 ? setClass2("bg-danger") : setClass2("bg-success")
                break
            case 2 :
                flag === 0 ? setClass3("bg-danger") : setClass3("bg-success")
                break
            case 3 :
                flag === 0 ? setClass4("bg-danger") : setClass4("bg-success")
                break
        }
        if(index < data.length){
            await delay(400);
            setIndex(index+1);
        }
    }

    return(
        <>
            {
                page === "landing" &&
                <div className={"text-danger position-relative d-flex justify-content-center " + boxStyle}>
                    <div className="shape-outer hexagon" onClick={()=>changeNavigation()}>
                        <div className="shape-inner hexagon">
                            <p className="text-white text-center py-auto my-2 fw-bold" >{str}</p>
                        </div>
                    </div>
                </div>
            }
            {
                page === "question" &&
                <>
                    <div className={"text-danger position-relative d-flex justify-content-center " + boxStyle}>
                        <div className="shape-outer-ques hexagon-ques shadow">
                            {/* <quesBg/> */}
                            <div className="shape-inner-ques hexagon-ques d-flex align-items-center">
                                <div className="ques-div">
                                    <p className="text-white text-start py-auto fw-bold text-ques mt-1 pt-2">{ques}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        option.length > 0 &&
                        <div className="row">
                            {
                                option.map((val,i)=>{
                                    var ansValue = findAnswer(val)
                                    return(
                                        <div key={i} className={"text-danger col-sm-6 mcq"}>
                                            <div className={"shape-outer-ans hexagon " + arr[i]} onClick={()=>checkAnswer(val,i)}>
                                                <div className={"shape-inner-ans hexagon d-flex align-items-center " + arr[i]}>
                                                    <div className="ansDiv">
                                                        <p className="text-white text-start py-auto mt-2 fw-bold pt-1 text-ans" >{`${optionAlpha[i]}. ${ansValue}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })  
                            }
                        </div>   
                    }
                </>
            }
        </>
    )
}

const mapDispatchToProps = dispatch =>({
    setScore: (val) => dispatch(setScore(val)),
  })
export default connect(null,mapDispatchToProps)(Box);