<template>
    <div id="home" class="full-screen d-flex flex-column">
        <Navbar></Navbar>
        <router-view v-on:addType="getAddType" class="flex-grow-1"/>
        <Dialog v-bind:dialogShow="showDialog" v-bind:diaType="addType" v-on:cancelDia="showDialog=0"></Dialog>
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
      showDialog: 0
    };
  },
  watch: {
    addType: function(newVal, oldVal) {
      console.log("获取的添加模块类型：" + newVal);
    }
  },
  methods: {
    getAddType: function(addType) {
      console.log("获取的添加类型：" + addType);
      this.addType = addType;
      this.showDialog = 1;
    }
  }
};
</script>
<style scoped>
.full-screen {
  height: 100%;
}
</style>


