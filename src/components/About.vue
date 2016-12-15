<style scoped lang="scss">
@import '../css/global.scss';

#about {
  .bio-container {
    padding: 0 2rem;

    &:after {
      content: "";
      display: table;
      clear: both;
      margin-bottom: 5rem;
    }

    .atvImg {
      width: 250px;
      height: 250px;

      @include phone {
        width: 150px;
        height: 150px;
      }

      @include tablet {
        width: 150px;
        height: 150px;
      }
    }

    .headshot {
      float: left;

      @include phone {
        display: block;
        text-align: center;
        float: none;
      }

      .atvImg {
        margin: 0 auto 2em;
      }

      img {
        height: auto;
        margin-bottom: 2rem;
        width: 250px;
        height: 250px;

        @include phone {
          width: 150px;
          height: 150px;
        }

        @include tablet {
          width: 150px;
          height: 150px;
        }
      }
    }

    .bio {
      vertical-align: top;
      padding-left: 1rem;

      @include phone {
        display: block;
        padding-left: 0;
        margin-left: 0;
        text-align: center;
      }

      @include tablet {
        margin-left: 160px;
      }

      @include desktop {
        margin-left: 260px;
      }

      @include desktop-large {
        margin-left: 260px;
      }

      h3 {
        @include sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1rem;
      }

      p {
        @include serif;
        font-size: 0.9rem;
        line-height: 1.5;
        margin: 1em 0;

        & + h3 {
          margin-top: 2rem;
        }

        ul {
          margin-top: 0.5em;

          @include phone {
            list-style: none;
          }

          li {
            text-indent: 1em;

            @include phone {
              text-indent: 0;
              display: block;
            }

            a {
              @include sans-serif;
              font-size: 1.1em;

              &:after {
                content: " \00bb";
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <section id="about">
    <div class="bio-container">
      <div class="headshot">
        <img src="../assets/headshot.png"/>

        <div v-if="false" class="atvImg">
          <img src="../assets/headshot.png"/>

          <div class="atvImg-layer" :data-img="getHeadshotLayer(3)"></div>
          <div class="atvImg-layer" :data-img="getHeadshotLayer(2)"></div>
          <div class="atvImg-layer" :data-img="getHeadshotLayer(1)"></div>
        </div>
      </div>

      <div class="bio">
        <h3>Beginnings</h3>

        <p>
          Despite how uncommon personal computers were when I was a child, I was fascinated
          by the idea of using them to create programs that do things. As I grew up I always
          had the dream of creating things on computers, though I never actually had a computer
          until I was 18 years old. Once I did, though, I spent my days and nights teaching
          myself to bring my dream to life, eventually graduating Cum Laude with a B.S. in
          Computer Science and turning my passion into my career.
        </p>

        <h3>Expertise</h3>

        <p>
          I have spent most of my professional career doing what has always been the most fulfilling:
          designing and implementing from scratch large-scale Web software systems, historically
          built and maintained entirely myself on a stack including Ubuntu, MySQL, PHP, Nginx, and jQuery.
        </p>
        <p>
          In the past few years with the massive paradigm shift in front-end development, I have
          been falling in love all over again, and because of that love, I have been essentially living
          on the front-end.
        </p>

        <h3>Personal Homepage</h3>

        <p>
          I wrote this personal homepage you're currently reading in its entirety with VueJS 2
          and bundled with Webpack. The source code is available in this GitHub repository:

          <ul>
            <li>
              <a href="https://github.com/rommelsantor/personal-homepage" target="_blank">Personal Homepage</a>
            </li>
          </ul>
        </p>

        <h3>On the Web</h3>

        <p>
          You can find more about me scattered around the Web, but here are a few locations where
          I have been spending time recently.

          <ul>
            <li>
              <a href="http://linkedin.com/in/rommelsantor" target="_blank">LinkedIn</a>
            </li>
            <li>
              <a href="http://github.com/rommelsantor" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="http://codepen.io/rommelsantor" target="_blank">CodePen</a>
            </li>
          </ul>
        </p>

        <p>
          Here are some other code resources that may be of interest, but that are more likely
          to have a bit of dust on them.

          <ul>
            <li>
              <a href="/clog" target="_blank">My Coding Blog</a>
            </li>
            <li>
              <a href="/jquery" target="_blank">My jQuery Plugins</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import atvImg from '../js/atvImg'
require('../css/atvImg.css')

import $ from 'jquery'

export default {
  name: 'about',

  mounted () {
    $(document).ready(function () {
      atvImg()
    })
  },

  methods: {
    getHeadshotLayer (layer) {
      return require(`../assets/headshot-${layer}.png`)
    }
  }
}
</script>
