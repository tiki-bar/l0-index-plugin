/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import * as HttpHelpers from '../utils/http-helpers'

export default class BlockRepository {
  host: string

  constructor(host: string) {
    this.host = host
  }

  get(
    authorization: string,
    request: BlockGet,
    page?: HttpHelpers.PageRequest
  ): Promise<BlockModel> {
    return fetch(
      HttpHelpers.page(
        `${this.host}/api/latest/app/${request.appId}/address/${request.address}/block/${request.blockHash}`,
        page
      ),
      {
        method: 'get',
        headers: HttpHelpers.headers(authorization),
      }
    ).then((response) => HttpHelpers.marshall<BlockModel>(response))
  }
}
