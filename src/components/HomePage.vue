<template>
  <div>
    <div id="landing" class="landing full-height">
      <v-container>
        <v-row no-gutters>
          <v-col
            cols="7"
            sm="5"
            md="6"
            lg="7"
          >
            <v-img
              :src="require('../assets/kyotoStrut.jpg')"
              width=900
            />
          </v-col>
          <v-col justify-center style="padding: 300px 0;">
            <v-card color=transparent>
              <v-card-title class=landing-title>
                <p><strong>Jonathan Chan</strong></p>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style>
#landing {
    background: black;
  }

</style>