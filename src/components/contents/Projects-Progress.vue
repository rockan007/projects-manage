<template>
    <div class="progress-container d-flex flex-column">
        <ContentHeader v-bind:headType="parseInt(1)" v-on:addType="getAddType"></ContentHeader>
        <div class="swiper-container flex-grow-1" style="height:100%">
            <div class="swiper-wrapper" style="height:100px;">
                <div class="swiper-slide" >slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import ContentHeader from "./Content-Header.vue";
export default {
  name: "progressive",
  components: {
    ContentHeader
  },
  data: function() {
    return {};
  },
  mounted: function() {
    this.initSwiper();
  },
  methods: {
    initSwiper: function() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: true, //可选选项，自动滑动
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    },
    getAddType: function(addType) {
      this.$emit("addType", addType);
    }
  }
};
</script>
<style scoped>
.progress-container {
  color: white;
  margin: 36px 60px;
}
.swiper-slide {
  color: white;
}
</style>
