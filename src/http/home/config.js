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
        url:baseUrl + "/cateNavDatas",  
        method:"get",
      },
      // getBuyList:{
      //   url:"https://m.you.163.com/topic/v1/know/navWap.json",
      //   method:"get"
      // }
  }
}