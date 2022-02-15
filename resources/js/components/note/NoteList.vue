<template>
    <div class="note-main">
        <NoteItem v-for="noteObj in notes" :key="noteObj.id" :note="noteObj" />
    </div>
</template>

<script>

import NoteItem from './NoteItem'

//here should get the notes data from service
export default {
    name:"NoteList",
    components:{NoteItem},
    props:['notes']
}


</script>

<style scoped>
    /*main*/
    .note-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .note-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>