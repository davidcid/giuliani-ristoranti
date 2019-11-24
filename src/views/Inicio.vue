<template>
  <div class="inicio">
    <Navbar />
    <div class="hero">
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
  .hero {
    background-image: url('../assets/blurred-pizza.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 60%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .post-hero {
    background-image: url('../assets/pizza-and-fire.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .description {
    width: 70%;
    max-width: 700px;
    color: white;
    background-color: rgba(71, 32, 0, 0.87);
    font-family: 'Fjalla One', sans-serif;
    padding: 2rem;
    margin: 50px 0;
    box-shadow: 0 0 9px 5px rgba(0, 0, 0, 0.486);
  }

  p {
    padding: 1rem 0;
    text-align: left;
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 6rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
</style>
