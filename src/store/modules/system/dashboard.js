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
    incs : null,
    build_desc:null,
  },
  getters: {
    getAllTypes(state){
      return state.build_desc
    },
    getLookups(state) {
      return state.lookups
    },
    getSubs(state){
      return state.submissions
    },
    get_incs(state) {
      return state.incs
    }

  },
  mutations: {
    SET_GET_ALL_TYPES(state , build_desc){
      state.build_desc = build_desc
    },
    SET_LOOK_UPS(state, dataLookup) {
      state.lookups = dataLookup
    },
    SET_SUBMISSIONS(state,subs){
      state.submissions = subs
    },
    SET_GET_INCS(state, data) {
      state.incs = data
    },
  },
  actions: {
    allBuildType({ commit }) {
      return new Promise((resolve, reject) => {
        dashboard.allBuildType()
          .then(response => {
            console.log(response.build_desc)
            commit('SET_GET_ALL_TYPES', response.build_desc);
            resolve(response);
            
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    get_incs({ commit },id) {
      return new Promise((resolve, reject) => {
        dashboard
          .incs(id)
          .then(response => {
            commit('SET_GET_INC', response)
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
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
