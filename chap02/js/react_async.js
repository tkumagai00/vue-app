new Vue({
    el: '#app',
    data: {
        auther: {
            name: '山田'
        }
    },

    mounted: function() {
        Vue.set(this.auther, 'company', 'WINGSプロジェクト');

        let that = this;
        this.$nextTick().then(function() {
            console.log(that.$el.textContent.includes(that.auther.company));
        })
    }
});
