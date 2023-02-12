/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

type ErrorModel = {
  id: string
  message: string
  detail: string
  help: string
  properties: Record<string, string>
}
