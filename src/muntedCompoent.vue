<template>
  <div>
    <div>哦{{ name }}哦</div>
    <HelloWorld></HelloWorld>
    <div>哦{{ name }}哦</div>
  </div>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    return {
      name: 35,
    };
  },
};
</script>
