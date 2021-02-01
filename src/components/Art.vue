<template>
  <div class=primary>
    <div fluid style="height: 100vh;">
      <v-container>
        <v-row>
          <v-col
            cols="7"
            md="9"
            lg="9"
            >
            <v-img
            :src="require('../assets/tg-city.jpg')"
            >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
        </template>
            </v-img>
          </v-col>
          <v-col
            cols="3"
            md="3"
            lg="3"
            >
            <v-card elevation=0 color=transparent>
              <v-card-title class="page-title">Art<v-spacer/> <v-btn rounded href="https://www.behance.net/jdcjonathan" target="_blank">Portfolio</v-btn></v-card-title>
            </v-card>
            <v-img
              v-if="!this.$vuetify.theme.dark"
              :src="require('../assets/kyotoStrutGreyscaleInvert.svg')"
            />
            <v-img
              v-else
              :src="require('../assets/kyotoStrutGreyscale.svg')"
              height=100%
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="panel" fluid style="height: 80vh;">
      <v-overlay
      :opacity="1"
      :value="overlay"
    >
      <v-progress-circular
        indeterminate
        color="grey lighten-5"
      ></v-progress-circular>
    </v-overlay>
    </div>
    <div id="art" fluid style="height: 150vh;">
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      overlay: true,
    }),
    mounted() {
      this.overlay = false
    },
  }
</script>

<style scoped>
#art {
    background: url('../assets/kyotoStrutColor.svg') no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#panel {
    background: url('../assets/seeingSingle.svg') center no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

</style>