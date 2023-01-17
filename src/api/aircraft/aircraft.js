// import Resource from '../../../api/resource';
// import request from '../../../utils/request';

import Resource from "../resource";
import request from '../../utils/request'
class AirCraft extends Resource {
    constructor() {
        super('aircrafts');
    }
    list() {
     
        return request({
            url: `/aircrafts`,
            method: 'post',
          })
    }


    
    // get(id) {
     
    //     return request({
    //         url: `/aircrafts/${id}`,
    //         method: 'get',
     
    //       })
    // }


}

export {AirCraft as default};
