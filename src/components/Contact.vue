<style scoped lang="scss">
@import '../css/global.scss';

#contact {
  padding: 4em 0;
  font-size: 1.2rem;

  p {
    text-align: center;
    line-height: 1.75;
    @include sans-serif;
  }

  .emad {
    @include serif;
    font-size: 0.95rem;
    white-space: nowrap;
    padding-top: 1em;
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);
  }
}
</style>

<template>
  <section id="contact">
    <p>
      Please feel free to reach out to me via the following address.
    </p>
    <p class="emad">
      rommel at rommelsantor dot com
    </p>
  </section>
</template>

<script>
export default {
  name: 'contact'
}
</script>

