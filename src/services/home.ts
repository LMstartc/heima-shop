import http from '@/utils/http'
import type { BannerItem } from '@/types/component'

// 获取首页广告区域接口
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
