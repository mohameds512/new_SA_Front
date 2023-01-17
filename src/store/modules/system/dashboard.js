import Dashboard from '../../../api/system/dashboard';

const dashboard = new Dashboard();

const locationModule = {
  namespaced: true,
  state: {
    // activities: null,
    // counts: null,
    // payment: null,
    // faculty: null,
    // projectDetails: [],
    lookups: null,
    submissions:null,
  },
  getters: {
    
    getLookups(state) {
      return state.lookups
    },
    getSubs(state){
      return state.submissions
    }

  },
  mutations: {
    SET_LOOK_UPS(state, dataLookup) {
      state.lookups = dataLookup
    },
    SET_SUBMISSIONS(state,subs){
      state.submissions = subs
    }
  },
  actions: {

    getLookups({ commit }) {
      return new Promise((resolve, reject) => {
        dashboard.lookups()
          .then(response => {
            commit('SET_LOOK_UPS', response);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    allSubmission({ commit }) {
      return new Promise((resolve, reject) => {
        dashboard.allSubmission()
          .then(response => {
            commit('SET_SUBMISSIONS', response);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // counts({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     dashboard.counts()
    //       .then(response => {
    //         commit('SET_COUNTS', response.data);
    //         resolve();
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // },

    
  },
};

export default locationModule;
