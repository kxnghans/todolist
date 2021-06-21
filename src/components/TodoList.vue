<template>
  <div>
    <div class="field container">
      <!-- Input Area to add Todos -->
      <p class="control has-icons-right m-1">
        <input class="input px-4 is-success"
          type="text" placeholder="New To-do Item" v-model="newItem" >
        <span class="button is-success icon is-right has-event" @click="add"> <font-awesome-icon icon="plus" /> </span>
      </p>
      <!-- Display List of Todo Items -->
      <transition-group
        tag="ul"
        enter-active-class="animate__animated animate__slideInUp"
        leave-active-class="animate__animated animate__zoomOut"
      >
        <li class="control has-icons-right input my-1" v-for="(item, index) in todos" :key="index">
          <span class="m-3"> {{ item }} </span>
          <span class="button has-text-dark icon is-right has-event" type="submit" @click="remove(item)"><font-awesome-icon icon="times" /> </span>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<!-- JavaScript Portion -->
<script>
export default {
  name: 'TodoList',
  data() {
    return {
      newItem: '',
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  },
  methods: {
    add() {
      this.$store.dispatch("addItem", this.newItem)
      this.newItem = ''
    },
    remove(item) {
      const tid = this.todos.indexOf(item)
      this.$store.dispatch("removeItem", tid)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '~bulma';
  @import "~bulma-tooltip";

  .control.has-icons-right .icon.has-event {
    pointer-events: initial !important;
  }

  .done {
    color: red;
  }
</style>
