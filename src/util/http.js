export default (axios,config={})=>{
  //过滤config
  if(!config.api)  throw new Error("api配置必须存在")
  if(!config.api instanceof Object) throw new Error("api必须得是一个对象")

  const HttpUtil = {}

  const {api} = config
  for(let name in api){
    let {url,method,corsUrl} = api[name]

    HttpUtil[name] = async (data={})=>{
      if(!(data instanceof Object)) throw new Error("请求数据必须是一个对象") 
      // if(corsUrl){
      //   url = corsUrl + url 
      //   console.log(url)
      //   corsUrl = '' 
      // }
      let body  = ""
      switch (method.toLowerCase()) {
        case 'get':
          body = await axios({
            url,
            method
          })
          break;
        case 'delete':
          break;
        case 'put':
          break;
        case 'post':
          break;
      }
      return body
    }
  }

  return HttpUtil
}