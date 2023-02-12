/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

type TxnModel = {
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
