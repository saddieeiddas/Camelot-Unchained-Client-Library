/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

var name = 'camelot-unchained';

module.exports = {
  type: 'library',
  path: __dirname,
  name: name,
  bundle: {
    base: 'js',
    sass_base: '',
    sass_dest: '',
  },
  lib: {
    sass: true,
    sass_base: '',
    sass_dest: '',
    css_dest: '',
    copy: true,
  },
};
