Vue.component('my-hello', {
    template: `<div>こんにちは、{{ name }}!</div>`,
    // data オプションにはオブジェクトリテラルを返す関数を指定する
    data: function() {
        return {
            name: 'Vue.js'
        };
    }
});

new Vue({
    el: '#app'
});