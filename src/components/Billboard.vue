<style scoped lang="scss">
@import '../css/global.scss';

#billboard {
/*
  height: 100vh;
  width: 100%;
  position: relative;
  background: #000;
  z-index: $layer-default;
*/

  transition: opacity 500ms;
  opacity: 0.8;

/*
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
*/
  text-align: center;
  
  background: url(/dist/images/primary-bg.jpg) no-repeat center;
  background-size: cover;

background: #B8BEB4;
background: #f9cd9b;
background-size: cover;
background: radial-gradient(#B8BEB4, #71685F);
background: radial-gradient(#f9cd9b 40%, #b66900);

  @include scrolled {
    /*
    opacity: 0.5;
    */
  }
}
</style>

<style lang="scss">
@import '../css/global.scss';

.portfolio-item {
  z-index: $layer-default;
  border: 1px solid #ccc;
  background: #fff;
  display: inline-block;
  min-height: 4em;
  border: 1px solid rgba(0, 0, 0, 0.75);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  transition: all 250ms;

  width: 30vw;
  margin: 1vw;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  }

  @include tablet {
    width: 40vw;
    margin: 2vw;
  }

  @include phone {
    width: 90vw;
    margin: 2vw;
  }

  .scrim {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    a {
      height: 100%;

      display: block;
      /*
      display: flex;
      align-items: center;
      justify-content: center;
      */

      text-align: center;
      @include sans-serif;
      color: #fff;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
      background: rgba(0, 51, 170, 0.5);

      transition: all 300ms;

      &:hover {
        color: transparent;
        text-shadow: 0 1px 0 transparent;
        background: transparent;
      }

      b {
        display: block;
        font-size: .9em;
        padding-top: 1em;
        line-height: 3;
        @include title;

        @include phone {
          font-size: 1.1em;
          padding-top: 2em;
          line-height: 4;
        }
      }

      p {
        width: 90%;
        margin: 0 auto;
        font-size: 0.9em;
        line-height: 1.4;

        @include phone {
          font-size: 1.1em;
          line-height: 1.7;
        }
      }
    }
  }
}
</style>

<template>
  <section id="billboard" :style="padTopStyle">
    <portfolio-item v-for="item in portfoliolist" :id="item.id" :title="item.title" :desc="item.desc" :url="item.url || item.id"></portfolio-item>
  </section>
</template>

<script>
import PortfolioItem from './PortfolioItem'
import { minThrottle } from '../utilities/throttle'

import $ from 'jquery'

export default {
  name: 'billboard',

  components: {
    PortfolioItem
  },

  mounted () {
    const adjustPadding = minThrottle(() => {
      this.padTop = $('#site-header').outerHeight()
    })

    $(window)
      .resize(adjustPadding)
      .scroll(adjustPadding)

    adjustPadding()
  },

  data () {
    return {
      padTop: 0,

      portfoliolist: [
        {
          id: '11pelicanvista.com',
          title: '11 Pelican Vista',
          desc: 'Media-heavy responsive Web app platform showcasing luxury real estate listings. ' +
            'Single-handedly wrote entire system from scratch.'
        },
        {
          id: 'bankofamerica',
          title: 'Bank of America',
          desc: 'Implemented entire front-end for real estate search, responsive and ADA-compliant.',
          url: 'realestatecenter.bankofamerica.com'
        },
        {
          id: 'edwecate.com',
          title: 'edWEcate',
          desc: 'Exploratory site built entirely with AngularJS (v1) primarily as a learning exercise.'
        },
        {
          id: 'gdurl.com',
          title: 'gd URL',
          desc: ''
        },
        {
          id: 'homgroup.com',
          title: 'HOM Group',
          desc: ''
        },
        {
          id: 'hyperloop',
          title: 'Hyperloop-One',
          desc: '',
          url: 'hyperloop.rommelsantor.com'
        },
        {
          id: 'imagehotspotter.com',
          title: 'Image HotSpotter',
          desc: ''
        },
        {
          id: 'nationstar',
          title: 'NationStar Mortgage',
          desc: '',
          url: 'nationstar.xome.com'
        },
        {
          id: 'neatorama.com',
          title: 'Neatorama',
          desc: ''
        },
        {
          id: 'neatoshop.com',
          title: 'Neato Shop',
          desc: ''
        },
        {
          id: 'onedown.io',
          title: 'One Down',
          desc: ''
        },
        {
          id: 'videosift.com',
          title: 'Video Sift',
          desc: ''
        }
      ]
    }
  },

  computed: {
    padTopStyle () {
      return `padding-top: ${this.padTop}px`
    }
  }
}
</script>
