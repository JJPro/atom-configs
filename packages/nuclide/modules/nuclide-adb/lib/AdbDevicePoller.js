"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeAndroidDevices = observeAndroidDevices;
exports.adbDeviceForIdentifier = adbDeviceForIdentifier;

function _log4js() {
  const data = require("log4js");

  _log4js = function () {
    return data;
  };

  return data;
}

function _collection() {
  const data = require("../../nuclide-commons/collection");

  _collection = function () {
    return data;
  };

  return data;
}

function _SimpleCache() {
  const data = require("../../nuclide-commons/SimpleCache");

  _SimpleCache = function () {
    return data;
  };

  return data;
}

function _shallowequal() {
  const data = _interopRequireDefault(require("shallowequal"));

  _shallowequal = function () {
    return data;
  };

  return data;
}

var _RxMin = require("rxjs/bundles/Rx.min.js");

function _expected() {
  const data = require("../../nuclide-commons/expected");

  _expected = function () {
    return data;
  };

  return data;
}

function _nuclideUri() {
  const data = _interopRequireDefault(require("../../nuclide-commons/nuclideUri"));

  _nuclideUri = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("./utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 *  strict-local
 * @format
 */
// $FlowIgnore untyped import
function observeAndroidDevices(host) {
  const serviceUri = _nuclideUri().default.isRemote(host) ? _nuclideUri().default.createRemoteUri(_nuclideUri().default.getHostname(host), '/') : '';
  return pollersForUris.getOrCreate(serviceUri, () => {
    let fetching = false;
    return _RxMin.Observable.interval(2000).startWith(0).filter(() => !fetching).switchMap(() => {
      fetching = true;
      return _RxMin.Observable.fromPromise((0, _utils().getAdbServiceByNuclideUri)(serviceUri).getDeviceList()).map(devices => _expected().Expect.value(devices)).catch(err => {
        const logger = (0, _log4js().getLogger)('nuclide-adb');

        if (err.stack.startsWith('TimeoutError')) {
          logger.debug('Error polling for devices: ' + err.message);
        } else {
          logger.warn('Error polling for devices: ' + err.message);
        }

        return _RxMin.Observable.of(_expected().Expect.error(new Error("Can't fetch Android devices.\n\n" + err.message)));
      }).do(() => {
        fetching = false;
      });
    }).distinctUntilChanged((a, b) => (0, _expected().expectedEqual)(a, b, (v1, v2) => (0, _collection().arrayEqual)(v1, v2, _shallowequal().default), (e1, e2) => e1.message === e2.message)).publishReplay(1).refCount();
  });
} // This is a convenient way for any device panel plugins of type Android to get from Device to
// to the strongly typed AdbDevice.


async function adbDeviceForIdentifier(host, identifier) {
  const devices = await observeAndroidDevices(host).take(1).toPromise();
  return devices.getOrDefault([]).find(d => d.serial === identifier);
}

const pollersForUris = new (_SimpleCache().SimpleCache)();