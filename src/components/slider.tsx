import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { useState } from 'react'
import Slider from 'react-slick'
import { Arrow } from '@radix-ui/react-dropdown-menu'

function SliderComponent({ children }: { children: React.ReactNode }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // lowercase
    autoplaySpeed: 3000,
  }
  return (
    <div className="slider-container w-full mt-5">
      <div>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  )
}

export default SliderComponent
