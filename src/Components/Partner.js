import React, { useEffect, useState, useRef } from "react";
import { AiOutlineApartment } from 'react-icons/ai'
import Dic from './Images/DIC-bw.png'
import uiet from './Images/UIET_logo-modified.png'

function Partner() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    const refLine = useRef(null);
    const refPartner = useRef(null);


    useEffect(() => {
        // let a = document.getElementsByClassName('section')
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            // console.log(isIntersecting)
        }, { rootMargin:"-180px", threshold: 1});
        observer.observe(ref.current);

        // const observerLine = new IntersectionObserver(([entry]) => {
        //     setIsIntersecting(entry.isIntersecting);
        // }, { rootMargin: "0px", threshold: .5 });
        // observerLine.observe(refLine.current);

        // const observerPartner = new IntersectionObserver(([entry]) => {
        //     setIsIntersecting(entry.isIntersecting);
        // }, { rootMargin: "0px", threshold: .5 });
        // observerPartner.observe(refPartner.current);
    }, [isIntersecting])

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("animate-gen")
                el.classList.add("block")
                el.classList.remove("hidden")
            });
        }

        if (isIntersecting) {
            refLine.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("animate-line")
                el.classList.add("block")
                el.classList.remove("hidden")
            })
        }

        if (isIntersecting) {
            refPartner.current.querySelectorAll("div").forEach((el) => {
                el.classList.add("animate-partner")
                el.classList.add("block")
                el.classList.remove("hidden")
            })
        }
    }, [isIntersecting])



    return (
        <>
            <div className="relative h-full mt-0 ">
                <div ref={refPartner} className="">
                <div className="hidden text-white absolute top-24 left-14 text-lg">
                    <h1>Our Partners</h1>
                </div>
                </div>
                <div ref={ref}>
                    <div className=" hidden absolute top-24 left-4 bg-lime-500 rounded-full drop-shadow-man-lg-part p-1">
                        <AiOutlineApartment color="white" size="25" />
                    </div>

                    <div className="hidden absolute top-40 left-14">
                        <img src={Dic} alt="DIC" className="h-28 w-28" />
                    </div>
                    <div id="section" className=" hidden sec absolute top-40 left-56">
                        <img src={uiet} alt="UIET" className="h-28 w-28" />
                    </div>
                    <div className="hidden absolute text-white text-left text-2xl mr-10 pl-14 top-80">
                        Our <b className="text-lime-500">Partners</b> help us to familiarize ongoing projects with the curated people.
                    </div>
                </div>
                <div ref={refLine} className="">
                    <div className="hidden w-full left-8 absolute top-36 bg-gradient-to-r from-lime-600 from-50% via-lime-500 via-80% to-lime-300  p-px  rounded-sm rotate-90 origin-left transition-2">
                    </div>
                </div>
            </div>
        </>
    );
}

export default Partner