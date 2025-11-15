// src/types/components.d.ts
// 全局组件类型声明文件
// 用于扩展 Vue 的 GlobalComponents 接口，实现组件自动类型推导
import XtxSwiper from '@/components/XtxSwiper.vue'
import XtxGuess from '@/components/XtxGuess.vue'
declare module 'vue' {
  // 扩展 Vue 模块声明
  export interface GlobalComponents {
    // 全局组件接口
    XtxSwiper: typeof XtxSwiper // 轮播图组件类型声明
    XtxGuess: typeof XtxGuess // 猜你喜欢组件类型声明
  }
}

export type XtxGuessInstance = InstanceType<typeof XtxGuess>
