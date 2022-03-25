<template>
  <v-row >
    <v-dialog
     v-model="dialog"
      max-width="500px"
    >
          <template v-slot:activator="{ on, attrs }">
            
        <v-btn
          color="red accent-4"
          dark
          small
          mt-2
          v-bind="attrs"
          v-on="on"
        >
          Del
            <v-icon small>mdi-delete</v-icon>
        </v-btn>
          </template>
   
          <v-card>
            <div  align="center" class="pa-2" >
            <v-icon class="mt-8" x-large color="red"  >mdi-progress-close</v-icon>
            </div>
        <v-card-title class="text-h5">
          Are you sure you want to delete this item? 
          
        </v-card-title>
    
        <v-card-text class="mb-4">
          Are you sure you want to delete this Exam? This process cannot be undone!!
          <br>
           <v-spacer></v-spacer>
          <v-btn
          color="red accent-4"
          dark
          small
          class="float-right mt-1 pa-3"
          @click="deleteExam()"
          v-bind="attrs"
          v-on="on"
          
        >
          Delete
            
        </v-btn>
        </v-card-text >
       

        <v-container>
          
        </v-container>
    </v-card>
  </v-dialog>
  </v-row>

  
</template>

<script>
import axios from '@/config'


export default {
  
  name: 'DeleteExam',
  components: {
    
    
    
  },
  data(){
		return {
      search:'',
      dialog: false,

      
		}
	},
  methods: {
    deleteExam() {

            let token = localStorage.getItem('token')

            axios.delete(`/exams/${this.$route.params.id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })

                .then(response => {
                     console.log(response.data.data)
                    location.reload()

                })

                .catch(error => {
							console.log(error)
							alert("There was a problem deleting this exam.")
						})
		}
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');
.main-header {
  font-size: 63px;
  font-family: 'Jockey One', sans-serif;
  
}



</style>
