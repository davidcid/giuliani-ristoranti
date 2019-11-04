<template>
  <div class="reservas">
    <Navbar />
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
  .reservas {
    margin: 0;
  }
</style>
