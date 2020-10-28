import {http, httpFile} from '@/network/base-url'

export function showData(){
    return http().get('/produksi')
}

export function create(data){
    return httpFile().post('/produksi', data)
}