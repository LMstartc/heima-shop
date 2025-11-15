import http from '@/utils/http'
import type { BannerItem, CategoryMultiItem, GuessItem, HotMultiItem } from '@/types/home'
import type { PageResult, PageParams } from '@/types/global'
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

///home/category/mutli
export const getHomeCategoryMultiAPI = () => {
  return http<CategoryMultiItem[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

export const getHomeHotMultiAPI = () => {
  return http<HotMultiItem[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}

///home/goods/guessLike
export const getHomeGuessLikeAPI = (params?: PageParams) => {
  return http<PageResult<GuessItem>>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data: {
      page: params?.page,
      pageSize: params?.pageSize,
    },
  })
}
