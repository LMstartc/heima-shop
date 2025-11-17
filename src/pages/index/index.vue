<script setup lang="ts">
// 引入自定义导航条组件
import CustomNavbar from './components/CustomNavbar.vue'
// 引入获取首页广告区域接口
import { getHomeBannerAPI, getHomeCategoryMultiAPI, getHomeHotMultiAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryMultiItem, HotMultiItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
  // 处理图片路径
  bannerList.value.forEach((item) => {
    item.imgUrl = item.imgUrl.replace('http', 'https')
  })
}
const categoryList = ref<CategoryMultiItem[]>([])
const getHomeCategoryMultiData = async () => {
  const res = await getHomeCategoryMultiAPI()
  categoryList.value = res.result
  // 处理图标路径
  categoryList.value.forEach((item) => {
    item.icon = item.icon.replace('http', 'https')
  })
  //console.log(categoryList.value)
}

const hotList = ref<HotMultiItem[]>([])
const getHomeHotMultiData = async () => {
  const res = await getHomeHotMultiAPI()
  hotList.value = res.result
  //console.log(hotList.value)
  hotList.value.forEach((item) => {
    for (const img of item.pictures) {
      if (img.includes('https')) {
        return
      } else {
        item.pictures[item.pictures.indexOf(img)] = img.replace('http', 'https')
      }
    }
  })
}
const { guessRef, handleScrollToLower } = useGuessList()

// 加载状态
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryMultiData(), getHomeHotMultiData()])
  isLoading.value = false
})
//下拉刷新
const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryMultiData(),
    getHomeHotMultiData(),
    guessRef.value?.getMore(),
  ])

  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="handleScrollToLower"
    class="container"
    scroll-y
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 类目 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
// 首页
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
// 首页容器
.container {
  flex: 1;
}
</style>
