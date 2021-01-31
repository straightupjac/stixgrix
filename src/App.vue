<template>
<div id="app">
  <v-app
    color=primary
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
      @change="toggleDarkTheme()"
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
      <v-scroll-x-transition mode="in" hide-on-leave="true">
        <router-view/>
      </v-scroll-x-transition>
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
              class="mx-4"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="mr-10 ml-10">
            {{ new Date().getFullYear() }} — <strong>Jonathan Chan</strong>
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
    icons: ["mdi-linkedin", "mdi-instagram", "mdi-twitter", "mdi-email"],
  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="scss">
@import "variables.scss";
@import "styles.scss";

</style>