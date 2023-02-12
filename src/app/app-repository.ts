/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import * as HttpHelpers from '../utils/http-helpers'

export default class AppRepository {
  host: string

  constructor(host: string) {
    this.host = host
  }

  get(
    authorization: string,
    appId: string,
    page?: HttpHelpers.PageRequest
  ): Promise<AppModel> {
    return fetch(
      HttpHelpers.page(`${this.host}/api/latest/app/${appId}`, page),
      {
        method: 'get',
        headers: HttpHelpers.headers(authorization),
      }
    ).then((response) => HttpHelpers.marshall<AppModel>(response))
  }
}
