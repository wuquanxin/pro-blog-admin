import { getStorageToekn, setStorageToekn,isDev,isMain } from '@u/tools'
import { MessageBox, Message } from 'element-ui'

const isDev_local = process.env.NODE_ENV === 'development';
const base = "http://127.0.0.1:8899"
// const base = isDev()?'https://open.xjy.cn/':(isMain()? "https://open.xjy.cn/api" : "https://open.xjy.cn/dev");

// 后台系统不跨域，所以不设置跨域信息
const service = axios.create({
  // baseURL: base,
  timeout: 15000, // 请求超时时间
})

service.interceptors.request.use(
  config => {

    // 设置json格式
    config.headers['Content-Type'] = 'application/json';

    if(isDev_local){
      config.url = '/dev' + config.url;
    }

    // token
    let token = getStorageToekn();
    if(token){
      // 在header参数里面加入token
      config.headers['token'] = token;
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
    response => {

      let error = response.data.error;

      if(error==-1 && !window.lock){
        // 删除token，刷新页面，让页面重新走路由系统
        setStorageToekn(false);
        // 防止多个接口重复弹出
        window.lock = true;
        // 提示用户
        MessageBox(
          '您已经登录超时，点击确认后重新登录！',
          '登录超时！',
          {
            confirmButtonText: '确定',
            callback: action => {
              // 删除完成token之后，让页面刷新，重新走路由系统，进入登录页
              window.location.reload();
            }
          }
        );

      }else{
        return response.data
      }

    },
    error => {

      let err = error.response.error;

      if(err>0){
        Message.error("网络错误，请检查您的网络！")
      }

      return Promise.reject(error)
    }
);

export default service
