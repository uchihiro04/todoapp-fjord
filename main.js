/*global Vue*/
const STORAGE_KEY = "todosData";
const todoApp = Vue.createApp({
  el: "#todoapp",
  data() {
    return {
      contents: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
      body: "",
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
      this.body = "";
    },
  },
});

todoApp.mount("#todoapp");
