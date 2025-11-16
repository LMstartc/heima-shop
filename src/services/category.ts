import http from '@/utils/http'
import type { CategoryTopItem } from '@/types/category'

// 分类列表
export const getCategoryAPI = () => {
  return http<CategoryTopItem[]>({
    url: '/category/top',
    method: 'GET',
  })
}
