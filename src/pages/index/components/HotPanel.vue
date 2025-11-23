<script setup lang="ts">
// 首页-热门推荐组件
import type { HotMultiItem } from '@/types/home'

const props = defineProps({
  list: {
    type: Array as () => HotMultiItem[],
    default: () => [],
  },
})
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" :url="`/pages/hot/hot?type=${item.type}`" class="cards">
        <image
          v-for="(img, index) in item.pictures"
          :key="index"
          class="image"
          mode="aspectFit"
          :src="img"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
@import './styles/HotPanel.scss';
</style>
