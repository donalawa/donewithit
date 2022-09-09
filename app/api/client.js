import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
    baseURL: 'http://172.20.10.6:9000/api'
})

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    // Before
    // get(url, params, axiosConfig);
    console.log('GET REQ')
    const response = await get(url, params, axiosConfig);
    
    if(response.ok){
        // console.log('INFO TO STORE BELOW')
        // console.log(url);
        // console.log(response.data)
        cache.store(url, response.data);
        return response;
    }

    console.log('response not ok')
    
    const data = await cache.get(url);
    // console.log('CACHE DATA BELOW');
    // console.log('cache data', data)
    return data ? {ok: true, data} : response;
}

export default apiClient;