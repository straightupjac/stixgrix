<template>
<div id="app">
  <v-app
    width=50%
  >
    <v-app-bar
      id="app-bar"
      elevation="0"
      app
      color=primary
    >
    <v-app-bar-title>
       <a href="/">
        <v-icon>
          mdi-home
        </v-icon>
      </a>
    </v-app-bar-title>
    <v-spacer/>
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
      >
      fun
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <app-footer>
      <v-footer
        dark
        padless
      >
        <v-card
          flat
          tile
          width=100%
          class="primary white--text"
        >
        <v-card-title class="ml-10 mr-10">
          Like what you see?
        </v-card-title>
          <v-card-text class="ml-10 mr-10 footer-body">
            Let's connect
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
          <v-card-text class="white--text mr-10 ml-10">
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
  },
};
</script>

<style lang="scss">
@import "variables.scss";
@import "styles.scss";

</style>