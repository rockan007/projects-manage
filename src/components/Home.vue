<template>
    <div id="home" class="full-screen d-flex flex-column">
        <Navbar></Navbar>
        <router-view v-on:listPanAdd="isPlanAdd=false" v-on:listProgressAdd="isProgressAdd=false"
          v-on:addProgress="getAddProgress" v-on:addType="getAddType" 
          v-bind:isPlanAdd="isPlanAdd" v-bind:isProgressAdd="isProgressAdd" class="flex-grow-1"/>
        <Dialog v-on:planAdded="planAdded" v-on:progressAdded="progressAdded" v-bind:dialogShow="showDialog"
         v-bind:diaType="addType" v-bind:projectId="projectId" v-on:cancelDia="getCancelStat"></Dialog>
    </div>
</template>
<script>
import Navbar from "./Navbar";
import Dialog from "../views/Dialog";
export default {
  name: "home",
  components: { Navbar, Dialog },
  data: function() {
    return {
      addType: -1,
      showDialog: 0,
      projectId: "",
      isPlanAdd: false,
      isProgressAdd: false
    };
  },
  watch: {
    addType: function(newVal) {
      console.log("获取的添加模块类型：" + newVal);
    }
  },
  methods: {
    getAddType: function(addType) {
      console.log("获取的添加类型：" + addType);
      this.addType = addType;
      this.showDialog = 1;
      this.projectId = "";
    },
    getCancelStat: function() {
      console.log("获取取消状态：");
      this.showDialog = 0;
      console.log(this.showDialog);
      this.projectId = "";
    },
    getAddProgress: function(id) {
      this.showDialog = 1;
      this.addType = 1;
      this.projectId = id;
    },
    planAdded: function() {
      this.isPlanAdd = true;
    },
    progressAdded: function() {
      this.isProgressAdd = true;
    }
  }
};
</script>
<style scoped>
.full-screen {
  height: 100%;
}
</style>


