Vue.component('my-hello', {
    // プロパティを定義
    // props: [ 'yourName' ],
    props: {
        yourName: {
            type: String,
            default: '名無権兵衛',
            validator: function(value) {
                return value.length <= 5;
            }
        }
    },
    template: `<div>こんにちは、{{ yourName }}さん!</div>`
});

new Vue({
    el: '#app'
});