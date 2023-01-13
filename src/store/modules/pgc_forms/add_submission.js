import pgcSubmission from '../../../api/pgc/pgc';

const pgc_forms = new pgcSubmission() ; 

const locationModule = {
  namespaced: true,
  state: {
    projectList: null,
    listcontractors:null,
    showSub: null,

  },
  getters: {
  
    showSub(state) {
      return state.showSub
    },
    
  },
  mutations: {
    
    SET_SHOW_SUB(state, sub) {
      state.showSub = sub
    },
  },
  actions: {

    show_sub({ commit },id) {
      return new Promise((resolve, reject) => {
        pgc_forms
          .show_sub(id)
          .then(response => {
            commit('SET_SHOW_SUB', response)
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  

    img({ commit },id) {
      return new Promise((resolve, reject) => {
        pgc_forms
          .img(id)
          .then(response => {
            commit('SET_IMG', response)
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
  
    save_subs({commit}, payload ) {

      return new Promise((resolve, reject) => {
        console.log('payload')
        console.log(payload)
        pgc_forms
          .save_submission( payload.query)
          .then(response => {
            // commit('SET_CONTRACTORS', response)
            // commit('SET_ID', response.project.id);
            console.log(response)
            // console.log(response.project.id)
            resolve();
        
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    }
}
export default locationModule;
