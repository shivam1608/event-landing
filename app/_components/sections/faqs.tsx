/**
 * Component Credits MidUI@alpha0.0.1
 * https://github.com/miduidev/MidUI
 */
"use client";

import { primaryFont, secondaryFont } from '@/app/fonts/google_fonts';
import React, { useRef, useState } from 'react'

const Faqs = () => {


    const FAQs = [
        {question : "Do I have to know coding to take part in this event?" , answer : `No, absolutely not. The first and qualifying round of HackOverflow is a ideathon, where only the limits of your imaginatin will be tested, and no implementation will be asked.However, for the 2nd round, it is recommended to have one member who knows to code a bit in any one language in your team, since you have to implement your idea.`},
        {question : "Are components customizable?" , answer : "Yes, you can easily customize any component according to your use. "},
        {question : "How do i support MidUI" , answer : "Just star miduis on Github."},
    ]

    const [selected , setSelected] = useState(-1);
    const refs = useRef<(HTMLDivElement| null)[]>([]);

    const handleClick = (id : number) => {
        setSelected(id===selected?-1:id);
    }

  return (
    <>
        <h1 id='event-faqs' className={`${secondaryFont.className} text-[100px] text-center`}>FAQs</h1>
        <div className={`${primaryFont.className} container mx-auto px-10 flex justify-center`}>
            <div  className="flex flex-col space-y-4 w-1/2 bg-transparent p-2">
            {
                FAQs.map((faq, i)=>{
                    return (
                        <div key={i} className="flex flex-col border-b border-[#191919] pb-3">
                            <button onClick={()=>{handleClick(i)}} className="flex text-lg justify-between w-full hover:underline cursor-pointer">
                                <span>{faq.question}</span>

                                <svg className={`size-4 transition-all duration-300 ${selected === i?"rotate-[180deg]":""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            </button>
                            <div ref={e=>{refs.current[i]=e}} 
                                className={"mt-2 transition-all duration-300 overflow-hidden"}
                                style={{height : selected===i?`${refs.current[i]?.scrollHeight}px`:"0px"}}
                                >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </>
  )
}

export default Faqs;