<template>
<div class="usefulLinks">
  <v-container class="my-5"> 
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="tool in link" :key="tool.name" >
      <v-card hover class="text-center ma-3" :href="(tool.website)" target="_blank"> 
        <v-responsive >
        <v-img
          height="200px"
          :src="(tool.image)"
        />
        </v-responsive>
        
        <v-card-text>
          <div class="sub-heading">{{ tool.name }} </div>
        </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
   
      
</div>  
    
</template>

<script>

export default {
  name: 'Timetable',
  components: {
    
    
    
  },
  data() {
    return {
      link: [
        {name: 'Outlook', image: require(`@/assets/outlook.png`), website: 'https://outlook.office.com/mail/'},
        {name: 'Microsoft Teams', image: require(`@/assets/teams.png`), website: 'https://www.microsoft.com/en-ie/microsoft-teams/log-in'},
        {name: 'Blackboard', image: require(`@/assets/blackboard.png`)},
        {name: 'Zoom', image: require(`@/assets/zoom.png`), website: 'https://zoom.us/'},
        {name: 'Miro', image: require(`@/assets/miro.png`), website: 'https://miro.com/'},
        {name: 'UniDays', image: require(`@/assets/unidays.png`), website: 'https://www.myunidays.com/IE/en-IE'},
      ]

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
