
import timeout from './timeout'

const throttle = waitMs => func => (...args) =>
  !timeout.pending(func) && timeout.set(func, () => {}, waitMs)
    ? func.apply(this, args) : null

export default throttle

export const minThrottle = throttle(5)

