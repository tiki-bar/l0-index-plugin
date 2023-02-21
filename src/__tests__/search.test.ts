/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import SearchRepository from '../search/search-repository'
import { SearchModel } from '../search/search-model'

describe('Search Tests', () => {
  const body = [
    {
      appId: '3808409b-0192-46e1-be61-bf078a5f8c7a',
      address: 'b5790651-d250-4ebd-b315-88ef2abcb204',
    },
  ]

  beforeEach(() => {
    jest
      .spyOn(global, 'fetch')
      .mockResolvedValue({ status: 200, json: async () => body } as Response)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('Search - Success', async () => {
    const searchRepository = new SearchRepository('http://localhost')
    const rsp: Array<SearchModel> = await searchRepository.search(
      'dummy',
      body[0].appId
    )

    expect(rsp[0].appId).toBe(body[0].appId)
    expect(rsp[0].address).toBe(body[0].address)
  })
})
