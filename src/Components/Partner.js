import React from "react";
import { AiOutlineApartment } from 'react-icons/ai'

function Partner(){
    return(
        <>
        <div className="relative h-full mt-5">
            <div className="absolute top-0 left-4 bg-lime-500 rounded-full drop-shadow-man-lg-part p-1">
                <AiOutlineApartment color="white" size="25"/>
            </div>
            {/* <div className="w-full transition-2 left-8 absolute top-36"> */}
                    <div id="line" className="w-full transition-2 left-8 absolute top-10 animate-line bg-gradient-to-r from-lime-600 from-50% via-lime-500 via-80% to-lime-300  p-px  rounded-sm rotate-90 origin-left transition-2">
                        {/* <hr id="line" className="w-10 border-y-2 border-violet-400 rotate-90 origin-left transition-2"/> */}
                    </div>
                {/* </div> */}
        </div>
        </>
    );
}

export default Partner