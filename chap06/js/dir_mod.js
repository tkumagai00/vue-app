// bind/update に適用するフック関数
let hook = function(el, binding) {
    if (binding.value === binding.oldValue) {return;}
    if (binding.modifiers.border) {
        el.style.borderColor = binding.value;
        el.style.borderStyle = 'solid';
    } else {
        el.style.borderColor = binding.value;
    }
}


Vue.directive('highlight', {
    bind: hook,
    update: function(el, binding, vnode, oldVnode) {
        if (!binding.modifiers.once) {
            hook(el, binding)
        }
    }
});

new Vue({
    el: '#app',
    data: {
        color: 'yellow'
    }
});