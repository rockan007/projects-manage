
<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>
<script>
require('./assets/css/iconfont.css');
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.container {
  padding: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container{
  background-image:  url(./assets/imgs/background.jpg);
  background-position: center;
  background-size: cover;
}
@media (min-width: 992px){
  .container{
    max-width: 100%;
    width: 100%;
  }
}
</style>
