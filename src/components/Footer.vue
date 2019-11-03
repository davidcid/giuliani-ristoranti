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
    background-color: #212121;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: 'Fjalla One', sans-serif;
  }

  .legal-cookies {
    display: flex;
    color: rgba(255, 255, 255, .64);
    margin: 0 auto;
  }

  .legal-cookies p {
    margin: auto 25px;
  }

  .copyright {
    color: rgba(255, 255, 255, .75);
  }

</style>
