import HelloWorld from "./HelloWorld.vue";
import { h, render } from "vue";

export default (value,callback) => {
    //使用h(createVnode)来创建vnode
    let HelloWorldVnode = h(HelloWorld, {
        msg: value,
        onChange() {
            console.log("???","嘻嘻");
            callback(Date.now());
        }
    });
    let div = document.createElement("div");


    return {
        created() {
            render(HelloWorldVnode, div);
            document.body.append(div);
        },
        destroyed(){
            render(null, div);
            div.remove();
        }
    }
}
