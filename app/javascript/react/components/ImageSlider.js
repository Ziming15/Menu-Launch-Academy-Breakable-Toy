import React, {useState} from "react"

const ImageSlider = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideStyles = {
    backgroundImage: `url(${props.slides[currentIndex]})`,
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="sliderStyles">
      <div className="leftArrowStyles" onClick={goToPrevious}>❮</div>
      <div className="rightArrowStyles" onClick={goToNext}>❯</div>
      <div style={slideStyles} className="slideStyles"></div>
    </div>
  )
}

export default ImageSlider