/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      hello: "Hi again!",
      greetings: [
        { greeting: "Good Morning!" },
        { greeting: "Good Afternoon" },
        { greeting: "Good Evening!" },
        { greeting: "Good Night!" },
      ],
      fruits: ["apple", "banana", "peach"],
      newFruit: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "Hello again!";
    },
    changeHello: function () {
      this.hello = "This is just a bunch of hello's";
    },
    addNewFruit: function () {
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
};
Vue.createApp(App).mount("#app");
