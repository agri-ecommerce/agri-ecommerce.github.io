const actions = {
  setUser({ commit }: any, payload: string) {
    commit('setUser', payload);
  },
  setFilter({ commit }: any, payload: string) {
    commit('setFilter', payload);
  },
  clearStore({ commit }: any) {
    commit('clearStore');
  },
};

export default actions;
