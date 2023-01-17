import Flights from "@/api/flights/flights";


 const flights = new Flights();

const FlightsModule = {
  namespaced: true,
  state: {
    auth: null,
    item: null,
    items: [],
    total: 0,
    load: false,
    userAccess:[]
  },
  getters: {
    items(state) {
      return state.items;
    },
    item(state) {
      return state.item;
    },
  },
  mutations: {
 
    SET_ITEMS: (state, items) => {
      state.items = items;
    },
    SET_ITEM: (state, item) => {
        state.item= item;
      },
    SET_TOTAL_ITEMS: (state, total) => {
        state.total = total;
      },
  
      SET_ITEMS_LOAD: (state, load) => {
        state.load = load;
      },

  },
  actions: {
    
    get({commit}, id) {
      return new Promise((resolve, reject) => {
          commit('SET_ITEMS_LOAD', true);
          flights.get(id)
              .then(response => {
                  commit('SET_ITEM', response.data);
                  if (response && response.data && typeof response.data == 'object') {
                      commit('app/UPDATE_PAGE_DETAILS', response.data, {root: true});
                  }
                  commit('SET_ITEMS_LOAD', false);
                  resolve();
              })
              .catch(error => {
                  reject(error);
              });
      });
  },


    items({commit}, payload) {
        return new Promise((resolve, reject) => {
            commit('SET_ITEMS_LOAD', true);
            flights.list(payload.query).then(response => {
                commit('SET_ITEMS', response.data);
                commit('SET_TOTAL_ITEMS', response.meta.count);
                commit('SET_LOOKUPS', response.meta.lookup);
                commit('SET_ITEMS_LOAD', false);
                resolve();
            });
        });
    },
    put({commit}, payload) {
        commit('app/UPDATE_LOAD', true, {root: true});
        return new Promise((resolve, reject) => {
            flights
                .put(payload.id, payload.query)
                .then(response => {
                    commit('app/UPDATE_LOAD', false, {root: true});
                    // router.push({ name: 'bylaw', params: { id: response.data.id } })
                    resolve();
                })
                .catch(error => {
                    commit('app/UPDATE_LOAD', false, {root: true});
                    reject(error);
                });
        });
    },
    remove({ commit }, id) {
      return new Promise((resolve, reject) => {
        flights
          .remove(id)
          .then(response => {
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
 
    // get({ commit }, id) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_USERS_LOAD', true);
    //     user
    //       .get(id)
    //       .then(response => {
    //         commit('SET_USER', response.data);
    //         if ( response && response.data && typeof response.data == 'object') {
    //           commit('app/UPDATE_PAGE_DETAILS', response.data, {root: true});
    //         }
    //         commit('SET_USERS_LOAD', false);
    //         resolve();
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // },

    
  },
};

export default FlightsModule;
