<template>
    <div class="header-conatainer d-flex plan-color align-items-center"  v-bind:class="{'progress-color':diaType==1}">
        <div class="title-devider devider-plan" v-bind:class="{'devider-progress':diaType==1}"></div>
        <div class="header-title">{{diaType?"新增进程":"新增计划"}}</div>
        <div class="ml-auto close-icon" v-on:click="$emit('cancelDia')">x</div>
    </div>
</template>
<script>
export default {
  name: "dialog-title",
  props: {
    diaType: {
      default: 0,
      type: Number
    }
  }
};
</script>
<style scoped>
.title-devider {
  width: 4px;
  height: 32px;
  margin-right: 16px;
}
.devider-plan {
  background-color: rgb(255, 157, 138);
}
.devider-progress {
  background-color: rgb(119, 198, 248);
}
.plan-color{
    color: rgb(255, 157, 138);
}
.progress-color{
    color: rgb(119, 198, 248);
}
.header-title{
    font-size: 28px;
}
.close-icon{
    font-size: 32px;
}
</style>