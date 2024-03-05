import { createStore } from 'vuex'

const moduleA = {
  state: () => ({ 
    // state for module A 
    isDropDowenViseble: false,
    cartItems: [], // добавьте это
  }),
  mutations: { 
    // mutations for module A 
    toggleDropDowen(state) {
      state.isDropDowenViseble = !state.isDropDowenViseble
    },
    // добавьте мутацию для обновления cartItems
    updateCartItems(state, items) {
      state.cartItems = items;
    }
  },
  actions: { 
    // actions for module A 
    toggleDropDowen(context) {
      context.commit('toggleDropDowen')
    },
    // добавьте действие для обновления cartItems
    updateCartItems(context, items) {
      context.commit('updateCartItems', items);
    }
  },
  getters: { 
    // getters for module A 
    isDropDowenViseble(state) {
      return state.isDropDowenViseble
    },
    // добавьте геттер для cartItems
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