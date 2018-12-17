import axios from 'axios';

export const namespaced = true;

export const state = {
  list: []
};

export const mutations = {
  updateList (state, value) { state.list = value; }
};

export const actions = {
  async load ({state, commit}) {
    const {data} = await axios.get('/api/services');
    commit('updateList', data.list);
  },

  new () {
    return axios.get('/api/services/new');
  },

  async create ({state, dispatch}, value) {
    await axios.post('/api/services', value);
    dispatch('load');
  },

  edit (store, id) {
    return axios.get(`/api/services/${id}/edit`);
  },

  async update ({dispatch}, value) {
    await axios.patch(`/api/services/${value.id}`, value);
    dispatch('load');
  },

  async destroy ({dispatch}, value) {
    await axios.delete(`/api/services/${value.id}`);
    dispatch('load');
  }
};

export const getters = {

};

export default {
  namespaced: true, state, mutations, actions, getters
};
