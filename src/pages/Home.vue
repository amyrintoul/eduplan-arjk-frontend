<template>
  <div>
    <v-container>
    <router-view />
    
  <v-row>
      <v-col
        cols="12"
        sm="6"
        md="7"

        
      >
      
          <h1 class="header"  mt="5">A task manager you can trust for life</h1>
          <p class="subtitle">Organise your classes, tasks, exams & even keep track of your holidays!
          Never miss a lecturer or an assignment again when using Eduplan! We even offer
          a study timer all at the click of a button below! All for FREE.
          </p>
        <v-btn
          depressed
          color="orange darken-3"
          dark
          rounded
          href="/register"
          class="mr-3 pa-5"      
        >
          Get Started
        </v-btn>
         <v-btn
          depressed
          color="orange darken-3"
          rounded
          class="pa-5"
          dark
          href="/register"      
        >
          Learn More
        </v-btn>
       
      </v-col>
      <v-col
        cols="6"
        md="5"
      
      >
          <v-img :src="require(`@/assets/phone6.png`)"
                              alt="Education Logo" ></v-img>
        
      </v-col>
    </v-row>
    
   
  
    </v-container>
      <v-container-fluid >
      
        <v-row class="orange darken-3 pa-4" no-gutters >
          
           <v-col
        cols="12"
        md="3"
        align="center">
         <v-card
      class="mx-auto"
      color="orange darken-3"
      dark
      max-width="400"
      flat
    >
      <v-card-title>
        <v-icon
          medium
          left
        >
          mdi-twitter
        </v-icon>
        <span class="text-h6 font-weight-light">Twitter</span>
      </v-card-title>
  
      <v-card-text class="text-h5 font-weight-bold">
        "This app keeps me organised and I love it. I particularly like how it gives me reminders and how I can see them anytime"
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
            src="https://randomuser.me/api/portraits/women/58.jpg"            ></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>Sam Tan</v-list-item-title>
          </v-list-item-content>
  
          <v-row
            align="center"
            justify="end"
          >
           <span class="mr-1">·</span>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
             <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
           </v-col>
  
     
       <v-col
        cols="12"
        md="3"
         align="center"
      >
 <v-card
      class="mx-auto"
      color="orange darken-3"
      dark
      max-width="400"
      flat
      
    >
      <v-card-title>
        <v-icon
          medium
          left
        >
          mdi-facebook
        </v-icon>
        <span class="text-h6 font-weight-light">Facebook</span>
      </v-card-title>
  
      <v-card-text class="text-h5 font-weight-bold">
        "A very good app to organise my work, and it has a clean UI. Plus, the cloud sync across devices is sick."
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://randomuser.me/api/portraits/women/17.jpg"
            ></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>Shauna Matthew</v-list-item-title>
          </v-list-item-content>
  
          <v-row
            align="center"
            justify="end"
          ><span class="mr-1">·</span>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
             <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
      </v-col>
      <v-col
      
        cols="12"
        md="3"
         
      >
         <v-card
      class="mx-auto"
      color="orange darken-3"
      dark
      max-width="400"
      flat
    >
      <v-card-title>
        <v-icon
          medium
          left
        >
          mdi-instagram
        </v-icon>
        <span class="text-h6 font-weight-light">Instagram</span>
      </v-card-title>
  
      <v-card-text class="text-h5 font-weight-bold">
        "You can really depend on this app! You can track everything you need to do for college. It manages everything well!"
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://randomuser.me/api/portraits/men/30.jpg"
            ></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>
  
          <v-row
            align="center"
            justify="end"
          >
          <span class="mr-1">·</span>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings-outline
            </v-icon>
             <v-icon class="mr-1">
              mdi-star-settings-outline
            </v-icon>
            
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>

      </v-col>
      <v-col
        cols="12"
        md="3"
         
      >
      <v-card
      class="mx-auto"
      color="orange darken-3"
      dark
      max-width="400"
      flat
    >
      <v-card-title>
        <v-icon
          medium
          left
        >
          mdi-linkedin
        </v-icon>
        <span class="text-h6 font-weight-light">LinkedIn</span>
      </v-card-title>
  
      <v-card-text class="text-h5 font-weight-bold">
        "Easy to use. Huge potential. I highly recommend this for any student who finds it difficult to organise life."
      </v-card-text>
  
      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              src="https://randomuser.me/api/portraits/men/80.jpg"
            ></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>Matthew Adams</v-list-item-title>
          </v-list-item-content>
  
          <v-row
            align="center"
            justify="end"
          >
          <span class="mr-1">·</span>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
            <v-icon class="mr-1">
              mdi-star-settings
            </v-icon>
             <v-icon class="mr-1">
              mdi-star-settings-outline
            </v-icon>
            
          
        
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
      </v-col>
    </v-row>
        
    </v-container-fluid>
  <v-container>
      <v-col cols="12" align="center">
         <v-col cols="12" md="10">
         <v-card-text>
           <p class="font">Make your education easier to manage!</p>
           <p class="subtitle-1 mt-6">
             You can receive notifications of upcoming classes, assignments or exams, as well as incomplete tasks, on all your devices.Eduplan  supports rotation timetables, as well as traditional weekly schedules. Eduplan allows you to enter your school subjects, organize your classes, and enter information about your lessons – all so you can effortlessly keep on track of your schedule..
           </p>
         </v-card-text>
         </v-col>       
      </v-col>  


<v-row no-gutters>
          <v-col cols="6" md="3">
            <v-card flat>
              <v-card-title>Step 1
                <v-spacer></v-spacer>
                <v-icon size="35" >mdi-arrow-right-thick</v-icon>
              </v-card-title>
              <v-card-text>
                Firstly, you need to Create an account by clicking the Register button or the 
                get started button.
              </v-card-text>
            </v-card>
            
          </v-col>
          
            <v-col cols="6" md="3">
              <v-card flat>
            <v-card-title>
              Step 2
              <v-spacer></v-spacer>
              <v-icon size="35" class="move">mdi-arrow-right-thick</v-icon>
            </v-card-title>
            <v-card-text>
              Once you have Registered you will need to Login to the account you just created. 
            </v-card-text>

          </v-card>
            
            </v-col>
          <v-col cols="6" md="3">
            <v-card flat>
            <v-card-title>
              Step 3
              <v-spacer></v-spacer>
              <v-icon size="35" >mdi-arrow-right-thick</v-icon>
             </v-card-title>
             <v-card-text>
               You will be brought to your dashboard, click the links side navbar to
               personalise your account. 
             </v-card-text>
          </v-card>
            
          </v-col>
          <v-col cols="6" md="3">
            <v-card flat>
            <v-card-title>
              Step 4
            </v-card-title>
            <v-card-text>
              Once you have added all your data you can use your account wherever and whenver you want! 
            </v-card-text>
          </v-card>
          </v-col>
</v-row>  


      
      
    </v-container>
     <Footer />
  
  </div>
    
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    
    Footer
    
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap');
.header {
font-family: 'Playfair Display', serif;
font-size: 65px;
  
}
.font{
  font-family: 'Playfair Display', serif;
  font-size:2.6rem;

}
.icon-size{
  font-size: 30px;
}



</style>
