import http from '@/utils/http'
import type { LoginResult } from '@/types/member'

type LoginParams = {
  phoneNumber: string
}
//小程序登录接口
export const getLoginWxMinAPI = (params: LoginParams) => {
  return http<LoginResult>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: params,
  })
}
