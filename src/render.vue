<template>
  <div>
    <button @click="gogo()">使用render创建子组件</button>
    <br />
    <button @click="setgogo()">修改给使用render创建子组件的props值</button>
    <br />
    <button @click="removegogo()">卸载使用render创建的子组件</button>
    <br />
  </div>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import rednerCreate from "./components/renderHelloWorld";
export default {
  name: "App",
  setup() {

    let value = reactive({
      soso: {
        ss: 555,
      },
    });

    const setgogo = (valuexx) => {
       value.soso.ss = valuexx|| 1000;
    };

    let rc = rednerCreate(value,setgogo);

    const gogo = () => {
      rc.created();
    };



    const removegogo = () => {
        rc.destroyed();
    };

    return {
      gogo,
      setgogo,
      removegogo,
    };
  },
};
</script>
