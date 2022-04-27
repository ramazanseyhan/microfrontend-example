<template>
  <div style="border: 5px solid red; padding: 4px; margin: 4px">
    <HelloHeaderApp />
    <div
      style="
        padding: 4px;
        min-height: 600px;
        margin: 4px;
        border: 3px solid #00ff;
        background-color: #f7f7f7;
      "
    >
      <span style="margin-right: 30px">Container App</span>
      <router-link style="margin-right: 10px" to="/">Use Vue</router-link>
      <router-link to="/react">Use React</router-link>
      <router-view></router-view>
    </div>
    <HelloFooterApp />
  </div>
</template>

<script>
import HelloHeaderApp from "./components/HelloHeaderApp.vue";
import HelloFooterApp from "./components/HelloFooterApp.vue";
export default {
  components: {
    HelloHeaderApp,
    HelloFooterApp
  }
};
</script>
