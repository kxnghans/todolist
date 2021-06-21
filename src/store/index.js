import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: { //synchronous update of state
    setTodos (state, todos) {
      state.todos = todos
    },
    addItem (state, newItem) {
      state.todos.push(newItem)
      console.log(newItem + " added")
    },
    removeItem (state, tid) {
      //state.todos.filter(t => t.id !== tid)
      let todos = state.todos.splice(tid, 1)
      state.todos != todos
      console.log("index " + tid +  " removed")
    }
  },
  actions: { //asynchronous
    async addItem({commit}, newItem) {
      commit("addItem", newItem)
    },
    async removeItem ({commit}, tid) {
      commit("removeItem", tid)
    }
  },
  /*getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    }
  },*/
  modules: {
  }
})
