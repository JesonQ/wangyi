import home from "pages/home/home"
import classify from "pages/classify/classify"
import buy from "pages/buy/buy"
import cart from "pages/cart/cart"
import user from "pages/user/user"
import maskSearch from "pages/maskSearch/maskSearch"

export default [
  {
    path:"/home",
    component:home,
    // props:true,
    //     children:[
    //         {path:"/",component:goods},
    //         {path:"ratings",component:ratings},
    //         {path:"sellers",component:sellers},
    //         {path:"",redirect:"goods"}
    //     ]
  },
  {
    path:"/classify",
    component:classify,
    
  },
  {path:"/buy",component:buy},
  {path:"/cart",component:cart},
  {path:"/user",component:user},
  {path:"/maskSearch",component:maskSearch},
  {path:"/",redirect:"/home"},

]
