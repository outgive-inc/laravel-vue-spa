<template>
    <div class="note-input">
        <input type="text" placeholder="Please enter title" v-model="title"  />
        <textarea type="text" placeholder="Please enter the content" v-model="content"></textarea>
        <button v-on:click="add">Add</button>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name:"NoteInput",
    props:['addNote'],
    data() {
        return {
            title:'',
            content:''
        }
    },
    methods: {
        add() {
            //data validation
            if(!this.title) return alert('Title should not be empty')
            const noteObj = {id:nanoid(), title:this.title, content:this.content, done:false}
            //ask note.vue component to add the new noteObj
            this.addNote(noteObj)
            //empty the notes input area

        }
    }
}
</script>

<style scoped>
    /*header*/
    
    .note-input {
        margin-bottom: 20px;
    }

    .note-input input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .note-input textarea {
        width: 560px;
        height: 100px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .note-input input:focus, textarea:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>