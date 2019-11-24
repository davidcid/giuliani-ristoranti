<template>
  <footer>
    <div class="legal-cookies">
      <p>Aviso Legal</p>
      <p>Política de Cookies</p>
    </div>
    <p class="copyright">Copyright 2019 © Giuliani Ristorante Developed by David Cid</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  footer {
    min-height: 4rem;
    background-color: #212121;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Fjalla One', sans-serif;
  }

  footer p {
    font-size: 0.7rem;
  }

  .legal-cookies {
    display: flex;
    color: rgba(255, 255, 255, .64);
  }

  .legal-cookies p {
    margin: auto 25px;
  }

  .copyright {
    color: rgba(255, 255, 255, .75);
  }

  @media only screen and (min-width: 600px) {
    footer p {
      font-size: 1rem;
    }
  }

</style>
