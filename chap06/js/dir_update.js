// Vue.directive('highlight', {
//     // 上位コンポーネントが変化したとき
//     update: function(el, binding, vnode, oldVnode) {
//         el.style.backgroundColor = binding.value;
//     },
//         // 紐づいた時の処理（初回のみ）
//     bind: function(el, binding, vnode, oldVnode) {
//         el.style.backgroundColor = binding.value;
//     }
// });

Vue.directive('highlight', function(el, binding, vnode, oldVnode) {
    el.style.backgroundColor = binding.value;
});

new Vue({
    el: '#app',
    data: {
        color: 'yellow'
    }
});