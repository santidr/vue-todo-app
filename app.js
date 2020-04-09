const app = new Vue({
    el: '#app',
    data: {
        title: 'ToDo List on Vue.js',
        tasksList: [],
        newTask: ''
    },
    methods: {
        todoDBListener: function() {
            localStorage.setItem('todo-vue', JSON.stringify(this.tasksList));
        },
        addNewTask: function() {
            this.tasksList.push({
                text: this.newTask,
                completed: false 
            });
            this.newTask = '';
            this.todoDBListener();
        },
        completeTask: function(index) {
            this.tasksList[index].completed = !this.tasksList[index].completed;
            this.todoDBListener();
        },
        removeTask: function(index) {
            this.tasksList.splice(index, 1);
            this.todoDBListener();
        }
    },
    created: function() {
        let todoDB = JSON.parse(localStorage.getItem('todo-vue'));
        if (todoDB === null) {
            this.tasksList = [];
        } else {
            this.tasksList = todoDB;
        }
    }
});