import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {},
    themes: {
      light: {
        primary: '#549FCB',
        secondary: '#151C24',
        accent: '#50C6FA',
        error: '#DC562E',
        warning: '#FFC700',
        info: '#5C6C88',
        success: '#40B954',
        anchor: '#A2C6EC',
      },
    },
  },
});
