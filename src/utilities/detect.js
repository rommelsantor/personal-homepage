
import $ from 'jquery'

export const hasTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch

export const isScrolled = () => $(window).scrollTop() > 0

export const updateState = (className, enabled) => {
  $('html')
    .toggleClass(className, enabled)
    .toggleClass('no-' + className, !enabled)
}

