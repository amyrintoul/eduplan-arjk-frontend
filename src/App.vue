<template>
  <v-app id="app">

    <!-- Side Bar -->
    <v-navigation-drawer
      

      v-model="drawer"
      dark
      app
    >
     <v-list-item>
       <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/30.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          
          <v-list-item-title class="text-h6"> 
            Matthew Adams
          </v-list-item-title>
          <v-list-item-subtitle >
            Eduplan
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="subtitle-1">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <template v-slot:append>
        <div class="pa-2 mb-3">
          <v-btn block color="orange darken-3" href="/" dark class="font-weight-bold ">
            Logout
          </v-btn>
        </div>
      </template>
      <!--  -->
    </v-navigation-drawer>

    <!-- Nav Bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-btn href="/" color="orange darken-3" dark>
       <v-icon>
        mdi-home
      </v-icon></v-btn>
      
    

      <v-spacer></v-spacer>
      <v-btn href="/login" color="black" class="mr-2" dark>Login</v-btn>
      <v-btn href="/register" color="black lighten-2" dark>Register</v-btn>
      

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main> 
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data:() => ({
     items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' , route: '/Dashboard'},
          { title: 'Timetable', icon: 'mdi-timetable', route: '/timetable'},
          { title: 'Assignments', icon: 'mdi-clipboard-text', route: '/assignments' },
          { title: 'Tasks', icon: 'mdi-checkbox-marked-circle-outline', route: '/tasks'},
          { title: 'Exams', icon: 'mdi-note-edit', route: '/exams'},
          { title: 'Study Timer', icon: 'mdi-av-timer', route: '/studyTimer'},
          { title: 'Calendar', icon: 'mdi-calendar', route: '/calendar'},
          { title: 'Useful Links', icon: 'mdi-link-variant', route: '/usefulLinks' },



        ],
    drawer: null
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
