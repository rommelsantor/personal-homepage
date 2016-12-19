<style scoped lang="scss">
@import '../css/global.scss';

#contact {
  padding: 3em 0 7em;
  font-size: 1.2rem;

  p {
    text-align: center;
    line-height: 1.75;
    @include sans-serif;
    color: #444;
    font-size: 1rem;
  }

  .emad {
    @include serif;
    white-space: nowrap;
    padding-top: 1em;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);

    b {
      color: #000;
      font-size: 1.15rem;
      letter-spacing: 1px;
    }
  }
}
</style>

<template>
  <section id="contact">
    <p>
      Please feel free to reach out to me via the following address.
    </p>
    <p class="emad">
      <b>
        rommel
      </b>
      <br/>
      at
      <br/>
      <b>rommelsantor</b>
      dot
      <b>com</b>
    </p>
  </section>
</template>

<script>
export default {
  name: 'contact'
}
</script>

