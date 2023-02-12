/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import { TxnContentsModel } from './txn-contents-model'
import { TxnContentSchemaEnum } from './txn-content-schema-enum'
import { TxnContentsModelOwnership } from './txn-contents-model-ownership'
import { TxnContentsModelConsent } from './txn-contents-model-consent'

export type TxnModel = {
  appId: string
  address: string
  block: string
  url: URL
  hash: string
  version: number
  timestamp: Date
  assetRef: string
  signature: string
  contentSchema: TxnContentSchemaEnum
  contents:
    | TxnContentsModel
    | TxnContentsModelOwnership
    | TxnContentsModelConsent
}
