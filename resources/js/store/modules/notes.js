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
  edit: false
};

// getters
export const getters = {
  allNotes: state => state.notes,
  currentNote: state => state.note,
  editMode: state => state.edit
};

// mutations
export const mutations = {
  [types.FETCH_NOTES] (state, notes) {
    state.notes = notes
  },
  [types.ADD_NOTE](state, note) {
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
    state.note = {
      id: '',
      title: '',
      content: ''
    },
    state.edit = false
  },
  [types.UPDATE_NOTE](state, updatedNote) {
    const updatedNotes = state.notes.filter(note => note.id !== updatedNote.id);
    updatedNotes.unshift(updatedNote);
    state.notes = updatedNotes;
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
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
    }
  }
};
