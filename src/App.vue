<template>
    <AnimationTransition/>
    <Navbar/>
  <router-view/>
</template>

<script>
import AnimationTransition from "@/components/AnimationTransition.vue";
import Navbar from "@/components/Navbar.vue"
export default {
   Name: "App",
  components: {
    AnimationTransition,
    Navbar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
* {
  box-sizing: border-box;
  margin: 0%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  overflow: hidden;
}

</style>
