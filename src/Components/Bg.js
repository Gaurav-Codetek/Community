import React from 'react'
import bg from './Images/Bg.jpg'
import Navbar from './Navbar';
import MastSection from './MastSection';

function Bg(){
    return(
        <>
        <div className="bg-cover relative -z-0 bg-img h-screen overflow-x-hidden">
            <Navbar/>
            <MastSection/>
        </div>
        </>
    );
}

export default Bg