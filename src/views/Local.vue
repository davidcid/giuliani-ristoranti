<template>
  <div class="local">
    <div class="hero">
      <Navbar />
      <h1>Calle de los Areneros 45, Madrid</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'local',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
  .local {
    margin: 0;
  }

  .hero {
    background-image: url('../assets/trattoria-wall.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 0px;
    height: 100vh;
  }

  h1 {
    font-family: 'Fjord One', serif;
    font-size: 3rem;
    color: white;
    display: inline-block;
    text-align: left;
    margin-top: 25vh;
    padding: 20px;
  }

  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 6rem;
    }
  }
</style>
