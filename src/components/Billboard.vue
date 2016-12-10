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
background: radial-gradient(#B8BEB4, #71685F);
background-size: cover;

  @include scrolled {
    /*
    opacity: 0.5;
    */
  }
}
</style>

<template>
  <section id="billboard">
    <portfolio-item v-for="item in portfoliolist" :id="item.id" :title="item.title" :desc="item.desc" :url="item.url || item.id"></portfolio-item>
  </section>
</template>

<script>
import PortfolioItem from './PortfolioItem'

export default {
  name: 'billboard',

  components: {
    PortfolioItem
  },

  data () {
    return {
      portfoliolist: [
        {
          id: '11pelicanvista.com',
          title: '11 Pelican Vista',
          desc: ''
        },
        {
          id: 'edwecate.com',
          title: 'edWEcate',
          desc: ''
        },
        {
          id: 'homgroup.com',
          title: 'HOM Group',
          desc: ''
        },
        {
          id: 'imagehotspotter.com',
          title: 'Image HotSpotter',
          desc: ''
        },
        {
          id: 'neatorama.com',
          title: 'Neatorama',
          desc: ''
        },
        {
          id: 'onedown.io',
          title: 'One Down',
          desc: ''
        },
        {
          id: 'bankofamerica',
          title: 'Bank of America',
          desc: '',
          url: 'realestatecenter.bankofamerica.com'
        },
        {
          id: 'gdurl.com',
          title: 'gd URL',
          desc: ''
        },
        {
          id: 'hyperloop',
          title: 'Hyperloop-One',
          desc: '',
          url: 'hyperloop.rommelsantor.com'
        },
        {
          id: 'nationstar',
          title: 'NationStar Mortgage',
          desc: '',
          url: 'nationstar.xome.com'
        },
        {
          id: 'neatoshop.com',
          title: 'Neato Shop',
          desc: ''
        },
        {
          id: 'videosift.com',
          title: 'Video Sift',
          desc: ''
        }
      ]
    }
  }
}
</script>
