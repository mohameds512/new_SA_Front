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
  incs(id){
    return request({
      url: `/getInc/${id}`,
      method: 'post'
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

  save_notes(payload){
    console.log(payload)
    return request({
      url:`/store/add_notes`,
      method: "post",
      data: payload
    })
  }
  approve(payload){
    console.log(payload)
    return request({
      url:`/store/approve`,
      method: "post",
      data: payload
    })
  }

  edit_forced_area(payload){
    console.log(payload)
    return request({
      url:`/store/forced_area`,
      method: "post",
      data: payload
    })
  }
  
  save_submission(payload){
    

      return request({
        url:`/store/save_submission`,
        method: "post",
        data: payload
      })
    
    
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
