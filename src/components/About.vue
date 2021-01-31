<template>
  <div>
    <div id="art"  fluid style="height: 70vh;">
      <v-container>
      <v-row>
        <v-col>
        </v-col>
        <v-col justify-center style="padding: 200px 0;">
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
    <div>
      <v-container>
        <v-timeline
          dense
          >
          <!-- education -->
          <v-timeline-item>
            <v-card class="elevation-0">
              <v-card-title>
                Education
              </v-card-title>
              <v-card-text class=timeline-text>
                <v-row no-gutters>
                  <v-col md=10><strong>Candidate for Postgraduate Diploma in Finance &amp; Law</strong>, HKU SPACE, Hong Kong</v-col>
                  <v-col align="right">Oct 2020 - Present</v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col md=10><strong>Bachelor of Applied Science</strong>, Nanotechnology Engineering, University of Waterloo, Ontario, Canada</v-col>
                  <v-col align="right">Sep 2013 – Apr 2018</v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-timeline-item>

             <!-- experience -->
          <v-timeline-item>
            <v-card class="elevation-0">
              <v-card-title>
                Selected Experiences
              </v-card-title>
              <v-card-text class=timeline-text>
                <v-row no-gutters>
                  <v-col md=10><strong>Directory of Technology</strong>, Loopnest Accelerator Limited, Hong Kong</v-col>
                  <v-col align="right">Jan 2021 - Present</v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col md=10><strong>Blockchain Analyst</strong>, Loopnest Accelerator Limited, Hong Kong</v-col>
                  <v-col align="right">Oct 2018 – Dec 2020</v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col md=10><strong>Trainee</strong>, Loopring Foundation, Shanghai</v-col>
                  <v-col align="right"></v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col md=9><strong>Assistant Engineer (Algorithms)</strong>, Racefit International Company Limited, Hong Kong</v-col>
                  <v-col align="right">Jan – Apr 2016, Jan – Aug 2017</v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-timeline-item>

             <!-- other -->
          <v-timeline-item>
            <v-card class="elevation-0">
              <v-card-title>
                Background &amp; Interests
              </v-card-title>
              <v-card-text class=timeline-text>
                <v-row no-gutters>
                  <v-col md=10><strong>Art</strong>, Digital Arts/Street Photography</v-col>
                  <v-col align="right"><a style="color:#88b1b1;text-decoration: none;" href='https://www.behance.net/jdcjonathan'>Portfolio</a></v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col md=10><strong>Competitive Fencing</strong></v-col>
                  <v-col align="right"></v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col md=10><strong>Volleyball</strong></v-col>
                  <v-col align="right"></v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-timeline-item>

        </v-timeline>
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
#art {
    background: url('../assets/kyotoStrutColor.svg') no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

</style>