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
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.contents));
      this.body = undefined;
    },

    editTodo: function (content) {
      this.preEditingTodo = content.body;
      this.editingTodo = content.id;
    },

    updateTodo: function (content) {
      this.editingTodo = undefined;
      content.body = content.body.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.contents));
    },

    cancelEdit: function (content) {
      this.editingTodo = undefined;
      content.body = this.preEditingTodo;
    },

    removeTodo: function (id) {
      this.contents = this.contents.filter((content) => {
        return content.id != id;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.contents));
    },
  },
});

todoApp.mount("#todoapp");
