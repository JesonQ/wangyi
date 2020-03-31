const baseUrl = "http://localhost:3000"
export default {
  api:{
      getIndex:{
          url:baseUrl + "/getIndex",  //获取home主页数据
          method:"get",
      },
      getCategoryDatas:{           //获取home headerNav 数据
        url:baseUrl + "/getCategoryDatas",  
        method:"get",
      },
      getCateList:{
        url:baseUrl + "/getCateList",  
        method:"get",
      }
  }
}