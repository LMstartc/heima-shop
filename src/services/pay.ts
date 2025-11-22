import http from '@/utils/http'

/**
 * 微信小程序支付
 * @param data
 * @returns
 */
export const getPayWxPayMiniPayAPI = (data: { orderId: string }) => {
  return http<WechatMiniprogram.RequestPaymentOption>({
    url: '/pay/wxPay/miniPay',
    method: 'GET',
    data,
  })
}
/**
 * 模拟支付成功
 * @param data 订单ID
 * @returns
 */
export const getPayMockAPI = (data: { orderId: string }) => {
  return http({
    url: '/pay/mock',
    method: 'GET',
    data,
  })
}
