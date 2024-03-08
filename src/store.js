import { createStore } from 'vuex'

const moduleA = {
  state: () => ({ 
    isDropDowenViseble: false,
    cartItems: [],
    isAuthenticated: false,
  }),
  mutations: { 
    toggleDropDowen(state) {
      state.isDropDowenViseble = !state.isDropDowenViseble
    },
    updateCartItems(state, items) {
      state.cartItems = items;
    },
    setAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
  },
  actions: { 
    toggleDropDowen(context) {
      context.commit('toggleDropDowen')
    },
    updateCartItems(context, items) {
      context.commit('updateCartItems', items);
    },
    authenticate({ commit }, password) {
      return new Promise((resolve) => {
        if (password === '210185') {
          commit('setAuthenticated', true);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    },
  },
  getters: { 
    isDropDowenViseble(state) {
      return state.isDropDowenViseble
    },
    cartItems(state) {
      return state.cartItems;
    }
  }
}

export default createStore({
  modules: {
    a: moduleA,
  }
})