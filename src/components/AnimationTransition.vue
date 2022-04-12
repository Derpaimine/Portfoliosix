<template>
  <div class="topImage"></div>
  <div class="bottomImage"></div>
</template>

<script>
export default {
    name:"AnimationTransition",
};
</script>

<style scoped>
body {
  background: #14000A;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.topImage {
  background-color: #94004a;
  background-size: contain;
  height: 100vh;
  clip-path: polygon(100% 0, 0% 100%, 0 0);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0%;
  -webkit-animation: slide-left 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}


.bottomImage {
  background-color:#94004a;
  background-size: contain;
  height: 100vh;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0%;
  -webkit-animation: slide-right 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}


/* Animation */

@keyframes slide-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1540px);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  99% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1540px);
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);

}
 100%{
    display: none;
      clip-path: polygon(0% 0, 0% 0%, 0% 0%);
  }
}

@media only screen and (max-width: 600px) {
.bottomImage{
  display: none;
}
.topImage{
  display: none;
}
}
</style>
