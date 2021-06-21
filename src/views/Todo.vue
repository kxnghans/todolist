<template>
  <div>
    <div class="parallax1" :style="image">
      <Navbar />
      <img alt="Vue logo" src="../assets/logo.png">
      <TodoList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Todo',
  components: {
    TodoList,
    Navbar
  },
  data() {
    return {
      image: {
          //backgroundImage: "url('img/office.jpg')"
      }
    }
  }
}
</script>

<style scoped>
.parallax1 {
  /* The image used */
  backgroundImage:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) );
  color: white;
  /* Create the parallax scrolling effect */
  backgroundAttachment: fixed;
  backgroundPosition: bottom;
  backgroundRepeat: no-repeat;
  backgroundSize: cover;
}
</style>
