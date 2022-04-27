<template>
  <div ref="root"></div>
</template>

<script>
import { ref, onMounted } from "vue";
import { mount } from "helloVue/HelloVueApp";

export default {
  setup() {
    const root = ref(null);

    onMounted(() => {
      mount(root.value);
    });
    return {
      root,
    };
  },
};
</script>
