<style scoped lang="scss">
@import '../css/global.scss';

</style>

<template>
  <div class="portfolio-item" :style="bgstyle" data-ar="0.68125">
    <div class="scrim">
      <a :href="'http://' + url" target="_blank">
        <b>{{ title }}</b>
        <p>
          {{ desc }}
        </p>
      </span>
    </div>
  </div>
</template>

<script>
import arPersist from '../utilities/arPersist'
import { minThrottle } from '../utilities/throttle'

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

