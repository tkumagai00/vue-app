new Vue({
    el: '#app',
    data: {
        memo: ''
    },
    methods: {
        onchange: function() {
            // 入力値を小数点以下1位に丸め、ログ出力
            console.log('入力値は「' + this.memo + '」です。');
        }
    }
});