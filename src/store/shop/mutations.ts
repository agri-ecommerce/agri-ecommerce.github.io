import { type State } from './state';

const mutations = {
  setUser(state: State, payload: any) {
    state.isLoggedIn = payload.isLoggedIn;;
    state.userId = payload.userId;
    state.email = payload.email;
    state.displayName = payload.displayName;
  },
  clearStore(state: State) {
    state.isLoggedIn = false;
    state.userId = '';
    state.email = '';
    state.displayName = '';
  },
};

export default mutations;
