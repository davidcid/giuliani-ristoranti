<template>
  <div class="nosotros">
    <Navbar />
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
  }
</style>
