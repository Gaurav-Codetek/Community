import React from 'react'
import { VscSymbolNamespace } from 'react-icons/vsc'
import { GoDotFill } from 'react-icons/go'
import Connect from './Images/connect.png'
// import shade from './Images/shade_bg.png'
import ConnLine from './Images/Untitled_design__45_-removebg-preview.png'
import Moon from './Images/Moon-removebg-preview.png'
import Sat from './Images/satellite.png'
import Partner from './Partner'
import Team from './Team'

function MastSection() {

    // window.addEventListener("load", () => {
    //     document.getElementById("line").style.width = "100%";
    // })

    return (
        <>

            <div className=" absolute -top-40 -left-24 rounded-full -z-50">
                <img src={Moon} alt="Moon" className='h-96 w-96' />
            </div>
            <div className=" ">
                <img src={Sat} alt="Satellite" className=' absolute  right-44 top-44 h-14 w-14 -rotate-45 animate-sat -z-30' />
            </div>
            <div className="">
            <div className=" relative h-fit w-full px-8 mt-32" >
                <div className=" w-full text-white h-5/6">
                    <div className="absolute top-20 left-5 h-36 w-10">
                        <img src={ConnLine} className='' alt="Connect-Line" />
                    </div>
                    <div className=" absolute top-20 left-18 rounded-full drop-shadow-man animate-fade-rl">
                        <img src={Connect} alt="Connect" className="h-5 w-5 drop-shadow-man" />
                    </div>
                    <div className="absolute top-30 left-4 rounded-full bg-indigo-600 drop-shadow-man-lg p-1 animate-fade">
                        <VscSymbolNamespace className=' fill-current' size="25" />
                    </div>
                    {/* <div className="bg-gray-800/20 -z-10 backdrop-blur-sm text-left animate-fade-tb ml-16 mr-5 p-4 rounded-md">
                        <h1 className="text-cyan-400 text-xl"><b>CodersTek</b> Community</h1>
                        <p className="text-base flex items-center"><GoDotFill color='rgb(34 197 94)' className="mt-0.5 mr-px" />backed by<b className="text-green-500 p-px ml-0.5"> DIC</b></p>
                    </div> */}

                    <div className="flex-col pt-10">
                    <div className="bg-gray-800/20 -z-10 backdrop-blur-sm text-left animate-fade-tb ml-16 mr-0 p-4 rounded-md">
                        <h1 className="text-cyan-400 text-md"><b>CodersTek</b> Community</h1>
                        <p className="text-sm flex items-center"><GoDotFill color='rgb(34 197 94)' className="mt-0.5 mr-px" />backed by<b className="text-green-500 p-px ml-0.5"> DIC</b></p>
                    </div>
                        <h1 className="text-left text-5xl font-semibold mr-0 pl-5 animate-fadeOnly mb-4 mt-10">Let's start from here</h1>
                        <h1 className="text-slate-500 text-left pl-5 text-2xl mb-8 animate-fadeOnly">One-stop Platform to surf various<b className='ml-2 text-cyan-400'>PROJECTS</b></h1>
                        <input type="text" name="email" id="email" placeholder='Email address' className="animate-fade-seq-1 w-11/12 ml-4 mb-3 py-2 rounded-md text-black border-2 focus:border-indigo-600 outline-none px-2" />
                        <input type="submit" value="Sign up for CodersTek" className="animate-fade-seq-2 bg-indigo-900 hover:bg-indigo-950 py-3 font-bold w-11/12 ml-4  rounded-md" />
                    </div>
                </div>

                <div className="hidden bg-white w-2/5">
                    dads
                </div>
                {/* <div className="w-full "> */}
                    <div id="line" className="w-96 transition-2 left-8 absolute top-44 animate-line bg-gradient-to-r from-indigo-600 from-50% via-indigo-500 via-60% to-lime-300   p-px  rounded-sm rotate-90 origin-left transition-2">
                        {/* <hr id="line" className="w-10 border-y-2 border-violet-400 rotate-90 origin-left transition-2"/> */}
                    {/* </div> */}
                </div>
                {/* <div className=" mt-16">
                <hr />
            </div> */}
            </div>
            
            </div>
            <div className='h-fit'>
            <Partner/>
            </div>
            <div className='h-full'>
            <Team/>
            </div>
            
        </>
    );
}

export default MastSection