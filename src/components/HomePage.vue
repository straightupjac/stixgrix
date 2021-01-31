<template>
  <div>
    <div class="primary landing full-height">
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="7"
            md="5"
            lg="5"
          >
            <v-img
              v-if="this.$vuetify.theme.dark"
              :src="require('../assets/kyotoStrutGreyscale.svg')"
              width=100%
            />
            <v-img
              v-else
              :src="require('../assets/kyotoStrutGreyscaleInvert.svg')"
              width=100%
            />
          </v-col>
          <v-col justify-center style="padding: 250px 0;">
            <v-slide-x-transition>
              <v-card v-show="show" elevation=0 color=transparent>
                <v-card-title class=landing-title>
                  <p>Jonathan Chan</p>
                </v-card-title>
                <v-card-text class="body-text">
                  <p >Blockchain. <a href='/art' style="color:#88b1b1;text-decoration: none;">Art.</a> Engineer.</p><br/>
                  <p ><v-icon>mdi-map-marker</v-icon> Hong Kong.</p>
                  <p ><v-icon>mdi-school</v-icon> Nanotechnology Engineering, University of Waterloo</p>
                </v-card-text>
              </v-card>
            </v-slide-x-transition>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    show: false,
  }),
  mounted() {
    this.show = ! this.show;
  },
};
</script>

<style scoped>
.v-application .home-btn{
  color: #88b1b1;
}

</style>