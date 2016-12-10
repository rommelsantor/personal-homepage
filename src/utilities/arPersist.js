
import $ from 'jquery'

const arPersist = (() => {
  const els = []

  const add = el => {
    const $el = $(el)

    let ar = $el.data('ar')

    if (!ar) {
      ar = $el.height() / $el.width()
    }

    els.push({
      el,
      ar
    })

    update(els.length - 1)
  }

  const update = index => {
    els.forEach(({ el, ar }, i) => {
      if (typeof index === 'undefined' || index === i) {
        const $el = $(el)
        const newH = $el.width() * ar

        $el.height(newH)
      }
    })
  }

  return {
    add,
    update
  }
})()

export default arPersist

