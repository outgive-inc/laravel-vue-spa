import axios from 'axios';
import * as types from '../mutation-types';

// state
export const state = {
  notes: []
};

// getters
export const getters = {
  allNotes: state => state.notes
};

// mutations
export const mutations = {
  [types.FETCH_NOTES] (state, notes) {
    state.notes = notes
  }
};

// actions
export const actions = {
  async fetchNotes({ commit }) {
    const response = await axios.get('/api/notes');

    commit(types.FETCH_NOTES, response.data)
  }
};
