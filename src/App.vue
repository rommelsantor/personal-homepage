<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <div id="app">
    <site-header></site-header>

    <billboard></billboard>
  </div>
</template>

<script>
import throttle from './utilities/throttle'

import './css/global.scss'
import $ from 'jquery'

const minThrottle = throttle(5)

import SiteHeader from './components/SiteHeader'
import Billboard from './components/Billboard'

export default {
  name: 'app',

  components: {
    SiteHeader,
    Billboard
  },

  mounted () {
    this.initResize()
    this.initScroll()
  },

  data () {
    return {
    }
  },

  methods: {
    toggleState (onClass, offClass, enabled) {
      $('html')
        .toggleClass(onClass, enabled)
        .toggleClass(offClass, !enabled)
    },

    initResize () {
      $(window)
        .resize(minThrottle(event => {
        }))
        .resize()
    },

    initScroll () {
      $(window)
        .scroll(minThrottle(event => {
          const isScrolled = () => $(window).scrollTop() > 0
          this.toggleState('scroll', 'no-scroll', isScrolled())
        }))
        .scroll()
    }
  }
}
</script>
