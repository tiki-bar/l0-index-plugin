/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import * as HttpHelpers from '../utils/http-helpers'

export default class AddressRepository {
  host: string

  constructor(host: string) {
    this.host = host
  }

  get(
    authorization: string,
    request: AddressGet,
    page?: HttpHelpers.PageRequest
  ): Promise<AddressModel> {
    return fetch(
      HttpHelpers.page(
        `${this.host}/api/latest/app/${request.appId}/address/${request.address}`,
        page
      ),
      {
        method: 'get',
        headers: HttpHelpers.headers(authorization),
      }
    ).then((response) => HttpHelpers.marshall<AddressModel>(response))
  }
}
