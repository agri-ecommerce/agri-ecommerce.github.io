import { type State } from './state';

const getters = {
  isLoggedIn(state: State) {
    return state.isLoggedIn;
  },
  userId(state: State) {
    return state.userId;
  },
  email(state: State) {
    return state.email;
  },
  displayName(state: State) {
    return state.displayName;
  },
  isFilter(state: State) {
    return state.isFilter;
  },
};

export default getters;
