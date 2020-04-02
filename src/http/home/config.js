// const baseUrl = "http://localhost:3000"
// const baseUrl = "192.168.0.101"
const wangyUrl = "https://m.you.163.com"
export default {
  api:{
      getIndex:{
          url:"/getIndex",  //获取home主页数据
          method:"get",
          corsUrl:'/3000'
      },
      getCategoryDatas:{           //获取home headerNav 数据
        url:"/getCategoryDatas",  
        method:"get",
        corsUrl:'/3000'
      },
      getCateList:{
        url:"/getCategoryDatas",  
        method:"get",
        corsUrl:'/3000'
      },
      getBuyNav:{
        url:"/topic/v1/know/navWap.json",
        method:"get",
        corsUrl:'/api'
      },
      getBuyList:{
        url:"/topic/v1/find/recAuto.json",
        method:"get",
        corsUrl:'/api'
      }
  }
}