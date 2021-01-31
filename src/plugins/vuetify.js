import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
      },
      dark: {
        primary: '#000000',
        secondary: '#333333',
        accent: '#88b1b1',
        error: '#f88ff9',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',

      },
    },
  },
});
