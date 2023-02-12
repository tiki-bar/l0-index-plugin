/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import AddressRepository from '../address/address-repository'

describe('Address Tests', () => {
  const body = {
    appId: '3808409b-0192-46e1-be61-bf078a5f8c7a',
    address: 'b5790651-d250-4ebd-b315-88ef2abcb204',
    blocks: {
      page: 0,
      totalPages: 1,
      totalHashes: 1,
      hashes: ['4e086bea-6157-443d-9d33-3e5b4fc93e37'],
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
    const addressRepository = new AddressRepository('http://localhost')
    const rsp: AddressModel = await addressRepository.get('dummy', {
      appId: body.appId,
      address: body.address,
    })

    expect(rsp.appId).toBe(body.appId)
    expect(rsp.address).toBe(body.address)
    expect(rsp.blocks.page).toBe(0)
    expect(rsp.blocks.totalHashes).toBe(1)
    expect(rsp.blocks.totalPages).toBe(1)
    expect(rsp.blocks.hashes).toBe(body.blocks.hashes)
  })
})
