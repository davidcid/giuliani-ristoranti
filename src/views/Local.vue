<template>
  <div class="local">
    <div class="hero">
      <Navbar />
      <h1>Calle de los Areneros 45, Madrid</h1>
    </div>
    <section class="restaurante">
      <div class="img-container">
        <img src="@/assets/inner-hall.jpg" alt="entrada-restaurante">
      </div>
      <div class="restaurant-description">
        <h2>nuestro restaurante</h2>
        <p>Con un nuevo horno de leña traído desde Nápoles, la misma estética industrial de sus otros dos restaurantes y con un nuevo y experto equipo de pizzaiolos procedentes de la ciudad italiana, Giuliani Ristorante inaugura su local en Madrid en la calle de los Areneros 45.</p>
        <p>Así, sus deliciosas pizzas de masa elástica con harina de fuerza italiana y bordes gruesos y esponjosos, que ya son famosas en todo Madrid, son también aquí las protagonistas indiscutibles. En todos sus establecimientos Giuliani Ristorante ofrece la receta auténtica de las pizzas napolitanas, reconocidas por la Unesco como Patrimonio Inmaterial de la Humanidad.
        </p>
      </div>
    </section>
    <img id="chef" src="@/assets/chef-and-oven.jpg" alt="chef-oven">
    <section class="yellow">
      <div class="horario">
        <div class="horario-container">
          <h2>horario</h2>
          <div class="dias">
            <div class="dia">
              <h4>lunes-jueves</h4>
              <p>13:30 - 16:00</p>
              <p>20:30 - 23:00</p>
            </div>
            <div class="dia">
              <h4>viernes</h4>
              <p>13:30 - 16:30</p>
              <p>20:00 - 00:00</p>
            </div>
            <div class="dia">
              <h4>sábado</h4>
              <p>13:00 - 17:00</p>
              <p>20:00 - 00:00</p>
            </div>
            <div class="dia">
              <h4>domingo</h4>
              <p>13:00 - 17:00</p>
              <p>20:00 - 23:30</p>
            </div>
          </div>
        </div>
        <img src="@/assets/tomato-albahaca.jpg" alt="tomato">
      </div>
      <div class="visita">
        <div class="text-left">
          <h2>ven a visitarnos</h2>
          <p>Un pequeño y acogedor local en la calle de los Areneros donde se respira el verdadero ambiente de una pizzería de las callecitas de Nápoles y se crea la auténtica pizza napolitana.</p>
        </div>
        <div class="buttons-right">
          <button><router-link to="/carta">ver el menú</router-link></button>
          <button><router-link to="/reservas">reserva una mesa</router-link></button>
        </div>
      </div>
      <div id="map"><iframe height:600 src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=calle%20mayor%206%2C%20madrid+(giuliani%20ristorante)&ie=UTF8&t=&z=17&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><br />
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

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
    height: 50vh;
  }

  h1 {
    font-family: 'Fjord One', serif;
    font-size: 3rem;
    font-weight: 300;
    color: white;
    display: inline-block;
    text-align: left;
    margin-top: 20vh;
    padding: 20px;
  }

  .restaurante {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img-container {
    order: 2;
  }

  .img-container img {
    width: 100%;
  }

  .restaurant-description {
    padding: 0;
    width: 92%;
    margin: 0 auto;
  }

  .visita {
    display: flex;
    align-items: center;
  }

  button a {
    color: white;
    text-decoration: none;
  }

  .buttons-right {
    display: flex;
    flex-direction: column;
  }

  .buttons-right button {
    text-transform: uppercase;
    background-color: #533210;
    color: white;
    border: none;
    padding: 10px;
    margin: 10px;
    width: 150px;
  }

  .local > img {
    display: none;
  }

  .horario-container {
    margin: 40px 0;
  }

  .horario > img {
    width: 100%;
  }

  .visita {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }

  .text-left {
    margin: 0;
    padding: 0;
    text-align: center;
    width: 92%;
  }

  iframe {
    margin-top: 55px;
    width: 100%;
    height: 350px;
  }

  @media only screen and (min-width: 600px) {
    .hero {
      background-position-y: 60%;
      height: 600px;
    }
    h1 {
      font-size: 5rem;
      margin-top: 100px;
      margin-left: 10%;
    }

    .restaurante {
      flex-direction: row;
      padding: 60px 25px;
    }

    .img-container {
      margin: 0 30px;
    }

    .img-container img {
      max-width: 80%;
      height: auto;
    }

    .horario img {
      height: 100%;
      max-width: 600px;
    }

    .restaurant-description {
      margin: 0;
      padding: 0;
      order: 2;
      max-width: 350px;
      text-align: left;
    }

    .restaurant-description h2 {
      margin: 0;
      padding: 0;
    }

    .restaurant-description p {
      font-family: 'Fjord One', serif;
    }

    #chef {
      display: block;
      max-width: 700px;
      margin: 80px auto;
    }

    .yellow {
      background-color: #FFF9EF;
      padding: 400px 0;
      padding-bottom: 0;
      margin-top: -350px;
    }

    .horario {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      margin-bottom: 60px;
    }

    .horario-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
      font-size: 2rem;
      margin-right: 10%;
    }

    .horario-container h2 {
      margin: 0px;
    }

    .visita {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 70px;
    }

    .text-left {
      text-align: right;
      max-width: 450px;
      margin-right: 60px;
    }

    .dias {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .dia {
      margin: 20px;
    }

    .dia h4 {
      font-family: 'Fjalla One', serif;
      padding: 0;
      margin: 0;
      font-size: 1rem;
    }

    .dia p {
      font-family: 'Fjord One', serif;
      padding: 0;
      margin: 0;
      font-size: 1rem;
    }

    iframe {
      width: 75%;
    }
  }

</style>
