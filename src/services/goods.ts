import type { GoodsResult } from '@/types/good'
import http from '@/utils/http'

///goods

export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
