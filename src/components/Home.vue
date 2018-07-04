<template>
    <div id="home" class="full-screen d-flex flex-column">
        <Navbar></Navbar>
        <router-view class="flex-grow-1"/>
    </div>
</template>
<script>
import Navbar from "./Navbar";
export default {
  name: "home",
  components: {Navbar}
};
</script>
<style scoped>
.full-screen{
    height: 100%;
}
</style>


