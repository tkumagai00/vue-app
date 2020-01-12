new Vue({
    el: '#app',
    data: {
        name: '匿名'
    },
    methods: {
        // escキーでテキストをクリア
        clear: function() {
            this.name = '';
        }
    }
});