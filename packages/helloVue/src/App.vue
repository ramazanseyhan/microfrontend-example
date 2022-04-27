<template>
  <div style="border: 3px solid #fed101; margin: 4px; padding: 4px">
    {{ message }}

    <br />
    <br />

    <div style="display: flex; gap: 8px">
      <router-link style="margin-right: 10px" to="/">Vue Home</router-link>
      <router-link to="/about">Vue About</router-link>
      <a href="/react">Move to React App</a>
    </div>

    <br />
    <br />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "Vue App Works!" };
  }
};
</script>
