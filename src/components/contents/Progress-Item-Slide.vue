<template>
    <div class="progress-slide-item">
        <div v-for="(project,index) in slideProgress" v-bind:key="index">
            <div>
                <div>{{project.title}}</div>
                <div></div>
                <div v-on:click="addProjectProgress(project)">添加进度</div>
            </div>
            <div>
                <div v-for="(progress,order) in project" v-bind:key="order">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "progress-slide",
  props: {
    slideProgress: {
      default: function() {
        return [];
      },
      type: Array
    }
  },
  data: function() {
    return {};
  },
  methods: {
      //
    addProjectProgress: function(project) {
        this.$emit('addProgress',project)
    }
  }
};
</script>
<style scoped>
</style>