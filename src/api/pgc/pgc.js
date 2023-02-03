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
    save_includes(payload) {
        console.log(payload)
        return request({
            url: `/store/save_includes${payload.id ? `/${payload.id}` : ''}`,
            method: "post",
            data: payload.query,
            headers: {'Content-Type': 'multipart/form-data'},
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
            url: `/store/edit_desc`,
            method: "post",
            data: payload
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
