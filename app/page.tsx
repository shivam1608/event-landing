import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { CanvasRevealEffect } from './_components/ui/canvas-reveal-effect';
import {VT323} from "next/font/google"

import dynamic from 'next/dynamic';
import Hero from './_components/sections/hero';
const CountdownTimer = dynamic(()=>import('./_components/ui/countdown') , {ssr : false});

const secondaryFont = VT323({
  weight : "400" , 
  subsets : ["latin"]
})

const App = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto">
        <h1 className={`${secondaryFont.className} text-[100px] mx-10`}>WHAT IS <span className='text-[#0652b8]'>HACKOVERFLOW</span>?</h1>
      </div>
    </>
  )
}

export default App;