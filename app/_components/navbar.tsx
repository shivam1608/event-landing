"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { primaryFont } from '../fonts/google_fonts';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 20);
  });

  const navItems = [
    {
      href : "#event-hero" ,
      name : "HOME"
    },
    {
      href : "#event-about" ,
      name : "ABOUT"
    },
    {
      href : "#event-timeline" ,
      name : "TIMELINE"
    },
    {
      href : "#event-faqs" ,
      name : "FAQs"
    },
    {
      href : "#event-contact" ,
      name : "CONTACT"
    },
  ]

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="flex w-full justify-center sticky top-5 h-0 z-10"
    >
      <div className={`${primaryFont.className} flex bg-black h-fit rounded-full px-4 py-3 items-center space-x-4 border-[#064ca8] border-2 shadow-md bg-opacity-85 backdrop-blur-sm`}>
        <img className="h-10" src="https://cyscomvit.com/assets/images/logo.png" alt="cyscomlogo" />
        {
          navItems.map((v,_)=>(
            <Link key={_} href={v.href} className='hover:text-gray-300'>{v.name}</Link>
          ))
        }
      </div>
    </motion.div>
  );
};

export default Navbar;
