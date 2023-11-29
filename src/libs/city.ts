// @ts-ignore
import qs from 'qs'

export function createCityRequest(path: string, token: string, opts: any = {}) {
  return fetch(`${process.env.URL}${path}`, {
    ...opts,
    headers: {
      ...opts.headers,
      Authorization: `Bearer ${token}`
    }
  })
}

export async function fetchCity(path: string, opts: RequestInit = {}) {
  const token = await getAccessToken()

  let req = createCityRequest(path, token, opts)

  return req
}

export async function fetchToiletList() {
  const res = await fetchCity('/toilet/toilet/management/list', {
    method: 'GET',
    cache: 'force-cache'
  })

  const result = await res.json()
  return result?.result
}

async function getAccessToken() {
  const res = await fetch(`${process.env.URL}/auth/oauth/token`, {
    method: 'POST',
    cache: 'force-cache',
    body: qs.stringify({
      systemTag: 'PC',
      username: '管理员5',
      password: '202cb962ac59075b964b07152d234b70',
      grant_type: 'inner'
    }),
    headers: {
      Authorization: 'Basic Y20td2ViOmNtLXdlYg==', // 添加 Authorization 头部
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  const result = await res.json()
  return result?.result?.accessToken
}
