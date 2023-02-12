/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import BlockRepository from '../block/block-repository'

describe('Block Tests', () => {
  const body = {
    appId: '3808409b-0192-46e1-be61-bf078a5f8c7a',
    address: 'b5790651-d250-4ebd-b315-88ef2abcb204',
    hash: '4e086bea-6157-443d-9d33-3e5b4fc93e37',
    url: 'http://localhost',
    version: 1,
    timestamp: '2023-02-12T08:07:01.888Z',
    previous: '4e086bea-6157-443d-9d33-3e5b4fc93e36',
    signature: '8f058a8f-bf38-4c1a-a55c-ec7f3d4b92e1',
    transactionRoot: '8f058a8f-bf38-4c1a-a55c-ec7f3d4b92e1',
    transactions: ['4449b966-bae0-4c63-b2df-055784c45ecb'],
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
    const blockRepository = new BlockRepository('http://localhost')
    const rsp: BlockModel = await blockRepository.get('dummy', {
      appId: body.appId,
      address: body.address,
      blockHash: body.hash,
    })

    expect(rsp.appId).toBe(body.appId)
    expect(rsp.address).toBe(body.address)
    expect(rsp.url).toBe(body.url)
    expect(rsp.previous).toBe(body.previous)
    expect(rsp.signature).toBe(body.signature)
    expect(rsp.hash).toBe(body.hash)
    expect(rsp.timestamp).toBe(body.timestamp)
    expect(rsp.version).toBe(body.version)
    expect(rsp.transactionRoot).toBe(body.transactionRoot)
    expect(rsp.transactions).toBe(body.transactions)
  })
})
