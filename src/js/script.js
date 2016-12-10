/* eslint-disable */

import $ from 'jquery'

const Timeout = (() => {
  const keyId = {}
  const complete = {}

  // set(key, func, ms) -- user-defined key
  // set(func, ms) -- func used as key
  //
  // returns a function allowing you to test if it has executed
  const set = (...args) => {
    let key, func, ms

    if (args.length == 3)
      [key, func, ms] = args
    else {
      [func, ms] = args
      key = func
    }

    const invoke = () => (complete[key] = true, func())

    keyId[key] = setTimeout(invoke, ms)
    complete[key] = false

    return () => executed(key)
  }

  const clear = key => {
    clearTimeout(keyId[key])
    delete keyId[key]
    delete complete[key]
  }

  // timeout has been created
  const exists = key => key in keyId

  // timeout does exist, but has not yet run
  const pending = key => exists(key) && !executed(key)

  // test if a timeout has run
  const executed = key => key in complete && complete[key]

  return {
    set,
    clear,
    exists,
    pending,
    executed
  }
})()

const throttle = waitMs => func => (...args) => 
  !Timeout.pending(func) && Timeout.set(func, () => {}, waitMs)
    ? func.apply(this, args) : null

const minThrottle = throttle(5)

const toggleState = (onClass, offClass, enabled) => {
  $('html')
    .toggleClass(onClass, enabled)
    .toggleClass(offClass, !enabled)
}

const scrollAmount = () => $(window).scrollTop()
const isScrolled = () => scrollAmount() > 0

const onResize = minThrottle(event => {
})

const onScroll = minThrottle(event => {
  toggleState('scroll', 'no-scroll', isScrolled())
})

const initialize = () => {
  $(window)
    .resize(onResize)
    .resize()
    .scroll(onScroll)
    .scroll()
}

//
//
//

initialize()

