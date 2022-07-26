import Vue from 'vue';
import App from './App.vue';
import store from "@/vuex/index";
import router from "@/router/index";
import Top from "@/components/Top";
import Footer from "@/components/Footer";


// 全局组件
Vue.component(Top.name,Top);
Vue.component(Footer.name,Footer);

//表单验证
import "@/plugins/validate";

// 引入所有的csss
// import "/public/css/basic.css";
//引入所有的css
// const cssFiles = require.context("/public/css",false,/\.css$/)
// const map = {}
// for (const key of cssFiles.keys()) {
//   map[key] = cssFiles(key)
// }

import "/public/css/basic.css";
import "/public/css/demo.css";
import "/public/css/admin.css";
import "/public/css/hmstyle.css";


//关闭开发者提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
