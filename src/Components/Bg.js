import React from 'react'
// import bg from './Images/Bg.jpg'
import Navbar from './Navbar';
import MastSection from './MastSection';
import Partner from './Partner';

function Bg(){
    return(
        <>
        <div className="bg-cover relative -z-0 bg-img h-full overflow-x-hidden">
            <Navbar/>
            <MastSection/>
            <Partner/>
        </div>
        </>
    );
}

export default Bg