import { primaryFont, secondaryFont } from '@/app/fonts/google_fonts';
import React from 'react'
import {AtSymbolIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div id='event-contact'  className='flex justify-between h-screen container mx-auto px-5'>
        <div className={`flex flex-col ${secondaryFont.className} text-[118px] mt-16 justify-center`}>
            <img className="h-48 w-fit" src="https://cyscomvit.com/assets/images/logo.png" alt="cyscomlogo" />
            <div className='flex items-center space-x-8'>
                <span className={`text-[#0652b8]`}>Think</span>
                <span>before</span>
            </div>
            <h1 className='-mt-20 self-start'>you click</h1>

            <span className={`text-sm ${primaryFont.className} mt-10 self-start`}>© Cyscom Copyright 2024. All rights reserved.</span>
            {/* @shivzee */}
        </div>


        <div className={`${primaryFont.className}  flex flex-col items-start justify-center space-y-5`}>
            <div className="flex space-x-2">
                <MapPinIcon className='size-8' />
                <p className="max-w-64">
                    Vellore Institute of Technology, Vandalur - Kelambakkam Road Chennai, Tamil Nadu - 600 127
                </p>
            </div>


            <div className="flex space-x-2">
                <AtSymbolIcon className='size-8' />
                <span>cyscom.vitcc@vit.ac.in</span>
            </div>

            <div className="flex space-x-2">
                <PhoneIcon className='size-8' />
                <span>+91-96927656</span>
            </div>
        </div>
    </div>
  )
}

export default Contact;