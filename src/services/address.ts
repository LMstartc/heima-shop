///member/address

import type { AddressItem, AddressParams } from '@/types/address'
import http from '@/utils/http'
/**
 * 添加收货地址
 * @param data 收货地址参数
 * */
export const postMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

/**
 * 获取收货列表
 */
export const getMemberAddressAPI = () => {
  return http<AddressItem[]>({
    url: '/member/address',
    method: 'GET',
  })
}

/**
 * 获取收货地址详情
 * @param id 收货地址 id
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
    method: 'GET',
  })
}
/**
 * 修改收货地址
 * @param id 收货地址 id
 * @param data 收货地址参数
 */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}
/**
 * 删除收货地址
 * @param id 收货地址 id
 */
export const deleteMemberAddressByIdAPI = (id: string) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}
