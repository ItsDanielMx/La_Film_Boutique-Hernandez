import React from 'react'
import Frase from '../AboutUs/Frase'
import History from '../AboutUs/History'
import WhyWork from '../AboutUs/WhyWork'

function AboutUs() {
  return (
    <main className="nosotrosFondo">
      <Frase />
      <hr className="container barritas" />
      <WhyWork />
      <hr className="container barritas" />
      <History />
    </main>
  )
}

export default AboutUs