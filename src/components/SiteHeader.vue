<style scoped lang="scss">
@import '../css/global.scss';

header {
  text-align: center;
  border-bottom: 1px solid #aaa;
  box-shadow: 0 5px 10px rgba(100, 100, 100, 0.2);
  padding: 0.5em;
  @include vertical-gradient(rgba(0, 0, 0, 0.65), #eee, -50%, 120%);
  transition: all 400ms;

  z-index: $layer-above;

  @include scrolled {
    opacity: 0.75;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

    &:hover {
      opacity: 1;
    }
  }

  h1 {
    @include title;
    color: white;
    text-shadow: 0 1px 0 black;
    letter-spacing: 1px;
    line-height: 2rem;
    transition: all 400ms;

    @include scrolled {
      font-size: 1.4rem;
      line-height: 1.5rem;
      letter-spacing: 0;
    }
  }

  h2 {
    @include title;
    text-shadow: 0 1px 0 $darkgray;
    line-height: 2rem;
    transition: all 400ms;

    @include scrolled {
      font-size: 1.2rem;
      line-height: 1.5rem;
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
</style>

<template>
  <header>
    <h1>Rommel Santor</h1>
    <h2>Web Developer</h2>
  </header>
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

