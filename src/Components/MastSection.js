import react from 'react'
import { VscSymbolNamespace } from 'react-icons/vsc'
import { GoDotFill } from 'react-icons/go'
import Connect from './Images/connect.png'
import shade from './Images/shade_bg.png'
import ConnLine from './Images/Untitled_design__45_-removebg-preview.png'

function MastSection() {

    window.addEventListener("load", () => {
        document.getElementById("line").style.width = "100%";
    })

    return (
        <>
            <div className=" relative h-full w-full px-8" >
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
                    <div className="bg-gray-800/20 -z-10 backdrop-blur-sm text-left animate-fade-tb p-3 absolute top-14 left-24 rounded-md">
                        <h1 className="text-cyan-400"><b>CodersTek</b> Community</h1>
                        <p className="text-xs flex items-center"><GoDotFill color='rgb(34 197 94)' className="mt-px mr-px" />backed by<b className="text-green-500 p-px ml-0.5"> DIC</b></p>
                    </div>

                    <div className="flex-col absolute top-40 h-full">
                        <h1 className="text-left text-6xl font-semibold pl-8 animate-fadeOnly mb-4">Let's start from here</h1>
                        <h1 className="text-slate-500 text-left pl-8 text-3xl mb-8 animate-fadeOnly">One-stop Platform to surf various<b className='ml-2 text-cyan-400'>PROJECTS</b></h1>
                        <input type="text" name="email" id="email" placeholder='Email address' className="animate-fade-seq-1 w-4/5 mb-3 py-2 rounded-md text-black border-2 focus:border-indigo-600 outline-none px-2"/>
                        <input type="submit" value="Sign up for CodersTek Community" className="animate-fade-seq-2 bg-indigo-900 hover:bg-indigo-950 py-3 font-bold w-4/5 rounded-md" />
                    </div>
                </div>

                <div className="hidden bg-white w-2/5">
                    dads
                </div>
                <div className="w-4/5 transition-2 left-8 absolute top-44">
                    <div id="line" className="w-1 bg-gradient-to-r from-indigo-600 from-50% via-indigo-500 via-80% to-indigo-300  p-px  rounded-sm rotate-90 origin-left transition-2">
                        {/* <hr id="line" className="w-10 border-y-2 border-violet-400 rotate-90 origin-left transition-2"/> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MastSection