/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

export { headers, page, PageRequest, marshall }

function headers(token?: string): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  if (token !== undefined) {
    headers['Authorization'] = `Bearer ${token}`
  }
  return headers
}

type PageRequest = {
  page?: number
  size?: number
}

function page(path: string, pageRequest?: PageRequest): URL {
  const url = new URL(path)
  if (pageRequest?.page !== undefined)
    url.searchParams.append('page', String(pageRequest?.page))
  if (pageRequest?.size !== undefined)
    url.searchParams.append('size', String(pageRequest?.size))
  return url
}

async function marshall<T>(response: Response): Promise<T> {
  const body = await response.json()
  if (response.status != 200) return Promise.reject(body as ErrorModel)
  return body as T
}
