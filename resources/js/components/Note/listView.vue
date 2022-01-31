<template>
    <div class="container">
        <div>
            <div class="addNote">
                <input type="text" class="newNoteInput" v-model="newNote.title" placeholder="new note"/>
                <button type="button" class="newNoteButton"
                @click="addNote()"
                :class="[newNote.title ? 'active' : 'inactive']">Add</button>
            </div>
            <div class="noteHeader">
                <div v-for="(note, index) in notes" :key="index" class="title" v-bind:id="note.id" @click="selectNote(note)"     >
                    <list-note 
                    class="note" 
                    :note="note"
                    />
                </div>
            </div>
       </div>
       <div class="noteContent" >
           <view-note
            :selectNoteData="selectNoteData"
            v-on:notechanged="$emit('reloadNote')"
           />
       </div>
       
    </div>
</template>

<script>
import listNote from "../Note/listNote.vue"
import viewNote from "../Note/viewNote.vue"

export default {
    props: ['notes'],
    components: {
        listNote,
        viewNote
    },
    data: function(){
        return {
            firstData: this.notes,
            selectNoteData: [],
            newNote: {
                title: "",
                content: "new content"
            }


        }
        
    },
    methods: {
        selectNote(note){
            this.selectNoteData = note;
            this.noteHeaderHighlight(note.id);
        },
        noteHeaderHighlight(id){
            var elements = document.getElementsByClassName("title");
            for(var i = 0; i < elements.length; i++){
		        elements[i].style.backgroundColor = "#e6e6e6";
	        }
            document.getElementById(id).style.backgroundColor = "#c9c95d";
        },
        addNote(){
            if (this.newNote.title == ""){
                this.newNote.title = "new note"
            } 
            axios.post('api/note/store',{
                note: this.newNote
                
            })
            .then (response => {
                if( response.status == 201){
                    this.newNote.title = "";
                    this.$emit('reloadNote');
                    this.selectNoteData = response.data;
                    setTimeout(() => this.noteHeaderHighlight(this.selectNoteData.id), 300)
                    
                    
                }
            })
            .catch( error => {
                console.log(error);
            })
        },
        
    },
    created(){
        setTimeout(()=>this.selectNote(this.notes[0]),300);
    
    }
}
</script>
<style scoped>
.note{
    background: #e6e6e6;
    padding: 5px;
    margin: 1px;
}
.title{
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
.container{
    display: flex;
}

.noteHeader{
    width: 270px;
    overflow: scroll;
    height: 250px;
    
}
.noteContent{
    flex-grow: 1;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    margin-left: 5px;
    background: #c9c95d
}
.active {
  color: red;
}
.addNote{
    display:flex;
    align-items: center;
    height: 40px;
}
.newNoteInput{
    width: 120%;
    height: 20px;
}
.newNoteButton{
    height: 26px;
    
}
.input{
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
    height: 10px;
}
.active{
    color: #c9c95d;
}
.inactive{
    color: #999999;
}
</style>
