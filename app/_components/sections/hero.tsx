import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { CanvasRevealEffect } from '@/app/_components/ui/canvas-reveal-effect';
import {VT323} from "next/font/google"

import dynamic from 'next/dynamic';
const CountdownTimer = dynamic(()=>import('@/app/_components/ui/countdown') , {ssr : false});

const secondaryFont = VT323({
  weight : "400" , 
  subsets : ["latin"]
})

const Hero = () => {
  return (
    <>
    <div className='h-screen relative'>
      <AnimatePresence>
            <div className="h-full w-full absolute inset-0 opacity-40 -z-10">
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-cyan-500 bg-opacity-30"
                colors={[[125, 211, 252]]}
                dotSize={5}
              />
            </div>
          </AnimatePresence>

          <div className="flex w-full h-full items-center justify-center flex-col">
            <div className="flex items-center space-x-1">
              <img className='size-24' src="https://cyscomvit.com/hackoverflow/assets/images/event-logo.webp" alt="logo" />
              <h1 className={`${secondaryFont.className} text-[118px]`}>HACKOVERFLOW</h1>
            </div>
            <CountdownTimer secondaryFont={secondaryFont} targetEpoch={1730026411} />

            <span className={`${secondaryFont.className} mt-10`}>#think before you click</span>
            <button className={`bg-[#0652b8] hover:opacity-90 rounded-full px-6 py-1 text-[32px] ${secondaryFont.className}`}>REGISTER</button>


            <img className='h-20 absolute bottom-5 right-5 animate-pulse' src="https://i.ibb.co/Dtnhbt4/image.png" alt="scroll down" />
          </div>
    </div>
    </>
  )
}

export default Hero;