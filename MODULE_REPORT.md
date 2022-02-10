## Module Report
### Unknown Global

**Global**: `Ember.Test`

**Location**: `tests/integration/components/simple-bar-test.js` at line 9

```js

function waitABit(interval = 500) {
  return new Ember.Test.promise(function (resolve) {
    Ember.Test.adapter.asyncStart();
    later(
```

### Unknown Global

**Global**: `Ember.Test`

**Location**: `tests/integration/components/simple-bar-test.js` at line 10

```js
function waitABit(interval = 500) {
  return new Ember.Test.promise(function (resolve) {
    Ember.Test.adapter.asyncStart();
    later(
      this,
```

### Unknown Global

**Global**: `Ember.Test`

**Location**: `tests/integration/components/simple-bar-test.js` at line 14

```js
      this,
      function () {
        Ember.Test.adapter.asyncEnd();
        resolve();
      },
```
