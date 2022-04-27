<template>
  <div
    style="
      border: 3px solid #c7c7c7;
      margin: 4px;
      display: flex;
      gap: 8px;
      padding: 4px;
    "
  >
    Vue {{ getAppName }}

    <div style="display: flex; gap: 8px">
      <a href="/">Move to vue!</a>
      <a href="/react">Move to react!</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getAppName() {
      return "Header App";
    }
  }
};
</script>

<style></style>
