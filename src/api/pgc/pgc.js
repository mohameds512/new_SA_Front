// import Resource from '../../../api/resource';
// import request from '../../../utils/request';

import Resource from "../resource";
import request from "../../utils/request";

class PGC extends Resource {
    constructor() {
        super('pgc');
    }

    show_sub(id, payload) {
        return request({
            url: `/dashboard/showSub/${id}`,
            method: "post",
            data: payload,
        });
    }

    // incs(id){
    //   return request({
    //     url: `/dashboard/getInc/${id}`,
    //     method: 'post'
    //   });
    // }

    exportInclude(payload) {
        console.log(payload)
        return request({
            url: `exportInclude`,
            method: "post",
            data: payload,
            responseType:"blob"
        })
    }
    
    exportSub(payload) {
        console.log(payload)
        return request({
            url: `exportSub`,
            method: "post",
            data: payload,
            responseType:"blob"
        })
    }
    save_includes(payload) {
        console.log(payload)
        return request({
            url: `/store/save_includes${payload.id ? `/${payload.id}` : ''}`,
            method: "post",
            data: payload.query,
            headers: {'Content-Type': 'multipart/form-data'},
        })
    }
    
    delete_includes(payload) {
        return request({
            url: `/store/delete_inc`,
            method: "post",
            data: payload.query,
        })
    }
    delete_subs(payload) {
        return request({
            url: `/store/deleteSubmission`,
            method: "post",
            data: payload.query,
        })
    }
    submitMab(payload) {
        return request({
            url: `/store/map/${payload.id}`,
            method: "post",
            data: payload.query,
            headers: {'Content-Type': 'multipart/form-data'},
        })
    }
    updateBeforeAfter(payload) {
        return request({
            url: `/store/updateBeforeAfter/${payload.id}`,
            method: "post",
            data: payload.query,
            headers: {'Content-Type': 'multipart/form-data'},
        })
    }
    reviewedData(payload) {
        return request({
            url: `/store/reviewedData/${payload.id}`,
            method: "post",
            data: payload.query,
            headers: {'Content-Type': 'multipart/form-data'},
        })
    }

    updateDashMap(payload) {
        return request({
            url: `/store/updateDashMap`,
            method: "post",
            data: payload.query,
            headers: {'Content-Type': 'multipart/form-data'},
        })
    }

    dashboard() {
        return request({
            url: `/dashboard/submissions`,
            method: "post",
        })
    }


    save_notes(payload) {
        console.log(payload)
        return request({
            url: `/store/add_notes`,
            method: "post",
            data: payload
        })
    }

    approve(payload) {
        console.log(payload)
        return request({
            url: `/store/approve`,
            method: "post",
            data: payload
        })
    }

    editTypes(payload) {
        console.log(payload)
        return request({
            url: `/dashboard/edit_desc${payload.id? `/${payload.id}` : ''}`,
            method: "put",
            data: payload.query
        })
    }

    edit_forced_area(payload) {
        console.log(payload)
        return request({
            url: `/store/forced_area`,
            method: "post",
            data: payload
        })
    }

    save_submission(payload) {


        return request({
            url: `/store/save_submission/${payload.id}`,
            method: "put",
            data: payload.query
        })


    }

    taskLookUps() {
        return request({
            url: `/taskLookUps`,
            method: "post"
        })
    }
    listTasks() {
        return request({
            url: `/listTasks`,
            method: "post"
        })
    }

    show_submission(id) {
        return request({
            url: `/store/show/${id}`,
            method: "get"
        })


    }

    add_submission(payload) {
        return request({
            url: `/store/add/submission`,
            method: "post",
            data: payload,
            headers: {'Content-Type': 'multipart/form-data'},
        })


    }

    change_status(payload) {

        return request({
            url: `/store/change/status/${payload.id}`,
            method: "post",
            data: payload.query
        })


    }

    save_signature(payload) {


        return request({
            url: `/store/save/signature/${payload.id}`,
            method: "post",
            data: payload.query
        })


    }

    submitFloor(payload) {
        console.log(payload)
        return request({
            url: `/store/submitFloor`,
            method: "post",
            data: payload
        })
    }
    save_task(id, payload) {
        if (id == null) {
            return request({
                url: `/saveTask`,
                method: "post",
                data: payload
            });
        } else {

            return request({
                url: `/saveTask/${id}`,
                method: "post",
                data: payload
            });
        }
    }
    deleteTask(id) {
        return request({
            url: `/deleteTask/${id}`,
            method: "post",
            // data: payload.query,
        })
    }

    edit_project(id, payload) {
        if (id == null) {
            return request({
                url: `/save`,
                method: "post",
                data: payload
            });
        } else {

            return request({
                url: `/save/${id}`,
                method: "post",
                data: payload
            });
        }
    }


}

export {PGC as default};
