import type { CommonGoodsItem, PageResult } from '@/types/global'
export type SubType = {
  /** 子类id */
  id: string
  /** 子类标题 */
  title: string
  /** 子类名称 */
  goodsItems: PageResult<CommonGoodsItem>
}

//热门推荐类型
export type HotResult = {
  /** 推荐封面图 */
  bannerPicture: string
  /** id信息 */
  id: string
  /** 子类选项集合 */
  subTypes: SubType[]
  /** 活动标题 */
  title: string
}
