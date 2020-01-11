new Vue({
    el: '#app',
    data: {
        temperature: 0
    },
    methods: {
        onchange: function() {
            // 入力値を小数点以下1位に丸め、ログ出力
            console.log(this.temperature.toFixed(1));
        }
    }
});