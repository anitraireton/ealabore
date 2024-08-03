var _privateField = new WeakMap();

class MyClass {
  constructor(value) {
    _classPrivateFieldInit(this, _privateField, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _privateField, value);
  }

  setPrivateField(value) {
    _classPrivateFieldSet(this, _privateField, value);
  }

  getPrivateField() {
    return _classPrivateFieldGet(this, _privateField);
  }
}

function _classPrivateFieldInit(obj, privateMap, descriptor) {
  if (!privateMap.has(obj)) {
    privateMap.set(obj, descriptor.value);
  } else {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

function _classPrivateFieldSet(obj, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(obj, privateMap, "set");
  descriptor.set.call(obj, value);
  return value;
}

function _classPrivateFieldGet(obj, privateMap) {
  var descriptor = _classExtractFieldDescriptor(obj, privateMap, "get");
  return descriptor.get.call(obj);
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}

const myObject = new MyClass(42);
console.log(myObject.getPrivateField()); // Outputs: 42
myObject.setPrivateField(100);
console.log(myObject.getPrivateField()); // Outputs: 100
