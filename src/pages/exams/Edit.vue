<template>
  <v-row >
    <v-dialog
      v-model="dialog"
     
      max-width="600px"
    >
          <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="blue darken-2"
          dark
          small
          mt-2
          @click="getData()"
          v-bind="attrs"
          v-on="on"
        >
          Edit
         <v-icon right>mdi-pencil-outline</v-icon>
        </v-btn>
          </template>
    <v-card>
       <v-card-title>
          <span class="text-h5">Edit An Exam</span>
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
                color=" blue darken-2"
                dark
              >
                Edit Exam
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

  name: 'EditExam',
  components: {
    
    
    
  },
  props: {
    id: Object
  },
  
  data(){
		return {
      search:'',
      dialog: false,
      exam:{},
      field: {
        subject_id: '',
				title: '',
				topic: '',
				datetime: '',
				location: '',
				grade_percent: '',
				grade: '',
        alert_datetime: ''
			},
      
    
		}
	},
  mounted(){
    this.getData()
  },
  

  methods: {
     getData(){
			let token = localStorage.getItem('token')
			axios
				.get(`exams/${this.$route.params.id}`,
				{
					headers: {
						"Authorization" : `Bearer ${token}`
					}
				})
				.then(response => {
						console.log(response.data)
                        
                        this.field.subject_id = response.data.date
                        this.field.title = response.data.time
                        this.field.topic = response.data.status
                        this.field.datetime = response.data.course_id
                        this.field.location = response.data.lecturer_id
                        this.field.grade_percent = response.data.grade_percent
                        this.field.grade = response.data.grade
                        this.field.alert_datetime = response.data.alert_datetime
                      
					}
				)
				.catch(error => console.log(error))
		},
    submitForm(){
			let token = localStorage.getItem('token')
			axios
			.put(`exams/${this.exams_id}`, this.field, {
				headers: {
					"Authorization" : `Bearer ${token}`
				}
			})
			.then(response =>{
				console.log(response.data)
				this.$router.push({
					name: "exams",
                    params: {
                        id: this.$route.params.id
                    }
				})
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
