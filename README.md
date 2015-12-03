cu-core
=======

> Core Camelot Unchained Client Library

---
*Notice: This library is currently under heavy development and is not guaranteed to be in a working state as this time.  This notice will be removed when the library is stable.*

Installation
------------

You can install the package as an npm package

```
npm install cu-core
```

Usage
---------

Within a CU UI Component be sure to run 'tsd install' after installing cu-core so that the definition file reference is added to tsd.d.ts.

```javascript
import {race, channelId} from 'cu-core';
console.log('Strm is #' + race.STRM);
console.log('Hatchery is channel #' + channelId.HATCHERY);
```


Development
-----------

Clone the Repository and run:

```
npm install
gulp install
```

Build using gulp

```
gulp build
```

or for builds as you develop

```
gulp
```
