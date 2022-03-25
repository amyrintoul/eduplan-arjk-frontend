import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config'
import router from "./router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false

  },
  getters: {},
  mutations: {
    SET_LOGGED_IN_STATUS(state, loggedIn) {
      state.loggedIn = loggedIn
    }

  },
  actions: {
    login(context, credentials) {
      //login with email and password
      axios
        .post('/login', {
          email: credentials.email,
          password: credentials.password
        })
        .then(response => {
          console.log(response.data.token)
          console.log(response.data.user._id)
          console.log(response.data.user.full_name)
          context.commit('SET_LOGGED_IN_STATUS', true)
          //get token
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user_id', response.data.user._id)
          localStorage.setItem('user_name', response.data.user.full_name)
          router.push("/dashboard")
          location.reload()
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data.error)
        })

    },
    register(credentials) {
      //register with name, email, password
      axios
        .post('/register', {
          full_name: credentials.name,
          email: credentials.email,
          password: credentials.password
        })
        .then(response => {
          console.log(response.data)
          router.push("/login")
        })
        .catch(error => {
          console.log(error)
          console.log(error.response)
        })
    },
    logout(context) {
      //remove token from storage
      localStorage.removeItem('token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('user_name')
      context.commit('SET_LOGGED_IN_STATUS', false)
      router.push("/")
    }
  }
})