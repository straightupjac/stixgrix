<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="7"
          sm="5"
          md="6"
          lg="7" justify-center style="padding: 200px 0;">
          <v-img
            :src="require('../assets/jon.jpeg')"
            width=100%
          />
        </v-col>
        <v-col justify-center style="padding: 300px 0;">
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
    </v-container>
  </div>
</template>