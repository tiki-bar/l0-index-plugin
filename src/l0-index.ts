/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import AddressRepository from './address/address-repository'
import AppRepository from './app/app-repository'
import BlockRepository from './block/block-repository'
import TxnRepository from './txn/txn-repository'
import * as HttpHelpers from './utils/http-helpers'

export default class L0Index {
  appRepository: AppRepository
  addressRepository: AddressRepository
  blockRepository: BlockRepository
  txnRepository: TxnRepository

  constructor(config: L0IndexConfig) {
    this.appRepository = new AppRepository(config.host)
    this.addressRepository = new AddressRepository(config.host)
    this.blockRepository = new BlockRepository(config.host)
    this.txnRepository = new TxnRepository(config.host)
  }

  app = (
    authorization: string,
    appId: string,
    page?: HttpHelpers.PageRequest
  ): Promise<AppModel> => this.appRepository.get(authorization, appId, page)

  address = (
    authorization: string,
    request: AddressGet,
    page?: HttpHelpers.PageRequest
  ): Promise<AddressModel> =>
    this.addressRepository.get(authorization, request, page)

  block = (
    authorization: string,
    request: BlockGet,
    page?: HttpHelpers.PageRequest
  ): Promise<BlockModel> =>
    this.blockRepository.get(authorization, request, page)

  transaction = (
    authorization: string,
    request: TxnGet,
    page?: HttpHelpers.PageRequest
  ): Promise<TxnModel> => this.txnRepository.get(authorization, request, page)
}
