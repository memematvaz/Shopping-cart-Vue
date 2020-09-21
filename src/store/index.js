import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itemList: [],
  },
  mutations: {
    addToList(state, data) {
      const index = state.itemList.map(item => item.id).indexOf(data.id);
      if (index === -1) {
          state.itemList.push(data);          
      } else {
        state.itemList[index].quantity += 1;
      }
    },
    removeFromList(state, itemId) {
      state.itemList = state.itemList.filter((item) => item.id !== itemId);
    },
    clearList(state, ){
      state.itemList = []
    },
  },
  actions: {
    addToList(context, item) {
      return new Promise((resolve, reject) => {
        this.commit('addToList', item);
        resolve();
      })
    },
    removeFromList(context, itemId) {
      return new Promise((resolve, reject) => {
        this.commit('removeFromList', itemId);
        resolve();
      })
    },
    clearList(context, ){
      return new Promise((resolve, reject) => {
        this.commit('clearList', );
        resolve();
      })
    },
  },
  getters: {
    itemList(state) { return state.itemList; },
  },
});
