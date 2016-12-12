<style scoped lang="scss">
@import '../css/global.scss';

#site-header {
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: $layer-above;

    text-align: center;
    border-bottom: 1px solid #444;
    box-shadow: 0 5px 10px rgba(68, 68, 68, 0.4);
    padding: 0.5em;
    background-color: #000;
    background: radial-gradient(at 50% -50%, rgba(255, 255, 255, 1) -75%, rgba(0, 0, 0, 1));
    transition: all 400ms;

    @include scrolled {
      background-color: transparent;
      background: radial-gradient(at 50% -50%, rgba(255, 255, 255, 1) -75%, rgba(0, 0, 0, 0.9));
    }

    h1 {
      @include title;
      color: white;
      text-shadow: 0 1px 0 black;
      letter-spacing: 1.5px;
      line-height: 2rem;
      transition: all 500ms;

      @include scrolled {
        /*
        font-size: 1.4rem;
        line-height: 1.5rem;
        */
        letter-spacing: 0;
      }
    }

    h2 {
      @include title;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
      letter-spacing: 0.5px;
      line-height: 2rem;
      transition: all 500ms;
      color: #888;

      @include scrolled {
        color: #888;
        /*
        font-size: 1.2rem;
        line-height: 1.5rem;
        */
        letter-spacing: 0;
      }
    }

    @include tablet {
      h1 {
        float: left;
      }

      h2 {
        float: right;
      }
    }
  }

  #site-nav {
    padding-top: 5.5rem;
    padding-bottom: 2rem;

    @include tablet {
      padding-top: 3.5rem;
    }

    ul {
      list-style: none;
      text-align: center;

      li {
        display: inline-block;

        &:before {
          content: " // ";
          margin: 0 1em;
          opacity: 0.5;

          @include phone {
            margin: 0 0.3em;
          }
        }

        &:first-child:before {
          content: "";
          margin: 0;
        }

        a {
          font-size: 1.1rem;
          @include title;
          padding-top: 1em;
          line-height: 2;
          letter-spacing: 2px;
          color: rgba(0, 0, 0, 0.75);
          text-shadow: 0 1px 0 rgba(68, 68, 68, 0.5);

          &.router-link-active {
            color: rgba(255, 255, 255, 1);
            text-shadow: 0 1px 0 #000;
          }

          @include phone {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div id="site-header">
    <header>
      <h1>Rommel Santor</h1>
      <h2>Web Developer</h2>
    </header>

    <nav id="site-nav">
      <ul>
        <li>
          <router-link to="/" exact>Portfolio</router-link>
        </li>
        <li>
          <router-link to="/about">About Me</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'site-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

