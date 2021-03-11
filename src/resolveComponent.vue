

<script>
import {resolveComponent,h,resolveDynamicComponent,ref  } from "vue";
import xx from "./components/HelloWorld.vue";
export default {
    components:{
        xx
    },
    setup () {
      //  let z =  resolveComponent("test");

       //let keyName =   ref("test");

        // setTimeout(()=>{
        //     keyName.value = "xx";
        // },1000)
        //resolveDynamicComponent(keyName.value);


        // return ()=>{
        //     return h(resolveComponent(keyName.value))
        // }
        return ()=>{
            return h(resolveDynamicComponent(keyName.value))
        }
    }
}
</script>

