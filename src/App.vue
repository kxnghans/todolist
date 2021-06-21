<template>
  <div id="app">
    <div id="nav">
      <router-link class="button is-light has-text-success is-outlined m-1" to="/">Home</router-link>
      <router-link class="button is-light has-text-success is-outlined m-1" to="/Todo">Todo-List</router-link>
    </div>
    <!-- Set transitions -->
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  //Add "scoped" attribute to limit CSS to this component only -->
  @import '~bulma';
  @import "~bulma-tooltip";
</style>
