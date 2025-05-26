import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Sec from './Components/Sec'
import Sec3 from './Components/Sec3'
import Sec4 from './Components/Sec4'
import Sec5 from './Components/Sec5'
import Sec6 from './Components/Sec6'
import Sec7 from './Components/Sec7'
import Footer from './Components/Footer'
import Clients from './Components/Clients'

const page = () => {
  return (
    <>
    <div>
 <Header/>
 <Hero/>
 <Clients/>
 <Sec/>
 <Sec3/>
 <Sec4/>
 <Sec5/>
 <Sec6/>
 <Sec7/>
<Footer/>
    </div>
    </>
  )
}

export default page