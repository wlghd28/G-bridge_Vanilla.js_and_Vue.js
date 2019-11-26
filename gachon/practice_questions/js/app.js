var app = new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue.js',
        anotherMessage : 'This is anotherMessage',
        uid : '10',
        flag : true
        // flag : false
    },
    methods: {
        clickBtn() {
            console.log("hi");
        },
        eventMethod() {
            console.log("event 발생!!");
        }
    }
});