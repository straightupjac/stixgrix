<template>
<div id="app">
  <v-app
    color=primary
    :dark="setTheme()"
  >
    <v-app-bar
      id="app-bar"
      elevation="0"
      app
      color=primary
      fade-img-on-scroll
    >
    <v-switch
      color=secondary
      class="ml-15 mt-5"
      inset
      v-model="goDark"
    >
    </v-switch>
    <v-spacer/>
    <div class="ml-10 mr-10">
    <v-btn
        href="/"
        target=""
        text
        class="text-center nav-button"
      >
        <span class="mr-2">home</span>
      </v-btn>
      <v-btn
        href="/about"
        target=""
        text
        class="text-center nav-button"
      >
        <span class="mr-2">about</span>
      </v-btn>

      <v-btn
        href="/work"
        target=""
        text
        class="text-center nav-button"
      >
      work
      </v-btn>
      <v-btn
        href="/art"
        target=""
        text
        class="text-center nav-button"
      >
      art
      </v-btn>
      <v-btn
        href="/fun"
        target=""
        text
        class="text-center nav-button"
        active-class="current"
      >
      fun
      </v-btn>
    </div>
    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>

    <app-footer>
      <v-footer
        padless
      >
        <v-card
          flat
          tile
          width=100%
          class="primary"
        >
        <v-card-title class="ml-10 mr-10">
          Like what you see?
        </v-card-title>
          <v-card-text class="ml-10 mr-10 footer-body">
            Let's connect
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :href="icon.link"
              target="_blank"
              class="mx-4"
              icon
            >
              <v-icon size="24px">
                {{ icon.icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="mr-10 ml-10">
            <p>{{ new Date().getFullYear() }} — <strong>Jonathan Chan</strong>
            | Designed by <a href='http://jaclynchan.me/' target="_blank" style="color:#88b1b1;text-decoration: none;"> Jaclyn Chan</a></p>
          </v-card-text>
        </v-card>
      </v-footer>
    </app-footer>
  </v-app>
</div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    userBar: false,
    icons: [
      {icon: "mdi-linkedin", link: "https://www.linkedin.com/in/jdcjonathan/",},
      {icon: "mdi-instagram", link: "https://www.instagram.com/stixgrix", },
      {icon: "mdi-twitter", link: "https://twitter.com/stixgrix"},
      {icon: "mdi-email", link: "mailto:jdchan@edu.uwaterloo.ca"},
      ],
    goDark: true,
  }),
  methods: {
    setTheme() {
      if (this.goDark === true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    },
  },
};
</script>

<style lang="scss">
@import "variables.scss";
@import "styles.scss";

</style>