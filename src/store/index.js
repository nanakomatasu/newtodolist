import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  getters: {},
  mutations: {
    changelist(state, newlist) {
      state.list = newlist;
    },
  },
  actions: {
    async getlist(context) {
      const res = await axios({
        method: "get",
        url: "http://localhost:3000/todos",
      });
      console.log(context);
      console.log(res.data);
      context.commit("changelist", res.data);
      console.log(this.state.list);
    },
    async addlist(context, obj) {
      await axios({
        method: "post",
        url: "http://localhost:3000/todos",
        data: {
          name: obj.name,
          done: obj.done,
        },
      });
      context.commit("changelist");
      context.dispatch("getlist");
    },
  },
  modules: {},
});
