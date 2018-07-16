<template>
    <div class=" d-flex flex-column">
        <dialog-plan v-on:planAdded="planAdded" v-if='diaType==0' class="flex-grow-1"></dialog-plan>
        <dialog-progress  v-on:progressAdded="progressAdded" v-else-if="diaType==1" class="flex-grow-1"></dialog-progress>
        <project-progress  v-on:cancelDia="cancelDialog" v-else class="flex-grow-1"></project-progress>
        
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
  },
  methods: {
    planAdded:function(){
      this.$emit('planAdded');
      this.cancelDialog();
    },
    progressAdded:function(){
      this.$emit('progressAdded');
      this.cancelDialog();
    },
    cancelDialog: function() {
      console.log("取消对话框：cancelDialog")
      this.$emit("cancelDia");
    }
  }
};
</script>
<style scoped>
</style>