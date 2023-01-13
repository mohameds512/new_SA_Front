import ecpProjects from '../../../api/ecb/ecb';

const ecb_forms = new ecpProjects() ; 

const locationModule = {
  namespaced: true,
  state: {
    projectList: null,
    gallery:null,
    show_sub:null,
  },
  getters: {
    show_sub(state){
      return state.show_sub
    },
  },
  mutations: {
    SET_SHOW_SUB(state, data)
    {
      state.show_sub = data
    },
  },
  actions: {

    show_sub({ commit },id) {
      return new Promise((resolve, reject) => {
        ecb_forms
          .show_sub(id)
          .then(response => {
            commit('SET_SHOW_SUB', response)
            // console.log(response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    listProjects({ commit },id) {
      return new Promise((resolve, reject) => {
        ecb_forms
          .list(id)
          .then(response => {
            commit('SET_PROJECTS', response)
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
        ecb_forms
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
  




    viewImg({ commit },payload) {
      return new Promise((resolve, reject) => {
        ecb_forms
          .viewImg(payload.id, payload.query)
          .then(response => {
            commit('SET_GALLERY', response)
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
}
}
export default locationModule;
