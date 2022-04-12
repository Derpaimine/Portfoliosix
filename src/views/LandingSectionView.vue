<template>
<section>
    <div class="typewriter">
  <h1>Jordan Dawson</h1>
</div>
  <div class="topImage">
<img src="https://i.postimg.cc/282CW1QW/1648471848353.jpg" alt="Jordan" class="center">
<br>
<h2>Full Stack Developer</h2>
<div class="container">
  <div class="row justify-content-end">
    <div class="col-3 col-sm-6">
      test
    </div>
    <div class="col-3 col-sm-6">
      test
    </div>
    <div class="col-3 col-sm-6">
      test
    </div>
  </div>
</div>
</div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
    background-color:#151113 ;
    height: 100vh;
    font-family: 'Anek Odia', sans-serif; 
    z-index: 1;
    width: 100vw;
}
.row{
}
.topImage {
  background-color: #94004a;
  position: absolute;
  left: 5%;
  width: 85%;
  margin-left: 5%;
  margin-right: 5%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  text-align: center;
  z-index: 1;
  height: 290px;
  margin-top: 100px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding:10px;
  background: #94004a;
}
h2{
  padding-left: 80px;
  color: #BEA5AB;
  text-decoration-line: underline;
  text-decoration-color: #BEA5AB;
  font-weight: 900;
}

img{
  border-radius: 50%;
  width: 25%;
  position:absolute;
  bottom: 150px;
  z-index:2;
}
h1{
    text-align: center;
    font-size: 50px;
    color: #9d004f ;
    text-decoration-line: underline;
    text-decoration-color: #9d004f;
    width: 50%;
    padding-top: 25px; ;
    font-weight: 900 ;
}
.typewriter h1 {
  overflow: hidden; 
  white-space: nowrap; 
  margin: 0 auto; 
  animation: 
    typing 1.8s steps(40, end), step-end infinite;
    animation-delay: 0.1s;
}

@keyframes typing {
  from { width: 0 }
  to { width: 50% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }}

</style>