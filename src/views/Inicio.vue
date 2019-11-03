<template>
  <div class="inicio">
    <div class="hero">
      <Navbar />
      <h1>Auténtica Pizza<br>Italiana</h1>
    </div>
    <div class="post-hero">
      <div class="description">
        <p>Giuliani Ristorante es mucho más que una pizzería, en Giuliani queremos que seas tu el auténtico chef. Te retamos cada día a sorprendernos con tu mejor versión de la “pizza perfecta”.</p>
        <p>Contamos con masas ecológicas de masa madre fermentadas 48 horas, que aportan a tus recetas un toque crujiente y muy característico que las hace únicas.</p>
        <p>Nuestra gran variedad de salsas dan pie a crear deliciosas recetas, ¿pero sabías que nuestra salsa de tomate está elaborada con tomates ecológicos? En Giuliani Ristorante, ¡el tomate sabe a tomate!.</p>
        <p>Ya solo queda elegir tu queso y tus ingredientes, siempre frescos y de temporada.</p>
        <p>Giuliani, el arte de la auténtica pizza artesanal.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'inicio',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
  .inicio {
    margin: 0;
  }

  .hero {
    background-image: url('../assets/blurred-pizza.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 40%;
    height: 100vh;
  }

  h1 {
    font-family: 'Fjord One', serif;
    font-size: 6rem;
    color: white;
    display: inline-block;
    text-align: left;
    margin-top: 25vh;
  }

  .post-hero {
    background-image: url('../assets/pizza-and-fire.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
  }

  .description {
    position: absolute;
    width: 60%;
    top: 20%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    color: white;
    background-color: rgb(0, 0, 0, 0.7);
    padding: 1% 3%;
    font-family: 'Fjalla One', sans-serif;
  }

  p {
    text-align: left;
    font-size: 1.4rem;
  }
</style>
