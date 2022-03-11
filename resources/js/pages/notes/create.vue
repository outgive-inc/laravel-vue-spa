<template>

    <div class="row">
        <div class="col-lg-10 m-auto">
            
            <h4>Create a new note</h4>
            
            <form class="mt-4" @submit.prevent="createNote">
                <h4 v-if="formFilled" class="text-danger">Please Fill in all Required Fields</h4>
                <div class="mb-3 col-lg-6" >
                    <label for="title" class="form-label">Title</label>
                    <input v-model="note.title" type="text" class="form-control" id="title" required>
                </div>

                <div class="mb-3 col-lg-6">
                    <label for="content" class="form-label">Content</label>
                    <textarea v-model="note.content" class="form-control" id="content" rows="3" required></textarea>
                </div>

                <div class="mb-3 col-lg-6">
                    <button class="btn btn-primary" type="submit">Submit</button>
                    <router-link class="btn btn-danger" :to="{name: 'notes'}" tag="button">Cancel</router-link>

                </div>
            </form>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    name: 'create-note',

    middleware: 'auth',

    computed: mapGetters({
        user: 'auth/user'
    }),


    data(){
        return{
            note:{
                title:"",
                content:""
            },

            formFilled: false
        }
    },

    methods:{
        
        async createNote(){

            if(this.note.title != "" && this.note.content != ""){

                await axios.post('/api/note', this.note)
                .then(response=> {
                    this.$router.push({name: "notes"})
                })
                .catch(response=> {
                    console.log(error)
                })

            }else{
                this.formFilled = true;
            }

        }
    }


}
</script>