import Axios from './axios'

class API extends Axios {
    async getArticle(params = {}) {
        try{
            let result = await this.axios('get', 'http://119.23.47.10/dachuang/brief', params); 
            if(result && result.status === 1){
                return result
            } else {
                let err = {
                  tip: '获取失败',
                  response: result,
                  data: params,
                  url: 'http://119.23.47.10/dachuang/brief',
                }
                throw err;
            }
        } catch(err) {
            throw err
        }
    }
}

export default new API()