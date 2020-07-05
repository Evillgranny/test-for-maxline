import $ from 'jquery'
import 'slick-carousel'


class DefaultSlider {
    sliderInit (sliders) {
        $(sliders).slick({
            dots: true,
            arrows: false,
            dotsClass: 'default-slider__dots',
            autoPlay: true
        })
    }
}

export { DefaultSlider }
