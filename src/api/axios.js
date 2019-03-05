import axios from 'axios'

// let instance = axios.create({
//     baseURL: 'http://119.23.47.10/dachuang',
//     timeout: 3000,
//     headers: {'X-Custom-Header': 'foobar'}
// })

export default class Axios {
    /**
     * axios的配置
     * @param {String} method 请求方法
     * @param {String} url 地址
     * @param {Object} params 配置参数
     */
    axios(method = 'get', url = 'http://119.23.47.10/dachuang', params = {}) {
        return new Promise((resolve, reject) => {
            let _option = params
            _option = {
                method,
                url,
                baseURL: url.startsWith('http') ? url : 'www.whatever.com' + url,
                timeout: 3000,
                params: null,
                data: null,
                withCredentials: true, //是否携带cookies发起请求
                validateStatus: (status)=>{
                    return status >= 200 && status < 300;
                },
                // ...params
            }
            axios.request(_option)
                .then(res => {
                    resolve(res)
                },error => {
                    if(error.response){
                        reject(error.response.data)
                    }else{
                        reject(error)
                    }
                })   
        })
    }
}