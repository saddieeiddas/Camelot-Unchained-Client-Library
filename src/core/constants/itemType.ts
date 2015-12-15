/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

enum itemType {
  NONE = 0,
  EQUIPABLE = 1 << 0,
  RESOURCE = 1 << 1
};

export default itemType;
