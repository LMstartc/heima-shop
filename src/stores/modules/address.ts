import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectedAddress = ref<AddressItem | null>(null)
  /**
   * 存储选中的地址
   * @param val
   */
  const changeSelectedAddress = (val: AddressItem | null) => {
    selectedAddress.value = val
  }
  return {
    selectedAddress,
    changeSelectedAddress,
  }
})
