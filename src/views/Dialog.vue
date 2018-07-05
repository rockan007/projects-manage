<template>
    <div v-show='dialogShow' class="dialog-container" v-on:click="cancelDialog">
        <div class="dialog-content" v-on:click.stop>
            <dialog-title v-bind:diaType="diaType" v-on:cancelDia="cancelDialog"></dialog-title>
            <dialog-content v-bind:diaType="diaType"></dialog-content>
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
    diaType:{
        default:0,
        type:Number
    }
  },
  data: function() {
    return {
      isShow: 0
    };
  },
  watch: {
    dialogShow: function(newVal) {
      this.isShow = newVal;
    }
  },
  methods: {
    cancelDialog: function() {
      this.isShow = 0;
      this.$emit("cancelDia");
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
  position: absolute;
  top: 110px;
  left: 120px;
  right: 120px;
  bottom: 120px;
  background-color: rgb(255, 255, 255, 0.9);
  box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
  z-index: 888;
  border-radius: 8px;

  padding: 16px 32px;
}
</style>

