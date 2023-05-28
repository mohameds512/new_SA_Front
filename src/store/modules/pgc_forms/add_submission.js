import pgcSubmission from '../../../api/pgc/pgc';
import fileDownload from 'js-file-download';

const pgc_forms = new pgcSubmission();

const locationModule = {
    namespaced: true,
    state: {
        projectList: null,
        // listcontractors:null,
        showSub: null,
        incs: null,
        dashboard: null,
        taskSub:[],
        taskSurv:[],
    },
    getters: {
        taskSurv(state){
            return state.taskSurv
        },
        taskSub(state){
            return state.taskSub
        },
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
        SET_TASK_SUB(state,taskSub){
            state.taskSub = taskSub
        },
        SET_TASK_SURV(state,taskSurv){
            state.taskSurv = taskSurv
        },
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

        exportInclude({ commit },payload) {
            
            return new Promise((resolve, reject) => {
              pgc_forms
                .exportInclude(payload.query)
                .then(response => {
                //    fileDownload(response,'ddddd.xlsx');
                   fileDownload(response,payload.query.sub_number+'.xlsx');
                  resolve(response)
                })
                .catch(error => {
                  reject(error)
                })
            })
        },
        exportSub({ commit },payload) {
            
            return new Promise((resolve, reject) => {
              pgc_forms
                .exportSub(payload.query)
                .then(response => {
                //    fileDownload(response,'ddddd.xlsx');
                   fileDownload(response,payload.query.sub_number+'.xlsx');
                  resolve(response)
                })
                .catch(error => {
                  reject(error)
                })
            })
        },
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

        taskLookUps({commit}) {
            return new Promise((resolve, reject) => {
                pgc_forms.taskLookUps()
                    .then(response => {
                        console.log(response.data);
                        commit('SET_TASK_SURV', response.data.survey_users)
                        commit('SET_TASK_SUB', response.data.submission_id)
                        resolve(response)
                    }).catch(error => {
                    reject(error)
                })
            })
        },
        listTasks({commit}) {
            return new Promise((resolve, reject) => {
                pgc_forms.listTasks()
                    .then(response => {
                        resolve(response)
                    }).catch(error => {
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
        updateBeforeAfter({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.updateBeforeAfter(payload)
                    .then(response => {
                        resolve();
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        reviewedData({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.reviewedData(payload)
                    .then(response => {
                        resolve();
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        updateDashMap({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.updateDashMap(payload)
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
        delete_includes({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.delete_includes(payload)
                    .then(response => {
                        resolve();

                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
        delete_subs({commit}, payload) {
            return new Promise((resolve, reject) => {
                pgc_forms.delete_subs(payload)
                    .then(response => {
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
                    .editTypes(payload)
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

        submitTask({ commit },payload) {
            
            return new Promise((resolve, reject) => {
              pgc_forms
                .save_task(payload.id,payload.query)
                .then(response => {
                  resolve(response)
                })
                .catch(error => {
                  reject(error)
                })
            })
        },
        deleteTask({ commit },payload) {
            
            return new Promise((resolve, reject) => {
              pgc_forms
                .deleteTask(payload.id)
                .then(response => {
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
