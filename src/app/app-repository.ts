/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import headers from '../utils/headers'

export default class AppRepository {
  host: string

  constructor(host: string) {
    this.host = host
  }

  get = (appId: string, authorization?: string): Promise<AppModel> =>
    fetch(`${this.host}/api/latest/app/${appId}`, {
      method: 'get',
      headers: headers(authorization),
    }).then(async (response) => {
      const body = await response.json()
      if (response.status != 200) return Promise.reject(body as ErrorModel)
      return body as AppModel
    })
}
