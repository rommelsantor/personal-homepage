<style scoped lang="scss">
@import '../css/global.scss';

#site-footer {
  position: relative;
  background: #fff;
  border-top: 2px solid #ccc;

  @include sans-serif;

  &:after {
    display: table;
    content: "";
    clear: both;
  }

  #footer-nav {
    float: right;
    line-height: 4;
    padding-right: 1em;

    @include phone {
      float: none;
      text-align: center;
      padding-right: 0;
    }

    ul {
      list-style: none;
      text-align: center;

      li {
        display: inline-block;

        &:before {
          content: " // ";
          margin: 0 1em;
          opacity: 0.3;

          @include phone {
            margin: 0 0.5em;
          }
        }

        &:first-child:before {
          content: "";
          margin: 0;
        }

        a {
          font-size: 1rem;
          padding-top: 1em;
          line-height: 2;
          letter-spacing: 2px;
          color: #888;
          text-shadow: 0 1px 0 rgba(68, 68, 68, 0.25);

          &.router-link-active {
            color: #b66900;
            text-shadow: 0 1px 0 #ccc;
            opacity: 0.8;
          }

          @include phone {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  footer {
    float: left;
    line-height: 5.5;
    font-size: 0.75rem;
    padding-left: 1em;
    color: #888;
    @include serif;

    &:after {
      display: table;
      content: "";
      clear: both;
    }

    @include phone {
      float: none;
      text-align: center;
      padding-left: 0;
    }
  }
}
</style>

<template>
  <div id="site-footer">
    <nav id="footer-nav">
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

    <footer>
      Copyright &copy; 2016 &bull; Rommel Santor
    </footer>
  </div>
</template>

<script>
export default {
  name: 'site-footer'
}
</script>

