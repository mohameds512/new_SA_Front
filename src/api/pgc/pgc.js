// import Resource from '../../../api/resource';
// import request from '../../../utils/request';

import Resource from "../resource";
import request from "../../utils/request";
class PGC extends Resource {
  constructor() {
    super('pgc');
  }

  show_sub(id,payload){
    return request({
      url:`/dashboard/showSub/${id}`,
      method: "post",
      data:payload,
    });
  }

  save_includes(payload){
    console.log(payload)
    return request({
      url:`/store/save_includes`,
      method: "post",
      data: payload
    })
  }
  
  save_submission(id,payload){
    if (id==null) {
      return request({
        url:`/store/save_submission`,
        method: "post",
        data: payload
      })
    }else{
      return request({
        url:`/store/save_submission/${id}`,
        method: "post",
        data: payload
      })
    }
    
  }

  submitFloor(payload){
    console.log(payload)
    return request({
      url:`/store/submitFloor`,
      method: "post",
      data: payload
    })
  }

  edit_project(id,payload) {
    if(id == null){
    return request({
        url: `/save`,
      method: "post",
      data: payload
    });}
else
{

    return request({
        url: `/save/${id}`,
      method: "post",
      data: payload
    });
}
  }


}

export { PGC as default };
