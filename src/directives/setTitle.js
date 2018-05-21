import Vue from 'vue'
//更改页面title指令
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value;
  }
})