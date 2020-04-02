import home from "pages/home/home"
import classify from "pages/classify/classify"
import buy from "pages/buy/buy"
import cart from "pages/cart/cart"
import user from "pages/user/user"
import maskSearch from "pages/maskSearch/maskSearch"

export default [
  {path:"/home",component:home},
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
