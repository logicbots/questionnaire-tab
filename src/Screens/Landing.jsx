import React from "react";
import '../style/style.css';
import Box from '../Components/Box';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Landing = () =>{
    return(
        <div className="body">
            <Box boxStyle="landingBox" page="landing" str="START"/>
        </div>
    );
}

export default Landing