
Vue.component('todo-footer',{
    template : '<p>another global child component</p>'
});

var cmp = {
    template : '<p>This is another local component</p>'
}

var app = new Vue({
    el : '#app',
    data : {
        message : 'Hello component'
    },
    components : {
        'todo-list' : cmp
    }
});
