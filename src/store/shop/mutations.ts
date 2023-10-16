import { type State } from './state';

const mutations = {
  setUser(state: State, payload: any) {
    state.isLoggedIn = payload.isLoggedIn;;
    state.userId = payload.userId;
    state.email = payload.email;
    state.displayName = payload.displayName;
  },
  setFilter(state: State, payload: any) {
    state.isFilter = payload;
  },
  clearStore(state: State) {
    state.isLoggedIn = false;
    state.userId = '';
    state.email = '';
    state.displayName = '';
    state.isFilter = '';
  },
};

export default mutations;
