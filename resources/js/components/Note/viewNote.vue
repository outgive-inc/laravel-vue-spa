<template>
    <div>
        <textarea class="noteTitle" v-model="selectNoteData.title" @mouseout="autoSave()"></textarea>
        <textarea class="noteContent" v-model="selectNoteData.content" @mouseout="autoSave()"> </textarea>
        <div v-if="selectNoteData.created_at && selectNoteData.updated_at" class="created_at">
            Created At: {{selectNoteData.created_at | formatDate}} <br>
             Last Update: {{selectNoteData.updated_at | formatDate}}
            </div>

        <div>
            
            <input class="deleteButton" value="Delete" @click="deleteNote()"/>
            <input class="saveButton" value="Save" @click="saveNote()"/>
            
        </div>
    </div>
    
</template>

<script>
import moment from 'moment'

export default {
    props: ['selectNoteData'],
    data: function(){
        return{
        
        }
    },
    methods:{
        updateNote(){
            axios.put('api/note/' + this.note.id,{
                note: this.note
            })
            .then(response => {
                if(response.status == 200){
                    
                }
            })
            .catch(error => {
                console.log(error);

            })
            this.$emit('notechanged');
        },
        deleteNote(){
            axios.delete('api/note/' +this.selectNoteData.id)
            .then(response =>{
                if(response.status == 200){
                    this.$emit('notechanged');
                }
            })
            .catch(error => {
                console.log(error);
            })
            
        },
        saveNote(){
            axios.put('api/note/' +this.selectNoteData.id,{
                note: this.selectNoteData

            })
            .then(response =>{
                if(response.status == 200){
                    this.$emit('notechanged');
                }
            })
            .catch(error =>{
                console.log(error);
            })
           
        },
        autoSave(){
            this.saveNote();
        }
    },
    filters: {
        formatDate: function (value){
            return moment(String(value)).format('MM/DD/YYYY hh:mm A')
        }
    }
}
</script>
<style scoped>
.noteContent{
    width: 785px;
    height: 200px;
    resize: none;
    margin: 2px;
}
.noteTitle{
    resize: none;
    width: 785px;
    height: 30px;
}
.deleteButton{
    float: right;
    text-align: center;
    width:55px;
}
.saveButton{
    float: right;
    width:55px;
    text-align: center;
    margin-right:5px;
}
.created_at{
    margin-left: 0px;
}

</style>
