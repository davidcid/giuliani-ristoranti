<template>
  <div class="carta">
    <div class="hero">
      <Navbar />
      <h1>La Carta</h1>
    </div>
    <div class="main">
      <article class="tradicionales">
        <h2>TRADICIONALES 7,95€</h2>
        <p>FABULOSA: Crema de trufa, mozzarella, queso parmesano, champiñones, rúcula y aceite de trufa.</p>
        <p>SUPREMA: Salsa carbonara, jamón cocido, pancetta, cebolla morada y champiñones.</p>
        <p>LIGERA: Tomate ecológico, mozzarella, albahaca, setas, alcachofas, berenjena, cebolla morada y queso de cabra.</p>
        <p>SABROSA: Salsa barbacoa, mozzarella, pollo, ternera, pancetta y cebolla morada.</p>
        <p>ESPLÉNDIDA: Tomate ecológico, mozzarella, salami italiano, queso de cabra, espinacas y aceitunas negras.</p>
        <p>PICOSA: Salsa arabista, mozzarella, pepperoni picante, pancetta, cebolla morada y aceitunas negras.</p>
      </article>
      <article class="extraordinarias">
        <h2>EXTRAORDINARIAS 9,50€</h2>
        <p>DE MIEL PICANTE: Tomate ecológico, pollo asado, queso camembert, almendra laminada y miel picante.</p>
        <p>DE BÚFALA Y GAMBAS: Salsa arrabbiata, gambas, guindilla, burrata y aceite picante.</p>
        <p>DE CORRAL TRUFADA: Salsa de trufa, mozzarella, huevo de corral, setas de temporada y aceite de trufa.</p>
        <p>DE SALMÓN Y NUECES: Queso crema, carpaccio de calabacín, salmón ahumado, nueces y eneldo.</p>
      </article>
      <article class="ensaladas">
        <h2>NUESTRAS ENSALADAS 6,95€</h2>
        <P>MEDITERRÁNEA: tomate seco, olivas negras, anchoas, alcaparras y queso de cabra</P>
        <P>CÉSAR: Pollo, queso parmesano, tomate cherry, picatostes y salsa césar.</P>
        <P>NÓRDICA: Salmón, aguacate, nueces, arroz y eneldo.</P>
        <P>GRIEGA: Tomate cherry, olivas negras, cebolla roja, queso feta, pepino y orégano.</P>
      </article>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'carta',
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
    background-image: url('../assets/pizza-and-fire-2.jpg');
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
    margin-top: 10vh;
    padding: 20px;
  }

  .main {
    background-color: #FFF9EF;
  }

  article > h2 {
    font-family: 'Fjord One', serif;
    font-weight: 300;
    color: #533210;
    margin: 0;
    padding: 40px 8px 10px;
  }

  article > p {
    font-family: 'Nunito' , serif;
    margin: 0;
    padding: 15px 8px;
  }

  @media only screen and (min-width: 600px) {
    .hero {
      height: 600px;
    }
    h1 {
      font-size: 5rem;
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
    }

    .main {
      margin: 0 auto;
    }

    .tradicionales, .ensaladas {
      text-align: left;
    }

    .extraordinarias {
      text-align: right;
    }

    article {
      max-width: 900px;
      margin: 0 auto;
      padding: 50px;
    }

    article:first-child {
      padding-top: 100px;
    }

    article:last-child {
      padding-bottom: 100px;
    }

    article > p {
      padding: 5px 0;
    }

    article > h2 {
      font-size: 1.8rem;
    }
  }
</style>
