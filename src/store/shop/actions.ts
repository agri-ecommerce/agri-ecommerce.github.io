const actions = {
  setUser({ commit }: any, payload: string) {
    commit('setUser', payload);
  },
  clearStore({ commit }: any) {
    commit('clearStore');
  },
};

export default actions;
