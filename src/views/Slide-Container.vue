<template>
    <div id="carouselExampleIndicators" class="carousel slide flex-grow-1" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        1
    </div>
    <div class="carousel-item">
        2
    </div>
    <div class="carousel-item">
        3
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>
<script>
import $ from 'jquery'
export default {
    name:'slideContainer',
    data:function(){
        return {

        }
    },
    mounted:function(){
        console.log("slide-container mounted");
        $('.carousel').carousel()
    }
}
</script>
<style scoped>

</style>

