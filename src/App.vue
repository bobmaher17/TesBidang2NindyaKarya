<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        loggedIn: null
      }
    },

    methods: {
      getLoggedIn() {
        this.loggedIn = localStorage.getItem("loggedIn")
      }
    },

    watch: {
      $route: {
        immediate: true,
        handler() {
          this.getLoggedIn()
        }
      }
    },

  }
</script>