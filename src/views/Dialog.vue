<template>
    <div v-if='dialogShow'  class="dialog-container d-flex align-items-center justify-content-center" v-on:click="cancelDialog">
        <div class="col-6 dialog-content d-flex flex-column" v-on:click.stop>
            <dialog-title  v-bind:diaType="diaType" v-on:cancelDia="cancelDialog"></dialog-title>
            <dialog-content v-bind:diaType="diaType" v-bind:projectId="projectId" v-on:planAdded="planAdded" v-on:progressAdded="progressAdded"
            class="flex-grow-1" v-on:cancelDia="cancelDialog">
            </dialog-content>
        </div>
    </div>
</template>
<script>
import DialogTitle from "./Dialog-Title";
import DialogContent from "./Dialog-Content";
export default {
  name: "dialog-view",
  components: {
    "dialog-title": DialogTitle,
    "dialog-content": DialogContent
  },
  props: {
    dialogShow: {
      default: 0,
      type: Number
    },
    diaType: {
      default: 0,
      type: Number
    },
    projectId: {
      default: "",
      type: String
    }
  },
  data: function() {
    return {
      isShow: 0
    };
  },
  created: function() {
    console.log("获取的dialogShow：" + this.dialogShow);
  },
  watch: {
    dialogShow: function(newVal, oldVal) {
      console.log("dialogShow的变化：" + newVal);
      console.log("dialog的旧值：" + oldVal);
      this.isShow = newVal;
    }
  },
  methods: {
    cancelDialog: function() {
      console.log("取消dialog");
      this.isShow = 0;
      this.$emit("cancelDia");
    },
    planAdded: function() {
      this.$emit("planAdded");
    },
    progressAdded: function() {
      console.log("progressAdded")
      this.$emit("progressAdded");
    }
  }
};
</script>
<style scoped>
.dialog-container {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0;
  bottom: 0;
  z-index: 666;
  background-color: rgba(0, 0, 0, 0.3);
}
.dialog-content {
  background-color: rgb(255, 255, 255, 0.9);
  box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
  z-index: 888;
  border-radius: 8px;
  min-height: 70%;

  padding: 16px 32px;
}
</style>

