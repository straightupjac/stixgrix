<template>
  <div class=primary>
    <div fluid style="height: 120vh;">
      <v-container>
        <v-row>
          <v-col
            cols="7"
            md="9"
            lg="9"
            >
            <v-img
            :src="require('../assets/tg-city.jpg')"
            width=100%
            />
          </v-col>
          <v-col
            cols="3"
            md="2.5"
            lg="2.5"
            >
            <v-card elevation=0 color=transparent>
              <v-card-title class="page-title">Art</v-card-title>
              <v-card-actions><v-btn href="https://www.behance.net/jdcjonathan" target="_blank">Portfolio</v-btn></v-card-actions>
            </v-card>
            <v-img
            :src="require('../assets/kyotoStrutGreyscale.svg')"
            width=100%
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="panel" fluid style="height: 80vh;">
    </div>
    <div id="art" fluid style="height: 150vh;">
    </div>
  </div>
</template>

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