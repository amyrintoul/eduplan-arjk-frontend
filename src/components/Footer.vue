<template>
  <v-footer
    color="black"
    padless
  >
  <v-col col="12">
    <v-card
      
      
      class="black white--text text-center"
    >
     <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
     </v-row>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Amy Rintoul & Jade Kelly</strong>
      </v-card-text>
    </v-card>
  </v-col>
  </v-footer>
</template>
<script>


export default {
  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      links: [
        'Home',
        'Login',
        'Register',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
}

</script>
<style>
</style>
