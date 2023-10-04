import { initialState as state } from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const lineModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default lineModule;
