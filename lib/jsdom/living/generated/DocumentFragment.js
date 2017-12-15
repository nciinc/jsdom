"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isNode = require("./Node.js").is;
const impl = utils.implSymbol;
const Node = require("./Node.js");
const ParentNode = require("./ParentNode.js");

function DocumentFragment() {
  iface.setup(this);
}

Object.setPrototypeOf(DocumentFragment.prototype, Node.interface.prototype);
Object.setPrototypeOf(DocumentFragment, Node.interface);

Object.defineProperty(DocumentFragment, "prototype", {
  value: DocumentFragment.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

DocumentFragment.prototype.prepend = function prepend() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  const args = [];
  for (let i = 0; i < arguments.length; ++i) {
    args[i] = arguments[i];
  }
  for (let i = 0; i < arguments.length; ++i) {
    if (isNode(args[i])) {
      args[i] = utils.implForWrapper(args[i]);
    } else {
      args[i] = conversions["DOMString"](args[i], {
        context: "Failed to execute 'prepend' on 'DocumentFragment': parameter " + (i + 1)
      });
    }
  }
  return this[impl].prepend(...args);
};

DocumentFragment.prototype.append = function append() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  const args = [];
  for (let i = 0; i < arguments.length; ++i) {
    args[i] = arguments[i];
  }
  for (let i = 0; i < arguments.length; ++i) {
    if (isNode(args[i])) {
      args[i] = utils.implForWrapper(args[i]);
    } else {
      args[i] = conversions["DOMString"](args[i], {
        context: "Failed to execute 'append' on 'DocumentFragment': parameter " + (i + 1)
      });
    }
  }
  return this[impl].append(...args);
};

DocumentFragment.prototype.querySelector = function querySelector(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelector' on 'DocumentFragment': " +
        "1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'querySelector' on 'DocumentFragment': parameter 1"
  });

  return utils.tryWrapperForImpl(this[impl].querySelector(...args));
};

DocumentFragment.prototype.querySelectorAll = function querySelectorAll(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelectorAll' on 'DocumentFragment': " +
        "1 argument required, but only " +
        arguments.length +
        " present."
    );
  }

  const args = [];
  for (let i = 0; i < arguments.length && i < 1; ++i) {
    args[i] = arguments[i];
  }

  args[0] = conversions["DOMString"](args[0], {
    context: "Failed to execute 'querySelectorAll' on 'DocumentFragment': parameter 1"
  });

  return utils.tryWrapperForImpl(this[impl].querySelectorAll(...args));
};

Object.defineProperty(DocumentFragment.prototype, "children", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "children", () => {
      return utils.tryWrapperForImpl(this[impl]["children"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DocumentFragment.prototype, "firstElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["firstElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DocumentFragment.prototype, "lastElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["lastElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DocumentFragment.prototype, "childElementCount", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["childElementCount"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(DocumentFragment.prototype, Symbol.toStringTag, {
  value: "DocumentFragment",
  writable: false,
  enumerable: false,
  configurable: true
});

const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'DocumentFragment'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(DocumentFragment.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(DocumentFragment.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Node._internalSetup(obj);
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      writable: false,
      enumerable: false,
      configurable: true
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: DocumentFragment,
  expose: {
    Window: { DocumentFragment }
  }
}; // iface
module.exports = iface;

ParentNode._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/DocumentFragment-impl.js");