
<a href="http://travis-ci.com/fpauser/ember-simplebar"><img src="https://travis-ci.com/fpauser/ember-simplebar.svg?branch=master" alt="Build Status"></a>
<a href="https://npmjs.org/package/ember-simplebar"><img alt="NPM version" src="https://img.shields.io/npm/v/ember-simplebar.svg?style=flat-square" /></a>
<a href="https://npmjs.org/package/ember-simplebar"><img alt="NPM downloads" src="https://img.shields.io/npm/dm/ember-simplebar.svg?style=flat-square"></a>

ember-simplebar
==============================================================================

A scrollbar component that wraps [SimpleBar](https://github.com/Grsmto/simplebar).



Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Embroider
------------------------------------------------------------------------------
This addon is [tested against embroider](https://medium.com/@kiwiupover/embroider-preparation-14d59edafc0b) and can be used with the new [embroider](https://github.com/embroider-build/embroider) build system.


Installation
------------------------------------------------------------------------------

```
ember install ember-simplebar
```


Usage
------------------------------------------------------------------------------

```hbs
<SimpleBar>
  ...
</SimpleBar>
```

All [supported options of SimpleBar](https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/README.md#options) can be given as component arguments, e.g.:

```hbs
<SimpleBar @autoHide={{true}} @timeout={{200}}>
  ...
</SimpleBar>
```

SimpleBar yields the current simplebar instance that can be used to e.g. `recalculate`:

```hbs
<SimpleBar as |sb|>
  <object
    type="image/svg+xml"
    data="http://path/to/object.svg"
    {{on "load" sb.recalculate}}
  />
</SimpleBar>
```

Integration
------------------------------------------------------------------------------

To use it together with [vertical-collection](https://github.com/html-next/vertical-collection) use the `containerSelector` option:

```hbs
<SimpleBar>
  <VerticalCollection 
    @items={{this.items}}
    @estimateHeight={{50}}
    @containerSelector=".simplebar-content-wrapper"
    as |item|
  >
    {{item}}
  </VerticalCollection>
</SimpleBar>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
