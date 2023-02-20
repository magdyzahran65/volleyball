import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    DateTimeForm: {
      name: "",
    },
    beforeMatchTdsInputs: [],
    namesTableInputs: [
      {
        label1: "حكم اول :",
        label2: "وقت الحضور",
        label3: "الزي الرسمي",
        val1: "",
        val2: "",
        val3: "",
      },
      { label1: "حكم ثاني :", label2: "وقت الحضور", label3: "الزي الرسمي" },
      {
        label1: "مسجل المياراة :",
        label2: "وقت الحضور",
        label3: "الزي الرسمي",
        val: "",
        val2: "",
        val3: "",
      },

      {
        label1: "مساعد المسجل :",
        label2: "وقت الحضور",
        label3: "الزي الرسمي",
        val: "",
        val2: "",
        val3: "",
      },
      {
        label1: "خط 1 :",
        label2: "وقت الحضور",
        label3: "الزي الرسمي",
        val: "",
        val2: "",
        val3: "",
      },
      {
        label1: "خط 2",
        label2: "وقت الحضور",
        label3: "الزي الرسمي",
        val: "",
        val2: "",
        val3: "",
      },
      {
        label1: "خط 3",
        label2: "وقت الحضور",
        label3: "الزي الرسمي",
        val: "",
        val2: "",
        val3: "",
      },
      {
        label1: "خط 4",
        label2: "وقت الحضور",
        label3: "الزي الرسمي",
        val: "",
        val2: "",
        val3: "",
      },
    ],
    notes: "",
    // row1: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
