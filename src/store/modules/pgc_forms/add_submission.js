import pgcSubmission from '../../../api/pgc/pgc';

const pgc_forms = new pgcSubmission();

const locationModule = {
    namespaced: true,
    state: {
        projectList: null,
        // listcontractors:null,
        showSub: null,
        incs: null,
        dashboard: null,
    },
    getters: {

        showSub(state) {
            return state.showSub
        },
        dashboard(state) {
            return state.dashboard
        },
        // get_incs(state) {
        //   return state.incs
        // },

    },
    mutations: {

        SET_SHOW_SUB(state, sub) {
            state.showSub = sub
        },
        SET_DASHBOARD(state, dashboard) {
            state.dashboard = dashboard
        },
        // SET_GET_INCS(state, data) {
        //   state.incs = data
        // },
    },
    actions: {
        show_sub({commit}, id) {
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

        show_submission({commit}, id) {
            return new Promise((resolve, reject) => {
                pgc_forms.show_submission(id)
                    .then(response => {
                        commit('SET_SHOW_SUB', response.data)
                        resolve(response)
                    }).catch(error => {
                    reject(error)
                })
            })
        },
        img({commit}, id) {
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
        submitMab({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.submitMab(payload)
                    .then(response => {
                        resolve();

                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        dashboard({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.dashboard()
                    .then(response => {

                        commit('SET_DASHBOARD', response.data)
                        resolve();
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },


        save_subs({commit}, payload) {

            return new Promise((resolve, reject) => {
                pgc_forms
                    .save_submission(payload)
                    .then(response => {
                        resolve();

                    }).catch(error => {
                    reject(error)
                })
            })
        },
        add_subs({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.add_submission(payload.query)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        save_signature({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.save_signature(payload)
                    .then(response => {
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        change_status({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.change_status(payload)
                    .then(response => {
                        resolve();
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        save_inc({commit}, payload) {

            return new Promise((resolve, reject) => {

                pgc_forms
                    .save_includes(payload)
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
        add_notes({commit}, payload) {

            return new Promise((resolve, reject) => {
                console.log('payload')
                console.log(payload)
                pgc_forms
                    .save_notes(payload.query)
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
        approve({commit}, payload) {

            return new Promise((resolve, reject) => {
                // console.log('payload')
                // console.log(payload)
                pgc_forms
                    .approve(payload.query)
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
        forced_area({commit}, payload) {

            return new Promise((resolve, reject) => {
                // console.log('payload')
                // console.log(payload)
                pgc_forms
                    .edit_forced_area(payload.query)
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
        edit_desc({commit}, payload) {

            return new Promise((resolve, reject) => {
                // console.log('payload')
                // console.log(payload)
                pgc_forms
                    .editTypes(payload.query)
                    .then(response => {
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
