var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      number_1: 0,
      number_2: 0,
      number_3: 0,
      sum: 0,
      multiplication: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.number_1) * parseInt(this.number_2) + parseInt(this.number_3);
    },
    computeMultiplication: function () {
      this.multiplication = parseInt(this.number_1) * parseInt(this.number_2) * parseInt(this.number_3);
    },
  },
};

Vue.createApp(App).mount("#app");
