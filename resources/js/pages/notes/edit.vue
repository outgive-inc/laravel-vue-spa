<template>

    <div class="row">
        <div class="col-lg-10 m-auto">
            
            <h4>Edit Note</h4>
            
            <form class="mt-4" @submit.prevent="editNote">
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
    name: 'edit-note',
    
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

    mounted(){
        this.getNote();
    },

    methods:{
        
        async getNote(){
            await axios.get(`/api/note/${this.$route.params.id}`)
                .then(response=>{
                    const {title , content} = response.data
                    this.note.title  = title,
                    this.note.content = content
                })
                .catch(function (error) {
                    console.log(error);

                })
        },
        

        async editNote(){

            if(this.note.title != "" && this.note.content != ""){

                await axios.put(`/api/note/${this.$route.params.id}`, this.note)
                    .then(response=> {
                        this.$router.push({ name: "notes"})
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