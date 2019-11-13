<template>
  <div class="nosotros">
    <Navbar />
    <section class="masa">
      <div class="img-container">
        <img src="@/assets/working-on-pizza.jpg" alt="pizza-dough">
      </div>
      <div>
        <p>Todas nuestras pizzas napolitanas se hornean entre 60 y 90 segundos a unos 500 grados, en un horno de piedra refractaria fabricado a mano en Nápoles por la cuarta generación de una familia de artesanos.</p>
        <p>¿El resultado? Una pizza rica en fibra, vitaminas y nutrientes, con un aroma más intenso que respira el espíritu relajado y delicioso de la ciudad de Verona en cada uno de sus ingredientes.</p>
      </div>
    </section>
    <section class="alma">
      <div class="img-container">
        <img src="@/assets/pizza-chef.jpg" alt="pizza-chef">
      </div>
      <div>
        <p>El alma de nuestras pizzas se encuentra en la harina. Las harinas que utilizamos son diferentes y alternativas, abarcando desde las tradicionales hasta las de cinco cereales. </p>
        <p>Cada una de nuestras pizzas, elaboradas con una masa diferente, son una combinación de sabores cada vez más diversos y sorprendentes.</p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'nosotros',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
  .nosotros {
    margin: 0;
    background-color: #FFF9EF;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section img {
    width: 100%;
    margin-bottom: 20px;
  }

  section p {
    text-align: justify;
    margin: 0px 20px 50px 20px;
    font-family: 'Fjord One', sans-serif;
  }

  @media only screen and (min-width: 600px) {
    section {
      flex-direction: row;
      justify-content: center;
      margin: 100px;
    }

    section img {
      width: 90%;
      margin: 30px auto;
      margin: 0;
      transition: 1.5s ease-in-out;
    }

    .img-container {
      overflow: hidden;
      max-width: 700px;
    }

    .img-container img:hover {
      transform: scale(1.1);
    }

    section p {
      text-align: left;
      max-width: 300px;
      margin: 0 30px;
      padding-bottom: 30px;
      font-size: 1rem;
    }

    .alma .img-container {
      order: 2;
    }

    .alma p {
      text-align: right;
    }
  }

</style>
