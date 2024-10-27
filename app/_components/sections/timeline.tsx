import { primaryFont, secondaryFont } from '@/app/fonts/google_fonts';
import React from 'react'

const Timeline = () => {

    const timelineData = [
        {
            date : "27-09-2024",
            time : "11:00 AM",
            p : <p>Registrations close
                <br />
                Register for this event, before it closes!.</p>
        },
        {
            date : "27-09-2024",
            time : "12:00 PM",
            p : <p>
                    Opening Ceremony
                    <br />
                    The opening ceremony will happen online, and the problem statements will be given out here.
                </p>
        },
        {
            date : "27-09-2024",
            time : "02:00 PM",
            p : <p>
                    Round 1 (Ideathon) starts
                    <br />
                    Get ready to ideate, and come up with innovative solutions for the problem statement you choose!
                </p>
        },
        {
            date : "28-09-2024",
            time : "09:00 PM",
            p : <p>
                    Round 1 (Ideathon) starts
                    <br />
                    Get ready to ideate, and come up with innovative solutions for the problem statement you choose!
                </p>
        },
    ]

  return (
    <>
    <h1 id='event-timeline' className={`${secondaryFont.className} text-[100px] text-center`}>TIMELINE</h1>
      <div className="flex flex-col mx-auto items-center justify-center space-y-5 w-1/2 container mb-10 relative">

      <img className='animate-float-1 absolute -z-10 -left-24 top-24 size-10 rotate-45' src="https://i.ibb.co/M96bwsV/image.png" alt="clock" />
      <img className='animate-float-2 absolute -z-10 top-10 -right-24 size-14' src="https://i.ibb.co/M96bwsV/image.png" alt="clock" />
      <img className='animate-float-3 absolute -z-10 -left-24 bottom-24 size-12' src="https://i.ibb.co/M96bwsV/image.png" alt="clock" />
      <img className='animate-float-1 absolute -z-10 bottom-40 rotate-12 -right-28 size-14' src="https://i.ibb.co/M96bwsV/image.png" alt="clock" />

        {
            timelineData.map((v,_)=>(
                <div key={_} className="flex hover:scale-105 transition-all duration-300 bg-[#0652b8] px-5 py-2 w-full rounded-lg items-center space-x-4">
                    <div className={`${secondaryFont.className} flex flex-col text-[32px] -space-y-4`}>
                        <span>{v.date}</span>
                        <span>{v.time}</span>
                    </div>

                    <div className={`${primaryFont.className} flex flex-col text-[20px] -space-y-4 basis-2/3`}>
                        {v.p}
                    </div>
                </div>
            ))
        }



      </div>
    </>
  )
}

export default Timeline;