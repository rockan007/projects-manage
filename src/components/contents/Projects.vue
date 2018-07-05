<template>
    <div class="projects-container">
        <ContentHeader v-bind:headType="parseInt(2)" v-on:addType="getAddType"></ContentHeader>
        <div class="projects-content">
        </div>
    </div>
</template>
<script>
import ContentHeader from "./Content-Header.vue";
export default {
  name: "projects",
  components: {
    ContentHeader
  },
  methods: {
    getAddType: function(addType) {
      this.$emit("addType", addType);
    }
  }
};
</script>
<style scoped>
.projects-container {
  color: white;
  margin: 36px 60px;
}
</style>


