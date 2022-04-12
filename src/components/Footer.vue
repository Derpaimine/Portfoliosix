<template>
  <div class="bg-dark footer">
    <p>© 2020 Copyright: Jordan Dawson</p>
  </div>
</template>
<style scoped>
p {
  color: #b2b2b2;
}

.navbar {
  -webkit-animation: slide-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-top 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  justify-content: center;
  display: table-column;
  position: fixed;
}

p {
  margin: 0%;
}
.bg-dark {
  background-color: #0f020a !important;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 15px;}

hr {
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: 0%;
  margin-top: 0%;
  color: inherit;
  background-color: #f3f3f3;
  opacity: 0.25;
  height: 2px;
}

.btn-outline-success {
  color: #e08c33;
  border-color: #e08c33;
}
.btn:hover {
  background-color: #e08c33;
  border-color: #e08c33;
  color: #14000a;
}
</style>