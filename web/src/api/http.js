//简单的封装一下axios请求
// import localStore from 'store'
import axios from 'axios'
import store from '../store'
import { Message, MessageBox } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_URL //默认所有请求地址添加baseurl
})
console.log(process.env.VUE_APP_URL)
//请求前需要处理的参数  -- 比如：token
// service.interceptors.request.use(
//   config => {
//     let Token = store.getters.token || localStore.get('token')
//     config.headers['Authorization'] = Token
//     return config
//   },
//   error => {
//     Promise.reject(error)
//   }
// )
//响应后需要处理的参数  -- 比如：判断token失效
service.interceptors.response.use(
  response => {
    //响应成功后处理xx
    let code = response.data.code
    if (response.status === 200 && code === 0) {
      return Promise.resolve(response.data)
    }
    if (code === -100) {
      MessageBox.alert('token已过期或失效，请您重新登录。', '提示', {
        confirmButtonText: '知道了',
        showClose: false,
        callback: () => {
          window.location.href = '/'
        }
      })
      store.dispatch('logout')
    } else if (code === -101) {
      MessageBox.alert('没有权限。', '警告', {
        confirmButtonText: '知道了',
        showClose: false,
        callback: () => {
          window.location.href = '/'
        }
      })
      store.dispatch('logout')
    } else {
      Message.error(response.data.msg)
    }
    return Promise.reject(response.data.msg)
  },
  error => {
    //响应失败后处理xx
    return Promise.reject(error)
  }
)

//外部使用axios
export default function http(url, data = {}, type = 'get') {
  if (type.toLocaleLowerCase() === 'get') {
    //get请求
    return service({
      url,
      method: type,
      params: data
    })
  } else if (type.toLocaleLowerCase() === 'post') {
    //post请求
    return service({
      url,
      method: type,
      data
    })
  } else {
    //delete/put请求
    return service({
      url,
      method: type,
      params: data
    })
  }
}
