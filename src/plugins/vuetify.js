import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: 'white',
        secondary: '#333333',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        invert: 'black',
      },
      dark: {
        primary: 'black',
        secondary: '#333333',
        accent: '#88b1b1',
        error: '#f88ff9',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        invert: 'white',
      },
    },
  },
});
