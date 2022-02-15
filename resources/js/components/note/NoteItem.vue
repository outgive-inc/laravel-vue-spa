<template>
    <div class='listItem'>
        <div class='content'>
            <!-- <input type="checkbox" :checked="note.done"/> -->
            <h1>{{note.title}}</h1>
            <p>{{note.content}}</p>
        </div>
        <button class="btn btn-danger" @click="handleDelete(note.id)">删除</button>
    </div>
</template>

<script>
    export default {
        name:"Item",
        props:['note'],
        methods: {
            //method to delet note list item
            handleDelete(id) {
                if(confirm('Are you sure to delete?')) {
                    // this.deleteNote(id);
                    this.$bus.$emit('deleteNote', id)
                }
            }
        },
    }
</script>

<!--<style scoped>

    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style> -->

<style scoped>

    /*item*/
    /* div {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    } */
    .listItem { 
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }
    
    .listItem:hover { 
        background-color: #ddd;
    }

    .listItem:hover button { 
        display:block;
    }

    /* div label {
        float: left;
        cursor: pointer;
    } */

    div button {
        /* float: right; */
        display: none;
        margin-top: 3px;
    }

    div:before {
        content: initial;
    }

    div:last-child {
        border-bottom: none;
    }
</style>