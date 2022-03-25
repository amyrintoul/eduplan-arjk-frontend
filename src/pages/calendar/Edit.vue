<template>
  <v-row >
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
   
    <template v-slot:activator="{ on, attrs }">
      <v-btn
            icon            
            color="white"
            v-bind="attrs"
            v-on="on"            
          >
           <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>
          </template>
    <v-card>
       <v-card-title>
          <span class="text-h5">Edit Event</span>
        </v-card-title>
        <v-container>
            <v-row class="pa-3">
                <v-col
                cols="12"
                sm="6"
                md="6"
              > <v-text-field
                  label="User id"
                  v-model="field.user_id"
                  required
                  prepend-inner-icon="mdi-account"

                ></v-text-field>
                                </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
                
              >
                <v-text-field
                  label="Title"
                  required
                  v-model="field.title"
                  prepend-inner-icon="mdi-format-title"

                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
              
              >
                <v-text-field
                  label="Description"
                  v-model="field.description"
                  prepend-inner-icon="mdi-sticker-text"
                 
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Start Date"
                  v-model="field.start_datetime"
                   prepend-inner-icon="mdi-calendar-range"

                 
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="End Date"
                  v-model="field.end_datetime"
                  prepend-inner-icon="mdi-calendar-range"
                 
                ></v-text-field>
                </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
               
                 <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                          <v-btn
                            :color="new_color"
                            dark
                            v-on="on"
                          >
                            Event Color
                          </v-btn>
                        </template>
                        <v-color-picker
                        value="#7417BE"
                        v-model="new_color"
                        hide-canvas 
                        hide-inputs 
                        show-swatches
                        class="mx-auto"
                      ></v-color-picker>
                      </v-menu>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
                               
                <v-spacer></v-spacer>
                          
 
                    
              <v-btn   @click="submitForm()" class="float-right"
                color="orange darken-3 mt-10"
                dark
              >
                Edit Event
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

  name: 'EditCalendar',
  components: {
      
    
    
  },
  data(){
		return {
      search:'',
      dialog: false,
      events: [],
      field: {
        user_id: '',
				title: '',
				descrition: '',
        color: '',
				start_datetime: '',
				end_datetime: '',
        alert_datetime: ''
			},
       new_color: '#00000',
      mask: '!#XXXXXXXX',
      menu: false,
    
		}
	},
  methods: {
     getData(){
			let token = localStorage.getItem('token')
			axios
				.get(`events/${this.event_id}`,
				{
					headers: {
						"Authorization" : `Bearer ${token}`
					}
				})
				.then(response => {
						console.log(response)
                        
                        this.field.user_id = response.data.name
                        this.field.title = response.data.address
                        this.field.description = response.data.email
                        this.field.color = response.data.phone
                        this.field.start_datetime = response.data.start_datetime
                        this.field.end_datetime = response.data.end_datetime
                        this.field.alert_datetime = response.data.alert_datetimes
                        
					}
				)
				.catch(error => console.log(error))
		},
    submitForm(){
			let token = localStorage.getItem('token')

			axios
			.put('events',

			{ // First set of curly braces = data you want to post
        user_id: this.field.user_id,
				title: this.field.title,
				description: this.field.description,
        color: this.field.color,
				start_datetime: this.field.start_datetime,
				end_datetime: this.field.end_datetime,
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
				this.$router.push({
					name: "/calendar"
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
