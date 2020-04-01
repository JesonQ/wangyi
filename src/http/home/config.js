const baseUrl = "http://localhost:3000"
const wangyUrl = "https://m.you.163.com"
export default {
  api:{
      getIndex:{
          url:baseUrl +"/getIndex",  //获取home主页数据
          method:"get",
          corsUrl:'/3000'
      },
      getCategoryDatas:{           //获取home headerNav 数据
        url:baseUrl +"/getCategoryDatas",  
        method:"get",
        corsUrl:'/3000'
      },
      getCateList:{
        url:baseUrl +"/getCategoryDatas",  
        method:"get",
        corsUrl:'/3000'
      },
      getBuyList:{
        url:wangyUrl + "/topic/v1/know/navWap.json",
        method:"get",
        corsUrl:'/api'
      }
  }
}