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
      <input type="date" placeholder="fecha de la reserva">
      <input type="time" placheholder="hora de la reserva">
      <input type="number" placeholder="nº de personas">
      <input type="number" placeholder="teléfono de contacto">
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
    padding: 25px 15px;
    height: 25px;
    background: rgba(255,255,255,.57);
    border: 1px solid #533210;
    color: #533210;
    font-family: 'Fjord One', serif;
    font-size: 0.8rem;
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
    form{
      max-width: 600px;
      margin: 0 auto;
    }
  }
</style>
