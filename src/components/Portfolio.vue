<style scoped lang="scss">
@import '../css/global.scss';

#portfolio {
  text-align: center;

  p {
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);

    @include serif;
    line-height: 1.5;
    max-width: 80%;
    margin: 0 auto 1em;

    @include phone {
      font-size: 0.9rem;
      max-width: 90%;
    }
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
  border: 1px solid rgba(0, 0, 0, 0.75);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  transition: all 250ms;

  width: 40vw;
  margin: 2vw;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
  }

  @include desktop-large {
    width: 30vw;
    margin: 1vw;
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
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    text-align: center;
    @include sans-serif;

    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
    background: rgba(0, 31, 150, 0.5);
    background: radial-gradient(at 50% -50%, rgba(255, 255, 255, 0.4) -20%, rgba(0, 31, 150, 1));

    opacity: 0;
    transition: all 400ms ease-in-out;

    @include mouse {
      &:hover {
        opacity: 1;
      }
    }

    @include no-mouse {
      &.preview {
        opacity: 1;
      }
    }

    b {
      display: block;
      @include title;

      font-size: 1.3em;
      padding-top: 0.5em;
      line-height: 3;

      @include desktop-large {
      }

      @include tablet {
        font-size: 1em;
        padding-top: 1em;
        line-height: 3;
      }

      @include phone {
      }
    }

    p {
      width: 90%;
      margin: 0 auto;
      @include serif;

      font-size: 1em;
      line-height: 1.7;

      @include desktop-large {
      }

      @include tablet {
        font-size: 0.9em;
        line-height: 1.4;
      }

      @include phone {
        font-size: 0.95em;
        line-height: 1.5;
      }
    }
  }
}
</style>

<template>
  <section id="portfolio">
    <p>
      This is a list in alphabetical order of some recent and/or notable projects.
      Most of them I developed single-handedly; for the rest I was principal developer.
    </p>

    <portfolio-item v-for="item in portfoliolist" :id="item.id" :title="item.title" :desc="item.desc" :url="item.url || item.id"></portfolio-item>
  </section>
</template>

<script>
import PortfolioItem from './PortfolioItem'

import $ from 'jquery'

export default {
  name: 'portfolio',

  components: {
    PortfolioItem
  },

  mounted () {
    this.initPreviewer()
  },

  data () {
    return {
      portfoliolist: [
        {
          id: '11pelicanvista.com',
          title: '11 Pelican Vista',
          desc: 'Media-heavy responsive Web app platform showcasing luxury real estate listings. ' +
            'Single-handedly designed and implemented entire system from scratch.'
        },
        {
          id: 'bankofamerica',
          title: 'Bank of America',
          desc: 'Implemented entire front-end for new real estate search interface - responsive and ADA-compliant.',
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
          desc: 'Public service providing direct, permanent links to files stored at Google Drive.'
        },
        {
          id: 'homgroup.com',
          title: 'HOM Group',
          desc: 'Luxury real estate brokerage management system, MLS pull, and listing search. ' +
            'Single-handedly designed and implemented entire system from scratch.'
        },
        {
          id: 'hyperloop',
          title: 'Hyperloop-One',
          desc: 'Offline micro-site for Hyperloop presentation on 80"x60" touch-interactive tabletop. ' +
            'Built single-handedly using VueJS. (View in browser at 800x600.)',
          url: 'hyperloop.rommelsantor.com'
        },
        {
          id: 'imagehotspotter.com',
          title: 'Image HotSpotter',
          desc: 'Commercial WordPress plugin for creating responsive interactive collection of image hotspots.'
        },
        {
          id: 'nationstar',
          title: 'NationStar Mortgage',
          desc: 'Implemented entire front-end for new real estate search interface - responsive and ADA-compliant.',
          url: 'nationstar.xome.com'
        },
        {
          id: 'neatorama.com',
          title: 'Neatorama',
          desc: 'High-traffic blog required custom platform built to replace WordPress for more specialized functionality. ' +
            'Single-handedly designed and implemented entire system from scratch.'
        },
        {
          id: 'neatoshop.com',
          title: 'Neato Shop',
          desc: 'Custom, fully-featured e-commerce platform built to support extensive customizations. ' +
            'Single-handedly designed and implemented entire system from scratch.'
        },
        {
          id: 'onedown.io',
          title: 'One Down',
          desc: 'One-time-download private file relay service. Still barebones with many more features yet to be implemented.'
        },
        {
          id: 'videosift.com',
          title: 'Video Sift',
          desc: 'Online-video voting and sharing community. Single-handedly built framework and CMS from scratch.'
        }
      ]
    }
  },

  computed: {
  },

  methods: {
    initPreviewer () {
      $('.portfolio-item a').click(function (event) {
        if (!$('html').hasClass('no-mouse')) {
          return
        }

        if (!$(this).hasClass('preview')) {
          event.preventDefault()

          $('.portfolio-item .preview').removeClass('preview')
          $(this).addClass('preview')
        }
      })
    }
  }
}
</script>
