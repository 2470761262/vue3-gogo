import { createApp } from 'vue'

//第一个版本
//import baseDemo from './baseDemo.vue'
// createApp(baseDemo).mount('#app')


//第二个版本 生命周期函数 卸载和更新还不完全
// import hookMethods from './hookMethods.vue';
// createApp(hookMethods).mount("#app");


//第三个版本组件更新
// import muntedCompoent from './muntedCompoent.vue'
// createApp(muntedCompoent).mount('#app')
//第四个版本props和emit
// import propsAndEmit from './propsAndEmit.vue'
// createApp(propsAndEmit).mount('#app')

//第五个版本 使用render函数让子组件挂载和卸载
// import render from './render.vue'
// createApp(render).mount('#app')



//第六个版本 resolveComponent等等组件方法的理解
 import resolveComponent from './resolveComponent.vue';
 import test from "./components/test.vue";
let app =  createApp(resolveComponent)

app.component("test",test);
app.mount('#app')
