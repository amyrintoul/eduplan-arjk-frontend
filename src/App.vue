<template>
  <v-app id="app">

    <!-- Nav Bar -->
      <v-app-bar app>
          <v-app-bar-nav-icon v-if="loggedIn" @click="drawer = !drawer"></v-app-bar-nav-icon>
        
          <v-btn v-if="!loggedIn" href="/" color="orange darken-3" dark>
            <v-icon >
              mdi-home
            </v-icon>
          </v-btn>

            <v-btn @click="toggleTheme()" color="orange darken-3" icon dark>
        <v-icon>
          mdi-brightness-4
        </v-icon>
      </v-btn>



          <v-spacer></v-spacer>
          <v-btn v-if="!loggedIn" href="/login" color="black" class="mr-2" dark>Login</v-btn>
          <v-btn v-if="!loggedIn" href="/register" color="black lighten-2" dark>Register</v-btn>

      </v-app-bar>

    <!-- Side Bar -->
    <div v-if="loggedIn">
      <v-navigation-drawer v-model="drawer" dark app>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>

            <v-list-item-title class="text-h6">
              {{ user_name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              Eduplan
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
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
            <v-btn block color="orange darken-3" @click="logout" dark class="font-weight-bold ">
              Logout
            </v-btn>
          </div>
        </template>
        <!--  -->
      </v-navigation-drawer>
    </div>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'App',
    components: {},
    data: () => ({
      user_name: localStorage.getItem('user_name'),
      items: [{
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          route: '/Dashboard'
        },
        {
          title: 'Timetable',
          icon: 'mdi-timetable',
          route: '/timetable'
        },
        {
          title: 'Assignments',
          icon: 'mdi-clipboard-text',
          route: '/assignments'
        },
        {
          title: 'Tasks',
          icon: 'mdi-checkbox-marked-circle-outline',
          route: '/tasks'
        },
        {
          title: 'Exams',
          icon: 'mdi-note-edit',
          route: '/exams'
        },
        {
          title: 'Study Timer',
          icon: 'mdi-av-timer',
          route: '/studyTimer'
        },
        {
          title: 'Calendar',
          icon: 'mdi-calendar',
          route: '/calendar'
        },
        {
          title: 'Useful Links',
          icon: 'mdi-link-variant',
          route: '/usefulLinks'
        },



      ],
      drawer: null
    }),
    created() {
      //logged in status
      if (localStorage.getItem('token')) {
        this.$store.commit('SET_LOGGED_IN_STATUS', true)
      } else {
        this.$store.commit('SET_LOGGED_IN_STATUS', false)
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      },
        toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
    },
    computed: {
      ...mapState(['loggedIn'])
    },
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