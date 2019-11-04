<template>
  <div class="carta">
    <Navbar />
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
</style>
