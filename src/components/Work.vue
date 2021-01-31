<template>
  <div>
    <div id="landing" class="landing full-height">
      <v-container>
      <v-row no-gutters>
        <v-col
          cols="7"
          sm="5"
          md="6"
          lg="7" justify-center style="padding: 200px 0;">
          <v-img
            :src="require('../assets/tg-city.jpg')"
            width=100%
          />
        </v-col>
      </v-row>
    </v-container>
    </div>
    <div id="work-panel">

    </div>
  </div>
</template>

<style scoped>
#landing {
    background: black;
  }

.v-application .home-btn{
  color: #88b1b1;
}

</style>