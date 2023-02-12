/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

import { Greeter } from '../index'

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl')
})
