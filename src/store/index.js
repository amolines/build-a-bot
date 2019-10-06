import Vue from 'vue';
import Vuex from 'vuex';

import robotsModule from './modules/robot';
import usersMModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  modules: {
    robots: robotsModule,
    users: usersMModule,
  },
});
