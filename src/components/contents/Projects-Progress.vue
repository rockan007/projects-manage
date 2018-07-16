<template>
    <div class="progress-container d-flex flex-column">
        <ContentHeader v-bind:headType="parseInt(1)" v-on:addType="getAddType"></ContentHeader>
        <progresses-slide v-bind:isProgressAdd="isProgressAdd" v-on:listProgressAdd="$emit('listProgressAdd')"
         v-on:addProgress="getAddProgress" class="flex-grow-1"></progresses-slide>
    </div>
</template>
<script>
import ContentHeader from "./Content-Header";
import ProgressesSlide from "./Progresses-Slide";
export default {
  name: "progressive",
  components: {
    ContentHeader,
    "progresses-slide": ProgressesSlide
  },
  props:{
    isProgressAdd:{
      type:Boolean,
      default:false
    }
  },
  data: function() {
    return {};
  },
  mounted: function() {
    // this.initSwiper();
  },
  methods: {
    getAddType: function(addType) {
      this.$emit("addType", addType);
    },
    getAddProgress: function(id) {
      this.$emit("addProgress", id);
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
