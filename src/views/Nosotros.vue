<template>
  <div class="nosotros">
    <Navbar />
    <section class="masa">
      <img src="@/assets/working-on-pizza.jpg" alt="pizza-dough">
      <div>
        <p>Todas nuestras pizzas napolitanas se hornean entre 60 y 90 segundos a unos 500 grados, en un horno de piedra refractaria fabricado a mano en Nápoles por la cuarta generación de una familia de artesanos.</p>
        <p>¿El resultado? Una pizza rica en fibra, vitaminas y nutrientes, con un aroma más intenso que respira el espíritu relajado y delicioso de la ciudad de Verona en cada uno de sus ingredientes.</p>
      </div>
    </section>
    <section class="alma">
      <img src="@/assets/pizza-chef.jpg" alt="pizza-chef">
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
    font-family: 'Fjord One', sans-serif;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section img {
    width: 90%;
    margin: 30px auto;
  }

  section p {
    text-align: justify;
    margin: 0px 30px 50px 30px;
  }

  @media only screen and (min-width: 600px) {
    section {
      flex-direction: row;
      justify-content: center;
      margin: 100px;
    }

    section img {
      max-width: 700px;
      height: 100%;
      margin: 0;
    }

    section p {
      text-align: left;
      max-width: 300px;
      margin: 0 30px;
      padding-bottom: 30px;
      font-size: 1rem;
    }
  }

</style>
