/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import AppRepository from '../app/app-repository'

describe('App Tests', () => {
  const appId = '5fced1c8-eaee-4e7c-ac00-9f617b1d7f8b'
  const address = 'cdd09c44-e656-438a-9de9-37e47e84fcbc'

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      status: 200,
      json: async () => ({
        appId: appId,
        addresses: {
          page: 0,
          totalPages: 1,
          totalAddresses: 1,
          addresses: [address],
        },
      }),
    } as Response)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Get - Success', async () => {
    const app = new AppRepository('http://localhost:10504')
    const rsp: AppModel = await app.get(appId, 'dummy')

    expect(rsp.appId).toBe(appId)
    expect(rsp.addresses.page).toBe(0)
    expect(rsp.addresses.totalAddresses).toBe(1)
    expect(rsp.addresses.totalPages).toBe(1)
    expect(rsp.addresses.addresses).toContain(address)
  })
})
