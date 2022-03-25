<template>


    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="8" md="4" lg="4">

                <v-card elevation="12">
                    <v-img :src="require(`@/assets/eduplan-logo.png`)" alt="Education Logo" contain height="300">
                    </v-img>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="form.email" label="Enter you email" name="email"
                                prepend-inner-icon="mdi-mail" type="email" class="rounded-2" outlined></v-text-field>
                            <v-text-field v-model="form.password" label="Enter your password" name="password"
                                prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?" class="rounded-2"
                                outlined></v-text-field>
                            <v-btn @click="login(form)" class="rounded-2" color="black" x-large block dark>Login</v-btn>
                            <v-card-actions class="text--secondary">
                                <v-checkbox color="black" label="Remember me"></v-checkbox>
                                <v-spacer></v-spacer>
                                No account?
                                <v-btn class="rounded-2 ml-2" href="/register" x-small color="orange darken-3" dark>
                                    Register</v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Hello, Friends</h1>
                          <h5 class="text-center">Enter your personal details and start your journey with us.</h5>
                      </v-card-text>
                      <div class="text-center">
                          <v-btn class="rounded-2">Register</v-btn>
                      </div>
                  </v-col> -->
        </v-row>
    </v-container>




</template>

<script>
    import {
        mapActions,
        mapState
    } from 'vuex'

    export default {
        name: 'Login',
        components: {},
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
        },
        computed: {
            ...mapState(['loggedIn'])
        },
        //login method in store.js
        methods: {
            ...mapActions(['login'])
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