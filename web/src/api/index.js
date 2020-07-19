import http from './http'

/**
 * ajax(url,data,type)
 * @param url  请求地址
 * @param data  请求数据
 * @param type  请求方式
 */
export const login = data => http(`/login`, data, 'post')
