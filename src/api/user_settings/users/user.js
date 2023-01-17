import Resource from '../../../api/resource';
import request from '../../../utils/request';

class User extends Resource {
    constructor() {
        super('users');
    }
    setPhoto(payload) {
        console.log('test',payload)
        return request({
            url: `/archive/${payload.photo_archive_id ?'update':'upload'}/${payload.photo_archive_id ? payload.photo_archive_id : payload.id}`,
            method: 'post',
            data: payload.query,
        })
    }
    setAccessControl(payload) {
        console.log('test',payload)
        return request({
            url: `/users/set/access/${payload.id}`,
            method: 'put',
            data: payload.query,
        })
    }
    addAccessUser(payload) {
        return request({
            url: `/users/access/${payload.id}`,
            method: 'post',
            data: payload.query,
        })
    }
    getAccessUser(id) {
        return request({
            url: `/users/access/${id}`,
            method: 'get'
        })
    }
    resetAccessUser(id) {
        return request({
            url: `/users/access/${id}`,
            method: 'delete'
        })
    }

    


}

export {User as default};
