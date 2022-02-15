<template>
  <div id="root">
  <div class="note-container">
    <div class="note-wrap">
      <NoteInput :addNote="addNote" />
      <NoteList :notes="notes" />
      <NoteFooter />
    </div>
  </div>
</div>
</template>

<script>

import NoteInput from '../components/note/NoteInput'
import NoteList from '../components/note/NoteList'
import NoteFooter from '../components/note/NoteFooter'

export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('note') }
  },
  name:'Note',
  components:{NoteInput, NoteList, NoteFooter},
  data() {
    return {
        notes:JSON.parse(localStorage.getItem('notes')) || []
    }
  },
  methods:{
    // method to add a note
    addNote(noteObj) {
      this.notes.unshift(noteObj)
    },
    // method to delete a note
    deleteNote(id) {
      this.notes = this.notes.filter((note)=>{
        return note.id !== id;
      })
    },
  },
  watch: {
    notes: {
      handler(value) {
        localStorage.setItem('notes', JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('deleteNote', this.deleteNote)
  },
  beforeDestroyed() {
    this.$bus.$off('deleteNote')
  }
    
}
</script>

<style>
    /*base*/
    body {
      background: #fff;
    }

    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }

    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }

    .btn:focus {
      outline: none;
    }

    .note-container {
      width: 600px;
      margin: 0 auto;
    }
    .note-container .note-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>