<template>
<section>
    <div class="typewriter">
  <h1>Jordan Dawson</h1>
</div>
<!-- CARD -->
  <div class="topImage">
<img src="https://i.postimg.cc/282CW1QW/1648471848353.jpg" alt="Jordan" class="center">
<br>
<h2>Full Stack Developer</h2>
<!-- CARD ROW -->
<div class="row justify-content-center gx-5">
  <!-- COL 1 -->
  <div class="col-4 left ">
    <div class="d-flex justify-content-center">
  <div class="link"><i class="fa fa-github" aria-hidden="true"></i>
  <p>Github</p>
</div>
  <div class="link"><i class="fa fa-linkedin" aria-hidden="true"></i>
  <p>Github</p>
</div>
  <div class="link"><i class="fa fa-envelope" aria-hidden="true"></i>
  <p>Github</p>
</div>
</div>
  </div>
<!-- COL 2 -->
<div class="col-4 ">
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-4"> <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></div>
    <div class="col-6 col-sm-4"> <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></div>

    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4"> <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></div>
    <div class="col-6 col-sm-4"> <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></div>
</div>
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
p{
  text-align: center;
  color: white;
}
div.d-flex > div{
   margin: 10px;
}
.row{
width: 65vw;
margin-top: 80px;
}
.progress{
  width: 20vw;
}
.link{
  text-align: center;
}
.left{
  margin-left:320px;
}
i{
   background-color: #0f020a;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  text-align: center;
  justify-items: center;
  padding: 10px;
}
.fa{
  font-size: 55px;
  color: white;
}
.topImage {
  background-color: #94004a;
  position: absolute;
  left: 5%;
  top:100px;
  width: 85%;
  margin-left: 5%;
  margin-right: 5%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  z-index: 1;
  height: 450px;
  margin-top: 100px;
}

.center {
  padding:10px;
  background: #94004a;
}
h2{
  padding-left: 50px;
  color: #ffffff;
  text-decoration-line: underline;
  text-decoration-color: #ffffff;
  font-weight: 700;
  position: absolute;
  left: 300px;
  font-size: 4.5vw;
}

img{
  border-radius: 50%;
  width: 20vw;
  position:absolute;
  bottom: 300px;
  z-index:2;
}
h1{
    font-size: 70px;
    color: #ffffff ;
    text-decoration-line: underline;
    text-decoration-color: #ffffff;
    width: 50%;
    padding-top: 25px; ;
    font-weight: 900 ;
    position: absolute;
    left: 530px;
  
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