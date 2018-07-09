<template>
    <div class="projects-container d-flex flex-column">
        <ContentHeader v-bind:headType="parseInt(2)" v-on:addType="getAddType"></ContentHeader>
        <slide-container class="flex-grow-1"></slide-container>
    </div>
</template>
<script>
import ContentHeader from "./Content-Header.vue";
import SlideContainer from "../../views/Slide-Container";
import { Const } from "../../assets/js/const";
export default {
  name: "projects",
  components: {
    ContentHeader,
    "slide-container": SlideContainer
  },
  data: function() {
    return {
      accountInfo: "",
      projects:[]
    };
  },
  created:function(){
    this.getAccountInfo();
  },
  watch: {
    accountInfo: function(newVal) {
      console.log("获取账号信息：" + JSON.stringify(newVal));
      this.getProjects();
    }
  },
  methods: {
    getAddType: function(addType) {
      this.$emit("addType", addType);
    },
    getAccountInfo:function(){
      this.accountInfo= Const.getSessionStorage(Const.ACCOUNT_INFO);
    },
    getProjects: function() {
      console.log("获取项目列表信息")
      Const.request(Const.PROJECTS,{
        UIDstr:this.accountInfo.AccountID,
        PageIndex:1,
        PageSize:4
      },function(response){
        console.log("获取的项目列表数据信息："+JSON.stringify(response));
      })
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


