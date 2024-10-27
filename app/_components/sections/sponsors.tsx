import { secondaryFont } from '@/app/fonts/google_fonts';
import React from 'react'

const Sponsors = () => {
  return (
    <>
      <h1 id='event-sponsors' className={`${secondaryFont.className} text-[100px] text-center`}>SPONSORS</h1>
      <div className="flex container mx-auto flex-col items-center">
        {/* Manual entry of sponsors */}
        <div className="flex flex-wrap justify-evenly space-x-10 my-8">
          <img className='h-32' src="https://cyscomvit.com/hackoverflow/assets/images/event-logo.webp" alt="cyscom" />
          <img className='h-32' src="https://cyscomvit.com/assets/images/logo.png" alt="cyscom" />
          <img className='h-32' src="https://i.ibb.co/B2qjNxx/image.png" alt="google" />
        </div>
        <span>Your company can be featured here!</span>
        <span>cyscom.vitcc@vit.ac.in</span>
      </div>
    </>
  )
}

export default Sponsors;