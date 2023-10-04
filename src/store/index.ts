import { createStore } from 'vuex';
import shopModule from './shop';
export default createStore({
  modules: {
    shop: shopModule,
  },
});
