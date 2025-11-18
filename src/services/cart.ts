import type { CartItem } from '@/types/cart'
import http from '@/utils/http'
/**
 * 加入购物车
 * @param data 购物车参数
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}

/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    url: '/member/cart',
    method: 'GET',
  })
}

/**
 * 删除购物车商品
 * @param data 购物车商品ID ids是skuId的集合
 */
export const deleteMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data,
  })
}
/**
 * 修改购物车商品数量
 * @param data 购物车商品ID和数量
 */
export const putMemberCartByskuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data,
  })
}

/**
 * 全选购物车商品
 * @param data 购物车商品ID和是否选中
 */
export const putMemberCartSelectedAPI = (data: { selected: boolean }) => {
  return http({
    url: '/member/cart/selected',
    method: 'PUT',
    data,
  })
}
