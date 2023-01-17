import request from '@/utils/request'

/**
 * Simple RESTful resource class
 */
class Resource {
    constructor(uri) {
        this.uri = uri
    }

    list(query) {
        return request({
            url: `/${this.uri}`,
            method: 'post',
            data: query,
        })
    }

    get(payload, params = {}) {
        if (typeof payload === 'object') {
            return request({
                url: `/${this.uri}/${payload.id}/${payload.type}`,
                method: 'get',
            })
        }
        return request({
            url: `/${this.uri}/${payload}`,
            method: 'get',
            params,
        })
    }

    put(id, query) {
        return request({
            url: `/${this.uri}${id ? `/${id}` : ''}`,
            method: 'put',
            data: query,
        })
    }

    remove(id) {
        return request({
            url: `/${this.uri}/${id}`,
            method: 'delete',
        })
    }

    restore(id) {
        return request({
            url: `/${this.uri}/restore/${id}`,
            method: 'post',
        })
    }
}

export {Resource as default}
