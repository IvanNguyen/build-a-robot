import axios from 'axios';

export default {
    // namespaced: true,
  state: {
    user: null,
    // foo: 'user-foo'
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    foo(state, getter, rootState){
        return `users-getter/${rootState.foo}`;
    }
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};