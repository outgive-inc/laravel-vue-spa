<template>
    <div class="NoteListContainer">
        <div class="heading">
            <h2 id="title">Stallion Express Note Taking App Test</h2>
            Total Note: {{notes.length}}
        
        </div>
        <list-view 
        :notes="notes"
        v-on:reloadNote="getList()"
        v-on:contentChanged="contentChangedSignal()"/>
        
    </div>
</template>

<script>

import ListView from "./listView.vue"

export default {
    components:{

        ListView
    },
    data: function(){
        return {
            notes: [],
        }
    },
    methods:{
        getList(){
            axios.get('api/notes')
            .then(response => {
                this.notes = response.data
            })
            .catch(error =>{
                console.log(error);
            })
        }
    },
    created(){
        this.getList();
    },
    
}
</script>
<style scoped>
.NoteListContainer{
    width: 1090px;
    margin: auto;
}
.heading{
    background: #e6e6e6;
    padding: 10px;
}
#title{
    text-align: center;
}
</style>