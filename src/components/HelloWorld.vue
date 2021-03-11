<template>
  <h1>{{ msg.soso.ss }}</h1>
  <div>你好啊</div>
  <button @click="changeMsg">点我</button>
</template>

<script>
import { markRaw, reactive, toRaw, onUnmounted } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: Object,
  },
  emits: {
    change(payload) {
      return true;
    },
  },
  mounted() {},
  setup(props, { emit }) {
    console.log(props);
    onUnmounted(() => {
      console.log("被卸载了");
    });

    return {
      changeMsg() {
        emit("change", 300);
      },
    };
  },
};
</script>
