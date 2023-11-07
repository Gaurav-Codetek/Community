import React, { useEffect, useState, useRef } from "react";
import { AiOutlineApartment } from 'react-icons/ai'
import Dic from './Images/DIC-bw.png'
import uiet from './Images/UIET_logo-modified.png'

function Partner() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    const refLine = useRef(null);


    useEffect(() => {
        // let a = document.getElementsByClassName('section')
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { rootMargin: "0px", threshold: .5 });
        observer.observe(ref.current);

        const observerLine = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, { rootMargin: "0px", threshold: .5 });
        observerLine.observe(refLine.current);
    }, [])

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("animate-gen")
            });
        }

        if (isIntersecting) {
            refLine.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("animate-line")
            })
        }
    }, [isIntersecting])



    return (
        <>
            <div className="relative h-full mt-0">
                <div className="text-white absolute top-24 left-14 text-lg">
                    <h1>Our Partners</h1>
                </div>
                <div className=" absolute top-24 left-4 bg-lime-500 rounded-full drop-shadow-man-lg-part p-1">
                    <AiOutlineApartment color="white" size="25" />
                </div>
                <div ref={ref} className="section">
                    <div className="absolute top-40 left-14">
                        <img src={Dic} alt="DIC" className="h-28 w-28" />
                    </div>
                    <div className="absolute top-40 left-56">
                        <img src={uiet} alt="UIET" className="h-28 w-28" />
                    </div>
                </div>
                <div ref={refLine} className="">
                    <div className="w-full left-8 absolute top-36 bg-gradient-to-r from-lime-600 from-50% via-lime-500 via-80% to-lime-300  p-px  rounded-sm rotate-90 origin-left transition-2">
                    </div>
                </div>
            </div>
        </>
    );
}

export default Partner