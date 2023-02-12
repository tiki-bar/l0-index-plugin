/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import { TxnContentsModel } from './txn-contents-model'

export type TxnContentsModelOwnership = {
  raw: string
  source: string
  type: string
  origin: string
  about: string
  contains: string
} & TxnContentsModel
