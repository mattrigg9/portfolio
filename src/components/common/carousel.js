import React from "react"
import PropTypes from "prop-types"
import Carousel from "nuka-carousel"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

const BaseCarousel = ({ children }) => {
  return (
    <Carousel
      className="carousel"
      wrapAround
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          className="btn btn-link slide-control"
          onClick={previousSlide}
          aria-label="Previous"
        >
          <BsChevronLeft />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          className="btn btn-link slide-control"
          onClick={nextSlide}
          aria-label="Next"
        >
          <BsChevronRight />
        </button>
      )}
    >
      {children}
    </Carousel>
  )
}

BaseCarousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseCarousel
