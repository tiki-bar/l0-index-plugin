/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */
import { BlockPageModel } from '../block/block-page-model'

export type AddressModel = {
  appId: string
  address: string
  blocks: BlockPageModel
}
