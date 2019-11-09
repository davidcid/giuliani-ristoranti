<template>
  <div class="reservas">
    <Navbar />
    <h1>Reservas</h1>
    <h3>Ven a nuestra casa</h3>
    <p>Tanto las llamadas como las reservas realizadas por correo electrónico se gestionarán en la siguiente franja horaria: de martes a domingo, de 12h00 a 16h30 y de 19h30 a 23:30</p>
    <p class="telephone">91 555 22 55</p>
    <form action="">
      <input type="text" placeholder="nombre y apellidos">
      <input type="email" placeholder="email">
      <div class="conjunto1">
        <div class="fecha">
          <label for="fecha">Fecha de la reserva</label>
          <input type="date" id="fecha" placeholder="fecha de la reserva">
        </div>
        <div class="hora">
          <label for="hora">Hora de la reserva</label>
          <input type="time" id="hora" placheholder="hora de la reserva">
        </div>
      </div>
      <div class="conjunto2">
        <input type="number" id="personas" placeholder="nº de personas">
        <input type="number" id="telefono" placeholder="teléfono de contacto">
      </div>
      <textarea name="mensaje" id="" cols="20" rows="10" placeholder="mensaje (opcional)"></textarea>
      <button>Enviar</button>
    </form>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'reservas',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .reservas {
    margin: 0;
    background-image: url('../assets/twopizzas.jpg');
    background-size: cover;
    background-position: center;
    color: white;
  }
  h1 {
    font-family: 'Fjord One', serif;
    font-size: 3rem;
    padding-top: 90px;
    margin: 0 auto;
  }
  h3 {
    font-family: 'Fjord One', serif;
    font-size: 1.2rem;
    margin: 0;
  }

  p  {
    margin: 60px 5px 30px;
  }

  .telephone {
    margin-top: 0;
    font-size: 2em;
    font-family: 'Fjord One', serif;
  }

  input, textarea {
    display: block;
    width: 90%;
    margin: 15px auto;
    padding: 20px 10px;
    height: 25px;
    background: rgba(255,255,255,.62);
    border: 1px solid #533210;
    color: #533210;
    font-family: 'Nunito', serif;
    font-size: 1.2rem;
  }

  textarea {
    height: 100px;
  }

  button {
    background-color: #533210;
    display: block;
    margin: 15px auto 150px;
    padding: 15px 15px;
    color: white;
    text-transform: uppercase;
    border: none;
    width: 90%;
  }

  @media only screen and (min-width: 600px) {
    .reservas {
      background-size: 100% auto;
    }

    .reservas h1,
    .reservas h3,
    .reservas p {
      max-width: 600px;
      margin: 0 auto;
    }

    .reservas p {
      padding-top: 40px;
    }

    .telephone {
      padding-bottom: 30px;
    }

    form{
      max-width: 600px;
      margin: 0 auto;
    }

    input,textarea,button {
      width: 100%;
    }

    .conjunto1 {
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
    }

    .conjunto2 {
      display: flex;
      justify-content: center;
    }

    #personas {
      margin-right: 10px;
    }

    #telefono {
      margin-left: 10px;
    }

    .fecha,.hora {
      width: 100%;
      text-align: left;
    }

    .fecha {
      margin-right: 10px;
    }

    .hora {
      margin-left: 10px;
    }

    #hora, #fecha {
      margin-top: 0;
    }
  }
</style>
