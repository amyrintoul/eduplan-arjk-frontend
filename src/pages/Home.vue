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
          rounded="7"
          href="/register"
          class="mr-3 pa-5"      
        >
          Get Started
        </v-btn>
         <v-btn
          depressed
          color="orange darken-3"
          rounded="7"
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
          <v-img :src="require(`@/assets/phone3.png`)"
                              alt="Education Logo" ></v-img>
        
      </v-col>
    </v-row>
    
   
  
    </v-container>
     <v-container-fluid >
        <v-row class="grey lighten-3 pa-4" no-gutters >
           <v-col
        cols="6"
        md="3"
        align="center"
      >
        
          <v-icon size="70" color="black">mdi-calendar</v-icon>
            <p class="subtitle-1">Calendar</p>
       
      </v-col>
       <v-col
        cols="6"
        md="3"
         align="center"
      >
        
          <v-icon size="70" color="black">mdi-note-edit</v-icon>
            <p class="subtitle-1">Exams</p>
    
      </v-col>
      <v-col
        cols="6"
        md="3"
         align="center"
      >
        
        <v-icon size="70" color="black">mdi-clipboard-text</v-icon>
       <p class="subtitle-1">Assignments</p>
      </v-col>
      <v-col
        cols="6"
        md="3"
         align="center"
      >
        
        <v-icon size="70" color="black">mdi-av-timer</v-icon>
          <p class="subtitle-1">Study Timer</p>
          
        
      </v-col>
    </v-row>
        
    </v-container-fluid>
    <v-container>
       <v-col cols="12" align="center">
         <v-col cols="10">
         <v-card-text>
           <p class="font">Make your education easier to manage!</p>
           <p class="subtitle-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           </p>
         </v-card-text>
         </v-col>
         
         
       </v-col>
      
    </v-container>
  
  
  </div>
    
</template>

<script>

export default {
  name: 'Home',
  components: {
    
    
    
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
