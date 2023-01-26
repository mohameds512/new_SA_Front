import Resource from '../../api/resource';
import request from '../../utils/request';

class Dashboard extends Resource {
  constructor() {
    super('dashboard');
  }

  incs(id){
    return request({
      url: `dashboard/getInc/${id}`,
      method: 'post'
    });
  }
  lookups(){
    return request({
      url: '/dataLookups',
      method: 'post'
    });
  }
  allSubmission(){
    return request({
      url: 'dashboard/getSubmissions',
      method: 'post'
    });
  }
  allBuildType(){
    return request({
      url: '/build_desc',
      method: 'post'
    });
  }

  counts(){
    return request({
      url: '/dashboard/counts',
      method: 'post'
    });
  }

  faculty(){
    return request({
      url: '/dashboard/faculty',
      method: 'post'
    });
  }

  // Activities(){
  //   return request({
  //     url: '/dashboard/activities',
  //     method: 'post'
  //   });
  // }


  paymentPerMonth(){
    return request({
      url: '/dashboard/payment',
      method: 'post'
    });
  }
  
  
  projectDetails(id,payload){
    return request({
      url: `/dashboard/${id}`,
      method: 'post',
      data: payload
    });
  }
  

/**
 * con
 */

}

export { Dashboard as default };
