Vue.directive('highlight', {
    // 紐づいた時の処理（初回のみ）
    bind: function(el, binding, vnode, oldVnode) {
        el.style.backgroundColor = binding.value;
    }
});

new Vue({
    el: '#app',
    data: {
        color: 'yellow'
    }
});