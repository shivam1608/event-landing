import { primaryFont, secondaryFont } from '@/app/fonts/google_fonts';
import React from 'react'

const About = () => {
  return (
    <div id='event-about' className="container mx-auto px-10 py-10">
        <h1 className={`${secondaryFont.className} text-[100px]`}>WHAT IS <span className='text-[#0652b8]'>HACKOVERFLOW</span>?</h1>
        <p className={`${primaryFont.className} text-[32px] leading-10`}>HackOverflow is <span className='text-[#0652b8] underline font-semibold'>CYSCOM</span> VIT's (formerly OWASP VIT Chennai) flagship hackathon. HackOverflow encourages to present their solutions to tackle challenging real-world problems. It is a platform to compete and network with like-minded and skilled students from all walks of life.
          <br />
          <br />
          It is a online ideathon + 24 offline hour hackathon event, themed on latest technological requirements of NGOs, and startups, focusing on the domains of blockchain, AI & ML, IOT etc. So gather your teams and get ready for the ultimate technical-skills showdown from 27th September (Tuesday) to 2nd October (Sunday).
        </p>
    </div>
  )
}

export default About;