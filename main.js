/*global Vue*/
const STORAGE_KEY = "todosData";
const todoApp = Vue.createApp({
  el: "#todoapp",
  data() {
    return {
      contents: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
      body: undefined,
      editingTodo: undefined,
    };
  },

  methods: {
    addTodo: function () {
      if (!this.body) {
        return;
      }
      this.contents.push({
        id: self.crypto.randomUUID(),
        body: this.body,
        isChecked: false,
      });
      this.saveTodo;
      this.body = undefined;
    },

    editTodo: function (content) {
      this.preEditingTodo = content.body;
      this.editingTodo = content;
    },

    updateTodo: function (content) {
      this.editingTodo = undefined;
      content.body = content.body.trim();
      this.saveTodo;
      if (!content.body) {
        this.removeTodo(content.id);
        return;
      }
    },

    cancelEdit: function (content) {
      this.editingTodo = undefined;
      content.body = this.preEditingTodo;
    },

    removeTodo: function (id) {
      this.contents = this.contents.filter((content) => {
        return content.id !== id;
      });
      this.saveTodo;
    },

    saveTodo: function () {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.contents));
    },

    checkTodo: function (content) {
      content.isChecked = !content.isChecked;
      this.saveTodo(this.contents);
    },
  },

  directives: {
    focus: function (el) {
      el.focus();
    },
  },
});

todoApp.mount("#todoapp");
