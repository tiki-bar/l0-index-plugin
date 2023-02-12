/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import TxnRepository from '../txn/txn-repository'

describe('Txn Tests', () => {
  const body = {
    appId: '3808409b-0192-46e1-be61-bf078a5f8c7a',
    address: 'b5790651-d250-4ebd-b315-88ef2abcb204',
    block: '4e086bea-6157-443d-9d33-3e5b4fc93e37',
    url: 'http://localhost',
    hash: '2219c84e-158d-41a0-8a4e-06c8e586f584',
    version: 1,
    timestamp: '2023-02-12T08:07:01.888Z',
    assetRef: 'ce9648f6-fa0e-43d7-a7e4-acfddf04ef33',
    signature: '7ebe3060-cffa-4378-afef-9cd624c07a43',
    contentSchema: 'unknown',
    contents: {
      raw: '88170ec8-6479-416d-9128-6fd178cd6ce7',
    },
  }

  beforeEach(() => {
    jest
      .spyOn(global, 'fetch')
      .mockResolvedValue({ status: 200, json: async () => body } as Response)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Get - Success', async () => {
    const txnRepository = new TxnRepository('http://localhost')
    const rsp: TxnModel = await txnRepository.get('dummy', {
      appId: body.appId,
      address: body.address,
      blockHash: body.block,
      txnHash: body.hash,
    })

    expect(rsp.appId).toBe(body.appId)
    expect(rsp.address).toBe(body.address)
    expect(rsp.url).toBe(body.url)
    expect(rsp.block).toBe(body.block)
    expect(rsp.hash).toBe(body.hash)
    expect(rsp.version).toBe(body.version)
    expect(rsp.timestamp).toBe(body.timestamp)
    expect(rsp.assetRef).toBe(body.assetRef)
    expect(rsp.signature).toBe(body.signature)
    expect(rsp.contentSchema).toBe(body.contentSchema)
    expect(rsp.contents.raw).toBe(body.contents.raw)
  })
})
