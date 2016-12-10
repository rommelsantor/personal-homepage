<style scoped lang="scss">
@import '../css/global.scss';

.portfolio-item {
  z-index: $layer-default;
  border: 1px solid #ccc;
  background: #fff;
  display: inline-block;
  min-height: 4em;

  width: 30vw;
  margin: 1.5vw;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

<template>
  <div class="portfolio-item" :style="bgstyle" data-ar="0.68125">
    {{ id }}<br>
    {{ title }}<br>
    {{ desc }}
  </div>
</template>

<script>
import arPersist from '../utilities/arPersist'
import throttle from '../utilities/throttle'

const minThrottle = throttle(5)

import $ from 'jquery'

export default {
  name: 'portfolio-item',

  props: [
    'id',
    'title',
    'desc',
    'url'
  ],

  created () {
    this.initBgImage()
  },

  mounted () {
    this.initResize()
  },

  data () {
    return {
    }
  },

  methods: {
    initBgImage () {
      const imgurl = require(`../assets/portfolio/thumbs/${this.id}.jpg`)
      this.bgstyle = `background-image: url('${imgurl}')`
    },

    initResize () {
      $(window).resize(minThrottle(() => arPersist.update()))

      arPersist.add(this.$el)
    }
  }
}
</script>

