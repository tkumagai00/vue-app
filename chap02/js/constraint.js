new Vue({
    el: '#app',
    data: {
        auther: {
            name: '山田'
        }
    },

    created: function() {
        let that = this;
        this.timer = setInterval(function() {
            //that.auther.name = 'Y.Yamada';
            //that.auther.company = 'WINGSプロジェクト';
            Vue.set(that.auther, 'company', 'WINGSプロジェクト');
        }, 3000);
    },
    beforeDestroy: function() {
        clearInterval(this.timer);
    }
});
