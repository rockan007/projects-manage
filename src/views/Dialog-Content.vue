<template>
    <div class=" d-flex flex-column">
    
        <dialog-plan  v-if='diaType==0' class="flex-grow-1"></dialog-plan>
        <dialog-progress v-else-if="diaType==1" class="flex-grow-1"></dialog-progress>
        <project-progress v-else class="flex-grow-1"></project-progress>
        <button type="submit" class="btn">提交</button>
    </div>
</template>
<script>
import dialogPlan from "./Dialog-Plan";
import dialogProgress from "./Dialog-Progress";
import projectProgress from "./Dialog-Project-Progress";
export default {
  name: "dialogContent",
  props: {
    diaType: {
      default: 0,
      type: Number
    }
  },
  components: {
    "dialog-plan": dialogPlan,
    "dialog-progress": dialogProgress,
    "project-progress": projectProgress
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
</style>