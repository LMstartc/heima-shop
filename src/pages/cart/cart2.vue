<script setup lang="ts">
import { ref } from 'vue'
import CarMain from './components/CarMain.vue'
const isSafeArea = ref(true)
</script>

<template>
  <CarMain :isSafeArea="isSafeArea" />
</template>
