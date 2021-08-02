import React from 'react'
import '../css/Home.css'
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
          alt="banner image"
        />

        <div className="home__row">
          <Product 
            id="111112" 
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape" 
            price={109.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
            rating={5}
          />
          <Product 
            id="111113" 
            title="HP 63 | Ink Cartridge | Black | F6U62AN" 
            price={20.89}
            image="https://images-na.ssl-images-amazon.com/images/I/41Q-WavqjiL._AC_US160_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product 
            id="111114" 
            title="WD 2TB WD Elements Portable External Hard Drive, USB 3.0 - WDBU6Y0020BBK-WESN" 
            price={49.72}
            image="https://images-na.ssl-images-amazon.com/images/I/31pLxnRHbsL._AC_US160_.jpg"
            rating={5}
          />
          <Product 
            id="111115" 
            title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA port),Black" 
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg"
            rating={4}
          />
          <Product 
            id="111116" 
            title="Oculus Rift S PC-Powered VR Gaming Headset" 
            price={389.00}
            image="https://images-na.ssl-images-amazon.com/images/I/31i3tpuXxxL._AC_US218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product 
            id="111114" 
            title="Sceptre E248W-19203R 24inch Ultra Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Metallic Black 2018" 
            price={104.68}
            image="https://images-na.ssl-images-amazon.com/images/I/51d3J1EYbVL._AC_US160_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
