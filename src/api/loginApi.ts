import http from '@/http/httpClient'
import { useUserStore } from '@/store'

/* 登录 获取 accessToken */
export const loginApi: any = async data => {
  const res: any = await http.post('/login', {
    data
  })
  const store = useUserStore()
  store.setUserInfo({
    refreshToken: res.data.refreshToken,
    accessToken: res.data.accessToken
  })
}

/* 拿 refreshToken 换取 accessToken 与 新 refreshToken */
/* 即刷新 accessToken */
export const refreshTokenApi: any = async () => {
  const store = useUserStore()
  const { refreshToken } = store.userInfo || {}
  const res: any = await http.get('/refresh', {
    data: {
      refreshToken: refreshToken
    }
  })
  store.setUserInfo({
    refreshToken: res.data.refreshToken,
    accessToken: res.data.accessToken
  })
  return res
}

/* 获取用户信息 */
export const getListApi: any = async () => {
  return http.get('/userInfo')
}
