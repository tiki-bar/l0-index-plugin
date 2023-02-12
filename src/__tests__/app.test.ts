/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import AppRepository from '../app/app-repository'
import { AppModel } from '../app/app-model'

describe('App Tests', () => {
  const body = {
    appId: '3808409b-0192-46e1-be61-bf078a5f8c7a',
    addresses: {
      page: 0,
      totalPages: 1,
      totalAddresses: 1,
      addresses: ['b5790651-d250-4ebd-b315-88ef2abcb204'],
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
    const appRepository = new AppRepository('http://localhost')
    const rsp: AppModel = await appRepository.get('dummy', body.appId)

    expect(rsp.appId).toBe(body.appId)
    expect(rsp.addresses.page).toBe(0)
    expect(rsp.addresses.totalAddresses).toBe(1)
    expect(rsp.addresses.totalPages).toBe(1)
    expect(rsp.addresses.addresses).toBe(body.addresses.addresses)
  })
})
