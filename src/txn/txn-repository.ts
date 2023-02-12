/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import * as HttpHelpers from '../utils/http-helpers'
import { TxnGet } from './txn-get'
import { TxnModel } from './txn-model'

export default class TxnRepository {
  host: string

  constructor(host: string) {
    this.host = host
  }

  get(
    authorization: string,
    request: TxnGet,
    page?: HttpHelpers.PageRequest
  ): Promise<TxnModel> {
    return fetch(
      HttpHelpers.page(
        `${this.host}/api/latest/app/${request.appId}/address/${request.address}/block/${request.blockHash}/transaction/${request.txnHash}`,
        page
      ),
      {
        method: 'get',
        headers: HttpHelpers.headers(authorization),
      }
    ).then((response) => HttpHelpers.marshall<TxnModel>(response))
  }
}
