<template>
  <v-row >
    <v-dialog
      v-model="dialog"
     
      max-width="600px"
    >
          <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="orange darken-3"
          dark
          small
          mt-2
          v-bind="attrs"
          v-on="on"
        >
          Add
          <v-icon right>mdi-note-plus</v-icon>
        </v-btn>
          </template>
    <v-card>
       <v-card-title>
          <span class="text-h5">Add New Exam</span>
        </v-card-title>
        <v-container>
            <v-row class="pa-3">
                <v-col
                cols="12"
                sm="6"
                md="6"
              > <v-text-field
                  label="Subject id"
                  v-model="field.subject_id"
                  required
                  prepend-inner-icon="mdi-book-account"

                ></v-text-field>
                </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
                
              >
                <v-text-field
                  label="Title"
                  v-model="field.title"
                  required
                  prepend-inner-icon="mdi-format-title"

                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
              
              >
                <v-text-field
                  label="Topic"
                  v-model="field.topic"

                  prepend-inner-icon="mdi-filter-variant"
                 
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Date"
                  v-model="field.datetime"

                   prepend-inner-icon="mdi-calendar-range"

                 
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Location"
                  v-model="field.location"

                  prepend-inner-icon="mdi-map-marker-outline"
                 
                ></v-text-field>
                </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
               <v-select
                  :items="['A', 'B', 'C', 'D' ,'E', 'F']"
                  v-model="field.grade"

                  label="Grade"
                  required
                ></v-select>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Grade Percentage"
                  v-model="field.grade_percent"

                  prepend-inner-icon="mdi-label-percent"
               ></v-text-field>
                 
                <v-spacer></v-spacer>

              <v-btn   @click="submitForm()" class="float-right"
                color="orange darken-3"
                dark
              >
                Add Exam
              </v-btn>
              </v-col>

                

            </v-row>
        </v-container>
    </v-card>
  </v-dialog>
  </v-row>

  
</template>

<script>
import axios from '@/config'


export default {

  name: 'CreateExam',
  components: {
    
    
    
  },
  data(){
		return {
      search:'',
      dialog: false,
      field: {
        subject_id: '',
				title: '',
				topic: '',
				datetime: '',
				location: '',
				grade_percent: '',
				grade: '',
        alert_datetime: ''
			}
    
		}
	},
  methods: {
    submitForm(){
			let token = localStorage.getItem('token')
      let user_id = localStorage.getItem('user_id')

			axios
			.post('exams',

			{ // First set of curly braces = data you want to post
        user_id: user_id,
        done: 'false',
        subject_id: this.field.subject_id,
				title: this.field.title,
				topic: this.field.topic,
				datetime: this.field.datetime,
				location: this.field.location,
				grade_percent: this.field.grade_percent,
        grade: this.field.grade,
        alert_datetime: this.field.alert_datetime
                // created_at: this.field.created_at,
                // updated_at:this.field.updated_at,
		
			},

			// Can also just use "this.form" because our form matches the JSON format exactly:
			
			{ // Second set of curly braces = header(s)
				headers: {
					"Authorization" : `Bearer ${token}`
				}
			})
			.then(response =>{
				console.log(response.data)
			location.reload()
			})
			.catch(err => {
				console.log(err)
				console.log(err.response.data)
			})
		},

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
