import React from 'react'

import Hero from './_components/sections/hero';
import About from './_components/sections/about';
import Timeline from './_components/sections/timeline';
import Sponsors from './_components/sections/sponsors';
import Faqs from './_components/sections/faqs';
import Contact from './_components/sections/contact';

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Timeline />
      <Sponsors />
      <Faqs />
      <Contact />
    </>
  )
}

export default App;