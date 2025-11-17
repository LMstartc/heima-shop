import http from '@/utils/http'

type LoginParams = {
  phoneNumber: string
}
//小程序登录接口
export const getLoginWxMinAPI = (params: LoginParams) => {
  return http({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: params,
  })
}
