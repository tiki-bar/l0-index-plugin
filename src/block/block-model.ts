/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

export type BlockModel = {
  appId: string
  address: string
  hash: string
  url: URL
  version: number
  timestamp: Date
  previous: string
  signature: string
  transactionRoot: string
  transactions: string[]
}
