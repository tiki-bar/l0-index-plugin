/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

export type TxnContentsModelConsent = {
  raw: string
  ownershipId: string
  destination: string
  about: string
  reward: string
  expiry: Date
}
