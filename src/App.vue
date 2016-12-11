<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: #f9cd9b;
  background: radial-gradient(#f9cd9b 40%, #b66900);
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 100%;

  #route-container {
    /*
    min-height: 68vh;
    */
    transition: all 300ms;
  }

  .shrink-enter-active {
    animation: shrink-in 750ms ease-in;
    z-index: 200;
  }
  .shrink-leave-active {
    animation: shrink-out 750ms ease-out;
    position: absolute;
    width: 100vw;
    z-index: 100;
  }
  @keyframes shrink-in {
    0% {
      transform: scale(0) translateY(-100vh);
      opacity: 0;
    }
    50% {
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }
  @keyframes shrink-out {
    0% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    50% {
    }
    100% {
      transform: scale(0) translateY(100vh);
      opacity: 0;
    }
  }
}
</style>

<template>
  <div id="app">
    <site-header></site-header>

    <div id="route-container">
      <transition name="shrink">
        <router-view></router-view>
      </transition>
    </div>

    <site-footer></site-footer>
  </div>
</template>

<script>
import { minThrottle } from './utilities/throttle'
import { hasTouch, isScrolled, updateState } from './utilities/detect'

import './css/global.scss'
import $ from 'jquery'

import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

export default {
  name: 'app',

  components: {
    SiteHeader,
    SiteFooter
  },

  beforeCreate () {
    updateState('touch', hasTouch)
    updateState('mouse', false)

    let touching = false
    $('body')
      .bind('touchstart.detect', () => { touching = true })
      .bind('touchend.detect', () => { touching = false })
      .bind('mousemove.detect', () => {
        if (!touching) {
          updateState('mouse', true)

          $('body')
            .unbind('touchstart.detect')
            .unbind('touchend.detect')
            .unbind('mousemove.detect')
        }
      })
  },

  mounted () {
    this.routeUpdated(this.$route.path)

    this.initScroll()
  },

  watch: {
    '$route' (to, from) {
      this.routeUpdated(to.path, from.path)
    }
  },

  methods: {
    routeUpdated (to, from) {
      const format = s => s === '/' ? 'portfolio' : s.substring(1).replace(/\//g, '-')

      const toClass = to ? format(to) : ''
      const fromClass = from ? format(from) : ''

      toClass !== '' && $('html').addClass(`page-${toClass}`)
      fromClass !== '' && $('html').removeClass(`page-${fromClass}`)
    },

    initScroll () {
      $(window)
        .scroll(minThrottle(event => {
          updateState('scroll', isScrolled())
        }))
        .scroll()
    }
  }
}
</script>
