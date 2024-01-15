import { createStore } from 'vuex'

const store = createStore({
    state:{
        isDropDowenViseble:false,
    },
    mutations:{
        toggleDropDowen(state){
            state.isDropDowenViseble = !state.isDropDowenViseble
        }
    },
    actions:{
        toggleDropDowen(context){
            context.commit('toggleDropDowen')
        }
    },
    getters:{
        isDropDowenViseble(state){
            return state.isDropDowenViseble
        }
    }
})

export default store;