"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileEventKind = void 0;

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 *  strict
 * @format
 */
const FileEventKind = Object.freeze({
  OPEN: 'open',
  SYNC: 'sync',
  CLOSE: 'close',
  EDIT: 'edit',
  SAVE: 'save'
});
exports.FileEventKind = FileEventKind;