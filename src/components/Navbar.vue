<template>
  <div>
        <nav class="navbar" role="navigation">
          <!-- Bulma Home Icon [add pixi js] [web gl] [parallax]-->
          <div class="navbar-brand">
            <a class="navbar-item" href="http://localhost:8080/">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
            <a role="button" class="navbar-burger burger" @click="toggleNav =! toggleNav">
              <span class="icon"> <font-awesome-icon :icon="returnIcon"/> </span>
            </a>
            <!-- Home Link to the Left -->
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href=""> Home </a>
              </div>
            </div>
          </div>
          <!-- Nav menu to the right -->
          <div class="navbar-menu navbar-end burger is-right toggleNav nav_overlay" :class="{'is-active':toggleNav}">
            <div class="navbar-item">
              <a class="navbar-item"> Documentation </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link"> More </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item"> About </a>
                  <a class="navbar-item"> Reference </a>
                  <a class="navbar-item"> Contact </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item"> Kobby Hanson </a>
                </div>
              </div>
              <div class="buttons is-centered">
                <a class="button is-primary"> <strong>Sign up</strong> </a>
                <router-link class="button is-light has-text-primary is-outlined m-1" to="/Login"> Login </router-link>
              </div>
            </div>
          </div>
        </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      toggleNav: false,
    }
  },
  computed: {
    returnIcon() {
      return (this.toggleNav !== false) ? "angle-double-up" : "angle-double-down"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "~bulma";
  @import "~bulma-tooltip";

  .nav_overlay {
    position: absolute;
    z-index: 1;
    right: 0;
  };

  @media (max-width: 800px) {
    .navbar-item {
      color: #00D1B2;
    };
    .navbar-link {
      color: #00D1B2;
    };
  }
</style>
