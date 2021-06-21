<template>
  <div class='has-text-centered p-3 mx-6 px-6' :style="image">
    <div>
      <!--Username field-->
      <div class='field'>
        <label class='label'> Username </label>
        <p class='control has-icons-left has-icons-right'>
          <input v-if='$v.user.name.required'
            class='input is-success' :class='{"is-danger": $v.user.name.$error}' type='text'  v-model.trim='$v.user.name.$model' >
          <input v-else
            class='input is-info' type='text' v-model.trim='$v.user.name.$model' >
          <span class='icon is-small is-left'> <font-awesome-icon icon="user"/> </span>
          <span class='icon is-small is-right'> <font-awesome-icon :icon="returnIcon" /> </span>
        </p>
      </div>
      <!--<div class='error' v-if='!$v.user.name.required && $v.user.name.$dirty'>Username is required!</div>
      <div class='error' v-if='!$v.user.name.alpha && $v.user.name.$dirty'>Username must only be letters!</div>-->

      <!--Password field-->
      <div class='field'>
        <label class='label' password='password'> Password </label>
        <p class='control has-icons-left has-icons-right'>
          <input  v-if='$v.user.password.required'
            :type='pfield' class='input is-success' :class='{"is-danger": $v.user.password.$error}' v-model.trim='$v.user.password.$model' placeholder='Hint: Min of 7 characters' />
          <input v-else
            :type='pfield' class='input is-info' v-model.trim='$v.user.password.$model' placeholder='Hint: Min of 7 characters' />
            <span class='icon is-small is-left'> <font-awesome-icon icon="lock" pull="right"/> </span>
            <span class='icon is-small is-right has-event' @click='Toggle'> <font-awesome-icon icon="eye"/> </span>
          <!-- <button @click='Toggle'> See Password </button> -->
        </p>
      </div>
      <!--<div class='error' v-if='!$v.user.password.required && $v.user.password.$dirty'>Password is required!</div>
      <div class='error' v-if='!$v.user.password.minLength && $v.user.password.$dirty'>
        Password must have at least {{ $v.user.password.$params.minLength.min }} characters!
      </div>-->
      <!--Extra Validations-->
      <div class='field' :class="{ 'is-warning': $v.user.$error }"></div>
      <div class='error' v-if="$v.user.$error"> Please fill form correctly </div>
    </div>
    <!--Login Button-->
    <div class='has-text-centered p-2'>
      <button type='submit' class='button has-background-link-dark has-text-light' :disabled='submitStatus==="PENDING"' @click='submitForm'>
        Login
      </button>
      <p class="feedback" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
      <p class="error" v-if="submitStatus === 'ERROR'">Check submission!</p>
      <p class="feedback" v-if="submitStatus === 'PENDING'">Sending...</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { required, minLength, alpha } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      pfield: "password",
      error: false,
      api: 'usr',
      submitStatus: null,
      user: {
        name: '',
        password: '',
        method: 'check'
      },
      image: {
        //backgroundImage: "url('img/office.jpg')"
      }
    }
  },
  validations: {
    user: {
      name: {
        required,
        alpha
      },
      password: {
        required,
        minLength: minLength(7)
      }
    }
  },
  computed:{
    returnIcon() {
      return (this.user.name !== "" && this.$v.user.name.alpha && !this.$v.user.name.$error) ? "check" : "times";
    }
  },
  methods: {
    submitForm() {
      console.log('"Submitform" function works ..')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      }
      else{
        axios
          .post ('/api/api', {
            api: this.api,
            user: this.user.name,
            password: this.user.password,
            method: this.user.method
          })
          .then((response) => {
            console.log(response)
            if (+response.errno === 0) {
              alert(response.errmsg)
            }
            console.log('Request succeeded. Thank You!')
          })
          .catch((error) => {
            console.log(error)
            this.error = true
          })
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    },
    Toggle(e) {
      console.log('Toggle works!')
      e.preventDefault()
      this.pfield = (this.pfield === "password") ? "text" : "password";
    }
  }
}
</script>

<style lang='scss'>
  @import '~bulma';
  @import "~bulma-tooltip";

  .error {
    color: red;
  }
  .feedback {
    color: blue;
  }
  .control.has-icons-right .icon.has-event {
    pointer-events: initial !important;
  }
</style>
