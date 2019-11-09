<template>
  <nav>
    <div class="logo">
      <h1><router-link to ="/">Giuliani<br><span>Ristorante</span></router-link></h1>
      <a href="javascript:void(0);" class="icon" @click="toggleMenu">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    <div class="links expanded">
      <ul class="left-nav">
        <li><router-link to="/">inicio</router-link></li>
        <li class="point">•</li>
        <li><router-link to="/nosotros">nosotros</router-link></li>
        <li class="point">•</li>
        <li><router-link to="/local">local</router-link></li>
      </ul>
      <ul class="right-nav">
        <li><router-link to="/carta">carta</router-link></li>
        <li class="point">•</li>
        <li class="reservas"><router-link to="/reservas">reservas</router-link></li>
      </ul>
      <ul class="social">
        <li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleMenu () {
      const x = document.querySelector('.links')
      x.classList.toggle('expanded')
    }
  }
}
</script>

<style scoped>
  nav {
    width: 100%;
    overflow: hidden;
    position: fixed;
    background-image: linear-gradient(hsla(30, 68%, 12%, 0.7), hsla(30, 68%, 35%, 0.7));
    box-shadow: rgba(0, 0, 0, 0.35) 0 4px 5px 2px;
    color: white;
    margin: 0;
    padding: 0;
    z-index: 1;
  }

  .logo i {
    position: absolute;
    right: 0;
    top: 0;
    margin: 15px 20px;
    font-size: 2rem;
  }

  .logo a {
    color: white;
  }

  .links {
    display: none;
    transition: all .3s ease-in-out;
  }

  .expanded {
    transform: translateY(0);
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 10px 0;
    padding: 0;
    font-size: 2rem;
    line-height: 1.5rem;
    font-weight: 300;
  }

  h1 a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    text-transform: uppercase;
    list-style: none;
    margin: 0 auto;
    padding: 5px;
    font-size: 0.7rem;
    display: block;
  }

  .reservas {
    display: inline-block;
    border: 1px solid white;
    padding: 6px;
  }

  li a {
    color: white;
    text-decoration: none;
    position: relative;
  }

  li a:before {
    content: '';
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
    display: none;
  }

  .social {
    display: flex;
    justify-content: center;
  }

  .social li {
    margin: 5px 10px;
    font-size: 1rem;
  }

  h1 span {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 600px) {
    nav {
      position: relative;
      background-color: rgba(83, 50, 16, 0.7);
      display: grid;
      grid-template-columns: 1fr 3fr;
      color: white;
      margin: 0;
      padding: 0;
      box-shadow: rgba(0, 0, 0, 0.35) 0 4px 5px 2px;
    }

    .links {
      flex-direction: row;
    }

    .logo i {
      display: none;
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
      display: inline;
    }

    .social {
      justify-content: flex-end;
    }

    .social li {
      margin: 0 15px;
    }

    h1 {
      margin: 18px 0;
      padding: 0;
      font-size: 2rem;
      line-height: 1.5rem;
      font-weight: 300;
    }

    h1 span {
      font-size: 1.1rem;
    }
  }
</style>
