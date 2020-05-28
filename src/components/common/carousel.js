import React from "react"
import PropTypes from "prop-types"
import Carousel from "nuka-carousel"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const Carousel = () => {
  return (
    <Carousel
      className="carousel"
      renderCenterLeftControls={({ previousSlide }) => (
        <button
          className="btn btn-link slide-control"
          onClick={previousSlide}
          aria-label="Previous"
        >
          <FaAngleLeft />
        </button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button
          className="btn btn-link slide-control"
          onClick={nextSlide}
          aria-label="Next"
        >
          <FaAngleRight />
        </button>
      )}
    >
      {children}
    </Carousel>
  )
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousel
