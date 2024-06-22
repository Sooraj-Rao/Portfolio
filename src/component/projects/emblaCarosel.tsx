import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './arrow'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, undefined) 

  return (
    <div className="embla  pt-3 ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                className=" h-60  object-contain rounded-3xl"
                src={slide}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls ">
        <div className="embla__buttons text-foreground">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
