<template>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="nvabar-brand d-flex align-items-center" v-on:click="orderToHome" href="#">
            <span class="iconfont icon-it"></span> 
            <div class="devider-line"></div>
            <div class="project-name">电亮亮IT部项目管理系统</div>
        </div>
        <div class="account-info d-flex align-items-center ml-auto">
            <span class="iconfont icon-touxiang"></span>
            <div class="account-name">{{accountInfo.NameInfo}}</div>
        </div>
    </div>
</template>
<script>
import { Const } from "../assets/js/const";
export default {
  name: "navbar",
  data: function() {
    return {
      accountInfo: ""
    };
  },
  created: function() {
    this.accountInfo = Const.getSessionStorage(Const.ACCOUNT_INFO);
    console.log("获取的账号信息：" + JSON.stringify(this.accountInfo));
  },
  methods:{
    orderToHome:function(){
      this.$router.push('/home')
    }
  }
};
</script>
<style scoped>
.project-name,
span.iconfont.icon-it,
span.iconfont.icon-touxiang,
.account-name {
  color: white;
}
span.iconfont.icon-it {
  font-size: 36px;
}
.project-name {
  font-size: 20px;
}
.devider-line {
  width: 1px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: white;
}
.account-info {
  font-size: 18px;
}
span.iconfont.icon-touxiang {
  font-size: 26px;
}
.account-name {
  margin-left: 6px;
}
</style>

