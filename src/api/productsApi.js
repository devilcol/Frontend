import axiosClient from "./axiosClient";

const productApi =  {
  getAll:(params) => {
    const url = '/';
    return axiosClient.get(url,{ params });
  },
  getDetail:(productId) => {
   
     return axiosClient.get(`/${productId}`);
   
  }
 }

 
 export default productApi;
 