<template>
    <section class="mb-5 col-lg-10 m-auto">
        <div class="card mt-4">
          <h5 class="card-header">Notes</h5>
          <div class="card-body">
            <router-link tag="button" class="btn btn-success" :to="{ name: 'note.crate' }"> Create Note</router-link>
          </div>
        </div>

        <div v-for="note in notes" :key="note.id" class="card mt-4">
            <div class="card-body bg-light">
                <h5 class="card-title">{{note.title}}</h5>
                    <p class="card-text">{{note.content}}</p>
                    <router-link tag="button" class="btn btn-outline-primary btn-sm" :to="{ name: 'note.edit', params:{id: note.id} }"> Edit Note</router-link>
                    <button class="btn btn-outline-danger btn-sm" @click="delteNote(note.id)">Delete Note</button>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{note.created_at.slice(0, 10)}}</small>
            </div>
        </div>
        
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    name: "notes",

    middleware: 'auth',

    computed: mapGetters({
        user: 'auth/user'
    }),

    
    data(){
        return{
            notes: []
        }
    },

    mounted(){
        this.getNotes();
    },

    methods:{
        async getNotes(){
            await axios.get('/api/note')
                .then(response=>{
                    this.notes = response.data
                })
                .catch(function (error) {
                    console.log(error);

                })
        },

        async delteNote(id){

           await axios.delete(`/api/note/${id}`)
                .then(respones=> {
                    this.getNotes();
                })
                .catch(function (error) {
                    console.log(error);
                })

        }
    }
    
    
}
</script>