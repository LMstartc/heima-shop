<script setup lang="ts">
// 引入自定义导航条组件
import CustomNavbar from './components/CustomNavbar.vue'
// 引入获取首页广告区域接口
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/component'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <CustomNavbar />
  <!-- 轮播图 -->
  <XtxSwiper :list="bannerList" />
</template>

<style lang="scss">
//
</style>
