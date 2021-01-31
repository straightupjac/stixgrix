<template>
  <div class=primary>
    <v-container>
      <v-row>
        <v-col
          cols="7"
          sm="8"
          md="8"
          lg="8">
          <v-img
            :src="require('../assets/22.jpg')"
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
        <v-col justify-center style="padding: 70px 0;">
          <v-card color=transparent>
            <v-card-title class=page-title>
              Fun
            </v-card-title>
            <v-card-text>
              random things
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col
          cols="7"
          sm="5"
          md="6"
          lg="7" justify-center>
          <v-img
            :src="require('../assets/jon.jpeg')"
            width=100%
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
      </v-row>
    </v-container>
  </div>
</template>