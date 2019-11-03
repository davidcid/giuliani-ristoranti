<template>
  <nav>
    <ul>
      <li><router-link to="/">inicio</router-link></li>
      <li class="point">•</li>
      <li>nosotros</li>
      <li class="point">•</li>
      <li>local</li>
    </ul>
    <h1>Giuliani<br><span>Ristorante</span></h1>
    <div class="right-nav">
      <ul>
        <li>carta</li>
        <li class="point">•</li>
        <li class="reservas">reservas</li>
      </ul>
      <ul class="social">
        <li><i class="fab fa-facebook-square"></i></li>
        <li><i class="fab fa-instagram"></i></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  nav {
    background-color: rgba(83, 50, 16, 0.7);
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    color: white;
    margin: 0;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0 4px 5px 2px;
  }

  ul {
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0;
  }

  li {
    text-transform: uppercase;
    list-style: none;
    margin: 0 25px;
    font-size: 0.7rem;
  }

  li i {
    font-size: 1.8rem;
  }

  .reservas {
    border: 1px solid white;
    padding: 6px;
  }

  .right-nav {
    display: flex;
  }

  li a {
    color: white;
    text-decoration: none;
    position: relative;
  }

  li a:before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -3px;
    background-color: white;
    transition: all 0.2s ease-in-out 0s;
  }

  li a:hover:before {
    width: 100%;
  }

  .point {
    margin: 0;
  }

  .social {
    justify-content: flex-end;
  }

  .social li {
    margin: 0 15px;
  }

  h1 {
    margin: 10px 0;
    padding: 0;
    font-size: 2rem;
    line-height: 1.5rem;
    font-weight: 300;
  }

  h1 span {
    font-size: 1.1rem;
  }
</style>
