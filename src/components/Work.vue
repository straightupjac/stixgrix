<template>
  <div>
    <div class="primary landing full-height">
      <v-container>
      <v-row no-gutters>
        <v-col
          cols="7"
          sm="5"
          md="6"
          lg="7">
          <v-img
            :src="require('../assets/windyjon.jpg')"
            width=100%
          />
        </v-col>
        <v-col>
          <v-slide-x-transition >
            <v-card v-show="show" shaped elevation=0 color=primary>
              <v-card-title class=page-title>
                <p>I'm <strong>Jonathan Chan</strong> </p>
              </v-card-title>
              <v-card-text class=body-text>
                <p >Blockchain. <a href='/art' style="color:#88b1b1;text-decoration: none;">Art.</a> Engineer.</p><br/>
                <p>Director of Technology at Loopnest Accelerator</p>
              </v-card-text>
            </v-card>
          </v-slide-x-transition>
        </v-col>
      </v-row>
    </v-container>
    </div>
    <div id="work-panel">

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