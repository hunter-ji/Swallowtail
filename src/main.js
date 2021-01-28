import Vue from 'vue'
import App from './App.vue'
import "normalize.css/normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import {
  Aside,
  Button,
  ColorPicker,
  Container,
  Form,
  FormItem,
  Input,
  InputNumber,
  Main,
  Switch,
  Upload
} from "element-ui";

Vue.use(Switch);
Vue.use(Button);
Vue.use(Input);
Vue.use(Upload);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(InputNumber);
Vue.use(ColorPicker);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
