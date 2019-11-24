<template>
  <nav>
    <div class="logo">
      <router-link to ="/">
        <h3>Giuliani</h3>
        <h4>Ristorante</h4>
      </router-link>
    </div>
    <div class="nav-links" :class="{'nav-active': expanded}">
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
    <div class="burger" @click="toggleMenu">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    toggleMenu () {
      this.expanded === true ? this.expanded = false : this.expanded = true
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: white;
}

nav {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background: linear-gradient(rgba(71, 32, 0, 1) 0%, rgba(71, 32, 0, 0.4) 120%);
  box-shadow: rgba(0, 0, 0, 0.35) 0 2px 7px 1px;
}

.logo * {
  font-family: 'Fjord One', serif;
  text-decoration: none;
}

.logo h3 {
  font-size: 1.5rem;
}

.logo h4 {
  font-size: 1.1rem;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
}

.nav-links ul {
  display: flex;
  margin: 0 1.5rem;
  align-items: center;
}

.nav-links li {
  list-style: none;
  margin: 0 .5rem;
  position: relative;
}

.left-nav a:before,
.right-nav a:before {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: -3px;
  background-color: white;
  transition: all 0.2s ease-in-out 0s;
}

.left-nav a:hover:before,
.right-nav a:hover:before {
  width: 100%;
}

li a.router-link-exact-active:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0;
  bottom: -3px;
  background-color: white;
}

.nav-links a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: .8rem;
}

.social i {
  font-size: 2rem;
  margin-left: 100%;
}

.reservas {
  border: 1px solid white;
  padding: 6px 12px;
}

.burger {
  display: none;
}

.burger div {
  background-color: white;
  width: 25px;
  height: 1px;
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  body {
    overflow-y: hidden;
  }

  nav {
    position: fixed;
    width: 100%;
  }

  .nav-links {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: rgba(71, 32, 0, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    align-items: center;
    justify-content: center;
  }

  .nav-links ul {
    flex-direction: column;
  }

  .nav-links ul li {
    margin: 1.6rem 0;
  }

  .point {
    display: none;
  }

  .social i {
    margin: 0;
  }

  .burger {
    display: block;
    cursor: pointer;
  }

  .nav-active {
    transform: translateY(0%);
  }
}

  /*nav {
    width: 100%;
    overflow: hidden;
    position: fixed;
    background-image: linear-gradient(rgba(51, 31, 10, 1), hsla(30, 68%, 35%, 0.3));
    box-shadow: rgba(0, 0, 0, 0.35) 0 2px 7px 1px;
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
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.3s ease-in-out;
  }

  .expanded {
    display: block;
    transform: scaleY(1);
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
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
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
  }*/
</style>
