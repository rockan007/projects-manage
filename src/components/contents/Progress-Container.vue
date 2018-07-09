<template>
    <div class="progress-container d-flex flex-column">
        <div class="progress-head">
             <div class="progress-title">
            带电配电红外检测平台
            </div>
            <div class="title-bootom-devider">
            </div>
            <div v-on:click="addProjectProgress">添加进程</div>
        </div>
        <div class="progress-body flex-grow-1">
            <div v-for="(progress,index) in item.progresses" :key="index">
                
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
  name: "progressContainer",
  data:function(){
      return {

      }
  },
  methods:{
      addProjectProgress:function(id){
          this.$emit('projectProgress',id);
      }
  }
};
</script>
<style scoped>
.progress-container {
  width: 100%;
  height: 100%;
}
.progress-head{
    color: rgb(119, 198, 248);
}
</style>

