<template>
    <div class="progress-container d-flex flex-column">
        <ContentHeader v-bind:headType="parseInt(1)" v-on:addType="getAddType"></ContentHeader>
        <slide-container></slide-container>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import ContentHeader from "./Content-Header.vue";
import SlideContainer from '../../views/Slide-Container'
export default {
  name: "progressive",
  components: {
    ContentHeader,
    'slide-container':SlideContainer
  },
  data: function() {
    return {};
  },
  mounted: function() {
    // this.initSwiper();
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
