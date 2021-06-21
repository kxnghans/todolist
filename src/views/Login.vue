<template>
  <div>
    <Navbar />
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginRoute />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginRoute from '@/components/Login.vue'

export default {
  name: 'Login',
  components: {
    LoginRoute
  }
}
</script>
