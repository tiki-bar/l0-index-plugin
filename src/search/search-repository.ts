/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import * as HttpHelpers from '../utils/http-helpers'
import { ErrorModel } from '../utils/error-model'
import { SearchModel } from './search-model'

export default class SearchRepository {
  host: string

  constructor(host: string) {
    this.host = host
  }

  search(authorization: string, id: string): Promise<SearchModel[]> {
    const url = new URL(`${this.host}/api/latest/search`)
    url.searchParams.append('id', id)
    return fetch(url, {
      method: 'get',
      headers: HttpHelpers.headers(authorization),
    }).then(async (response) => {
      const body = await response.json()
      if (response.status != 200) return Promise.reject(body as ErrorModel)
      return body as SearchModel[]
    })
  }
}
