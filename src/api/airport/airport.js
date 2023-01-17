// import Resource from '../../../api/resource';
// import request from '../../../utils/request';

import Resource from "../resource";
import request from '../../utils/request'
class AirPort extends Resource {
    constructor() {
        super('airports');
    }
    list() {
     
        return request({
            url: `/airports`,
            method: 'post',
          })
    }


    


}

export {AirPort as default};
