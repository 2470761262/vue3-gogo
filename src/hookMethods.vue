<template>
  <div>2</div>
</template>

<script>
import {ref,onMounted,onUnmounted,onBeforeMount,onBeforeUpdate} from "vue";
export default {
  name: "App",
  setup() {

      onBeforeMount(()=>{
          debugger
        console.log("挂载之前1");
      })
       onBeforeMount(()=>{
        console.log("挂载之前2");
      })
      onMounted(()=>{
        console.log("挂载挂载");
      })
       onMounted(()=>{
        console.log("挂载挂载");
      })
      onBeforeUpdate(() => {
          debugger
         console.log("????");
      })
      //----------------------
     //更新流程 将在之后 patch更新时填写

      //卸载流程 将在之后 patch更新时填写

      onUnmounted(()=>{
          console.log("卸载");
      })
  },
};
</script>
