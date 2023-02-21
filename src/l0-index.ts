/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import AddressRepository from './address/address-repository'
import AppRepository from './app/app-repository'
import BlockRepository from './block/block-repository'
import TxnRepository from './txn/txn-repository'
import SearchRepository from './search/search-repository'
import * as HttpHelpers from './utils/http-helpers'
import { TxnGet } from './txn/txn-get'
import { BlockGet } from './block/block-get'
import { AddressModel } from './address/address-model'
import { AddressGet } from './address/address-get'
import { BlockModel } from './block/block-model'
import { TxnModel } from './txn/txn-model'
import { AppModel } from './app/app-model'
import { L0IndexConfig } from './l0-index-config'
import { SearchModel } from './search/search-model'

export default class L0Index {
  appRepository: AppRepository
  addressRepository: AddressRepository
  blockRepository: BlockRepository
  txnRepository: TxnRepository
  searchRepository: SearchRepository

  constructor(config: L0IndexConfig) {
    this.appRepository = new AppRepository(config.host)
    this.addressRepository = new AddressRepository(config.host)
    this.blockRepository = new BlockRepository(config.host)
    this.txnRepository = new TxnRepository(config.host)
    this.searchRepository = new SearchRepository(config.host)
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

  search = (authorization: string, id: string): Promise<SearchModel[]> =>
    this.searchRepository.search(authorization, id)
}
