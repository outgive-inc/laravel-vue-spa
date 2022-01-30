import axios from 'axios';
import * as types from '../mutation-types';

// state
export const state = {
  notes: [],
  note: {
    id: '',
    title: '',
    content: ''
  },
  edit: false,
  errors: ''
};

// getters
export const getters = {
  allNotes: state => state.notes,
  currentNote: state => state.note,
  editMode: state => state.edit,
  validationErrors: state => state.errors
};

// mutations
export const mutations = {
  [types.FETCH_NOTES] (state, notes) {
    state.notes = notes
  },
  [types.ADD_NOTE](state, note) {
    state.errors = '';
    state.notes.unshift(note)
  },
  [types.DELETE_NOTE](state, id) {
    state.notes = state.notes.filter(note => note.id !== id)
  },
  [types.EDIT_NOTE](state, note) {
    state.note = {...note},
    state.edit = true
  },
  [types.CLEAR_NOTE_FORM](state) {
    state.errors = '';
    state.note = {
      id: '',
      title: '',
      content: ''
    },
    state.edit = false
  },
  [types.UPDATE_NOTE](state, updatedNote) {
    state.errors = '';
    const updatedNotes = state.notes.filter(note => note.id !== updatedNote.id);
    updatedNotes.unshift(updatedNote);
    state.notes = updatedNotes;
  },
  [types.STORE_NOTE_ERRORS](state, errors) {
    errors = Object.values(errors);
    errors = errors.flat();
    state.errors = errors;
  }
};

// actions
export const actions = {
  async fetchNotes({ commit }) {
    try {
      const response = await axios.get('/api/notes');

      commit(types.FETCH_NOTES, response.data);
    } catch (err) {
      console.log(err);
    }
  },
  async addNote({ commit }, {title, content}) {
    try {
      const response = await axios.post(
        '/api/notes',
        { title, content }
      );

      commit(types.ADD_NOTE, response.data);
      commit(types.CLEAR_NOTE_FORM);
    } catch (error) {
      if (error.response.status == 422 && error.response.data && error.response.data.errors) {
        commit(types.STORE_NOTE_ERRORS, error.response.data.errors);
      };
    }
  },
  async deleteNote({ commit }, id) {
    await axios.delete(`/api/notes/${id}`);

    commit(types.DELETE_NOTE, id);
  },
  async editNote({ commit }, note) {
    commit(types.EDIT_NOTE, note);
  },
  async clearForm({ commit }) {
    commit(types.CLEAR_NOTE_FORM);
  },
  async updateNote({ commit }, { id, title, content }) {
    try {
      const response = await axios.put(
        `/api/notes/${id}`,
        { title, content }
      );

      commit(types.UPDATE_NOTE, response.data);
      commit(types.CLEAR_NOTE_FORM);
    } catch (error) {
      if (error.response.status == 422 && error.response.data && error.response.data.errors) {
        commit(types.STORE_NOTE_ERRORS, error.response.data.errors);
      };
    }
  }
};
