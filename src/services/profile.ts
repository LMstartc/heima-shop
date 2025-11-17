///member/profile
import type { ProfileDetail, ProfileParams } from '@/types/member'
import http from '@/utils/http'

export const getProfileAPI = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'GET',
  })
}

export const putMemberProfileAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
