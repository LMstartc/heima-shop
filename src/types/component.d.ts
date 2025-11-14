// src/types/components.d.ts
// 全局组件类型声明文件
// 用于扩展 Vue 的 GlobalComponents 接口，实现组件自动类型推导
import XtxSwiper from './XtxSwiper.vue'
declare module 'vue' {
  // 扩展 Vue 模块声明
  export interface GlobalComponents {
    // 全局组件接口
    XtxSwiper: typeof XtxSwiper // 轮播图组件类型声明
  }
}

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}
