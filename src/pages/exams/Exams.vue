<template>
        <div class="">
          <v-container>
            <v-row>
             <v-col
                cols="12"
                sm="6"
                md="6"
              >
              <h1 class="mt-3">Exams</h1>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
             
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
               </v-col>
            </v-row>
      <br>
    <v-flex ml-3>
               <Create/>
      </v-flex>
          <br>
       
          <v-card class="pa-5 mx-auto"  :data="exams" v-for="item in exams" :key="item.title" :search="search">
          
            <v-layout row wrap :class="`pa-3 item ${item.grade}`">
              <v-flex xs12 md4>
                <div class="caption grey--text">Exam Title</div>
                <div>{{ item.title }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>  
                <div class="caption grey--text">Topic</div>
                <div>{{ item.topic }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Date Time</div>
                <div>{{ item.datetime }}</div>
              </v-flex>
            <v-flex xs2 sm4 md2>
              <div>
              <!-- <v-chip medium :class="` ${item.status} white--text  pa-3`">{{ item.status }}</v-chip> -->
              <div class="caption grey--text">Grade</div>
              <div> {{ item.grade }} </div>
              </div>
            </v-flex>
            <v-flex xs2 sm4 md1 mx-auto mt-3>
              
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
          @click="editExam(item._id)"
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

              <v-btn   @click="submitEdit()" class="float-right"
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
            </v-flex>
            <v-flex xs2 xsm4 md1 mt-3>
            
              <v-btn    color="red accent-4"
          dark
          small
          mt-2 @click="deleteExam(item._id)" class="float-right" >
											<v-icon left>
												mdi-delete
											</v-icon>
											Delete
										</v-btn>
         
            </v-flex>

            </v-layout>
            
          </v-card>
          <v-divider></v-divider>
          </v-container>
          
        </div>
      
     
   


  
</template>

<script>
import axios from '@/config'
import Create from '@/pages/exams/Create.vue'


export default {
  name: 'Exams',
  components: {
    Create,
    
    
  },
 
  data(){
		return {
       dialog: false,
      exam:{},
        field: {
          id: '',
          subject_id: '',
          title: '',
          topic: '',
          datetime: '',
          location: '',
          grade_percent: '',
          grade: '',
          alert_datetime: ''
        },
      
        search:'',
        exams:[],
        
      
		}
	},
  mounted(){
    this.getData()
    },
 methods: {
		getData(){ 	let token = localStorage.getItem('token')
    let user_id = localStorage.getItem('user_id')
			axios
					.get(`exams/user/${user_id}`,
				{
					headers: {
						"Authorization" : `Bearer ${token}`
					}
				})
				.then(response => {
						console.log(response.data)
						this.exams = response.data
					}
				)
				.catch(error => console.log(error))
 },
 editExam(id){
			let token = localStorage.getItem('token')
			axios
				.get(`exams/${id}`,
				{
					headers: {
						"Authorization" : `Bearer ${token}`
					}
				})
				.then(response => {
						console.log(response.data)
                        this.field.id = response.data._id
                        this.field.subject_id = response.data.date
                        this.field.title = response.data.title
                        this.field.topic = response.data.topic
                        this.field.datetime = response.data.datetime
                        this.field.location = response.data.location
                        this.field.grade_percent = response.data.grade_percent
                        this.field.grade = response.data.grade
                        
                      
					}
				)
				.catch(error => console.log(error))
		},
    submitEdit() {
				let token = localStorage.getItem('token')
				let user_id = localStorage.getItem('user_id')

				axios.put(`/exams/${this.field.id}`, {
						user_id: user_id,
						title: this.field.title,
						topic: this.field.detail,
						datetime: this.field.day,
						location: this.field.dateStart,
						grade_percent: this.field.grade_percent,
            grade: this.field.grade,
					}, {
						headers: {
							"Authorization": `Bearer ${token}`
						}
					})
					.then(response => {
						console.log(response.data)
						location.reload()
					})
					.catch(error => {
						console.log(error)
						console.log(error.response.data)
						alert("There was a problem editing this exam.")
					})
			},
      deleteExam(id) {
				let token = localStorage.getItem('token')
				if (confirm("Do you really want to delete?")) {
					axios.delete(`/exams/${id}`, {
							headers: {
								"Authorization": `Bearer ${token}`
							}
						})
						.then(response => {
							console.log(response.data)
							location.reload()
						})
						.catch(error => {
							console.log(error)
							alert("There was a problem deleting this exam.")
						})
				}
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
.item.A {
  border-left: 4px solid #3cd1c2;
}
.item.B{
  border-left: 4px solid orange;
}
.item.C {
  border-left: 4px solid red;
}
.v-chip.completed {
  background: #3cd1c2 !important;;
}
.v-chip.upcoming {
  background: orange !important;
}
.v-chip.missed {
  background: red !important;
}


</style>
