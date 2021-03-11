<template>
  <div>
    <HelloWorld :msg="k" @change="change" ></HelloWorld>
    {{k.soso.ss}}
  </div>
</template>

<script>
import { ref ,reactive} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    let k =  reactive({
        soso:{
            xx:5
        }
    });
    const change = (value)=>{
        k.soso.ss = value;
        console.log("value");
    }
    const xixi = (value)=>{
        console.log("????");
    }
    return {
      k,
      change,
      xixi
    };
  },
};
</script>
