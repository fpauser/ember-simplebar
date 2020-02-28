<a href="http://travis-ci.com/fpauser/ember-simplebar">
  <img src="https://travis-ci.com/fpauser/ember-simplebar.svg?branch=master" alt="Build Status">
</a>

ember-simplebar
==============================================================================

A scrollbar component that wraps [SimpleBar](https://github.com/Grsmto/simplebar).



Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


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

All supported options of SimpleBar can be given as component arguments, e.g.:

```hbs
<SimpleBar @autoHide={{true}} @timeout={{200}}>
  ...
</SimpleBar>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
