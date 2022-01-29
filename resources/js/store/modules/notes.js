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
  },
  [types.ADD_NOTE](state, note) {
    state.notes.unshift(note)
  }
  ,
  [types.DELETE_NOTE](state, id) {
    state.notes = state.notes.filter(note => note.id !== id)
  }
};

// actions
export const actions = {
  async fetchNotes({ commit }) {
    try {
      const response = await axios.get('/api/notes');

      commit(types.FETCH_NOTES, response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async addNote({ commit }, {title, content}) {
    try {
      const response = await axios.post(
        '/api/notes',
        { title, content }
      );

      commit(types.ADD_NOTE, response.data);
    } catch (e) {
      console.log(e);
    }
  },
  async deleteNote({ commit }, id) {
    await axios.delete(`/api/notes/${id}`);

    commit(types.DELETE_NOTE, id);
  }
};
