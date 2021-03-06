"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideHgBlameProvider = provideHgBlameProvider;

function _HgBlameProvider() {
  const data = _interopRequireDefault(require("./HgBlameProvider"));

  _HgBlameProvider = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 *  strict-local
 * @format
 */
function provideHgBlameProvider() {
  return _HgBlameProvider().default;
}