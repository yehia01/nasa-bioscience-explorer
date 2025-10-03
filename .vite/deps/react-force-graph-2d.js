import {
  dispatch_default,
  now,
  quadtree,
  timeout_default,
  timer
} from "./chunk-HLG36PQM.js";
import {
  require_react
} from "./chunk-3VDXVL42.js";
import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports2) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports2.AsyncMode = AsyncMode;
        exports2.ConcurrentMode = ConcurrentMode;
        exports2.ContextConsumer = ContextConsumer;
        exports2.ContextProvider = ContextProvider;
        exports2.Element = Element;
        exports2.ForwardRef = ForwardRef;
        exports2.Fragment = Fragment;
        exports2.Lazy = Lazy;
        exports2.Memo = Memo;
        exports2.Portal = Portal;
        exports2.Profiler = Profiler;
        exports2.StrictMode = StrictMode;
        exports2.Suspense = Suspense;
        exports2.isAsyncMode = isAsyncMode;
        exports2.isConcurrentMode = isConcurrentMode;
        exports2.isContextConsumer = isContextConsumer;
        exports2.isContextProvider = isContextProvider;
        exports2.isElement = isElement2;
        exports2.isForwardRef = isForwardRef;
        exports2.isFragment = isFragment;
        exports2.isLazy = isLazy;
        exports2.isMemo = isMemo;
        exports2.isPortal = isPortal;
        exports2.isProfiler = isProfiler;
        exports2.isStrictMode = isStrictMode;
        exports2.isSuspense = isSuspense;
        exports2.isValidElementType = isValidElementType;
        exports2.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty26 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i2 = 0; i2 < 10; i2++) {
          test2["_" + String.fromCharCode(i2)] = i2;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty26.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            if (propIsEnumerable.call(from, symbols[i2])) {
              to[symbols[i2]] = from[symbols[i2]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports2, module2) {
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports2, module2) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has2 = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x3) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has2;
    function checkPropTypes(typeSpecs, values2, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has2(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values2, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports2, module2) {
    "use strict";
    var ReactIs = require_react_is();
    var assign2 = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has2 = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x3) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x3, y3) {
        if (x3 === y3) {
          return x3 !== 0 || 1 / x3 === 1 / y3;
        } else {
          return x3 !== x3 && y3 !== y3;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i2 = 0; i2 < propValue.length; i2++) {
            var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i2 = 0; i2 < expectedValues.length; i2++) {
            if (is(propValue, expectedValues[i2])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has2(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker = arrayOfTypeCheckers[i2];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
            var checker2 = arrayOfTypeCheckers[i3];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign2({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has2(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol2(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol2(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports2, module2) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-kapsule/dist/react-kapsule.mjs
var import_react = __toESM(require_react(), 1);

// node_modules/jerrypick/dist/jerrypick.mjs
function _iterableToArrayLimit(arr, i2) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i2) {
        if (Object(_i) !== _i) return;
        _n = false;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i2); _n = true) ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var omit = function omit2(obj, keys2) {
  var keySet = new Set(keys2);
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(obj).filter(function(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1), key = _ref3[0];
    return !keySet.has(key);
  }).map(function(_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2), key = _ref5[0], val = _ref5[1];
    return _defineProperty({}, key, val);
  }))));
};

// node_modules/react-kapsule/dist/react-kapsule.mjs
function _arrayLikeToArray2(r2, a3) {
  (null == a3 || a3 > r2.length) && (a3 = r2.length);
  for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r2[e3];
  return n2;
}
function _arrayWithHoles2(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles2(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray2(r2);
}
function _iterableToArray2(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit2(r2, l2) {
  var t5 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t5) {
    var e3, n2, i2, u2, a3 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t5 = t5.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e3 = i2.call(t5)).done) && (a3.push(e3.value), a3.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t5.return && (u2 = t5.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a3;
  }
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray2(r2, e3) {
  return _arrayWithHoles2(r2) || _iterableToArrayLimit2(r2, e3) || _unsupportedIterableToArray2(r2, e3) || _nonIterableRest2();
}
function _toConsumableArray2(r2) {
  return _arrayWithoutHoles2(r2) || _iterableToArray2(r2) || _unsupportedIterableToArray2(r2) || _nonIterableSpread2();
}
function _unsupportedIterableToArray2(r2, a3) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray2(r2, a3);
    var t5 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t5 && r2.constructor && (t5 = r2.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r2) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray2(r2, a3) : void 0;
  }
}
function index(kapsuleComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$wrapperElementTy = _ref.wrapperElementType, wrapperElementType = _ref$wrapperElementTy === void 0 ? "div" : _ref$wrapperElementTy, _ref$nodeMapper = _ref.nodeMapper, nodeMapper = _ref$nodeMapper === void 0 ? function(node) {
    return node;
  } : _ref$nodeMapper, _ref$methodNames = _ref.methodNames, methodNames = _ref$methodNames === void 0 ? [] : _ref$methodNames, _ref$initPropNames = _ref.initPropNames, initPropNames = _ref$initPropNames === void 0 ? [] : _ref$initPropNames;
  return (0, import_react.forwardRef)(function(props, ref) {
    var domEl = (0, import_react.useRef)();
    var comp = (0, import_react.useMemo)(function() {
      var configOptions = Object.fromEntries(initPropNames.filter(function(p2) {
        return props.hasOwnProperty(p2);
      }).map(function(prop) {
        return [prop, props[prop]];
      }));
      return kapsuleComponent(configOptions);
    }, []);
    useEffectOnce(function() {
      comp(nodeMapper(domEl.current));
    }, import_react.useLayoutEffect);
    useEffectOnce(function() {
      return comp._destructor instanceof Function ? comp._destructor : void 0;
    });
    var _call = (0, import_react.useCallback)(
      function(method2) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return comp[method2] instanceof Function ? comp[method2].apply(comp, args) : void 0;
      },
      [comp]
    );
    var prevPropsRef = (0, import_react.useRef)({});
    Object.keys(omit(props, [].concat(_toConsumableArray2(methodNames), _toConsumableArray2(initPropNames)))).filter(function(p2) {
      return prevPropsRef.current[p2] !== props[p2];
    }).forEach(function(p2) {
      return _call(p2, props[p2]);
    });
    prevPropsRef.current = props;
    (0, import_react.useImperativeHandle)(ref, function() {
      return Object.fromEntries(methodNames.map(function(method2) {
        return [method2, function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _call.apply(void 0, [method2].concat(args));
        }];
      }));
    }, [_call]);
    return import_react.default.createElement(wrapperElementType, {
      ref: domEl
    });
  });
}
function useEffectOnce(effect) {
  var useEffectFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : import_react.useEffect;
  var destroyFunc = (0, import_react.useRef)();
  var effectCalled = (0, import_react.useRef)(false);
  var renderAfterCalled = (0, import_react.useRef)(false);
  var _useState = (0, import_react.useState)(0), _useState2 = _slicedToArray2(_useState, 2);
  _useState2[0];
  var setVal = _useState2[1];
  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }
  useEffectFn(function() {
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }
    setVal(function(val) {
      return val + 1;
    });
    return function() {
      if (!renderAfterCalled.current) return;
      if (destroyFunc.current) destroyFunc.current();
    };
  }, []);
}

// node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";
var namespaces_default = {
  svg: "http://www.w3.org/2000/svg",
  xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
  var prefix = name += "", i2 = prefix.indexOf(":");
  if (i2 >= 0 && (prefix = name.slice(0, i2)) !== "xmlns") name = name.slice(i2 + 1);
  return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
}

// node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
  return function() {
    var document2 = this.ownerDocument, uri = this.namespaceURI;
    return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
  };
}
function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}
function creator_default(name) {
  var fullname = namespace_default(name);
  return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}

// node_modules/d3-selection/src/selector.js
function none() {
}
function selector_default(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

// node_modules/d3-selection/src/selection/select.js
function select_default(select) {
  if (typeof select !== "function") select = selector_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, subgroup = subgroups[j2] = new Array(n2), node, subnode, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && (subnode = select.call(node, node.__data__, i2, group2))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i2] = subnode;
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/array.js
function array(x3) {
  return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
}

// node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}
function selectorAll_default(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

// node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}
function selectAll_default(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = [], parents = [], j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        subgroups.push(select.call(node, node.__data__, i2, group2));
        parents.push(node);
      }
    }
  }
  return new Selection(subgroups, parents);
}

// node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
  return function() {
    return this.matches(selector);
  };
}
function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

// node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}
function childFirst() {
  return this.firstElementChild;
}
function selectChild_default(match) {
  return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
  return Array.from(this.children);
}
function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}
function selectChildren_default(match) {
  return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

// node_modules/d3-selection/src/selection/filter.js
function filter_default(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, subgroup = subgroups[j2] = [], node, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && match.call(node, node.__data__, i2, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Selection(subgroups, this._parents);
}

// node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update5) {
  return new Array(update5.length);
}

// node_modules/d3-selection/src/selection/enter.js
function enter_default() {
  return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent2, datum2) {
  this.ownerDocument = parent2.ownerDocument;
  this.namespaceURI = parent2.namespaceURI;
  this._next = null;
  this._parent = parent2;
  this.__data__ = datum2;
}
EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) {
    return this._parent.insertBefore(child, this._next);
  },
  insertBefore: function(child, next) {
    return this._parent.insertBefore(child, next);
  },
  querySelector: function(selector) {
    return this._parent.querySelector(selector);
  },
  querySelectorAll: function(selector) {
    return this._parent.querySelectorAll(selector);
  }
};

// node_modules/d3-selection/src/constant.js
function constant_default(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-selection/src/selection/data.js
function bindIndex(parent2, group2, enter, update5, exit, data) {
  var i2 = 0, node, groupLength = group2.length, dataLength = data.length;
  for (; i2 < dataLength; ++i2) {
    if (node = group2[i2]) {
      node.__data__ = data[i2];
      update5[i2] = node;
    } else {
      enter[i2] = new EnterNode(parent2, data[i2]);
    }
  }
  for (; i2 < groupLength; ++i2) {
    if (node = group2[i2]) {
      exit[i2] = node;
    }
  }
}
function bindKey(parent2, group2, enter, update5, exit, data, key) {
  var i2, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group2.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
  for (i2 = 0; i2 < groupLength; ++i2) {
    if (node = group2[i2]) {
      keyValues[i2] = keyValue = key.call(node, node.__data__, i2, group2) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i2] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }
  for (i2 = 0; i2 < dataLength; ++i2) {
    keyValue = key.call(parent2, data[i2], i2, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update5[i2] = node;
      node.__data__ = data[i2];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i2] = new EnterNode(parent2, data[i2]);
    }
  }
  for (i2 = 0; i2 < groupLength; ++i2) {
    if ((node = group2[i2]) && nodeByKeyValue.get(keyValues[i2]) === node) {
      exit[i2] = node;
    }
  }
}
function datum(node) {
  return node.__data__;
}
function data_default(value, key) {
  if (!arguments.length) return Array.from(this, datum);
  var bind2 = key ? bindKey : bindIndex, parents = this._parents, groups2 = this._groups;
  if (typeof value !== "function") value = constant_default(value);
  for (var m3 = groups2.length, update5 = new Array(m3), enter = new Array(m3), exit = new Array(m3), j2 = 0; j2 < m3; ++j2) {
    var parent2 = parents[j2], group2 = groups2[j2], groupLength = group2.length, data = arraylike(value.call(parent2, parent2 && parent2.__data__, j2, parents)), dataLength = data.length, enterGroup = enter[j2] = new Array(dataLength), updateGroup = update5[j2] = new Array(dataLength), exitGroup = exit[j2] = new Array(groupLength);
    bind2(parent2, group2, enterGroup, updateGroup, exitGroup, data, key);
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength) ;
        previous._next = next || null;
      }
    }
  }
  update5 = new Selection(update5, parents);
  update5._enter = enter;
  update5._exit = exit;
  return update5;
}
function arraylike(data) {
  return typeof data === "object" && "length" in data ? data : Array.from(data);
}

// node_modules/d3-selection/src/selection/exit.js
function exit_default() {
  return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
}

// node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
  var enter = this.enter(), update5 = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update5 = onupdate(update5);
    if (update5) update5 = update5.selection();
  }
  if (onexit == null) exit.remove();
  else onexit(exit);
  return enter && update5 ? enter.merge(update5).order() : update5;
}

// node_modules/d3-selection/src/selection/merge.js
function merge_default(context) {
  var selection2 = context.selection ? context.selection() : context;
  for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m3 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m3; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n2 = group0.length, merge3 = merges[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
      if (node = group0[i2] || group1[i2]) {
        merge3[i2] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Selection(merges, this._parents);
}

// node_modules/d3-selection/src/selection/order.js
function order_default() {
  for (var groups2 = this._groups, j2 = -1, m3 = groups2.length; ++j2 < m3; ) {
    for (var group2 = groups2[j2], i2 = group2.length - 1, next = group2[i2], node; --i2 >= 0; ) {
      if (node = group2[i2]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
  if (!compare) compare = ascending;
  function compareNode(a3, b) {
    return a3 && b ? compare(a3.__data__, b.__data__) : !a3 - !b;
  }
  for (var groups2 = this._groups, m3 = groups2.length, sortgroups = new Array(m3), j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, sortgroup = sortgroups[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        sortgroup[i2] = node;
      }
    }
    sortgroup.sort(compareNode);
  }
  return new Selection(sortgroups, this._parents).order();
}
function ascending(a3, b) {
  return a3 < b ? -1 : a3 > b ? 1 : a3 >= b ? 0 : NaN;
}

// node_modules/d3-selection/src/selection/call.js
function call_default() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

// node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
  return Array.from(this);
}

// node_modules/d3-selection/src/selection/node.js
function node_default() {
  for (var groups2 = this._groups, j2 = 0, m3 = groups2.length; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], i2 = 0, n2 = group2.length; i2 < n2; ++i2) {
      var node = group2[i2];
      if (node) return node;
    }
  }
  return null;
}

// node_modules/d3-selection/src/selection/size.js
function size_default() {
  let size2 = 0;
  for (const node of this) ++size2;
  return size2;
}

// node_modules/d3-selection/src/selection/empty.js
function empty_default() {
  return !this.node();
}

// node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
  for (var groups2 = this._groups, j2 = 0, m3 = groups2.length; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], i2 = 0, n2 = group2.length, node; i2 < n2; ++i2) {
      if (node = group2[i2]) callback.call(node, node.__data__, i2, group2);
    }
  }
  return this;
}

// node_modules/d3-selection/src/selection/attr.js
function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}
function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}
function attrFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) this.removeAttribute(name);
    else this.setAttribute(name, v2);
  };
}
function attrFunctionNS(fullname, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v2);
  };
}
function attr_default(name, value) {
  var fullname = namespace_default(name);
  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
  }
  return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
}

// node_modules/d3-selection/src/window.js
function window_default(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}

// node_modules/d3-selection/src/selection/style.js
function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}
function styleFunction(name, value, priority) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v2, priority);
  };
}
function style_default(name, value, priority) {
  return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
  return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}

// node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}
function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}
function propertyFunction(name, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (v2 == null) delete this[name];
    else this[name] = v2;
  };
}
function property_default(name, value) {
  return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}

// node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}
function classList(node) {
  return node.classList || new ClassList(node);
}
function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
  add: function(name) {
    var i2 = this._names.indexOf(name);
    if (i2 < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i2 = this._names.indexOf(name);
    if (i2 >= 0) {
      this._names.splice(i2, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};
function classedAdd(node, names2) {
  var list = classList(node), i2 = -1, n2 = names2.length;
  while (++i2 < n2) list.add(names2[i2]);
}
function classedRemove(node, names2) {
  var list = classList(node), i2 = -1, n2 = names2.length;
  while (++i2 < n2) list.remove(names2[i2]);
}
function classedTrue(names2) {
  return function() {
    classedAdd(this, names2);
  };
}
function classedFalse(names2) {
  return function() {
    classedRemove(this, names2);
  };
}
function classedFunction(names2, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names2);
  };
}
function classed_default(name, value) {
  var names2 = classArray(name + "");
  if (arguments.length < 2) {
    var list = classList(this.node()), i2 = -1, n2 = names2.length;
    while (++i2 < n2) if (!list.contains(names2[i2])) return false;
    return true;
  }
  return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names2, value));
}

// node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}
function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.textContent = v2 == null ? "" : v2;
  };
}
function text_default(value) {
  return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
}

// node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}
function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}
function htmlFunction(value) {
  return function() {
    var v2 = value.apply(this, arguments);
    this.innerHTML = v2 == null ? "" : v2;
  };
}
function html_default(value) {
  return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}

// node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
  return this.each(raise);
}

// node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
  return this.each(lower);
}

// node_modules/d3-selection/src/selection/append.js
function append_default(name) {
  var create3 = typeof name === "function" ? name : creator_default(name);
  return this.select(function() {
    return this.appendChild(create3.apply(this, arguments));
  });
}

// node_modules/d3-selection/src/selection/insert.js
function constantNull() {
  return null;
}
function insert_default(name, before2) {
  var create3 = typeof name === "function" ? name : creator_default(name), select = before2 == null ? constantNull : typeof before2 === "function" ? before2 : selector_default(before2);
  return this.select(function() {
    return this.insertBefore(create3.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

// node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent2 = this.parentNode;
  if (parent2) parent2.removeChild(this);
}
function remove_default() {
  return this.each(remove);
}

// node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone3 = this.cloneNode(false), parent2 = this.parentNode;
  return parent2 ? parent2.insertBefore(clone3, this.nextSibling) : clone3;
}
function selection_cloneDeep() {
  var clone3 = this.cloneNode(true), parent2 = this.parentNode;
  return parent2 ? parent2.insertBefore(clone3, this.nextSibling) : clone3;
}
function clone_default(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

// node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
  return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

// node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}
function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t5) {
    var name = "", i2 = t5.indexOf(".");
    if (i2 >= 0) name = t5.slice(i2 + 1), t5 = t5.slice(0, i2);
    return { type: t5, name };
  });
}
function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j2 = 0, i2 = -1, m3 = on.length, o2; j2 < m3; ++j2) {
      if (o2 = on[j2], (!typename.type || o2.type === typename.type) && o2.name === typename.name) {
        this.removeEventListener(o2.type, o2.listener, o2.options);
      } else {
        on[++i2] = o2;
      }
    }
    if (++i2) on.length = i2;
    else delete this.__on;
  };
}
function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o2, listener = contextListener(value);
    if (on) for (var j2 = 0, m3 = on.length; j2 < m3; ++j2) {
      if ((o2 = on[j2]).type === typename.type && o2.name === typename.name) {
        this.removeEventListener(o2.type, o2.listener, o2.options);
        this.addEventListener(o2.type, o2.listener = listener, o2.options = options);
        o2.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o2 = { type: typename.type, name: typename.name, value, listener, options };
    if (!on) this.__on = [o2];
    else on.push(o2);
  };
}
function on_default(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i2, n2 = typenames.length, t5;
  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j2 = 0, m3 = on.length, o2; j2 < m3; ++j2) {
      for (i2 = 0, o2 = on[j2]; i2 < n2; ++i2) {
        if ((t5 = typenames[i2]).type === o2.type && t5.name === o2.name) {
          return o2.value;
        }
      }
    }
    return;
  }
  on = value ? onAdd : onRemove;
  for (i2 = 0; i2 < n2; ++i2) this.each(on(typenames[i2], value, options));
  return this;
}

// node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
  var window2 = window_default(node), event = window2.CustomEvent;
  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window2.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }
  node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}
function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}
function dispatch_default2(type, params) {
  return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}

// node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
  for (var groups2 = this._groups, j2 = 0, m3 = groups2.length; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], i2 = 0, n2 = group2.length, node; i2 < n2; ++i2) {
      if (node = group2[i2]) yield node;
    }
  }
}

// node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection(groups2, parents) {
  this._groups = groups2;
  this._parents = parents;
}
function selection() {
  return new Selection([[document.documentElement]], root);
}
function selection_selection() {
  return this;
}
Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: select_default,
  selectAll: selectAll_default,
  selectChild: selectChild_default,
  selectChildren: selectChildren_default,
  filter: filter_default,
  data: data_default,
  enter: enter_default,
  exit: exit_default,
  join: join_default,
  merge: merge_default,
  selection: selection_selection,
  order: order_default,
  sort: sort_default,
  call: call_default,
  nodes: nodes_default,
  node: node_default,
  size: size_default,
  empty: empty_default,
  each: each_default,
  attr: attr_default,
  style: style_default,
  property: property_default,
  classed: classed_default,
  text: text_default,
  html: html_default,
  raise: raise_default,
  lower: lower_default,
  append: append_default,
  insert: insert_default,
  remove: remove_default,
  clone: clone_default,
  datum: datum_default,
  on: on_default,
  dispatch: dispatch_default2,
  [Symbol.iterator]: iterator_default
};
var selection_default = selection;

// node_modules/d3-selection/src/select.js
function select_default2(selector) {
  return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
}

// node_modules/d3-selection/src/local.js
var nextId = 0;
function local() {
  return new Local();
}
function Local() {
  this._ = "@" + (++nextId).toString(36);
}
Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id2 = this._;
    while (!(id2 in node)) if (!(node = node.parentNode)) return;
    return node[id2];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

// node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

// node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
  event = sourceEvent_default(event);
  if (node === void 0) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point2 = svg.createSVGPoint();
      point2.x = event.clientX, point2.y = event.clientY;
      point2 = point2.matrixTransform(node.getScreenCTM().inverse());
      return [point2.x, point2.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

// node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = { capture: true, passive: false };
function nopropagation(event) {
  event.stopImmediatePropagation();
}
function noevent_default(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
  } else {
    root3.__noselect = root3.style.MozUserSelect;
    root3.style.MozUserSelect = "none";
  }
}
function yesdrag(view, noclick) {
  var root3 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
  if (noclick) {
    selection2.on("click.drag", noevent_default, nonpassivecapture);
    setTimeout(function() {
      selection2.on("click.drag", null);
    }, 0);
  }
  if ("onselectstart" in root3) {
    selection2.on("selectstart.drag", null);
  } else {
    root3.style.MozUserSelect = root3.__noselect;
    delete root3.__noselect;
  }
}

// node_modules/d3-drag/src/constant.js
var constant_default2 = (x3) => () => x3;

// node_modules/d3-drag/src/event.js
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x: x3,
  y: y3,
  dx,
  dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    subject: { value: subject, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    identifier: { value: identifier, enumerable: true, configurable: true },
    active: { value: active, enumerable: true, configurable: true },
    x: { value: x3, enumerable: true, configurable: true },
    y: { value: y3, enumerable: true, configurable: true },
    dx: { value: dx, enumerable: true, configurable: true },
    dy: { value: dy, enumerable: true, configurable: true },
    _: { value: dispatch }
  });
}
DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// node_modules/d3-drag/src/drag.js
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}
function defaultContainer() {
  return this.parentNode;
}
function defaultSubject(event, d2) {
  return d2 == null ? { x: event.x, y: event.y } : d2;
}
function defaultTouchable() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
  var filter4 = defaultFilter, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable, gestures = {}, listeners = dispatch_default("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
  function drag(selection2) {
    selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function mousedowned(event, d2) {
    if (touchending || !filter4.call(this, event, d2)) return;
    var gesture = beforestart(this, container.call(this, event, d2), event, d2, "mouse");
    if (!gesture) return;
    select_default2(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
    nodrag_default(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }
  function mousemoved(event) {
    noevent_default(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }
  function mouseupped(event) {
    select_default2(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent_default(event);
    gestures.mouse("end", event);
  }
  function touchstarted(event, d2) {
    if (!filter4.call(this, event, d2)) return;
    var touches = event.changedTouches, c5 = container.call(this, event, d2), n2 = touches.length, i2, gesture;
    for (i2 = 0; i2 < n2; ++i2) {
      if (gesture = beforestart(this, c5, event, d2, touches[i2].identifier, touches[i2])) {
        nopropagation(event);
        gesture("start", event, touches[i2]);
      }
    }
  }
  function touchmoved(event) {
    var touches = event.changedTouches, n2 = touches.length, i2, gesture;
    for (i2 = 0; i2 < n2; ++i2) {
      if (gesture = gestures[touches[i2].identifier]) {
        noevent_default(event);
        gesture("drag", event, touches[i2]);
      }
    }
  }
  function touchended(event) {
    var touches = event.changedTouches, n2 = touches.length, i2, gesture;
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, 500);
    for (i2 = 0; i2 < n2; ++i2) {
      if (gesture = gestures[touches[i2].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i2]);
      }
    }
  }
  function beforestart(that, container2, event, d2, identifier, touch) {
    var dispatch = listeners.copy(), p2 = pointer_default(touch || event, container2), dx, dy, s2;
    if ((s2 = subject.call(that, new DragEvent("beforestart", {
      sourceEvent: event,
      target: drag,
      identifier,
      active,
      x: p2[0],
      y: p2[1],
      dx: 0,
      dy: 0,
      dispatch
    }), d2)) == null) return;
    dx = s2.x - p2[0] || 0;
    dy = s2.y - p2[1] || 0;
    return function gesture(type, event2, touch2) {
      var p0 = p2, n2;
      switch (type) {
        case "start":
          gestures[identifier] = gesture, n2 = active++;
          break;
        case "end":
          delete gestures[identifier], --active;
        // falls through
        case "drag":
          p2 = pointer_default(touch2 || event2, container2), n2 = active;
          break;
      }
      dispatch.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event2,
          subject: s2,
          target: drag,
          identifier,
          active: n2,
          x: p2[0] + dx,
          y: p2[1] + dy,
          dx: p2[0] - p0[0],
          dy: p2[1] - p0[1],
          dispatch
        }),
        d2
      );
    };
  }
  drag.filter = function(_2) {
    return arguments.length ? (filter4 = typeof _2 === "function" ? _2 : constant_default2(!!_2), drag) : filter4;
  };
  drag.container = function(_2) {
    return arguments.length ? (container = typeof _2 === "function" ? _2 : constant_default2(_2), drag) : container;
  };
  drag.subject = function(_2) {
    return arguments.length ? (subject = typeof _2 === "function" ? _2 : constant_default2(_2), drag) : subject;
  };
  drag.touchable = function(_2) {
    return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default2(!!_2), drag) : touchable;
  };
  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };
  drag.clickDistance = function(_2) {
    return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, drag) : Math.sqrt(clickDistance2);
  };
  return drag;
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent2, definition) {
  var prototype = Object.create(parent2.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m3, l2;
  format2 = (format2 + "").trim().toLowerCase();
  return (m3 = reHex.exec(format2)) ? (l2 = m3[1].length, m3 = parseInt(m3[1], 16), l2 === 6 ? rgbn(m3) : l2 === 3 ? new Rgb(m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, (m3 & 15) << 4 | m3 & 15, 1) : l2 === 8 ? rgba(m3 >> 24 & 255, m3 >> 16 & 255, m3 >> 8 & 255, (m3 & 255) / 255) : l2 === 4 ? rgba(m3 >> 12 & 15 | m3 >> 8 & 240, m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, ((m3 & 15) << 4 | m3 & 15) / 255) : null) : (m3 = reRgbInteger.exec(format2)) ? new Rgb(m3[1], m3[2], m3[3], 1) : (m3 = reRgbPercent.exec(format2)) ? new Rgb(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, 1) : (m3 = reRgbaInteger.exec(format2)) ? rgba(m3[1], m3[2], m3[3], m3[4]) : (m3 = reRgbaPercent.exec(format2)) ? rgba(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, m3[4]) : (m3 = reHslPercent.exec(format2)) ? hsla(m3[1], m3[2] / 100, m3[3] / 100, 1) : (m3 = reHslaPercent.exec(format2)) ? hsla(m3[1], m3[2] / 100, m3[3] / 100, m3[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n2) {
  return new Rgb(n2 >> 16 & 255, n2 >> 8 & 255, n2 & 255, 1);
}
function rgba(r2, g2, b, a3) {
  if (a3 <= 0) r2 = g2 = b = NaN;
  return new Rgb(r2, g2, b, a3);
}
function rgbConvert(o2) {
  if (!(o2 instanceof Color)) o2 = color(o2);
  if (!o2) return new Rgb();
  o2 = o2.rgb();
  return new Rgb(o2.r, o2.g, o2.b, o2.opacity);
}
function rgb(r2, g2, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r2) : new Rgb(r2, g2, b, opacity == null ? 1 : opacity);
}
function Rgb(r2, g2, b, opacity) {
  this.r = +r2;
  this.g = +g2;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a3 = clampa(this.opacity);
  return `${a3 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a3 === 1 ? ")" : `, ${a3})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h2, s2, l2, a3) {
  if (a3 <= 0) h2 = s2 = l2 = NaN;
  else if (l2 <= 0 || l2 >= 1) h2 = s2 = NaN;
  else if (s2 <= 0) h2 = NaN;
  return new Hsl(h2, s2, l2, a3);
}
function hslConvert(o2) {
  if (o2 instanceof Hsl) return new Hsl(o2.h, o2.s, o2.l, o2.opacity);
  if (!(o2 instanceof Color)) o2 = color(o2);
  if (!o2) return new Hsl();
  if (o2 instanceof Hsl) return o2;
  o2 = o2.rgb();
  var r2 = o2.r / 255, g2 = o2.g / 255, b = o2.b / 255, min4 = Math.min(r2, g2, b), max4 = Math.max(r2, g2, b), h2 = NaN, s2 = max4 - min4, l2 = (max4 + min4) / 2;
  if (s2) {
    if (r2 === max4) h2 = (g2 - b) / s2 + (g2 < b) * 6;
    else if (g2 === max4) h2 = (b - r2) / s2 + 2;
    else h2 = (r2 - g2) / s2 + 4;
    s2 /= l2 < 0.5 ? max4 + min4 : 2 - max4 - min4;
    h2 *= 60;
  } else {
    s2 = l2 > 0 && l2 < 1 ? 0 : h2;
  }
  return new Hsl(h2, s2, l2, o2.opacity);
}
function hsl(h2, s2, l2, opacity) {
  return arguments.length === 1 ? hslConvert(h2) : new Hsl(h2, s2, l2, opacity == null ? 1 : opacity);
}
function Hsl(h2, s2, l2, opacity) {
  this.h = +h2;
  this.s = +s2;
  this.l = +l2;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h2 = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h2) || isNaN(this.s) ? 0 : this.s, l2 = this.l, m22 = l2 + (l2 < 0.5 ? l2 : 1 - l2) * s2, m1 = 2 * l2 - m22;
    return new Rgb(
      hsl2rgb(h2 >= 240 ? h2 - 240 : h2 + 120, m1, m22),
      hsl2rgb(h2, m1, m22),
      hsl2rgb(h2 < 120 ? h2 + 240 : h2 - 120, m1, m22),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a3 = clampa(this.opacity);
    return `${a3 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a3 === 1 ? ")" : `, ${a3})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h2, m1, m22) {
  return (h2 < 60 ? m1 + (m22 - m1) * h2 / 60 : h2 < 180 ? m22 : h2 < 240 ? m1 + (m22 - m1) * (240 - h2) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o2) {
  if (o2 instanceof Lab) return new Lab(o2.l, o2.a, o2.b, o2.opacity);
  if (o2 instanceof Hcl) return hcl2lab(o2);
  if (!(o2 instanceof Rgb)) o2 = rgbConvert(o2);
  var r2 = rgb2lrgb(o2.r), g2 = rgb2lrgb(o2.g), b = rgb2lrgb(o2.b), y3 = xyz2lab((0.2225045 * r2 + 0.7168786 * g2 + 0.0606169 * b) / Yn), x3, z3;
  if (r2 === g2 && g2 === b) x3 = z3 = y3;
  else {
    x3 = xyz2lab((0.4360747 * r2 + 0.3850649 * g2 + 0.1430804 * b) / Xn);
    z3 = xyz2lab((0.0139322 * r2 + 0.0971045 * g2 + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y3 - 16, 500 * (x3 - y3), 200 * (y3 - z3), o2.opacity);
}
function lab(l2, a3, b, opacity) {
  return arguments.length === 1 ? labConvert(l2) : new Lab(l2, a3, b, opacity == null ? 1 : opacity);
}
function Lab(l2, a3, b, opacity) {
  this.l = +l2;
  this.a = +a3;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter(k2) {
    return new Lab(this.l + K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  darker(k2) {
    return new Lab(this.l - K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
  },
  rgb() {
    var y3 = (this.l + 16) / 116, x3 = isNaN(this.a) ? y3 : y3 + this.a / 500, z3 = isNaN(this.b) ? y3 : y3 - this.b / 200;
    x3 = Xn * lab2xyz(x3);
    y3 = Yn * lab2xyz(y3);
    z3 = Zn * lab2xyz(z3);
    return new Rgb(
      lrgb2rgb(3.1338561 * x3 - 1.6168667 * y3 - 0.4906146 * z3),
      lrgb2rgb(-0.9787684 * x3 + 1.9161415 * y3 + 0.033454 * z3),
      lrgb2rgb(0.0719453 * x3 - 0.2289914 * y3 + 1.4052427 * z3),
      this.opacity
    );
  }
}));
function xyz2lab(t5) {
  return t5 > t3 ? Math.pow(t5, 1 / 3) : t5 / t2 + t0;
}
function lab2xyz(t5) {
  return t5 > t1 ? t5 * t5 * t5 : t2 * (t5 - t0);
}
function lrgb2rgb(x3) {
  return 255 * (x3 <= 31308e-7 ? 12.92 * x3 : 1.055 * Math.pow(x3, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x3) {
  return (x3 /= 255) <= 0.04045 ? x3 / 12.92 : Math.pow((x3 + 0.055) / 1.055, 2.4);
}
function hclConvert(o2) {
  if (o2 instanceof Hcl) return new Hcl(o2.h, o2.c, o2.l, o2.opacity);
  if (!(o2 instanceof Lab)) o2 = labConvert(o2);
  if (o2.a === 0 && o2.b === 0) return new Hcl(NaN, 0 < o2.l && o2.l < 100 ? 0 : NaN, o2.l, o2.opacity);
  var h2 = Math.atan2(o2.b, o2.a) * degrees;
  return new Hcl(h2 < 0 ? h2 + 360 : h2, Math.sqrt(o2.a * o2.a + o2.b * o2.b), o2.l, o2.opacity);
}
function hcl(h2, c5, l2, opacity) {
  return arguments.length === 1 ? hclConvert(h2) : new Hcl(h2, c5, l2, opacity == null ? 1 : opacity);
}
function Hcl(h2, c5, l2, opacity) {
  this.h = +h2;
  this.c = +c5;
  this.l = +l2;
  this.opacity = +opacity;
}
function hcl2lab(o2) {
  if (isNaN(o2.h)) return new Lab(o2.l, 0, 0, o2.opacity);
  var h2 = o2.h * radians;
  return new Lab(o2.l, Math.cos(h2) * o2.c, Math.sin(h2) * o2.c, o2.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k2) {
    return new Hcl(this.h, this.c, this.l + K * (k2 == null ? 1 : k2), this.opacity);
  },
  darker(k2) {
    return new Hcl(this.h, this.c, this.l - K * (k2 == null ? 1 : k2), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A = -0.14861;
var B = 1.78277;
var C = -0.29227;
var D = -0.90649;
var E = 1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;
function cubehelixConvert(o2) {
  if (o2 instanceof Cubehelix) return new Cubehelix(o2.h, o2.s, o2.l, o2.opacity);
  if (!(o2 instanceof Rgb)) o2 = rgbConvert(o2);
  var r2 = o2.r / 255, g2 = o2.g / 255, b = o2.b / 255, l2 = (BC_DA * b + ED * r2 - EB * g2) / (BC_DA + ED - EB), bl = b - l2, k2 = (E * (g2 - l2) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l2 * (1 - l2)), h2 = s2 ? Math.atan2(k2, bl) * degrees - 120 : NaN;
  return new Cubehelix(h2 < 0 ? h2 + 360 : h2, s2, l2, o2.opacity);
}
function cubehelix(h2, s2, l2, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h2) : new Cubehelix(h2, s2, l2, opacity == null ? 1 : opacity);
}
function Cubehelix(h2, s2, l2, opacity) {
  this.h = +h2;
  this.s = +s2;
  this.l = +l2;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h2 = isNaN(this.h) ? 0 : (this.h + 120) * radians, l2 = +this.l, a3 = isNaN(this.s) ? 0 : this.s * l2 * (1 - l2), cosh2 = Math.cos(h2), sinh2 = Math.sin(h2);
    return new Rgb(
      255 * (l2 + a3 * (A * cosh2 + B * sinh2)),
      255 * (l2 + a3 * (C * cosh2 + D * sinh2)),
      255 * (l2 + a3 * (E * cosh2)),
      this.opacity
    );
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t13, v0, v1, v2, v3) {
  var t22 = t13 * t13, t32 = t22 * t13;
  return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
}
function basis_default(values2) {
  var n2 = values2.length - 1;
  return function(t5) {
    var i2 = t5 <= 0 ? t5 = 0 : t5 >= 1 ? (t5 = 1, n2 - 1) : Math.floor(t5 * n2), v1 = values2[i2], v2 = values2[i2 + 1], v0 = i2 > 0 ? values2[i2 - 1] : 2 * v1 - v2, v3 = i2 < n2 - 1 ? values2[i2 + 2] : 2 * v2 - v1;
    return basis((t5 - i2 / n2) * n2, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values2) {
  var n2 = values2.length;
  return function(t5) {
    var i2 = Math.floor(((t5 %= 1) < 0 ? ++t5 : t5) * n2), v0 = values2[(i2 + n2 - 1) % n2], v1 = values2[i2 % n2], v2 = values2[(i2 + 1) % n2], v3 = values2[(i2 + 2) % n2];
    return basis((t5 - i2 / n2) * n2, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x3) => () => x3;

// node_modules/d3-interpolate/src/color.js
function linear(a3, d2) {
  return function(t5) {
    return a3 + t5 * d2;
  };
}
function exponential(a3, b, y3) {
  return a3 = Math.pow(a3, y3), b = Math.pow(b, y3) - a3, y3 = 1 / y3, function(t5) {
    return Math.pow(a3 + t5 * b, y3);
  };
}
function hue(a3, b) {
  var d2 = b - a3;
  return d2 ? linear(a3, d2 > 180 || d2 < -180 ? d2 - 360 * Math.round(d2 / 360) : d2) : constant_default3(isNaN(a3) ? b : a3);
}
function gamma(y3) {
  return (y3 = +y3) === 1 ? nogamma : function(a3, b) {
    return b - a3 ? exponential(a3, b, y3) : constant_default3(isNaN(a3) ? b : a3);
  };
}
function nogamma(a3, b) {
  var d2 = b - a3;
  return d2 ? linear(a3, d2) : constant_default3(isNaN(a3) ? b : a3);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = (function rgbGamma(y3) {
  var color2 = gamma(y3);
  function rgb2(start2, end) {
    var r2 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g2 = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t5) {
      start2.r = r2(t5);
      start2.g = g2(t5);
      start2.b = b(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
})(1);
function rgbSpline(spline) {
  return function(colors) {
    var n2 = colors.length, r2 = new Array(n2), g2 = new Array(n2), b = new Array(n2), i2, color2;
    for (i2 = 0; i2 < n2; ++i2) {
      color2 = rgb(colors[i2]);
      r2[i2] = color2.r || 0;
      g2[i2] = color2.g || 0;
      b[i2] = color2.b || 0;
    }
    r2 = spline(r2);
    g2 = spline(g2);
    b = spline(b);
    color2.opacity = 1;
    return function(t5) {
      color2.r = r2(t5);
      color2.g = g2(t5);
      color2.b = b(t5);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a3, b) {
  return a3 = +a3, b = +b, function(t5) {
    return a3 * (1 - t5) + b * t5;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t5) {
    return b(t5) + "";
  };
}
function string_default(a3, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i2 = -1, s2 = [], q2 = [];
  a3 = a3 + "", b = b + "";
  while ((am = reA.exec(a3)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i2]) s2[i2] += bs;
      else s2[++i2] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i2]) s2[i2] += bm;
      else s2[++i2] = bm;
    } else {
      s2[++i2] = null;
      q2.push({ i: i2, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i2]) s2[i2] += bs;
    else s2[++i2] = bs;
  }
  return s2.length < 2 ? q2[0] ? one(q2[0].x) : zero(b) : (b = q2.length, function(t5) {
    for (var i3 = 0, o2; i3 < b; ++i3) s2[(o2 = q2[i3]).i] = o2.x(t5);
    return s2.join("");
  });
}

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a3, b, c5, d2, e3, f2) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a3 * a3 + b * b)) a3 /= scaleX, b /= scaleX;
  if (skewX = a3 * c5 + b * d2) c5 -= a3 * skewX, d2 -= b * skewX;
  if (scaleY = Math.sqrt(c5 * c5 + d2 * d2)) c5 /= scaleY, d2 /= scaleY, skewX /= scaleY;
  if (a3 * d2 < b * c5) a3 = -a3, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e3,
    translateY: f2,
    rotate: Math.atan2(b, a3) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m3 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m3.isIdentity ? identity : decompose_default(m3.a, m3.b, m3.c, m3.d, m3.e, m3.f);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s2) {
    return s2.length ? s2.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s2, q2) {
    if (xa !== xb || ya !== yb) {
      var i2 = s2.push("translate(", null, pxComma, null, pxParen);
      q2.push({ i: i2 - 4, x: number_default(xa, xb) }, { i: i2 - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s2.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a3, b, s2, q2) {
    if (a3 !== b) {
      if (a3 - b > 180) b += 360;
      else if (b - a3 > 180) a3 += 360;
      q2.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default(a3, b) });
    } else if (b) {
      s2.push(pop(s2) + "rotate(" + b + degParen);
    }
  }
  function skewX(a3, b, s2, q2) {
    if (a3 !== b) {
      q2.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default(a3, b) });
    } else if (b) {
      s2.push(pop(s2) + "skewX(" + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s2, q2) {
    if (xa !== xb || ya !== yb) {
      var i2 = s2.push(pop(s2) + "scale(", null, ",", null, ")");
      q2.push({ i: i2 - 4, x: number_default(xa, xb) }, { i: i2 - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a3, b) {
    var s2 = [], q2 = [];
    a3 = parse(a3), b = parse(b);
    translate(a3.translateX, a3.translateY, b.translateX, b.translateY, s2, q2);
    rotate(a3.rotate, b.rotate, s2, q2);
    skewX(a3.skewX, b.skewX, s2, q2);
    scale(a3.scaleX, a3.scaleY, b.scaleX, b.scaleY, s2, q2);
    a3 = b = null;
    return function(t5) {
      var i2 = -1, n2 = q2.length, o2;
      while (++i2 < n2) s2[(o2 = q2[i2]).i] = o2.x(t5);
      return s2.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x3) {
  return ((x3 = Math.exp(x3)) + 1 / x3) / 2;
}
function sinh(x3) {
  return ((x3 = Math.exp(x3)) - 1 / x3) / 2;
}
function tanh(x3) {
  return ((x3 = Math.exp(2 * x3)) - 1) / (x3 + 1);
}
var zoom_default = (function zoomRho(rho, rho2, rho4) {
  function zoom2(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i2, S2;
    if (d2 < epsilon2) {
      S2 = Math.log(w1 / w0) / rho;
      i2 = function(t5) {
        return [
          ux0 + t5 * dx,
          uy0 + t5 * dy,
          w0 * Math.exp(rho * t5 * S2)
        ];
      };
    } else {
      var d1 = Math.sqrt(d2), b02 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b12 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b02 * b02 + 1) - b02), r1 = Math.log(Math.sqrt(b12 * b12 + 1) - b12);
      S2 = (r1 - r0) / rho;
      i2 = function(t5) {
        var s2 = t5 * S2, coshr0 = cosh(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
        return [
          ux0 + u2 * dx,
          uy0 + u2 * dy,
          w0 * coshr0 / cosh(rho * s2 + r0)
        ];
      };
    }
    i2.duration = S2 * 1e3 * rho / Math.SQRT2;
    return i2;
  }
  zoom2.rho = function(_2) {
    var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
    return zoomRho(_1, _22, _4);
  };
  return zoom2;
})(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl2(hue2) {
  return function(start2, end) {
    var h2 = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s2 = nogamma(start2.s, end.s), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h2(t5);
      start2.s = s2(t5);
      start2.l = l2(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hsl_default = hsl2(hue);
var hslLong = hsl2(nogamma);

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue2) {
  return function(start2, end) {
    var h2 = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c5 = nogamma(start2.c, end.c), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t5) {
      start2.h = h2(t5);
      start2.c = c5(t5);
      start2.l = l2(t5);
      start2.opacity = opacity(t5);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue2) {
  return (function cubehelixGamma(y3) {
    y3 = +y3;
    function cubehelix3(start2, end) {
      var h2 = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s2 = nogamma(start2.s, end.s), l2 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t5) {
        start2.h = h2(t5);
        start2.s = s2(t5);
        start2.l = l2(Math.pow(t5, y3));
        start2.opacity = opacity(t5);
        return start2 + "";
      };
    }
    cubehelix3.gamma = cubehelixGamma;
    return cubehelix3;
  })(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
var emptyTween = [];
var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
function schedule_default(node, name, id2, index8, group2, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id2 in schedules) return;
  create(node, id2, {
    name,
    index: index8,
    // For context during callback.
    group: group2,
    // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}
function init(node, id2) {
  var schedule = get(node, id2);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}
function set(node, id2) {
  var schedule = get(node, id2);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}
function get(node, id2) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id2])) throw new Error("transition not found");
  return schedule;
}
function create(node, id2, self2) {
  var schedules = node.__transition, tween;
  schedules[id2] = self2;
  self2.timer = timer(schedule, 0, self2.time);
  function schedule(elapsed) {
    self2.state = SCHEDULED;
    self2.timer.restart(start2, self2.delay, self2.time);
    if (self2.delay <= elapsed) start2(elapsed - self2.delay);
  }
  function start2(elapsed) {
    var i2, j2, n2, o2;
    if (self2.state !== SCHEDULED) return stop();
    for (i2 in schedules) {
      o2 = schedules[i2];
      if (o2.name !== self2.name) continue;
      if (o2.state === STARTED) return timeout_default(start2);
      if (o2.state === RUNNING) {
        o2.state = ENDED;
        o2.timer.stop();
        o2.on.call("interrupt", node, node.__data__, o2.index, o2.group);
        delete schedules[i2];
      } else if (+i2 < id2) {
        o2.state = ENDED;
        o2.timer.stop();
        o2.on.call("cancel", node, node.__data__, o2.index, o2.group);
        delete schedules[i2];
      }
    }
    timeout_default(function() {
      if (self2.state === STARTED) {
        self2.state = RUNNING;
        self2.timer.restart(tick, self2.delay, self2.time);
        tick(elapsed);
      }
    });
    self2.state = STARTING;
    self2.on.call("start", node, node.__data__, self2.index, self2.group);
    if (self2.state !== STARTING) return;
    self2.state = STARTED;
    tween = new Array(n2 = self2.tween.length);
    for (i2 = 0, j2 = -1; i2 < n2; ++i2) {
      if (o2 = self2.tween[i2].value.call(node, node.__data__, self2.index, self2.group)) {
        tween[++j2] = o2;
      }
    }
    tween.length = j2 + 1;
  }
  function tick(elapsed) {
    var t5 = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i2 = -1, n2 = tween.length;
    while (++i2 < n2) {
      tween[i2].call(node, t5);
    }
    if (self2.state === ENDING) {
      self2.on.call("end", node, node.__data__, self2.index, self2.group);
      stop();
    }
  }
  function stop() {
    self2.state = ENDED;
    self2.timer.stop();
    delete schedules[id2];
    for (var i2 in schedules) return;
    delete node.__transition;
  }
}

// node_modules/d3-transition/src/interrupt.js
function interrupt_default(node, name) {
  var schedules = node.__transition, schedule, active, empty2 = true, i2;
  if (!schedules) return;
  name = name == null ? null : name + "";
  for (i2 in schedules) {
    if ((schedule = schedules[i2]).name !== name) {
      empty2 = false;
      continue;
    }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i2];
  }
  if (empty2) delete node.__transition;
}

// node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default2(name) {
  return this.each(function() {
    interrupt_default(this, name);
  });
}

// node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id2, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i2 = 0, n2 = tween1.length; i2 < n2; ++i2) {
        if (tween1[i2].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i2, 1);
          break;
        }
      }
    }
    schedule.tween = tween1;
  };
}
function tweenFunction(id2, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error();
  return function() {
    var schedule = set(this, id2), tween = schedule.tween;
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t5 = { name, value }, i2 = 0, n2 = tween1.length; i2 < n2; ++i2) {
        if (tween1[i2].name === name) {
          tween1[i2] = t5;
          break;
        }
      }
      if (i2 === n2) tween1.push(t5);
    }
    schedule.tween = tween1;
  };
}
function tween_default(name, value) {
  var id2 = this._id;
  name += "";
  if (arguments.length < 2) {
    var tween = get(this.node(), id2).tween;
    for (var i2 = 0, n2 = tween.length, t5; i2 < n2; ++i2) {
      if ((t5 = tween[i2]).name === name) {
        return t5.value;
      }
    }
    return null;
  }
  return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
}
function tweenValue(transition2, name, value) {
  var id2 = transition2._id;
  transition2.each(function() {
    var schedule = set(this, id2);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });
  return function(node) {
    return get(node, id2).value[name];
  };
}

// node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a3, b) {
  var c5;
  return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c5 = color(b)) ? (b = c5, rgb_default) : string_default)(a3, b);
}

// node_modules/d3-transition/src/transition/attr.js
function attrRemove2(name) {
  return function() {
    this.removeAttribute(name);
  };
}
function attrRemoveNS2(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}
function attrConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrConstantNS2(fullname, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function attrFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attrFunctionNS2(fullname, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function attr_default2(name, value) {
  var fullname = namespace_default(name), i2 = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
  return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i2, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i2, value));
}

// node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i2) {
  return function(t5) {
    this.setAttribute(name, i2.call(this, t5));
  };
}
function attrInterpolateNS(fullname, i2) {
  return function(t5) {
    this.setAttributeNS(fullname.space, fullname.local, i2.call(this, t5));
  };
}
function attrTweenNS(fullname, value) {
  var t03, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0) t03 = (i0 = i2) && attrInterpolateNS(fullname, i2);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween(name, value) {
  var t03, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0) t03 = (i0 = i2) && attrInterpolate(name, i2);
    return t03;
  }
  tween._value = value;
  return tween;
}
function attrTween_default(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  var fullname = namespace_default(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

// node_modules/d3-transition/src/transition/delay.js
function delayFunction(id2, value) {
  return function() {
    init(this, id2).delay = +value.apply(this, arguments);
  };
}
function delayConstant(id2, value) {
  return value = +value, function() {
    init(this, id2).delay = value;
  };
}
function delay_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
}

// node_modules/d3-transition/src/transition/duration.js
function durationFunction(id2, value) {
  return function() {
    set(this, id2).duration = +value.apply(this, arguments);
  };
}
function durationConstant(id2, value) {
  return value = +value, function() {
    set(this, id2).duration = value;
  };
}
function duration_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
}

// node_modules/d3-transition/src/transition/ease.js
function easeConstant(id2, value) {
  if (typeof value !== "function") throw new Error();
  return function() {
    set(this, id2).ease = value;
  };
}
function ease_default(value) {
  var id2 = this._id;
  return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
}

// node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id2, value) {
  return function() {
    var v2 = value.apply(this, arguments);
    if (typeof v2 !== "function") throw new Error();
    set(this, id2).ease = v2;
  };
}
function easeVarying_default(value) {
  if (typeof value !== "function") throw new Error();
  return this.each(easeVarying(this._id, value));
}

// node_modules/d3-transition/src/transition/filter.js
function filter_default2(match) {
  if (typeof match !== "function") match = matcher_default(match);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, subgroup = subgroups[j2] = [], node, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && match.call(node, node.__data__, i2, group2)) {
        subgroup.push(node);
      }
    }
  }
  return new Transition(subgroups, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/merge.js
function merge_default2(transition2) {
  if (transition2._id !== this._id) throw new Error();
  for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m3 = Math.min(m0, m1), merges = new Array(m0), j2 = 0; j2 < m3; ++j2) {
    for (var group0 = groups0[j2], group1 = groups1[j2], n2 = group0.length, merge3 = merges[j2] = new Array(n2), node, i2 = 0; i2 < n2; ++i2) {
      if (node = group0[i2] || group1[i2]) {
        merge3[i2] = node;
      }
    }
  }
  for (; j2 < m0; ++j2) {
    merges[j2] = groups0[j2];
  }
  return new Transition(merges, this._parents, this._name, this._id);
}

// node_modules/d3-transition/src/transition/on.js
function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t5) {
    var i2 = t5.indexOf(".");
    if (i2 >= 0) t5 = t5.slice(0, i2);
    return !t5 || t5 === "start";
  });
}
function onFunction(id2, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule = sit(this, id2), on = schedule.on;
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
    schedule.on = on1;
  };
}
function on_default2(name, listener) {
  var id2 = this._id;
  return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
}

// node_modules/d3-transition/src/transition/remove.js
function removeFunction(id2) {
  return function() {
    var parent2 = this.parentNode;
    for (var i2 in this.__transition) if (+i2 !== id2) return;
    if (parent2) parent2.removeChild(this);
  };
}
function remove_default2() {
  return this.on("end.remove", removeFunction(this._id));
}

// node_modules/d3-transition/src/transition/select.js
function select_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selector_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = new Array(m3), j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, subgroup = subgroups[j2] = new Array(n2), node, subnode, i2 = 0; i2 < n2; ++i2) {
      if ((node = group2[i2]) && (subnode = select.call(node, node.__data__, i2, group2))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i2] = subnode;
        schedule_default(subgroup[i2], name, id2, i2, subgroup, get(node, id2));
      }
    }
  }
  return new Transition(subgroups, this._parents, name, id2);
}

// node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default3(select) {
  var name = this._name, id2 = this._id;
  if (typeof select !== "function") select = selectorAll_default(select);
  for (var groups2 = this._groups, m3 = groups2.length, subgroups = [], parents = [], j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        for (var children2 = select.call(node, node.__data__, i2, group2), child, inherit2 = get(node, id2), k2 = 0, l2 = children2.length; k2 < l2; ++k2) {
          if (child = children2[k2]) {
            schedule_default(child, name, id2, k2, children2, inherit2);
          }
        }
        subgroups.push(children2);
        parents.push(node);
      }
    }
  }
  return new Transition(subgroups, parents, name, id2);
}

// node_modules/d3-transition/src/transition/selection.js
var Selection2 = selection_default.prototype.constructor;
function selection_default2() {
  return new Selection2(this._groups, this._parents);
}

// node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}
function styleRemove2(name) {
  return function() {
    this.style.removeProperty(name);
  };
}
function styleConstant2(name, interpolate, value1) {
  var string00, string1 = value1 + "", interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
  };
}
function styleFunction2(name, interpolate, value) {
  var string00, string10, interpolate0;
  return function() {
    var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}
function styleMaybeRemove(id2, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove4;
  return function() {
    var schedule = set(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove4 || (remove4 = styleRemove2(name)) : void 0;
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
    schedule.on = on1;
  };
}
function style_default2(name, value, priority) {
  var i2 = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
  return value == null ? this.styleTween(name, styleNull(name, i2)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i2, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i2, value), priority).on("end.style." + name, null);
}

// node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i2, priority) {
  return function(t5) {
    this.style.setProperty(name, i2.call(this, t5), priority);
  };
}
function styleTween(name, value, priority) {
  var t5, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0) t5 = (i0 = i2) && styleInterpolate(name, i2, priority);
    return t5;
  }
  tween._value = value;
  return tween;
}
function styleTween_default(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

// node_modules/d3-transition/src/transition/text.js
function textConstant2(value) {
  return function() {
    this.textContent = value;
  };
}
function textFunction2(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}
function text_default2(value) {
  return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
}

// node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i2) {
  return function(t5) {
    this.textContent = i2.call(this, t5);
  };
}
function textTween(value) {
  var t03, i0;
  function tween() {
    var i2 = value.apply(this, arguments);
    if (i2 !== i0) t03 = (i0 = i2) && textInterpolate(i2);
    return t03;
  }
  tween._value = value;
  return tween;
}
function textTween_default(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error();
  return this.tween(key, textTween(value));
}

// node_modules/d3-transition/src/transition/transition.js
function transition_default() {
  var name = this._name, id0 = this._id, id1 = newId();
  for (var groups2 = this._groups, m3 = groups2.length, j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        var inherit2 = get(node, id0);
        schedule_default(node, name, id1, i2, group2, {
          time: inherit2.time + inherit2.delay + inherit2.duration,
          delay: 0,
          duration: inherit2.duration,
          ease: inherit2.ease
        });
      }
    }
  }
  return new Transition(groups2, this._parents, name, id1);
}

// node_modules/d3-transition/src/transition/end.js
function end_default() {
  var on0, on1, that = this, id2 = that._id, size2 = that.size();
  return new Promise(function(resolve, reject2) {
    var cancel = { value: reject2 }, end = { value: function() {
      if (--size2 === 0) resolve();
    } };
    that.each(function() {
      var schedule = set(this, id2), on = schedule.on;
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }
      schedule.on = on1;
    });
    if (size2 === 0) resolve();
  });
}

// node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups2, parents, name, id2) {
  this._groups = groups2;
  this._parents = parents;
  this._name = name;
  this._id = id2;
}
function transition(name) {
  return selection_default().transition(name);
}
function newId() {
  return ++id;
}
var selection_prototype = selection_default.prototype;
Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: select_default3,
  selectAll: selectAll_default3,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: filter_default2,
  merge: merge_default2,
  selection: selection_default2,
  transition: transition_default,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: on_default2,
  attr: attr_default2,
  attrTween: attrTween_default,
  style: style_default2,
  styleTween: styleTween_default,
  text: text_default2,
  textTween: textTween_default,
  remove: remove_default2,
  tween: tween_default,
  delay: delay_default,
  duration: duration_default,
  ease: ease_default,
  easeVarying: easeVarying_default,
  end: end_default,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

// node_modules/d3-ease/src/cubic.js
function cubicInOut(t5) {
  return ((t5 *= 2) <= 1 ? t5 * t5 * t5 : (t5 -= 2) * t5 * t5 + 2) / 2;
}

// node_modules/d3-ease/src/poly.js
var exponent = 3;
var polyIn = (function custom(e3) {
  e3 = +e3;
  function polyIn2(t5) {
    return Math.pow(t5, e3);
  }
  polyIn2.exponent = custom;
  return polyIn2;
})(exponent);
var polyOut = (function custom2(e3) {
  e3 = +e3;
  function polyOut2(t5) {
    return 1 - Math.pow(1 - t5, e3);
  }
  polyOut2.exponent = custom2;
  return polyOut2;
})(exponent);
var polyInOut = (function custom3(e3) {
  e3 = +e3;
  function polyInOut2(t5) {
    return ((t5 *= 2) <= 1 ? Math.pow(t5, e3) : 2 - Math.pow(2 - t5, e3)) / 2;
  }
  polyInOut2.exponent = custom3;
  return polyInOut2;
})(exponent);

// node_modules/d3-ease/src/sin.js
var pi = Math.PI;
var halfPi = pi / 2;

// node_modules/d3-ease/src/math.js
function tpmt(x3) {
  return (Math.pow(2, -10 * x3) - 9765625e-10) * 1.0009775171065494;
}

// node_modules/d3-ease/src/bounce.js
var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;

// node_modules/d3-ease/src/back.js
var overshoot = 1.70158;
var backIn = (function custom4(s2) {
  s2 = +s2;
  function backIn2(t5) {
    return (t5 = +t5) * t5 * (s2 * (t5 - 1) + t5);
  }
  backIn2.overshoot = custom4;
  return backIn2;
})(overshoot);
var backOut = (function custom5(s2) {
  s2 = +s2;
  function backOut2(t5) {
    return --t5 * t5 * ((t5 + 1) * s2 + t5) + 1;
  }
  backOut2.overshoot = custom5;
  return backOut2;
})(overshoot);
var backInOut = (function custom6(s2) {
  s2 = +s2;
  function backInOut2(t5) {
    return ((t5 *= 2) < 1 ? t5 * t5 * ((s2 + 1) * t5 - s2) : (t5 -= 2) * t5 * ((s2 + 1) * t5 + s2) + 2) / 2;
  }
  backInOut2.overshoot = custom6;
  return backInOut2;
})(overshoot);

// node_modules/d3-ease/src/elastic.js
var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;
var elasticIn = (function custom7(a3, p2) {
  var s2 = Math.asin(1 / (a3 = Math.max(1, a3))) * (p2 /= tau);
  function elasticIn2(t5) {
    return a3 * tpmt(- --t5) * Math.sin((s2 - t5) / p2);
  }
  elasticIn2.amplitude = function(a4) {
    return custom7(a4, p2 * tau);
  };
  elasticIn2.period = function(p3) {
    return custom7(a3, p3);
  };
  return elasticIn2;
})(amplitude, period);
var elasticOut = (function custom8(a3, p2) {
  var s2 = Math.asin(1 / (a3 = Math.max(1, a3))) * (p2 /= tau);
  function elasticOut2(t5) {
    return 1 - a3 * tpmt(t5 = +t5) * Math.sin((t5 + s2) / p2);
  }
  elasticOut2.amplitude = function(a4) {
    return custom8(a4, p2 * tau);
  };
  elasticOut2.period = function(p3) {
    return custom8(a3, p3);
  };
  return elasticOut2;
})(amplitude, period);
var elasticInOut = (function custom9(a3, p2) {
  var s2 = Math.asin(1 / (a3 = Math.max(1, a3))) * (p2 /= tau);
  function elasticInOut2(t5) {
    return ((t5 = t5 * 2 - 1) < 0 ? a3 * tpmt(-t5) * Math.sin((s2 - t5) / p2) : 2 - a3 * tpmt(t5) * Math.sin((s2 + t5) / p2)) / 2;
  }
  elasticInOut2.amplitude = function(a4) {
    return custom9(a4, p2 * tau);
  };
  elasticInOut2.period = function(p3) {
    return custom9(a3, p3);
  };
  return elasticInOut2;
})(amplitude, period);

// node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};
function inherit(node, id2) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id2])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id2} not found`);
    }
  }
  return timing;
}
function transition_default2(name) {
  var id2, timing;
  if (name instanceof Transition) {
    id2 = name._id, name = name._name;
  } else {
    id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }
  for (var groups2 = this._groups, m3 = groups2.length, j2 = 0; j2 < m3; ++j2) {
    for (var group2 = groups2[j2], n2 = group2.length, node, i2 = 0; i2 < n2; ++i2) {
      if (node = group2[i2]) {
        schedule_default(node, name, id2, i2, group2, timing || inherit(node, id2));
      }
    }
  }
  return new Transition(groups2, this._parents, name, id2);
}

// node_modules/d3-transition/src/selection/index.js
selection_default.prototype.interrupt = interrupt_default2;
selection_default.prototype.transition = transition_default2;

// node_modules/d3-zoom/src/constant.js
var constant_default4 = (x3) => () => x3;

// node_modules/d3-zoom/src/event.js
function ZoomEvent(type, {
  sourceEvent,
  target,
  transform: transform3,
  dispatch
}) {
  Object.defineProperties(this, {
    type: { value: type, enumerable: true, configurable: true },
    sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
    target: { value: target, enumerable: true, configurable: true },
    transform: { value: transform3, enumerable: true, configurable: true },
    _: { value: dispatch }
  });
}

// node_modules/d3-zoom/src/transform.js
function Transform(k2, x3, y3) {
  this.k = k2;
  this.x = x3;
  this.y = y3;
}
Transform.prototype = {
  constructor: Transform,
  scale: function(k2) {
    return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
  },
  translate: function(x3, y3) {
    return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
  },
  apply: function(point2) {
    return [point2[0] * this.k + this.x, point2[1] * this.k + this.y];
  },
  applyX: function(x3) {
    return x3 * this.k + this.x;
  },
  applyY: function(y3) {
    return y3 * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x3) {
    return (x3 - this.x) / this.k;
  },
  invertY: function(y3) {
    return (y3 - this.y) / this.k;
  },
  rescaleX: function(x3) {
    return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
  },
  rescaleY: function(y3) {
    return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var identity2 = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity2;
  return node.__zoom;
}

// node_modules/d3-zoom/src/noevent.js
function nopropagation2(event) {
  event.stopImmediatePropagation();
}
function noevent_default2(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// node_modules/d3-zoom/src/zoom.js
function defaultFilter2(event) {
  return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
  var e3 = this;
  if (e3 instanceof SVGElement) {
    e3 = e3.ownerSVGElement || e3;
    if (e3.hasAttribute("viewBox")) {
      e3 = e3.viewBox.baseVal;
      return [[e3.x, e3.y], [e3.x + e3.width, e3.y + e3.height]];
    }
    return [[0, 0], [e3.width.baseVal.value, e3.height.baseVal.value]];
  }
  return [[0, 0], [e3.clientWidth, e3.clientHeight]];
}
function defaultTransform() {
  return this.__zoom || identity2;
}
function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform3, extent2, translateExtent) {
  var dx0 = transform3.invertX(extent2[0][0]) - translateExtent[0][0], dx1 = transform3.invertX(extent2[1][0]) - translateExtent[1][0], dy0 = transform3.invertY(extent2[0][1]) - translateExtent[0][1], dy1 = transform3.invertY(extent2[1][1]) - translateExtent[1][1];
  return transform3.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}
function zoom_default2() {
  var filter4 = defaultFilter2, extent2 = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable2, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
  function zoom2(selection2) {
    selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  zoom2.transform = function(collection, transform3, point2, event) {
    var selection2 = collection.selection ? collection.selection() : collection;
    selection2.property("__zoom", defaultTransform);
    if (collection !== selection2) {
      schedule(collection, transform3, point2, event);
    } else {
      selection2.interrupt().each(function() {
        gesture(this, arguments).event(event).start().zoom(null, typeof transform3 === "function" ? transform3.apply(this, arguments) : transform3).end();
      });
    }
  };
  zoom2.scaleBy = function(selection2, k2, p2, event) {
    zoom2.scaleTo(selection2, function() {
      var k0 = this.__zoom.k, k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
      return k0 * k1;
    }, p2, event);
  };
  zoom2.scaleTo = function(selection2, k2, p2, event) {
    zoom2.transform(selection2, function() {
      var e3 = extent2.apply(this, arguments), t03 = this.__zoom, p0 = p2 == null ? centroid(e3) : typeof p2 === "function" ? p2.apply(this, arguments) : p2, p1 = t03.invert(p0), k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
      return constrain(translate(scale(t03, k1), p0, p1), e3, translateExtent);
    }, p2, event);
  };
  zoom2.translateBy = function(selection2, x3, y3, event) {
    zoom2.transform(selection2, function() {
      return constrain(this.__zoom.translate(
        typeof x3 === "function" ? x3.apply(this, arguments) : x3,
        typeof y3 === "function" ? y3.apply(this, arguments) : y3
      ), extent2.apply(this, arguments), translateExtent);
    }, null, event);
  };
  zoom2.translateTo = function(selection2, x3, y3, p2, event) {
    zoom2.transform(selection2, function() {
      var e3 = extent2.apply(this, arguments), t5 = this.__zoom, p0 = p2 == null ? centroid(e3) : typeof p2 === "function" ? p2.apply(this, arguments) : p2;
      return constrain(identity2.translate(p0[0], p0[1]).scale(t5.k).translate(
        typeof x3 === "function" ? -x3.apply(this, arguments) : -x3,
        typeof y3 === "function" ? -y3.apply(this, arguments) : -y3
      ), e3, translateExtent);
    }, p2, event);
  };
  function scale(transform3, k2) {
    k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k2));
    return k2 === transform3.k ? transform3 : new Transform(k2, transform3.x, transform3.y);
  }
  function translate(transform3, p0, p1) {
    var x3 = p0[0] - p1[0] * transform3.k, y3 = p0[1] - p1[1] * transform3.k;
    return x3 === transform3.x && y3 === transform3.y ? transform3 : new Transform(transform3.k, x3, y3);
  }
  function centroid(extent3) {
    return [(+extent3[0][0] + +extent3[1][0]) / 2, (+extent3[0][1] + +extent3[1][1]) / 2];
  }
  function schedule(transition2, transform3, point2, event) {
    transition2.on("start.zoom", function() {
      gesture(this, arguments).event(event).start();
    }).on("interrupt.zoom end.zoom", function() {
      gesture(this, arguments).event(event).end();
    }).tween("zoom", function() {
      var that = this, args = arguments, g2 = gesture(that, args).event(event), e3 = extent2.apply(that, args), p2 = point2 == null ? centroid(e3) : typeof point2 === "function" ? point2.apply(that, args) : point2, w2 = Math.max(e3[1][0] - e3[0][0], e3[1][1] - e3[0][1]), a3 = that.__zoom, b = typeof transform3 === "function" ? transform3.apply(that, args) : transform3, i2 = interpolate(a3.invert(p2).concat(w2 / a3.k), b.invert(p2).concat(w2 / b.k));
      return function(t5) {
        if (t5 === 1) t5 = b;
        else {
          var l2 = i2(t5), k2 = w2 / l2[2];
          t5 = new Transform(k2, p2[0] - l2[0] * k2, p2[1] - l2[1] * k2);
        }
        g2.zoom(null, t5);
      };
    });
  }
  function gesture(that, args, clean) {
    return !clean && that.__zooming || new Gesture(that, args);
  }
  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent2.apply(that, args);
    this.taps = 0;
  }
  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform3) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform3.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform3.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform3.invert(this.touch1[0]);
      this.that.__zoom = transform3;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d2 = select_default2(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom2,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d2
      );
    }
  };
  function wheeled(event, ...args) {
    if (!filter4.apply(this, arguments)) return;
    var g2 = gesture(this, args).event(event), t5 = this.__zoom, k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t5.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p2 = pointer_default(event);
    if (g2.wheel) {
      if (g2.mouse[0][0] !== p2[0] || g2.mouse[0][1] !== p2[1]) {
        g2.mouse[1] = t5.invert(g2.mouse[0] = p2);
      }
      clearTimeout(g2.wheel);
    } else if (t5.k === k2) return;
    else {
      g2.mouse = [p2, t5.invert(p2)];
      interrupt_default(this);
      g2.start();
    }
    noevent_default2(event);
    g2.wheel = setTimeout(wheelidled, wheelDelay);
    g2.zoom("mouse", constrain(translate(scale(t5, k2), g2.mouse[0], g2.mouse[1]), g2.extent, translateExtent));
    function wheelidled() {
      g2.wheel = null;
      g2.end();
    }
  }
  function mousedowned(event, ...args) {
    if (touchending || !filter4.apply(this, arguments)) return;
    var currentTarget = event.currentTarget, g2 = gesture(this, args, true).event(event), v2 = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p2 = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
    nodrag_default(event.view);
    nopropagation2(event);
    g2.mouse = [p2, this.__zoom.invert(p2)];
    interrupt_default(this);
    g2.start();
    function mousemoved(event2) {
      noevent_default2(event2);
      if (!g2.moved) {
        var dx = event2.clientX - x0, dy = event2.clientY - y0;
        g2.moved = dx * dx + dy * dy > clickDistance2;
      }
      g2.event(event2).zoom("mouse", constrain(translate(g2.that.__zoom, g2.mouse[0] = pointer_default(event2, currentTarget), g2.mouse[1]), g2.extent, translateExtent));
    }
    function mouseupped(event2) {
      v2.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(event2.view, g2.moved);
      noevent_default2(event2);
      g2.event(event2).end();
    }
  }
  function dblclicked(event, ...args) {
    if (!filter4.apply(this, arguments)) return;
    var t03 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t03.invert(p0), k1 = t03.k * (event.shiftKey ? 0.5 : 2), t13 = constrain(translate(scale(t03, k1), p0, p1), extent2.apply(this, args), translateExtent);
    noevent_default2(event);
    if (duration > 0) select_default2(this).transition().duration(duration).call(schedule, t13, p0, event);
    else select_default2(this).call(zoom2.transform, t13, p0, event);
  }
  function touchstarted(event, ...args) {
    if (!filter4.apply(this, arguments)) return;
    var touches = event.touches, n2 = touches.length, g2 = gesture(this, args, event.changedTouches.length === n2).event(event), started, i2, t5, p2;
    nopropagation2(event);
    for (i2 = 0; i2 < n2; ++i2) {
      t5 = touches[i2], p2 = pointer_default(t5, this);
      p2 = [p2, this.__zoom.invert(p2), t5.identifier];
      if (!g2.touch0) g2.touch0 = p2, started = true, g2.taps = 1 + !!touchstarting;
      else if (!g2.touch1 && g2.touch0[2] !== p2[2]) g2.touch1 = p2, g2.taps = 0;
    }
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    if (started) {
      if (g2.taps < 2) touchfirst = p2[0], touchstarting = setTimeout(function() {
        touchstarting = null;
      }, touchDelay);
      interrupt_default(this);
      g2.start();
    }
  }
  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i2, t5, p2, l2;
    noevent_default2(event);
    for (i2 = 0; i2 < n2; ++i2) {
      t5 = touches[i2], p2 = pointer_default(t5, this);
      if (g2.touch0 && g2.touch0[2] === t5.identifier) g2.touch0[0] = p2;
      else if (g2.touch1 && g2.touch1[2] === t5.identifier) g2.touch1[0] = p2;
    }
    t5 = g2.that.__zoom;
    if (g2.touch1) {
      var p0 = g2.touch0[0], l0 = g2.touch0[1], p1 = g2.touch1[0], l1 = g2.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t5 = scale(t5, Math.sqrt(dp / dl));
      p2 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l2 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    } else if (g2.touch0) p2 = g2.touch0[0], l2 = g2.touch0[1];
    else return;
    g2.zoom("touch", constrain(translate(t5, p2, l2), g2.extent, translateExtent));
  }
  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g2 = gesture(this, args).event(event), touches = event.changedTouches, n2 = touches.length, i2, t5;
    nopropagation2(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() {
      touchending = null;
    }, touchDelay);
    for (i2 = 0; i2 < n2; ++i2) {
      t5 = touches[i2];
      if (g2.touch0 && g2.touch0[2] === t5.identifier) delete g2.touch0;
      else if (g2.touch1 && g2.touch1[2] === t5.identifier) delete g2.touch1;
    }
    if (g2.touch1 && !g2.touch0) g2.touch0 = g2.touch1, delete g2.touch1;
    if (g2.touch0) g2.touch0[1] = this.__zoom.invert(g2.touch0[0]);
    else {
      g2.end();
      if (g2.taps === 2) {
        t5 = pointer_default(t5, this);
        if (Math.hypot(touchfirst[0] - t5[0], touchfirst[1] - t5[1]) < tapDistance) {
          var p2 = select_default2(this).on("dblclick.zoom");
          if (p2) p2.apply(this, arguments);
        }
      }
    }
  }
  zoom2.wheelDelta = function(_2) {
    return arguments.length ? (wheelDelta = typeof _2 === "function" ? _2 : constant_default4(+_2), zoom2) : wheelDelta;
  };
  zoom2.filter = function(_2) {
    return arguments.length ? (filter4 = typeof _2 === "function" ? _2 : constant_default4(!!_2), zoom2) : filter4;
  };
  zoom2.touchable = function(_2) {
    return arguments.length ? (touchable = typeof _2 === "function" ? _2 : constant_default4(!!_2), zoom2) : touchable;
  };
  zoom2.extent = function(_2) {
    return arguments.length ? (extent2 = typeof _2 === "function" ? _2 : constant_default4([[+_2[0][0], +_2[0][1]], [+_2[1][0], +_2[1][1]]]), zoom2) : extent2;
  };
  zoom2.scaleExtent = function(_2) {
    return arguments.length ? (scaleExtent[0] = +_2[0], scaleExtent[1] = +_2[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
  };
  zoom2.translateExtent = function(_2) {
    return arguments.length ? (translateExtent[0][0] = +_2[0][0], translateExtent[1][0] = +_2[1][0], translateExtent[0][1] = +_2[0][1], translateExtent[1][1] = +_2[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };
  zoom2.constrain = function(_2) {
    return arguments.length ? (constrain = _2, zoom2) : constrain;
  };
  zoom2.duration = function(_2) {
    return arguments.length ? (duration = +_2, zoom2) : duration;
  };
  zoom2.interpolate = function(_2) {
    return arguments.length ? (interpolate = _2, zoom2) : interpolate;
  };
  zoom2.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom2 : value;
  };
  zoom2.clickDistance = function(_2) {
    return arguments.length ? (clickDistance2 = (_2 = +_2) * _2, zoom2) : Math.sqrt(clickDistance2);
  };
  zoom2.tapDistance = function(_2) {
    return arguments.length ? (tapDistance = +_2, zoom2) : tapDistance;
  };
  return zoom2;
}

// node_modules/d3-array/src/ascending.js
function ascending2(a3, b) {
  return a3 == null || b == null ? NaN : a3 < b ? -1 : a3 > b ? 1 : a3 >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a3, b) {
  return a3 == null || b == null ? NaN : b < a3 ? -1 : b > a3 ? 1 : b >= a3 ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f2) {
  let compare1, compare2, delta;
  if (f2.length !== 2) {
    compare1 = ascending2;
    compare2 = (d2, x3) => ascending2(f2(d2), x3);
    delta = (d2, x3) => f2(d2) - x3;
  } else {
    compare1 = f2 === ascending2 || f2 === descending ? f2 : zero2;
    compare2 = f2;
    delta = f2;
  }
  function left(a3, x3, lo = 0, hi = a3.length) {
    if (lo < hi) {
      if (compare1(x3, x3) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a3[mid], x3) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a3, x3, lo = 0, hi = a3.length) {
    if (lo < hi) {
      if (compare1(x3, x3) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a3[mid], x3) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a3, x3, lo = 0, hi = a3.length) {
    const i2 = left(a3, x3, lo, hi - 1);
    return i2 > lo && delta(a3[i2 - 1], x3) > -delta(a3[i2], x3) ? i2 - 1 : i2;
  }
  return { left, center, right };
}
function zero2() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x3) {
  return x3 === null ? NaN : +x3;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending2);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;

// node_modules/d3-array/src/blur.js
var blur2 = Blur2(blurf);
var blurImage = Blur2(blurfImage);
function Blur2(blur3) {
  return function(data, rx, ry = rx) {
    if (!((rx = +rx) >= 0)) throw new RangeError("invalid rx");
    if (!((ry = +ry) >= 0)) throw new RangeError("invalid ry");
    let { data: values2, width, height } = data;
    if (!((width = Math.floor(width)) >= 0)) throw new RangeError("invalid width");
    if (!((height = Math.floor(height !== void 0 ? height : values2.length / width)) >= 0)) throw new RangeError("invalid height");
    if (!width || !height || !rx && !ry) return data;
    const blurx = rx && blur3(rx);
    const blury = ry && blur3(ry);
    const temp = values2.slice();
    if (blurx && blury) {
      blurh(blurx, temp, values2, width, height);
      blurh(blurx, values2, temp, width, height);
      blurh(blurx, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
      blurv(blury, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
    } else if (blurx) {
      blurh(blurx, values2, temp, width, height);
      blurh(blurx, temp, values2, width, height);
      blurh(blurx, values2, temp, width, height);
    } else if (blury) {
      blurv(blury, values2, temp, width, height);
      blurv(blury, temp, values2, width, height);
      blurv(blury, values2, temp, width, height);
    }
    return data;
  };
}
function blurh(blur3, T2, S2, w2, h2) {
  for (let y3 = 0, n2 = w2 * h2; y3 < n2; ) {
    blur3(T2, S2, y3, y3 += w2, 1);
  }
}
function blurv(blur3, T2, S2, w2, h2) {
  for (let x3 = 0, n2 = w2 * h2; x3 < w2; ++x3) {
    blur3(T2, S2, x3, x3 + n2, w2);
  }
}
function blurfImage(radius) {
  const blur3 = blurf(radius);
  return (T2, S2, start2, stop, step) => {
    start2 <<= 2, stop <<= 2, step <<= 2;
    blur3(T2, S2, start2 + 0, stop + 0, step);
    blur3(T2, S2, start2 + 1, stop + 1, step);
    blur3(T2, S2, start2 + 2, stop + 2, step);
    blur3(T2, S2, start2 + 3, stop + 3, step);
  };
}
function blurf(radius) {
  const radius0 = Math.floor(radius);
  if (radius0 === radius) return bluri(radius);
  const t5 = radius - radius0;
  const w2 = 2 * radius + 1;
  return (T2, S2, start2, stop, step) => {
    if (!((stop -= step) >= start2)) return;
    let sum3 = radius0 * S2[start2];
    const s0 = step * radius0;
    const s1 = s0 + step;
    for (let i2 = start2, j2 = start2 + s0; i2 < j2; i2 += step) {
      sum3 += S2[Math.min(stop, i2)];
    }
    for (let i2 = start2, j2 = stop; i2 <= j2; i2 += step) {
      sum3 += S2[Math.min(stop, i2 + s0)];
      T2[i2] = (sum3 + t5 * (S2[Math.max(start2, i2 - s1)] + S2[Math.min(stop, i2 + s1)])) / w2;
      sum3 -= S2[Math.max(start2, i2 - s0)];
    }
  };
}
function bluri(radius) {
  const w2 = 2 * radius + 1;
  return (T2, S2, start2, stop, step) => {
    if (!((stop -= step) >= start2)) return;
    let sum3 = radius * S2[start2];
    const s2 = step * radius;
    for (let i2 = start2, j2 = start2 + s2; i2 < j2; i2 += step) {
      sum3 += S2[Math.min(stop, i2)];
    }
    for (let i2 = start2, j2 = stop; i2 <= j2; i2 += step) {
      sum3 += S2[Math.min(stop, i2 + s2)];
      T2[i2] = sum3 / w2;
      sum3 -= S2[Math.max(start2, i2 - s2)];
    }
  };
}

// node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// node_modules/d3-array/src/array.js
var array2 = Array.prototype;
var slice = array2.slice;
var map = array2.map;

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start2, stop, count2) {
  const step = (stop - start2) / Math.max(0, count2), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start2 * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start2) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start2 / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start2) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count2 && count2 < 2) return tickSpec(start2, stop, count2 * 2);
  return [i1, i2, inc];
}
function tickIncrement(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  return tickSpec(start2, stop, count2)[2];
}
function tickStep(start2, stop, count2) {
  stop = +stop, start2 = +start2, count2 = +count2;
  const reverse3 = stop < start2, inc = reverse3 ? tickIncrement(stop, start2, count2) : tickIncrement(start2, stop, count2);
  return (reverse3 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-array/src/max.js
function max(values2, valueof) {
  let max4;
  if (valueof === void 0) {
    for (const value of values2) {
      if (value != null && (max4 < value || max4 === void 0 && value >= value)) {
        max4 = value;
      }
    }
  } else {
    let index8 = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index8, values2)) != null && (max4 < value || max4 === void 0 && value >= value)) {
        max4 = value;
      }
    }
  }
  return max4;
}

// node_modules/d3-array/src/min.js
function min(values2, valueof) {
  let min4;
  if (valueof === void 0) {
    for (const value of values2) {
      if (value != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value;
      }
    }
  } else {
    let index8 = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index8, values2)) != null && (min4 > value || min4 === void 0 && value >= value)) {
        min4 = value;
      }
    }
  }
  return min4;
}

// node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random2) {
  return function shuffle2(array3, i0 = 0, i1 = array3.length) {
    let m3 = i1 - (i0 = +i0);
    while (m3) {
      const i2 = random2() * m3-- | 0, t5 = array3[m3 + i0];
      array3[m3 + i0] = array3[i2 + i0];
      array3[i2 + i0] = t5;
    }
    return array3;
  };
}

// node_modules/d3-array/src/sum.js
function sum(values2, valueof) {
  let sum3 = 0;
  if (valueof === void 0) {
    for (let value of values2) {
      if (value = +value) {
        sum3 += value;
      }
    }
  } else {
    let index8 = -1;
    for (let value of values2) {
      if (value = +valueof(value, ++index8, values2)) {
        sum3 += value;
      }
    }
  }
  return sum3;
}

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root2 = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root2;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e3) {
  }
  var result2 = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result2;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_baseToNumber.js
var NAN = 0 / 0;
function baseToNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  return +value;
}
var baseToNumber_default = baseToNumber;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array3, iteratee2) {
  var index8 = -1, length = array3 == null ? 0 : array3.length, result2 = Array(length);
  while (++index8 < length) {
    result2[index8] = iteratee2(array3[index8], index8, array3);
  }
  return result2;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/_createMathOperation.js
function createMathOperation(operator, defaultValue) {
  return function(value, other) {
    var result2;
    if (value === void 0 && other === void 0) {
      return defaultValue;
    }
    if (value !== void 0) {
      result2 = value;
    }
    if (other !== void 0) {
      if (result2 === void 0) {
        return other;
      }
      if (typeof value == "string" || typeof other == "string") {
        value = baseToString_default(value);
        other = baseToString_default(other);
      } else {
        value = baseToNumber_default(value);
        other = baseToNumber_default(other);
      }
      result2 = operator(value, other);
    }
    return result2;
  };
}
var createMathOperation_default = createMathOperation;

// node_modules/lodash-es/add.js
var add = createMathOperation_default(function(augend, addend) {
  return augend + addend;
}, 0);
var add_default = add;

// node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index8 = string.length;
  while (index8-- && reWhitespace.test(string.charAt(index8))) {
  }
  return index8;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/toNumber.js
var NAN2 = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN2;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN2 : +value;
}
var toNumber_default = toNumber;

// node_modules/lodash-es/toFinite.js
var INFINITY2 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY2 || value === -INFINITY2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result2 = toFinite_default(value), remainder = result2 % 1;
  return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
}
var toInteger_default = toInteger;

// node_modules/lodash-es/after.js
var FUNC_ERROR_TEXT = "Expected a function";
function after(n2, func) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n2 = toInteger_default(n2);
  return function() {
    if (--n2 < 1) {
      return func.apply(this, arguments);
    }
  };
}
var after_default = after;

// node_modules/lodash-es/identity.js
function identity4(value) {
  return value;
}
var identity_default = identity4;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e3) {
    }
    try {
      return func + "";
    } catch (e3) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_WeakMap.js
var WeakMap2 = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap2;

// node_modules/lodash-es/_metaMap.js
var metaMap = WeakMap_default && new WeakMap_default();
var metaMap_default = metaMap;

// node_modules/lodash-es/_baseSetData.js
var baseSetData = !metaMap_default ? identity_default : function(func, data) {
  metaMap_default.set(func, data);
  return func;
};
var baseSetData_default = baseSetData;

// node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ (function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result2 = new object();
    object.prototype = void 0;
    return result2;
  };
})();
var baseCreate_default = baseCreate;

// node_modules/lodash-es/_createCtor.js
function createCtor(Ctor) {
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate_default(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
    return isObject_default(result2) ? result2 : thisBinding;
  };
}
var createCtor_default = createCtor;

// node_modules/lodash-es/_createBind.js
var WRAP_BIND_FLAG = 1;
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor_default(func);
  function wrapper() {
    var fn = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
var createBind_default = createBind;

// node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// node_modules/lodash-es/_composeArgs.js
var nativeMax = Math.max;
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array(leftLength + rangeLength), isUncurried = !isCurried;
  while (++leftIndex < leftLength) {
    result2[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result2[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result2[leftIndex++] = args[argsIndex++];
  }
  return result2;
}
var composeArgs_default = composeArgs;

// node_modules/lodash-es/_composeArgsRight.js
var nativeMax2 = Math.max;
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax2(argsLength - holdersLength, 0), result2 = Array(rangeLength + rightLength), isUncurried = !isCurried;
  while (++argsIndex < rangeLength) {
    result2[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result2[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result2[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result2;
}
var composeArgsRight_default = composeArgsRight;

// node_modules/lodash-es/_countHolders.js
function countHolders(array3, placeholder) {
  var length = array3.length, result2 = 0;
  while (length--) {
    if (array3[length] === placeholder) {
      ++result2;
    }
  }
  return result2;
}
var countHolders_default = countHolders;

// node_modules/lodash-es/_baseLodash.js
function baseLodash() {
}
var baseLodash_default = baseLodash;

// node_modules/lodash-es/_LazyWrapper.js
var MAX_ARRAY_LENGTH = 4294967295;
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}
LazyWrapper.prototype = baseCreate_default(baseLodash_default.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var LazyWrapper_default = LazyWrapper;

// node_modules/lodash-es/noop.js
function noop() {
}
var noop_default = noop;

// node_modules/lodash-es/_getData.js
var getData = !metaMap_default ? noop_default : function(func) {
  return metaMap_default.get(func);
};
var getData_default = getData;

// node_modules/lodash-es/_realNames.js
var realNames = {};
var realNames_default = realNames;

// node_modules/lodash-es/_getFuncName.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function getFuncName(func) {
  var result2 = func.name + "", array3 = realNames_default[result2], length = hasOwnProperty3.call(realNames_default, result2) ? array3.length : 0;
  while (length--) {
    var data = array3[length], otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result2;
}
var getFuncName_default = getFuncName;

// node_modules/lodash-es/_LodashWrapper.js
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = void 0;
}
LodashWrapper.prototype = baseCreate_default(baseLodash_default.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var LodashWrapper_default = LodashWrapper;

// node_modules/lodash-es/_copyArray.js
function copyArray(source, array3) {
  var index8 = -1, length = source.length;
  array3 || (array3 = Array(length));
  while (++index8 < length) {
    array3[index8] = source[index8];
  }
  return array3;
}
var copyArray_default = copyArray;

// node_modules/lodash-es/_wrapperClone.js
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper_default) {
    return wrapper.clone();
  }
  var result2 = new LodashWrapper_default(wrapper.__wrapped__, wrapper.__chain__);
  result2.__actions__ = copyArray_default(wrapper.__actions__);
  result2.__index__ = wrapper.__index__;
  result2.__values__ = wrapper.__values__;
  return result2;
}
var wrapperClone_default = wrapperClone;

// node_modules/lodash-es/wrapperLodash.js
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function lodash(value) {
  if (isObjectLike_default(value) && !isArray_default(value) && !(value instanceof LazyWrapper_default)) {
    if (value instanceof LodashWrapper_default) {
      return value;
    }
    if (hasOwnProperty4.call(value, "__wrapped__")) {
      return wrapperClone_default(value);
    }
  }
  return new LodashWrapper_default(value);
}
lodash.prototype = baseLodash_default.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash_default = lodash;

// node_modules/lodash-es/_isLaziable.js
function isLaziable(func) {
  var funcName = getFuncName_default(func), other = wrapperLodash_default[funcName];
  if (typeof other != "function" || !(funcName in LazyWrapper_default.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData_default(other);
  return !!data && func === data[0];
}
var isLaziable_default = isLaziable;

// node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count2 = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count2 >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count2 = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/lodash-es/_setData.js
var setData = shortOut_default(baseSetData_default);
var setData_default = setData;

// node_modules/lodash-es/_getWrapDetails.js
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}
var getWrapDetails_default = getWrapDetails;

// node_modules/lodash-es/_insertWrapDetails.js
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
  details = details.join(length > 2 ? ", " : " ");
  return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
var insertWrapDetails_default = insertWrapDetails;

// node_modules/lodash-es/constant.js
function constant2(value) {
  return function() {
    return value;
  };
}
var constant_default5 = constant2;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = (function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e3) {
  }
})();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default5(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/lodash-es/_arrayEach.js
function arrayEach(array3, iteratee2) {
  var index8 = -1, length = array3 == null ? 0 : array3.length;
  while (++index8 < length) {
    if (iteratee2(array3[index8], index8, array3) === false) {
      break;
    }
  }
  return array3;
}
var arrayEach_default = arrayEach;

// node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array3, predicate, fromIndex, fromRight) {
  var length = array3.length, index8 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index8-- : ++index8 < length) {
    if (predicate(array3[index8], index8, array3)) {
      return index8;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array3, value, fromIndex) {
  var index8 = fromIndex - 1, length = array3.length;
  while (++index8 < length) {
    if (array3[index8] === value) {
      return index8;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array3, value, fromIndex) {
  return value === value ? strictIndexOf_default(array3, value, fromIndex) : baseFindIndex_default(array3, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array3, value) {
  var length = array3 == null ? 0 : array3.length;
  return !!length && baseIndexOf_default(array3, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// node_modules/lodash-es/_updateWrapDetails.js
var WRAP_BIND_FLAG2 = 1;
var WRAP_BIND_KEY_FLAG = 2;
var WRAP_CURRY_FLAG = 8;
var WRAP_CURRY_RIGHT_FLAG = 16;
var WRAP_PARTIAL_FLAG = 32;
var WRAP_PARTIAL_RIGHT_FLAG = 64;
var WRAP_ARY_FLAG = 128;
var WRAP_REARG_FLAG = 256;
var WRAP_FLIP_FLAG = 512;
var wrapFlags = [
  ["ary", WRAP_ARY_FLAG],
  ["bind", WRAP_BIND_FLAG2],
  ["bindKey", WRAP_BIND_KEY_FLAG],
  ["curry", WRAP_CURRY_FLAG],
  ["curryRight", WRAP_CURRY_RIGHT_FLAG],
  ["flip", WRAP_FLIP_FLAG],
  ["partial", WRAP_PARTIAL_FLAG],
  ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
  ["rearg", WRAP_REARG_FLAG]
];
function updateWrapDetails(details, bitmask) {
  arrayEach_default(wrapFlags, function(pair) {
    var value = "_." + pair[0];
    if (bitmask & pair[1] && !arrayIncludes_default(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}
var updateWrapDetails_default = updateWrapDetails;

// node_modules/lodash-es/_setWrapToString.js
function setWrapToString(wrapper, reference, bitmask) {
  var source = reference + "";
  return setToString_default(wrapper, insertWrapDetails_default(source, updateWrapDetails_default(getWrapDetails_default(source), bitmask)));
}
var setWrapToString_default = setWrapToString;

// node_modules/lodash-es/_createRecurry.js
var WRAP_BIND_FLAG3 = 1;
var WRAP_BIND_KEY_FLAG2 = 2;
var WRAP_CURRY_BOUND_FLAG = 4;
var WRAP_CURRY_FLAG2 = 8;
var WRAP_PARTIAL_FLAG2 = 32;
var WRAP_PARTIAL_RIGHT_FLAG2 = 64;
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG2, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
  bitmask |= isCurry ? WRAP_PARTIAL_FLAG2 : WRAP_PARTIAL_RIGHT_FLAG2;
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG2 : WRAP_PARTIAL_FLAG2);
  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG3 | WRAP_BIND_KEY_FLAG2);
  }
  var newData = [
    func,
    bitmask,
    thisArg,
    newPartials,
    newHolders,
    newPartialsRight,
    newHoldersRight,
    argPos,
    ary2,
    arity
  ];
  var result2 = wrapFunc.apply(void 0, newData);
  if (isLaziable_default(func)) {
    setData_default(result2, newData);
  }
  result2.placeholder = placeholder;
  return setWrapToString_default(result2, func, bitmask);
}
var createRecurry_default = createRecurry;

// node_modules/lodash-es/_getHolder.js
function getHolder(func) {
  var object = func;
  return object.placeholder;
}
var getHolder_default = getHolder;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_reorder.js
var nativeMin = Math.min;
function reorder(array3, indexes2) {
  var arrLength = array3.length, length = nativeMin(indexes2.length, arrLength), oldArray = copyArray_default(array3);
  while (length--) {
    var index8 = indexes2[length];
    array3[length] = isIndex_default(index8, arrLength) ? oldArray[index8] : void 0;
  }
  return array3;
}
var reorder_default = reorder;

// node_modules/lodash-es/_replaceHolders.js
var PLACEHOLDER = "__lodash_placeholder__";
function replaceHolders(array3, placeholder) {
  var index8 = -1, length = array3.length, resIndex = 0, result2 = [];
  while (++index8 < length) {
    var value = array3[index8];
    if (value === placeholder || value === PLACEHOLDER) {
      array3[index8] = PLACEHOLDER;
      result2[resIndex++] = index8;
    }
  }
  return result2;
}
var replaceHolders_default = replaceHolders;

// node_modules/lodash-es/_createHybrid.js
var WRAP_BIND_FLAG4 = 1;
var WRAP_BIND_KEY_FLAG3 = 2;
var WRAP_CURRY_FLAG3 = 8;
var WRAP_CURRY_RIGHT_FLAG2 = 16;
var WRAP_ARY_FLAG2 = 128;
var WRAP_FLIP_FLAG2 = 512;
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG2, isBind = bitmask & WRAP_BIND_FLAG4, isBindKey = bitmask & WRAP_BIND_KEY_FLAG3, isCurried = bitmask & (WRAP_CURRY_FLAG3 | WRAP_CURRY_RIGHT_FLAG2), isFlip = bitmask & WRAP_FLIP_FLAG2, Ctor = isBindKey ? void 0 : createCtor_default(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index8 = length;
    while (index8--) {
      args[index8] = arguments[index8];
    }
    if (isCurried) {
      var placeholder = getHolder_default(wrapper), holdersCount = countHolders_default(args, placeholder);
    }
    if (partials) {
      args = composeArgs_default(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight_default(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders_default(args, placeholder);
      return createRecurry_default(
        func,
        bitmask,
        createHybrid,
        wrapper.placeholder,
        thisArg,
        args,
        newHolders,
        argPos,
        ary2,
        arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
    length = args.length;
    if (argPos) {
      args = reorder_default(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary2 < length) {
      args.length = ary2;
    }
    if (this && this !== root_default && this instanceof wrapper) {
      fn = Ctor || createCtor_default(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}
var createHybrid_default = createHybrid;

// node_modules/lodash-es/_createCurry.js
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor_default(func);
  function wrapper() {
    var length = arguments.length, args = Array(length), index8 = length, placeholder = getHolder_default(wrapper);
    while (index8--) {
      args[index8] = arguments[index8];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders_default(args, placeholder);
    length -= holders.length;
    if (length < arity) {
      return createRecurry_default(
        func,
        bitmask,
        createHybrid_default,
        wrapper.placeholder,
        void 0,
        args,
        holders,
        void 0,
        void 0,
        arity - length
      );
    }
    var fn = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    return apply_default(fn, this, args);
  }
  return wrapper;
}
var createCurry_default = createCurry;

// node_modules/lodash-es/_createPartial.js
var WRAP_BIND_FLAG5 = 1;
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG5, Ctor = createCtor_default(func);
  function wrapper() {
    var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root_default && this instanceof wrapper ? Ctor : func;
    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply_default(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}
var createPartial_default = createPartial;

// node_modules/lodash-es/_mergeData.js
var PLACEHOLDER2 = "__lodash_placeholder__";
var WRAP_BIND_FLAG6 = 1;
var WRAP_BIND_KEY_FLAG4 = 2;
var WRAP_CURRY_BOUND_FLAG2 = 4;
var WRAP_CURRY_FLAG4 = 8;
var WRAP_ARY_FLAG3 = 128;
var WRAP_REARG_FLAG2 = 256;
var nativeMin2 = Math.min;
function mergeData(data, source) {
  var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG6 | WRAP_BIND_KEY_FLAG4 | WRAP_ARY_FLAG3);
  var isCombo = srcBitmask == WRAP_ARY_FLAG3 && bitmask == WRAP_CURRY_FLAG4 || srcBitmask == WRAP_ARY_FLAG3 && bitmask == WRAP_REARG_FLAG2 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG3 | WRAP_REARG_FLAG2) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG4;
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & WRAP_BIND_FLAG6) {
    data[2] = source[2];
    newBitmask |= bitmask & WRAP_BIND_FLAG6 ? 0 : WRAP_CURRY_BOUND_FLAG2;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs_default(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders_default(data[3], PLACEHOLDER2) : source[4];
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight_default(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders_default(data[5], PLACEHOLDER2) : source[6];
  }
  value = source[7];
  if (value) {
    data[7] = value;
  }
  if (srcBitmask & WRAP_ARY_FLAG3) {
    data[8] = data[8] == null ? source[8] : nativeMin2(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
var mergeData_default = mergeData;

// node_modules/lodash-es/_createWrap.js
var FUNC_ERROR_TEXT2 = "Expected a function";
var WRAP_BIND_FLAG7 = 1;
var WRAP_BIND_KEY_FLAG5 = 2;
var WRAP_CURRY_FLAG5 = 8;
var WRAP_CURRY_RIGHT_FLAG3 = 16;
var WRAP_PARTIAL_FLAG3 = 32;
var WRAP_PARTIAL_RIGHT_FLAG3 = 64;
var nativeMax3 = Math.max;
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG5;
  if (!isBindKey && typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG3 | WRAP_PARTIAL_RIGHT_FLAG3);
    partials = holders = void 0;
  }
  ary2 = ary2 === void 0 ? ary2 : nativeMax3(toInteger_default(ary2), 0);
  arity = arity === void 0 ? arity : toInteger_default(arity);
  length -= holders ? holders.length : 0;
  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG3) {
    var partialsRight = partials, holdersRight = holders;
    partials = holders = void 0;
  }
  var data = isBindKey ? void 0 : getData_default(func);
  var newData = [
    func,
    bitmask,
    thisArg,
    partials,
    holders,
    partialsRight,
    holdersRight,
    argPos,
    ary2,
    arity
  ];
  if (data) {
    mergeData_default(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax3(newData[9] - length, 0);
  if (!arity && bitmask & (WRAP_CURRY_FLAG5 | WRAP_CURRY_RIGHT_FLAG3)) {
    bitmask &= ~(WRAP_CURRY_FLAG5 | WRAP_CURRY_RIGHT_FLAG3);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG7) {
    var result2 = createBind_default(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG5 || bitmask == WRAP_CURRY_RIGHT_FLAG3) {
    result2 = createCurry_default(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG3 || bitmask == (WRAP_BIND_FLAG7 | WRAP_PARTIAL_FLAG3)) && !holders.length) {
    result2 = createPartial_default(func, bitmask, thisArg, partials);
  } else {
    result2 = createHybrid_default.apply(void 0, newData);
  }
  var setter = data ? baseSetData_default : setData_default;
  return setWrapToString_default(setter(result2, newData), func, bitmask);
}
var createWrap_default = createWrap;

// node_modules/lodash-es/ary.js
var WRAP_ARY_FLAG4 = 128;
function ary(func, n2, guard) {
  n2 = guard ? void 0 : n2;
  n2 = func && n2 == null ? func.length : n2;
  return createWrap_default(func, WRAP_ARY_FLAG4, void 0, void 0, void 0, void 0, n2);
}
var ary_default = ary;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assignValue.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty5.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index8 = -1, length = props.length;
  while (++index8 < length) {
    var key = props[index8];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// node_modules/lodash-es/_overRest.js
var nativeMax4 = Math.max;
function overRest(func, start2, transform3) {
  start2 = nativeMax4(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index8 = -1, length = nativeMax4(args.length - start2, 0), array3 = Array(length);
    while (++index8 < length) {
      array3[index8] = args[start2 + index8];
    }
    index8 = -1;
    var otherArgs = Array(start2 + 1);
    while (++index8 < start2) {
      otherArgs[index8] = args[index8];
    }
    otherArgs[start2] = transform3(array3);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/lodash-es/_baseRest.js
function baseRest(func, start2) {
  return setToString_default(overRest_default(func, start2, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index8, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index8;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index8, object.length) : type == "string" && index8 in object) {
    return eq_default(object[index8], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function(object, sources) {
    var index8 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index8 < length) {
      var source = sources[index8];
      if (source) {
        assigner(object, source, index8, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default = createAssigner;

// node_modules/lodash-es/_isPrototype.js
var objectProto7 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto7;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/lodash-es/_baseTimes.js
function baseTimes(n2, iteratee2) {
  var index8 = -1, result2 = Array(n2);
  while (++index8 < n2) {
    result2[index8] = iteratee2(index8);
  }
  return result2;
}
var baseTimes_default = baseTimes;

// node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/lodash-es/isArguments.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
var propertyIsEnumerable = objectProto8.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ (function() {
  return arguments;
})()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = (function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e3) {
  }
})();
var nodeUtil_default = nodeUtil;

// node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/lodash-es/_arrayLikeKeys.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes_default(value.length, String) : [], length = result2.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result2.push(key);
    }
  }
  return result2;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/lodash-es/_overArg.js
function overArg(func, transform3) {
  return function(arg) {
    return func(transform3(arg));
  };
}
var overArg_default = overArg;

// node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/lodash-es/_baseKeys.js
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result2 = [];
  for (var key in Object(object)) {
    if (hasOwnProperty8.call(object, key) && key != "constructor") {
      result2.push(key);
    }
  }
  return result2;
}
var baseKeys_default = baseKeys;

// node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/lodash-es/assign.js
var objectProto11 = Object.prototype;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
var assign = createAssigner_default(function(object, source) {
  if (isPrototype_default(source) || isArrayLike_default(source)) {
    copyObject_default(source, keys_default(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty9.call(source, key)) {
      assignValue_default(object, key, source[key]);
    }
  }
});
var assign_default = assign;

// node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result2 = [];
  if (object != null) {
    for (var key in Object(object)) {
      result2.push(key);
    }
  }
  return result2;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/lodash-es/_baseKeysIn.js
var objectProto12 = Object.prototype;
var hasOwnProperty10 = objectProto12.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result2 = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty10.call(object, key)))) {
      result2.push(key);
    }
  }
  return result2;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/lodash-es/assignIn.js
var assignIn = createAssigner_default(function(object, source) {
  copyObject_default(source, keysIn_default(source), object);
});
var assignIn_default = assignIn;

// node_modules/lodash-es/assignInWith.js
var assignInWith = createAssigner_default(function(object, source, srcIndex, customizer) {
  copyObject_default(source, keysIn_default(source), object, customizer);
});
var assignInWith_default = assignInWith;

// node_modules/lodash-es/assignWith.js
var assignWith = createAssigner_default(function(object, source, srcIndex, customizer) {
  copyObject_default(source, keys_default(source), object, customizer);
});
var assignWith_default = assignWith;

// node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result2 = this.has(key) && delete this.__data__[key];
  this.size -= result2 ? 1 : 0;
  return result2;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto13 = Object.prototype;
var hasOwnProperty11 = objectProto13.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result2 = data[key];
    return result2 === HASH_UNDEFINED ? void 0 : result2;
  }
  return hasOwnProperty11.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto14 = Object.prototype;
var hasOwnProperty12 = objectProto14.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty12.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index8 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index8 < length) {
    var entry = entries[index8];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array3, key) {
  var length = array3.length;
  while (length--) {
    if (eq_default(array3[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index8 = assocIndexOf_default(data, key);
  if (index8 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index8 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index8, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index8 = assocIndexOf_default(data, key);
  return index8 < 0 ? void 0 : data[index8][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index8 = assocIndexOf_default(data, key);
  if (index8 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index8][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index8 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index8 < length) {
    var entry = entries[index8];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map5, key) {
  var data = map5.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result2 = getMapData_default(this, key)["delete"](key);
  this.size -= result2 ? 1 : 0;
  return result2;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size2 = data.size;
  data.set(key, value);
  this.size += data.size == size2 ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index8 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index8 < length) {
    var entry = entries[index8];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT3 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT3);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result2 = func.apply(this, args);
    memoized.cache = cache.set(key, result2) || cache;
    return result2;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result2 = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result2.cache;
  return result2;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result2 = [];
  if (string.charCodeAt(0) === 46) {
    result2.push("");
  }
  string.replace(rePropName, function(match, number3, quote, subString) {
    result2.push(quote ? subString.replace(reEscapeChar, "$1") : number3 || match);
  });
  return result2;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/_toKey.js
var INFINITY3 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result2 = value + "";
  return result2 == "0" && 1 / value == -INFINITY3 ? "-0" : result2;
}
var toKey_default = toKey;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index8 = 0, length = path.length;
  while (object != null && index8 < length) {
    object = object[toKey_default(path[index8++])];
  }
  return index8 && index8 == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/get.js
function get2(object, path, defaultValue) {
  var result2 = object == null ? void 0 : baseGet_default(object, path);
  return result2 === void 0 ? defaultValue : result2;
}
var get_default = get2;

// node_modules/lodash-es/_baseAt.js
function baseAt(object, paths) {
  var index8 = -1, length = paths.length, result2 = Array(length), skip = object == null;
  while (++index8 < length) {
    result2[index8] = skip ? void 0 : get_default(object, paths[index8]);
  }
  return result2;
}
var baseAt_default = baseAt;

// node_modules/lodash-es/_arrayPush.js
function arrayPush(array3, values2) {
  var index8 = -1, length = values2.length, offset = array3.length;
  while (++index8 < length) {
    array3[offset + index8] = values2[index8];
  }
  return array3;
}
var arrayPush_default = arrayPush;

// node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array3, depth, predicate, isStrict, result2) {
  var index8 = -1, length = array3.length;
  predicate || (predicate = isFlattenable_default);
  result2 || (result2 = []);
  while (++index8 < length) {
    var value = array3[index8];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result2);
      } else {
        arrayPush_default(result2, value);
      }
    } else if (!isStrict) {
      result2[result2.length] = value;
    }
  }
  return result2;
}
var baseFlatten_default = baseFlatten;

// node_modules/lodash-es/flatten.js
function flatten(array3) {
  var length = array3 == null ? 0 : array3.length;
  return length ? baseFlatten_default(array3, 1) : [];
}
var flatten_default = flatten;

// node_modules/lodash-es/_flatRest.js
function flatRest(func) {
  return setToString_default(overRest_default(func, void 0, flatten_default), func + "");
}
var flatRest_default = flatRest;

// node_modules/lodash-es/at.js
var at = flatRest_default(baseAt_default);
var at_default = at;

// node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/lodash-es/isPlainObject.js
var objectTag2 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto15 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty13 = objectProto15.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty13.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// node_modules/lodash-es/isError.js
var domExcTag = "[object DOMException]";
var errorTag2 = "[object Error]";
function isError(value) {
  if (!isObjectLike_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == errorTag2 || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject_default(value);
}
var isError_default = isError;

// node_modules/lodash-es/attempt.js
var attempt = baseRest_default(function(func, args) {
  try {
    return apply_default(func, void 0, args);
  } catch (e3) {
    return isError_default(e3) ? e3 : new Error(e3);
  }
});
var attempt_default = attempt;

// node_modules/lodash-es/before.js
var FUNC_ERROR_TEXT4 = "Expected a function";
function before(n2, func) {
  var result2;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT4);
  }
  n2 = toInteger_default(n2);
  return function() {
    if (--n2 > 0) {
      result2 = func.apply(this, arguments);
    }
    if (n2 <= 1) {
      func = void 0;
    }
    return result2;
  };
}
var before_default = before;

// node_modules/lodash-es/bind.js
var WRAP_BIND_FLAG8 = 1;
var WRAP_PARTIAL_FLAG4 = 32;
var bind = baseRest_default(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG8;
  if (partials.length) {
    var holders = replaceHolders_default(partials, getHolder_default(bind));
    bitmask |= WRAP_PARTIAL_FLAG4;
  }
  return createWrap_default(func, bitmask, thisArg, partials, holders);
});
bind.placeholder = {};
var bind_default = bind;

// node_modules/lodash-es/bindAll.js
var bindAll = flatRest_default(function(object, methodNames) {
  arrayEach_default(methodNames, function(key) {
    key = toKey_default(key);
    baseAssignValue_default(object, key, bind_default(object[key], object));
  });
  return object;
});
var bindAll_default = bindAll;

// node_modules/lodash-es/bindKey.js
var WRAP_BIND_FLAG9 = 1;
var WRAP_BIND_KEY_FLAG6 = 2;
var WRAP_PARTIAL_FLAG5 = 32;
var bindKey2 = baseRest_default(function(object, key, partials) {
  var bitmask = WRAP_BIND_FLAG9 | WRAP_BIND_KEY_FLAG6;
  if (partials.length) {
    var holders = replaceHolders_default(partials, getHolder_default(bindKey2));
    bitmask |= WRAP_PARTIAL_FLAG5;
  }
  return createWrap_default(key, bitmask, object, partials, holders);
});
bindKey2.placeholder = {};
var bindKey_default = bindKey2;

// node_modules/lodash-es/_baseSlice.js
function baseSlice(array3, start2, end) {
  var index8 = -1, length = array3.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start2 > end ? 0 : end - start2 >>> 0;
  start2 >>>= 0;
  var result2 = Array(length);
  while (++index8 < length) {
    result2[index8] = array3[index8 + start2];
  }
  return result2;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/_castSlice.js
function castSlice(array3, start2, end) {
  var length = array3.length;
  end = end === void 0 ? length : end;
  return !start2 && end >= length ? array3 : baseSlice_default(array3, start2, end);
}
var castSlice_default = castSlice;

// node_modules/lodash-es/_hasUnicode.js
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsZWJ = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
var hasUnicode_default = hasUnicode;

// node_modules/lodash-es/_asciiToArray.js
function asciiToArray(string) {
  return string.split("");
}
var asciiToArray_default = asciiToArray;

// node_modules/lodash-es/_unicodeToArray.js
var rsAstralRange2 = "\\ud800-\\udfff";
var rsComboMarksRange2 = "\\u0300-\\u036f";
var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
var rsVarRange2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange2 + "]";
var rsCombo = "[" + rsComboRange2 + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange2 + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ2 = "\\u200d";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange2 + "]?";
var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
var unicodeToArray_default = unicodeToArray;

// node_modules/lodash-es/_stringToArray.js
function stringToArray(string) {
  return hasUnicode_default(string) ? unicodeToArray_default(string) : asciiToArray_default(string);
}
var stringToArray_default = stringToArray;

// node_modules/lodash-es/_createCaseFirst.js
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_default(string);
    var strSymbols = hasUnicode_default(string) ? stringToArray_default(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice_default(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var createCaseFirst_default = createCaseFirst;

// node_modules/lodash-es/upperFirst.js
var upperFirst = createCaseFirst_default("toUpperCase");
var upperFirst_default = upperFirst;

// node_modules/lodash-es/capitalize.js
function capitalize(string) {
  return upperFirst_default(toString_default(string).toLowerCase());
}
var capitalize_default = capitalize;

// node_modules/lodash-es/_arrayReduce.js
function arrayReduce(array3, iteratee2, accumulator, initAccum) {
  var index8 = -1, length = array3 == null ? 0 : array3.length;
  if (initAccum && length) {
    accumulator = array3[++index8];
  }
  while (++index8 < length) {
    accumulator = iteratee2(accumulator, array3[index8], index8, array3);
  }
  return accumulator;
}
var arrayReduce_default = arrayReduce;

// node_modules/lodash-es/_basePropertyOf.js
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var basePropertyOf_default = basePropertyOf;

// node_modules/lodash-es/_deburrLetter.js
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter = basePropertyOf_default(deburredLetters);
var deburrLetter_default = deburrLetter;

// node_modules/lodash-es/deburr.js
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange3 = "\\u0300-\\u036f";
var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
var rsCombo2 = "[" + rsComboRange3 + "]";
var reComboMark = RegExp(rsCombo2, "g");
function deburr(string) {
  string = toString_default(string);
  return string && string.replace(reLatin, deburrLetter_default).replace(reComboMark, "");
}
var deburr_default = deburr;

// node_modules/lodash-es/_asciiWords.js
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
var asciiWords_default = asciiWords;

// node_modules/lodash-es/_hasUnicodeWord.js
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
var hasUnicodeWord_default = hasUnicodeWord;

// node_modules/lodash-es/_unicodeWords.js
var rsAstralRange3 = "\\ud800-\\udfff";
var rsComboMarksRange4 = "\\u0300-\\u036f";
var reComboHalfMarksRange4 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange4 = "\\u20d0-\\u20ff";
var rsComboRange4 = rsComboMarksRange4 + reComboHalfMarksRange4 + rsComboSymbolsRange4;
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsVarRange3 = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['’]";
var rsBreak = "[" + rsBreakRange + "]";
var rsCombo3 = "[" + rsComboRange4 + "]";
var rsDigits = "\\d+";
var rsDingbat = "[" + rsDingbatRange + "]";
var rsLower = "[" + rsLowerRange + "]";
var rsMisc = "[^" + rsAstralRange3 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier2 = "(?:" + rsCombo3 + "|" + rsFitz2 + ")";
var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = "[" + rsUpperRange + "]";
var rsZWJ3 = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
var reOptMod2 = rsModifier2 + "?";
var rsOptVar2 = "[" + rsVarRange3 + "]?";
var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
var rsEmoji = "(?:" + [rsDingbat, rsRegional2, rsSurrPair2].join("|") + ")" + rsSeq2;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
var unicodeWords_default = unicodeWords;

// node_modules/lodash-es/words.js
function words(string, pattern, guard) {
  string = toString_default(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord_default(string) ? unicodeWords_default(string) : asciiWords_default(string);
  }
  return string.match(pattern) || [];
}
var words_default = words;

// node_modules/lodash-es/_createCompounder.js
var rsApos2 = "['’]";
var reApos = RegExp(rsApos2, "g");
function createCompounder(callback) {
  return function(string) {
    return arrayReduce_default(words_default(deburr_default(string).replace(reApos, "")), callback, "");
  };
}
var createCompounder_default = createCompounder;

// node_modules/lodash-es/camelCase.js
var camelCase = createCompounder_default(function(result2, word, index8) {
  word = word.toLowerCase();
  return result2 + (index8 ? capitalize_default(word) : word);
});
var camelCase_default = camelCase;

// node_modules/lodash-es/castArray.js
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray_default(value) ? value : [value];
}
var castArray_default = castArray;

// node_modules/lodash-es/_createRound.js
var nativeIsFinite = root_default.isFinite;
var nativeMin3 = Math.min;
function createRound(methodName) {
  var func = Math[methodName];
  return function(number3, precision) {
    number3 = toNumber_default(number3);
    precision = precision == null ? 0 : nativeMin3(toInteger_default(precision), 292);
    if (precision && nativeIsFinite(number3)) {
      var pair = (toString_default(number3) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
      pair = (toString_default(value) + "e").split("e");
      return +(pair[0] + "e" + (+pair[1] - precision));
    }
    return func(number3);
  };
}
var createRound_default = createRound;

// node_modules/lodash-es/ceil.js
var ceil = createRound_default("ceil");
var ceil_default = ceil;

// node_modules/lodash-es/chain.js
function chain(value) {
  var result2 = wrapperLodash_default(value);
  result2.__chain__ = true;
  return result2;
}
var chain_default = chain;

// node_modules/lodash-es/chunk.js
var nativeCeil = Math.ceil;
var nativeMax5 = Math.max;
function chunk(array3, size2, guard) {
  if (guard ? isIterateeCall_default(array3, size2, guard) : size2 === void 0) {
    size2 = 1;
  } else {
    size2 = nativeMax5(toInteger_default(size2), 0);
  }
  var length = array3 == null ? 0 : array3.length;
  if (!length || size2 < 1) {
    return [];
  }
  var index8 = 0, resIndex = 0, result2 = Array(nativeCeil(length / size2));
  while (index8 < length) {
    result2[resIndex++] = baseSlice_default(array3, index8, index8 += size2);
  }
  return result2;
}
var chunk_default = chunk;

// node_modules/lodash-es/_baseClamp.js
function baseClamp(number3, lower2, upper) {
  if (number3 === number3) {
    if (upper !== void 0) {
      number3 = number3 <= upper ? number3 : upper;
    }
    if (lower2 !== void 0) {
      number3 = number3 >= lower2 ? number3 : lower2;
    }
  }
  return number3;
}
var baseClamp_default = baseClamp;

// node_modules/lodash-es/clamp.js
function clamp(number3, lower2, upper) {
  if (upper === void 0) {
    upper = lower2;
    lower2 = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber_default(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower2 !== void 0) {
    lower2 = toNumber_default(lower2);
    lower2 = lower2 === lower2 ? lower2 : 0;
  }
  return baseClamp_default(toNumber_default(number3), lower2, upper);
}
var clamp_default = clamp;

// node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result2 = data["delete"](key);
  this.size = data.size;
  return result2;
}
var stackDelete_default = stackDelete;

// node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs2 = data.__data__;
    if (!Map_default || pairs2.length < LARGE_ARRAY_SIZE - 1) {
      pairs2.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs2);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && copyObject_default(source, keys_default(source), object);
}
var baseAssign_default = baseAssign;

// node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && copyObject_default(source, keysIn_default(source), object);
}
var baseAssignIn_default = baseAssignIn;

// node_modules/lodash-es/_cloneBuffer.js
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer2 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result2);
  return result2;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array3, predicate) {
  var index8 = -1, length = array3 == null ? 0 : array3.length, resIndex = 0, result2 = [];
  while (++index8 < length) {
    var value = array3[index8];
    if (predicate(value, index8, array3)) {
      result2[resIndex++] = value;
    }
  }
  return result2;
}
var arrayFilter_default = arrayFilter;

// node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/lodash-es/_getSymbols.js
var objectProto16 = Object.prototype;
var propertyIsEnumerable2 = objectProto16.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return copyObject_default(source, getSymbols_default(source), object);
}
var copySymbols_default = copySymbols;

// node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
  var result2 = [];
  while (object) {
    arrayPush_default(result2, getSymbols_default(object));
    object = getPrototype_default(object);
  }
  return result2;
};
var getSymbolsIn_default = getSymbolsIn;

// node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return copyObject_default(source, getSymbolsIn_default(source), object);
}
var copySymbolsIn_default = copySymbolsIn;

// node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result2 = keysFunc(object);
  return isArray_default(object) ? result2 : arrayPush_default(result2, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default = getAllKeysIn;

// node_modules/lodash-es/_DataView.js
var DataView2 = getNative_default(root_default, "DataView");
var DataView_default = DataView2;

// node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag3 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result2 = baseGetTag_default(value), Ctor = result2 == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result2;
  };
}
var getTag_default = getTag;

// node_modules/lodash-es/_initCloneArray.js
var objectProto17 = Object.prototype;
var hasOwnProperty14 = objectProto17.hasOwnProperty;
function initCloneArray(array3) {
  var length = array3.length, result2 = new array3.constructor(length);
  if (length && typeof array3[0] == "string" && hasOwnProperty14.call(array3, "index")) {
    result2.index = array3.index;
    result2.input = array3.input;
  }
  return result2;
}
var initCloneArray_default = initCloneArray;

// node_modules/lodash-es/_Uint8Array.js
var Uint8Array = root_default.Uint8Array;
var Uint8Array_default = Uint8Array;

// node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result2).set(new Uint8Array_default(arrayBuffer));
  return result2;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default = cloneDataView;

// node_modules/lodash-es/_cloneRegExp.js
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result2.lastIndex = regexp.lastIndex;
  return result2;
}
var cloneRegExp_default = cloneRegExp;

// node_modules/lodash-es/_cloneSymbol.js
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var cloneSymbol_default = cloneSymbol;

// node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/lodash-es/_initCloneByTag.js
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var float32Tag2 = "[object Float32Array]";
var float64Tag2 = "[object Float64Array]";
var int8Tag2 = "[object Int8Array]";
var int16Tag2 = "[object Int16Array]";
var int32Tag2 = "[object Int32Array]";
var uint8Tag2 = "[object Uint8Array]";
var uint8ClampedTag2 = "[object Uint8ClampedArray]";
var uint16Tag2 = "[object Uint16Array]";
var uint32Tag2 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag2:
      return cloneArrayBuffer_default(object);
    case boolTag2:
    case dateTag2:
      return new Ctor(+object);
    case dataViewTag3:
      return cloneDataView_default(object, isDeep);
    case float32Tag2:
    case float64Tag2:
    case int8Tag2:
    case int16Tag2:
    case int32Tag2:
    case uint8Tag2:
    case uint8ClampedTag2:
    case uint16Tag2:
    case uint32Tag2:
      return cloneTypedArray_default(object, isDeep);
    case mapTag3:
      return new Ctor();
    case numberTag2:
    case stringTag2:
      return new Ctor(object);
    case regexpTag2:
      return cloneRegExp_default(object);
    case setTag3:
      return new Ctor();
    case symbolTag2:
      return cloneSymbol_default(object);
  }
}
var initCloneByTag_default = initCloneByTag;

// node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/lodash-es/_baseIsMap.js
var mapTag4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag4;
}
var baseIsMap_default = baseIsMap;

// node_modules/lodash-es/isMap.js
var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
var isMap_default = isMap;

// node_modules/lodash-es/_baseIsSet.js
var setTag4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag4;
}
var baseIsSet_default = baseIsSet;

// node_modules/lodash-es/isSet.js
var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
var isSet_default = isSet;

// node_modules/lodash-es/_baseClone.js
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var boolTag3 = "[object Boolean]";
var dateTag3 = "[object Date]";
var errorTag3 = "[object Error]";
var funcTag3 = "[object Function]";
var genTag2 = "[object GeneratorFunction]";
var mapTag5 = "[object Map]";
var numberTag3 = "[object Number]";
var objectTag4 = "[object Object]";
var regexpTag3 = "[object RegExp]";
var setTag5 = "[object Set]";
var stringTag3 = "[object String]";
var symbolTag3 = "[object Symbol]";
var weakMapTag3 = "[object WeakMap]";
var arrayBufferTag3 = "[object ArrayBuffer]";
var dataViewTag4 = "[object DataView]";
var float32Tag3 = "[object Float32Array]";
var float64Tag3 = "[object Float64Array]";
var int8Tag3 = "[object Int8Array]";
var int16Tag3 = "[object Int16Array]";
var int32Tag3 = "[object Int32Array]";
var uint8Tag3 = "[object Uint8Array]";
var uint8ClampedTag3 = "[object Uint8ClampedArray]";
var uint16Tag3 = "[object Uint16Array]";
var uint32Tag3 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
cloneableTags[errorTag3] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result2 = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result2 !== void 0) {
    return result2;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result2 = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result2);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
      result2 = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result2, value)) : copySymbols_default(value, baseAssign_default(result2, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result2 = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result2);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result2;
}
var baseClone_default = baseClone;

// node_modules/lodash-es/clone.js
var CLONE_SYMBOLS_FLAG2 = 4;
function clone(value) {
  return baseClone_default(value, CLONE_SYMBOLS_FLAG2);
}
var clone_default2 = clone;

// node_modules/lodash-es/cloneDeep.js
var CLONE_DEEP_FLAG2 = 1;
var CLONE_SYMBOLS_FLAG3 = 4;
function cloneDeep(value) {
  return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG3);
}
var cloneDeep_default = cloneDeep;

// node_modules/lodash-es/cloneDeepWith.js
var CLONE_DEEP_FLAG3 = 1;
var CLONE_SYMBOLS_FLAG4 = 4;
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return baseClone_default(value, CLONE_DEEP_FLAG3 | CLONE_SYMBOLS_FLAG4, customizer);
}
var cloneDeepWith_default = cloneDeepWith;

// node_modules/lodash-es/cloneWith.js
var CLONE_SYMBOLS_FLAG5 = 4;
function cloneWith(value, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return baseClone_default(value, CLONE_SYMBOLS_FLAG5, customizer);
}
var cloneWith_default = cloneWith;

// node_modules/lodash-es/commit.js
function wrapperCommit() {
  return new LodashWrapper_default(this.value(), this.__chain__);
}
var commit_default = wrapperCommit;

// node_modules/lodash-es/compact.js
function compact(array3) {
  var index8 = -1, length = array3 == null ? 0 : array3.length, resIndex = 0, result2 = [];
  while (++index8 < length) {
    var value = array3[index8];
    if (value) {
      result2[resIndex++] = value;
    }
  }
  return result2;
}
var compact_default = compact;

// node_modules/lodash-es/concat.js
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1), array3 = arguments[0], index8 = length;
  while (index8--) {
    args[index8 - 1] = arguments[index8];
  }
  return arrayPush_default(isArray_default(array3) ? copyArray_default(array3) : [array3], baseFlatten_default(args, 1));
}
var concat_default = concat;

// node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// node_modules/lodash-es/_SetCache.js
function SetCache(values2) {
  var index8 = -1, length = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache_default();
  while (++index8 < length) {
    this.add(values2[index8]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/lodash-es/_arraySome.js
function arraySome(array3, predicate) {
  var index8 = -1, length = array3 == null ? 0 : array3.length;
  while (++index8 < length) {
    if (predicate(array3[index8], index8, array3)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array3, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array3.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array3);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array3;
  }
  var index8 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array3, other);
  stack.set(other, array3);
  while (++index8 < arrLength) {
    var arrValue = array3[index8], othValue = other[index8];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index8, other, array3, stack) : customizer(arrValue, othValue, index8, array3, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result2 = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result2 = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result2 = false;
      break;
    }
  }
  stack["delete"](array3);
  stack["delete"](other);
  return result2;
}
var equalArrays_default = equalArrays;

// node_modules/lodash-es/_mapToArray.js
function mapToArray(map5) {
  var index8 = -1, result2 = Array(map5.size);
  map5.forEach(function(value, key) {
    result2[++index8] = [key, value];
  });
  return result2;
}
var mapToArray_default = mapToArray;

// node_modules/lodash-es/_setToArray.js
function setToArray(set3) {
  var index8 = -1, result2 = Array(set3.size);
  set3.forEach(function(value) {
    result2[++index8] = value;
  });
  return result2;
}
var setToArray_default = setToArray;

// node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag4 = "[object Boolean]";
var dateTag4 = "[object Date]";
var errorTag4 = "[object Error]";
var mapTag6 = "[object Map]";
var numberTag4 = "[object Number]";
var regexpTag4 = "[object RegExp]";
var setTag6 = "[object Set]";
var stringTag4 = "[object String]";
var symbolTag4 = "[object Symbol]";
var arrayBufferTag4 = "[object ArrayBuffer]";
var dataViewTag5 = "[object DataView]";
var symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag5:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag4:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag4:
    case dateTag4:
    case numberTag4:
      return eq_default(+object, +other);
    case errorTag4:
      return object.name == other.name && object.message == other.message;
    case regexpTag4:
    case stringTag4:
      return object == other + "";
    case mapTag6:
      var convert = mapToArray_default;
    case setTag6:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result2 = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result2;
    case symbolTag4:
      if (symbolValueOf2) {
        return symbolValueOf2.call(object) == symbolValueOf2.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto18 = Object.prototype;
var hasOwnProperty15 = objectProto18.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index8 = objLength;
  while (index8--) {
    var key = objProps[index8];
    if (!(isPartial ? key in other : hasOwnProperty15.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result2 = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index8 < objLength) {
    key = objProps[index8];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result2 = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result2 && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result2 = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result2;
}
var equalObjects_default = equalObjects;

// node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag4 = "[object Arguments]";
var arrayTag3 = "[object Array]";
var objectTag5 = "[object Object]";
var objectProto19 = Object.prototype;
var hasOwnProperty16 = objectProto19.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object), othTag = othIsArr ? arrayTag3 : getTag_default(other);
  objTag = objTag == argsTag4 ? objectTag5 : objTag;
  othTag = othTag == argsTag4 ? objectTag5 : othTag;
  var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty16.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty16.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index8 = matchData.length, length = index8, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index8--) {
    var data = matchData[index8];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index8 < length) {
    data = matchData[index8];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result2 = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result2 === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result2)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result2 = keys_default(object), length = result2.length;
  while (length--) {
    var key = result2[length], value = object[key];
    result2[length] = [key, value, isStrictComparable_default(value)];
  }
  return result2;
}
var getMatchData_default = getMatchData;

// node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index8 = -1, length = path.length, result2 = false;
  while (++index8 < length) {
    var key = toKey_default(path[index8]);
    if (!(result2 = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result2 || ++index8 != length) {
    return result2;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default2 = property;

// node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default2(value);
}
var baseIteratee_default = baseIteratee;

// node_modules/lodash-es/cond.js
var FUNC_ERROR_TEXT5 = "Expected a function";
function cond(pairs2) {
  var length = pairs2 == null ? 0 : pairs2.length, toIteratee = baseIteratee_default;
  pairs2 = !length ? [] : arrayMap_default(pairs2, function(pair) {
    if (typeof pair[1] != "function") {
      throw new TypeError(FUNC_ERROR_TEXT5);
    }
    return [toIteratee(pair[0]), pair[1]];
  });
  return baseRest_default(function(args) {
    var index8 = -1;
    while (++index8 < length) {
      var pair = pairs2[index8];
      if (apply_default(pair[0], this, args)) {
        return apply_default(pair[1], this, args);
      }
    }
  });
}
var cond_default = cond;

// node_modules/lodash-es/_baseConformsTo.js
function baseConformsTo(object, source, props) {
  var length = props.length;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (length--) {
    var key = props[length], predicate = source[key], value = object[key];
    if (value === void 0 && !(key in object) || !predicate(value)) {
      return false;
    }
  }
  return true;
}
var baseConformsTo_default = baseConformsTo;

// node_modules/lodash-es/_baseConforms.js
function baseConforms(source) {
  var props = keys_default(source);
  return function(object) {
    return baseConformsTo_default(object, source, props);
  };
}
var baseConforms_default = baseConforms;

// node_modules/lodash-es/conforms.js
var CLONE_DEEP_FLAG4 = 1;
function conforms(source) {
  return baseConforms_default(baseClone_default(source, CLONE_DEEP_FLAG4));
}
var conforms_default = conforms;

// node_modules/lodash-es/conformsTo.js
function conformsTo(object, source) {
  return source == null || baseConformsTo_default(object, source, keys_default(source));
}
var conformsTo_default = conformsTo;

// node_modules/lodash-es/_arrayAggregator.js
function arrayAggregator(array3, setter, iteratee2, accumulator) {
  var index8 = -1, length = array3 == null ? 0 : array3.length;
  while (++index8 < length) {
    var value = array3[index8];
    setter(accumulator, value, iteratee2(value), array3);
  }
  return accumulator;
}
var arrayAggregator_default = arrayAggregator;

// node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee2, keysFunc) {
    var index8 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index8];
      if (iteratee2(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee2) {
  return object && baseFor_default(object, iteratee2, keys_default);
}
var baseForOwn_default = baseForOwn;

// node_modules/lodash-es/_createBaseEach.js
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee2) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_default(collection)) {
      return eachFunc(collection, iteratee2);
    }
    var length = collection.length, index8 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index8-- : ++index8 < length) {
      if (iteratee2(iterable[index8], index8, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var createBaseEach_default = createBaseEach;

// node_modules/lodash-es/_baseEach.js
var baseEach = createBaseEach_default(baseForOwn_default);
var baseEach_default = baseEach;

// node_modules/lodash-es/_baseAggregator.js
function baseAggregator(collection, setter, iteratee2, accumulator) {
  baseEach_default(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee2(value), collection2);
  });
  return accumulator;
}
var baseAggregator_default = baseAggregator;

// node_modules/lodash-es/_createAggregator.js
function createAggregator(setter, initializer) {
  return function(collection, iteratee2) {
    var func = isArray_default(collection) ? arrayAggregator_default : baseAggregator_default, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee_default(iteratee2, 2), accumulator);
  };
}
var createAggregator_default = createAggregator;

// node_modules/lodash-es/countBy.js
var objectProto20 = Object.prototype;
var hasOwnProperty17 = objectProto20.hasOwnProperty;
var countBy = createAggregator_default(function(result2, value, key) {
  if (hasOwnProperty17.call(result2, key)) {
    ++result2[key];
  } else {
    baseAssignValue_default(result2, key, 1);
  }
});
var countBy_default = countBy;

// node_modules/lodash-es/create.js
function create2(prototype, properties) {
  var result2 = baseCreate_default(prototype);
  return properties == null ? result2 : baseAssign_default(result2, properties);
}
var create_default2 = create2;

// node_modules/lodash-es/curry.js
var WRAP_CURRY_FLAG6 = 8;
function curry(func, arity, guard) {
  arity = guard ? void 0 : arity;
  var result2 = createWrap_default(func, WRAP_CURRY_FLAG6, void 0, void 0, void 0, void 0, void 0, arity);
  result2.placeholder = curry.placeholder;
  return result2;
}
curry.placeholder = {};
var curry_default = curry;

// node_modules/lodash-es/curryRight.js
var WRAP_CURRY_RIGHT_FLAG4 = 16;
function curryRight(func, arity, guard) {
  arity = guard ? void 0 : arity;
  var result2 = createWrap_default(func, WRAP_CURRY_RIGHT_FLAG4, void 0, void 0, void 0, void 0, void 0, arity);
  result2.placeholder = curryRight.placeholder;
  return result2;
}
curryRight.placeholder = {};
var curryRight_default = curryRight;

// node_modules/lodash-es/now.js
var now2 = function() {
  return root_default.Date.now();
};
var now_default = now2;

// node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT6 = "Expected a function";
var nativeMax6 = Math.max;
var nativeMin4 = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT6);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax6(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time2) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time2;
    result2 = func.apply(thisArg, args);
    return result2;
  }
  function leadingEdge(time2) {
    lastInvokeTime = time2;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time2) : result2;
  }
  function remainingWait(time2) {
    var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin4(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time2) {
    var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time2 = now_default();
    if (shouldInvoke(time2)) {
      return trailingEdge(time2);
    }
    timerId = setTimeout(timerExpired, remainingWait(time2));
  }
  function trailingEdge(time2) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time2);
    }
    lastArgs = lastThis = void 0;
    return result2;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result2 : trailingEdge(now_default());
  }
  function debounced() {
    var time2 = now_default(), isInvoking = shouldInvoke(time2);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time2;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result2;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_default = debounce;

// node_modules/lodash-es/defaultTo.js
function defaultTo(value, defaultValue) {
  return value == null || value !== value ? defaultValue : value;
}
var defaultTo_default = defaultTo;

// node_modules/lodash-es/defaults.js
var objectProto21 = Object.prototype;
var hasOwnProperty18 = objectProto21.hasOwnProperty;
var defaults = baseRest_default(function(object, sources) {
  object = Object(object);
  var index8 = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index8 < length) {
    var source = sources[index8];
    var props = keysIn_default(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq_default(value, objectProto21[key]) && !hasOwnProperty18.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_default = defaults;

// node_modules/lodash-es/_assignMergeValue.js
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignMergeValue_default = assignMergeValue;

// node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/lodash-es/_safeGet.js
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var safeGet_default = safeGet;

// node_modules/lodash-es/toPlainObject.js
function toPlainObject(value) {
  return copyObject_default(value, keysIn_default(value));
}
var toPlainObject_default = toPlainObject;

// node_modules/lodash-es/_baseMergeDeep.js
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue_default(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer_default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_default(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject_default(objValue)) {
        newValue = copyArray_default(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer_default(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray_default(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
      newValue = objValue;
      if (isArguments_default(objValue)) {
        newValue = toPlainObject_default(objValue);
      } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
        newValue = initCloneObject_default(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue_default(object, key, newValue);
}
var baseMergeDeep_default = baseMergeDeep;

// node_modules/lodash-es/_baseMerge.js
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor_default(source, function(srcValue, key) {
    stack || (stack = new Stack_default());
    if (isObject_default(srcValue)) {
      baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue_default(object, key, newValue);
    }
  }, keysIn_default);
}
var baseMerge_default = baseMerge;

// node_modules/lodash-es/_customDefaultsMerge.js
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject_default(objValue) && isObject_default(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge_default(objValue, srcValue, void 0, customDefaultsMerge, stack);
    stack["delete"](srcValue);
  }
  return objValue;
}
var customDefaultsMerge_default = customDefaultsMerge;

// node_modules/lodash-es/mergeWith.js
var mergeWith = createAssigner_default(function(object, source, srcIndex, customizer) {
  baseMerge_default(object, source, srcIndex, customizer);
});
var mergeWith_default = mergeWith;

// node_modules/lodash-es/defaultsDeep.js
var defaultsDeep = baseRest_default(function(args) {
  args.push(void 0, customDefaultsMerge_default);
  return apply_default(mergeWith_default, void 0, args);
});
var defaultsDeep_default = defaultsDeep;

// node_modules/lodash-es/_baseDelay.js
var FUNC_ERROR_TEXT7 = "Expected a function";
function baseDelay(func, wait, args) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT7);
  }
  return setTimeout(function() {
    func.apply(void 0, args);
  }, wait);
}
var baseDelay_default = baseDelay;

// node_modules/lodash-es/defer.js
var defer = baseRest_default(function(func, args) {
  return baseDelay_default(func, 1, args);
});
var defer_default = defer;

// node_modules/lodash-es/delay.js
var delay = baseRest_default(function(func, wait, args) {
  return baseDelay_default(func, toNumber_default(wait) || 0, args);
});
var delay_default2 = delay;

// node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array3, value, comparator) {
  var index8 = -1, length = array3 == null ? 0 : array3.length;
  while (++index8 < length) {
    if (comparator(value, array3[index8])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// node_modules/lodash-es/_baseDifference.js
var LARGE_ARRAY_SIZE2 = 200;
function baseDifference(array3, values2, iteratee2, comparator) {
  var index8 = -1, includes2 = arrayIncludes_default, isCommon = true, length = array3.length, result2 = [], valuesLength = values2.length;
  if (!length) {
    return result2;
  }
  if (iteratee2) {
    values2 = arrayMap_default(values2, baseUnary_default(iteratee2));
  }
  if (comparator) {
    includes2 = arrayIncludesWith_default;
    isCommon = false;
  } else if (values2.length >= LARGE_ARRAY_SIZE2) {
    includes2 = cacheHas_default;
    isCommon = false;
    values2 = new SetCache_default(values2);
  }
  outer:
    while (++index8 < length) {
      var value = array3[index8], computed = iteratee2 == null ? value : iteratee2(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values2[valuesIndex] === computed) {
            continue outer;
          }
        }
        result2.push(value);
      } else if (!includes2(values2, computed, comparator)) {
        result2.push(value);
      }
    }
  return result2;
}
var baseDifference_default = baseDifference;

// node_modules/lodash-es/difference.js
var difference2 = baseRest_default(function(array3, values2) {
  return isArrayLikeObject_default(array3) ? baseDifference_default(array3, baseFlatten_default(values2, 1, isArrayLikeObject_default, true)) : [];
});
var difference_default = difference2;

// node_modules/lodash-es/last.js
function last(array3) {
  var length = array3 == null ? 0 : array3.length;
  return length ? array3[length - 1] : void 0;
}
var last_default = last;

// node_modules/lodash-es/differenceBy.js
var differenceBy = baseRest_default(function(array3, values2) {
  var iteratee2 = last_default(values2);
  if (isArrayLikeObject_default(iteratee2)) {
    iteratee2 = void 0;
  }
  return isArrayLikeObject_default(array3) ? baseDifference_default(array3, baseFlatten_default(values2, 1, isArrayLikeObject_default, true), baseIteratee_default(iteratee2, 2)) : [];
});
var differenceBy_default = differenceBy;

// node_modules/lodash-es/differenceWith.js
var differenceWith = baseRest_default(function(array3, values2) {
  var comparator = last_default(values2);
  if (isArrayLikeObject_default(comparator)) {
    comparator = void 0;
  }
  return isArrayLikeObject_default(array3) ? baseDifference_default(array3, baseFlatten_default(values2, 1, isArrayLikeObject_default, true), void 0, comparator) : [];
});
var differenceWith_default = differenceWith;

// node_modules/lodash-es/divide.js
var divide = createMathOperation_default(function(dividend, divisor) {
  return dividend / divisor;
}, 1);
var divide_default = divide;

// node_modules/lodash-es/drop.js
function drop(array3, n2, guard) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return [];
  }
  n2 = guard || n2 === void 0 ? 1 : toInteger_default(n2);
  return baseSlice_default(array3, n2 < 0 ? 0 : n2, length);
}
var drop_default = drop;

// node_modules/lodash-es/dropRight.js
function dropRight(array3, n2, guard) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return [];
  }
  n2 = guard || n2 === void 0 ? 1 : toInteger_default(n2);
  n2 = length - n2;
  return baseSlice_default(array3, 0, n2 < 0 ? 0 : n2);
}
var dropRight_default = dropRight;

// node_modules/lodash-es/_baseWhile.js
function baseWhile(array3, predicate, isDrop, fromRight) {
  var length = array3.length, index8 = fromRight ? length : -1;
  while ((fromRight ? index8-- : ++index8 < length) && predicate(array3[index8], index8, array3)) {
  }
  return isDrop ? baseSlice_default(array3, fromRight ? 0 : index8, fromRight ? index8 + 1 : length) : baseSlice_default(array3, fromRight ? index8 + 1 : 0, fromRight ? length : index8);
}
var baseWhile_default = baseWhile;

// node_modules/lodash-es/dropRightWhile.js
function dropRightWhile(array3, predicate) {
  return array3 && array3.length ? baseWhile_default(array3, baseIteratee_default(predicate, 3), true, true) : [];
}
var dropRightWhile_default = dropRightWhile;

// node_modules/lodash-es/dropWhile.js
function dropWhile(array3, predicate) {
  return array3 && array3.length ? baseWhile_default(array3, baseIteratee_default(predicate, 3), true) : [];
}
var dropWhile_default = dropWhile;

// node_modules/lodash-es/_castFunction.js
function castFunction(value) {
  return typeof value == "function" ? value : identity_default;
}
var castFunction_default = castFunction;

// node_modules/lodash-es/forEach.js
function forEach(collection, iteratee2) {
  var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
  return func(collection, castFunction_default(iteratee2));
}
var forEach_default = forEach;

// node_modules/lodash-es/_arrayEachRight.js
function arrayEachRight(array3, iteratee2) {
  var length = array3 == null ? 0 : array3.length;
  while (length--) {
    if (iteratee2(array3[length], length, array3) === false) {
      break;
    }
  }
  return array3;
}
var arrayEachRight_default = arrayEachRight;

// node_modules/lodash-es/_baseForRight.js
var baseForRight = createBaseFor_default(true);
var baseForRight_default = baseForRight;

// node_modules/lodash-es/_baseForOwnRight.js
function baseForOwnRight(object, iteratee2) {
  return object && baseForRight_default(object, iteratee2, keys_default);
}
var baseForOwnRight_default = baseForOwnRight;

// node_modules/lodash-es/_baseEachRight.js
var baseEachRight = createBaseEach_default(baseForOwnRight_default, true);
var baseEachRight_default = baseEachRight;

// node_modules/lodash-es/forEachRight.js
function forEachRight(collection, iteratee2) {
  var func = isArray_default(collection) ? arrayEachRight_default : baseEachRight_default;
  return func(collection, castFunction_default(iteratee2));
}
var forEachRight_default = forEachRight;

// node_modules/lodash-es/endsWith.js
function endsWith(string, target, position) {
  string = toString_default(string);
  target = baseToString_default(target);
  var length = string.length;
  position = position === void 0 ? length : baseClamp_default(toInteger_default(position), 0, length);
  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}
var endsWith_default = endsWith;

// node_modules/lodash-es/_baseToPairs.js
function baseToPairs(object, props) {
  return arrayMap_default(props, function(key) {
    return [key, object[key]];
  });
}
var baseToPairs_default = baseToPairs;

// node_modules/lodash-es/_setToPairs.js
function setToPairs(set3) {
  var index8 = -1, result2 = Array(set3.size);
  set3.forEach(function(value) {
    result2[++index8] = [value, value];
  });
  return result2;
}
var setToPairs_default = setToPairs;

// node_modules/lodash-es/_createToPairs.js
var mapTag7 = "[object Map]";
var setTag7 = "[object Set]";
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag_default(object);
    if (tag == mapTag7) {
      return mapToArray_default(object);
    }
    if (tag == setTag7) {
      return setToPairs_default(object);
    }
    return baseToPairs_default(object, keysFunc(object));
  };
}
var createToPairs_default = createToPairs;

// node_modules/lodash-es/toPairs.js
var toPairs = createToPairs_default(keys_default);
var toPairs_default = toPairs;

// node_modules/lodash-es/toPairsIn.js
var toPairsIn = createToPairs_default(keysIn_default);
var toPairsIn_default = toPairsIn;

// node_modules/lodash-es/_escapeHtmlChar.js
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtmlChar = basePropertyOf_default(htmlEscapes);
var escapeHtmlChar_default = escapeHtmlChar;

// node_modules/lodash-es/escape.js
var reUnescapedHtml = /[&<>"']/g;
var reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape(string) {
  string = toString_default(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar_default) : string;
}
var escape_default = escape;

// node_modules/lodash-es/escapeRegExp.js
var reRegExpChar2 = /[\\^$.*+?()[\]{}|]/g;
var reHasRegExpChar = RegExp(reRegExpChar2.source);
function escapeRegExp(string) {
  string = toString_default(string);
  return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar2, "\\$&") : string;
}
var escapeRegExp_default = escapeRegExp;

// node_modules/lodash-es/_arrayEvery.js
function arrayEvery(array3, predicate) {
  var index8 = -1, length = array3 == null ? 0 : array3.length;
  while (++index8 < length) {
    if (!predicate(array3[index8], index8, array3)) {
      return false;
    }
  }
  return true;
}
var arrayEvery_default = arrayEvery;

// node_modules/lodash-es/_baseEvery.js
function baseEvery(collection, predicate) {
  var result2 = true;
  baseEach_default(collection, function(value, index8, collection2) {
    result2 = !!predicate(value, index8, collection2);
    return result2;
  });
  return result2;
}
var baseEvery_default = baseEvery;

// node_modules/lodash-es/every.js
function every2(collection, predicate, guard) {
  var func = isArray_default(collection) ? arrayEvery_default : baseEvery_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var every_default = every2;

// node_modules/lodash-es/toLength.js
var MAX_ARRAY_LENGTH2 = 4294967295;
function toLength(value) {
  return value ? baseClamp_default(toInteger_default(value), 0, MAX_ARRAY_LENGTH2) : 0;
}
var toLength_default = toLength;

// node_modules/lodash-es/_baseFill.js
function baseFill(array3, value, start2, end) {
  var length = array3.length;
  start2 = toInteger_default(start2);
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end = end === void 0 || end > length ? length : toInteger_default(end);
  if (end < 0) {
    end += length;
  }
  end = start2 > end ? 0 : toLength_default(end);
  while (start2 < end) {
    array3[start2++] = value;
  }
  return array3;
}
var baseFill_default = baseFill;

// node_modules/lodash-es/fill.js
function fill(array3, value, start2, end) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return [];
  }
  if (start2 && typeof start2 != "number" && isIterateeCall_default(array3, value, start2)) {
    start2 = 0;
    end = length;
  }
  return baseFill_default(array3, value, start2, end);
}
var fill_default = fill;

// node_modules/lodash-es/_baseFilter.js
function baseFilter(collection, predicate) {
  var result2 = [];
  baseEach_default(collection, function(value, index8, collection2) {
    if (predicate(value, index8, collection2)) {
      result2.push(value);
    }
  });
  return result2;
}
var baseFilter_default = baseFilter;

// node_modules/lodash-es/filter.js
function filter3(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, baseIteratee_default(predicate, 3));
}
var filter_default3 = filter3;

// node_modules/lodash-es/_createFind.js
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_default(collection)) {
      var iteratee2 = baseIteratee_default(predicate, 3);
      collection = keys_default(collection);
      predicate = function(key) {
        return iteratee2(iterable[key], key, iterable);
      };
    }
    var index8 = findIndexFunc(collection, predicate, fromIndex);
    return index8 > -1 ? iterable[iteratee2 ? collection[index8] : index8] : void 0;
  };
}
var createFind_default = createFind;

// node_modules/lodash-es/findIndex.js
var nativeMax7 = Math.max;
function findIndex(array3, predicate, fromIndex) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return -1;
  }
  var index8 = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index8 < 0) {
    index8 = nativeMax7(length + index8, 0);
  }
  return baseFindIndex_default(array3, baseIteratee_default(predicate, 3), index8);
}
var findIndex_default = findIndex;

// node_modules/lodash-es/find.js
var find2 = createFind_default(findIndex_default);
var find_default = find2;

// node_modules/lodash-es/_baseFindKey.js
function baseFindKey(collection, predicate, eachFunc) {
  var result2;
  eachFunc(collection, function(value, key, collection2) {
    if (predicate(value, key, collection2)) {
      result2 = key;
      return false;
    }
  });
  return result2;
}
var baseFindKey_default = baseFindKey;

// node_modules/lodash-es/findKey.js
function findKey(object, predicate) {
  return baseFindKey_default(object, baseIteratee_default(predicate, 3), baseForOwn_default);
}
var findKey_default = findKey;

// node_modules/lodash-es/findLastIndex.js
var nativeMax8 = Math.max;
var nativeMin5 = Math.min;
function findLastIndex(array3, predicate, fromIndex) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return -1;
  }
  var index8 = length - 1;
  if (fromIndex !== void 0) {
    index8 = toInteger_default(fromIndex);
    index8 = fromIndex < 0 ? nativeMax8(length + index8, 0) : nativeMin5(index8, length - 1);
  }
  return baseFindIndex_default(array3, baseIteratee_default(predicate, 3), index8, true);
}
var findLastIndex_default = findLastIndex;

// node_modules/lodash-es/findLast.js
var findLast = createFind_default(findLastIndex_default);
var findLast_default = findLast;

// node_modules/lodash-es/findLastKey.js
function findLastKey(object, predicate) {
  return baseFindKey_default(object, baseIteratee_default(predicate, 3), baseForOwnRight_default);
}
var findLastKey_default = findLastKey;

// node_modules/lodash-es/head.js
function head(array3) {
  return array3 && array3.length ? array3[0] : void 0;
}
var head_default = head;

// node_modules/lodash-es/_baseMap.js
function baseMap(collection, iteratee2) {
  var index8 = -1, result2 = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value, key, collection2) {
    result2[++index8] = iteratee2(value, key, collection2);
  });
  return result2;
}
var baseMap_default = baseMap;

// node_modules/lodash-es/map.js
function map3(collection, iteratee2) {
  var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
  return func(collection, baseIteratee_default(iteratee2, 3));
}
var map_default = map3;

// node_modules/lodash-es/flatMap.js
function flatMap(collection, iteratee2) {
  return baseFlatten_default(map_default(collection, iteratee2), 1);
}
var flatMap_default = flatMap;

// node_modules/lodash-es/flatMapDeep.js
var INFINITY4 = 1 / 0;
function flatMapDeep(collection, iteratee2) {
  return baseFlatten_default(map_default(collection, iteratee2), INFINITY4);
}
var flatMapDeep_default = flatMapDeep;

// node_modules/lodash-es/flatMapDepth.js
function flatMapDepth(collection, iteratee2, depth) {
  depth = depth === void 0 ? 1 : toInteger_default(depth);
  return baseFlatten_default(map_default(collection, iteratee2), depth);
}
var flatMapDepth_default = flatMapDepth;

// node_modules/lodash-es/flattenDeep.js
var INFINITY5 = 1 / 0;
function flattenDeep(array3) {
  var length = array3 == null ? 0 : array3.length;
  return length ? baseFlatten_default(array3, INFINITY5) : [];
}
var flattenDeep_default = flattenDeep;

// node_modules/lodash-es/flattenDepth.js
function flattenDepth(array3, depth) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return [];
  }
  depth = depth === void 0 ? 1 : toInteger_default(depth);
  return baseFlatten_default(array3, depth);
}
var flattenDepth_default = flattenDepth;

// node_modules/lodash-es/flip.js
var WRAP_FLIP_FLAG3 = 512;
function flip(func) {
  return createWrap_default(func, WRAP_FLIP_FLAG3);
}
var flip_default = flip;

// node_modules/lodash-es/floor.js
var floor = createRound_default("floor");
var floor_default = floor;

// node_modules/lodash-es/_createFlow.js
var FUNC_ERROR_TEXT8 = "Expected a function";
var WRAP_CURRY_FLAG7 = 8;
var WRAP_PARTIAL_FLAG6 = 32;
var WRAP_ARY_FLAG5 = 128;
var WRAP_REARG_FLAG3 = 256;
function createFlow(fromRight) {
  return flatRest_default(function(funcs) {
    var length = funcs.length, index8 = length, prereq = LodashWrapper_default.prototype.thru;
    if (fromRight) {
      funcs.reverse();
    }
    while (index8--) {
      var func = funcs[index8];
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT8);
      }
      if (prereq && !wrapper && getFuncName_default(func) == "wrapper") {
        var wrapper = new LodashWrapper_default([], true);
      }
    }
    index8 = wrapper ? index8 : length;
    while (++index8 < length) {
      func = funcs[index8];
      var funcName = getFuncName_default(func), data = funcName == "wrapper" ? getData_default(func) : void 0;
      if (data && isLaziable_default(data[0]) && data[1] == (WRAP_ARY_FLAG5 | WRAP_CURRY_FLAG7 | WRAP_PARTIAL_FLAG6 | WRAP_REARG_FLAG3) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[getFuncName_default(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && isLaziable_default(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments, value = args[0];
      if (wrapper && args.length == 1 && isArray_default(value)) {
        return wrapper.plant(value).value();
      }
      var index9 = 0, result2 = length ? funcs[index9].apply(this, args) : value;
      while (++index9 < length) {
        result2 = funcs[index9].call(this, result2);
      }
      return result2;
    };
  });
}
var createFlow_default = createFlow;

// node_modules/lodash-es/flow.js
var flow = createFlow_default();
var flow_default = flow;

// node_modules/lodash-es/flowRight.js
var flowRight = createFlow_default(true);
var flowRight_default = flowRight;

// node_modules/lodash-es/forIn.js
function forIn(object, iteratee2) {
  return object == null ? object : baseFor_default(object, castFunction_default(iteratee2), keysIn_default);
}
var forIn_default = forIn;

// node_modules/lodash-es/forInRight.js
function forInRight(object, iteratee2) {
  return object == null ? object : baseForRight_default(object, castFunction_default(iteratee2), keysIn_default);
}
var forInRight_default = forInRight;

// node_modules/lodash-es/forOwn.js
function forOwn(object, iteratee2) {
  return object && baseForOwn_default(object, castFunction_default(iteratee2));
}
var forOwn_default = forOwn;

// node_modules/lodash-es/forOwnRight.js
function forOwnRight(object, iteratee2) {
  return object && baseForOwnRight_default(object, castFunction_default(iteratee2));
}
var forOwnRight_default = forOwnRight;

// node_modules/lodash-es/fromPairs.js
function fromPairs(pairs2) {
  var index8 = -1, length = pairs2 == null ? 0 : pairs2.length, result2 = {};
  while (++index8 < length) {
    var pair = pairs2[index8];
    result2[pair[0]] = pair[1];
  }
  return result2;
}
var fromPairs_default = fromPairs;

// node_modules/lodash-es/_baseFunctions.js
function baseFunctions(object, props) {
  return arrayFilter_default(props, function(key) {
    return isFunction_default(object[key]);
  });
}
var baseFunctions_default = baseFunctions;

// node_modules/lodash-es/functions.js
function functions(object) {
  return object == null ? [] : baseFunctions_default(object, keys_default(object));
}
var functions_default = functions;

// node_modules/lodash-es/functionsIn.js
function functionsIn(object) {
  return object == null ? [] : baseFunctions_default(object, keysIn_default(object));
}
var functionsIn_default = functionsIn;

// node_modules/lodash-es/groupBy.js
var objectProto22 = Object.prototype;
var hasOwnProperty19 = objectProto22.hasOwnProperty;
var groupBy = createAggregator_default(function(result2, value, key) {
  if (hasOwnProperty19.call(result2, key)) {
    result2[key].push(value);
  } else {
    baseAssignValue_default(result2, key, [value]);
  }
});
var groupBy_default = groupBy;

// node_modules/lodash-es/_baseGt.js
function baseGt(value, other) {
  return value > other;
}
var baseGt_default = baseGt;

// node_modules/lodash-es/_createRelationalOperation.js
function createRelationalOperation(operator) {
  return function(value, other) {
    if (!(typeof value == "string" && typeof other == "string")) {
      value = toNumber_default(value);
      other = toNumber_default(other);
    }
    return operator(value, other);
  };
}
var createRelationalOperation_default = createRelationalOperation;

// node_modules/lodash-es/gt.js
var gt = createRelationalOperation_default(baseGt_default);
var gt_default = gt;

// node_modules/lodash-es/gte.js
var gte = createRelationalOperation_default(function(value, other) {
  return value >= other;
});
var gte_default = gte;

// node_modules/lodash-es/_baseHas.js
var objectProto23 = Object.prototype;
var hasOwnProperty20 = objectProto23.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty20.call(object, key);
}
var baseHas_default = baseHas;

// node_modules/lodash-es/has.js
function has(object, path) {
  return object != null && hasPath_default(object, path, baseHas_default);
}
var has_default = has;

// node_modules/lodash-es/_baseInRange.js
var nativeMax9 = Math.max;
var nativeMin6 = Math.min;
function baseInRange(number3, start2, end) {
  return number3 >= nativeMin6(start2, end) && number3 < nativeMax9(start2, end);
}
var baseInRange_default = baseInRange;

// node_modules/lodash-es/inRange.js
function inRange(number3, start2, end) {
  start2 = toFinite_default(start2);
  if (end === void 0) {
    end = start2;
    start2 = 0;
  } else {
    end = toFinite_default(end);
  }
  number3 = toNumber_default(number3);
  return baseInRange_default(number3, start2, end);
}
var inRange_default = inRange;

// node_modules/lodash-es/isString.js
var stringTag5 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag5;
}
var isString_default = isString;

// node_modules/lodash-es/_baseValues.js
function baseValues(object, props) {
  return arrayMap_default(props, function(key) {
    return object[key];
  });
}
var baseValues_default = baseValues;

// node_modules/lodash-es/values.js
function values(object) {
  return object == null ? [] : baseValues_default(object, keys_default(object));
}
var values_default = values;

// node_modules/lodash-es/includes.js
var nativeMax10 = Math.max;
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_default(collection) ? collection : values_default(collection);
  fromIndex = fromIndex && !guard ? toInteger_default(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax10(length + fromIndex, 0);
  }
  return isString_default(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf_default(collection, value, fromIndex) > -1;
}
var includes_default = includes;

// node_modules/lodash-es/indexOf.js
var nativeMax11 = Math.max;
function indexOf(array3, value, fromIndex) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return -1;
  }
  var index8 = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index8 < 0) {
    index8 = nativeMax11(length + index8, 0);
  }
  return baseIndexOf_default(array3, value, index8);
}
var indexOf_default = indexOf;

// node_modules/lodash-es/initial.js
function initial(array3) {
  var length = array3 == null ? 0 : array3.length;
  return length ? baseSlice_default(array3, 0, -1) : [];
}
var initial_default = initial;

// node_modules/lodash-es/_baseIntersection.js
var nativeMin7 = Math.min;
function baseIntersection(arrays, iteratee2, comparator) {
  var includes2 = comparator ? arrayIncludesWith_default : arrayIncludes_default, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = Infinity, result2 = [];
  while (othIndex--) {
    var array3 = arrays[othIndex];
    if (othIndex && iteratee2) {
      array3 = arrayMap_default(array3, baseUnary_default(iteratee2));
    }
    maxLength = nativeMin7(array3.length, maxLength);
    caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array3.length >= 120) ? new SetCache_default(othIndex && array3) : void 0;
  }
  array3 = arrays[0];
  var index8 = -1, seen = caches[0];
  outer:
    while (++index8 < length && result2.length < maxLength) {
      var value = array3[index8], computed = iteratee2 ? iteratee2(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (!(seen ? cacheHas_default(seen, computed) : includes2(result2, computed, comparator))) {
        othIndex = othLength;
        while (--othIndex) {
          var cache = caches[othIndex];
          if (!(cache ? cacheHas_default(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
            continue outer;
          }
        }
        if (seen) {
          seen.push(computed);
        }
        result2.push(value);
      }
    }
  return result2;
}
var baseIntersection_default = baseIntersection;

// node_modules/lodash-es/_castArrayLikeObject.js
function castArrayLikeObject(value) {
  return isArrayLikeObject_default(value) ? value : [];
}
var castArrayLikeObject_default = castArrayLikeObject;

// node_modules/lodash-es/intersection.js
var intersection2 = baseRest_default(function(arrays) {
  var mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped) : [];
});
var intersection_default = intersection2;

// node_modules/lodash-es/intersectionBy.js
var intersectionBy = baseRest_default(function(arrays) {
  var iteratee2 = last_default(arrays), mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  if (iteratee2 === last_default(mapped)) {
    iteratee2 = void 0;
  } else {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped, baseIteratee_default(iteratee2, 2)) : [];
});
var intersectionBy_default = intersectionBy;

// node_modules/lodash-es/intersectionWith.js
var intersectionWith = baseRest_default(function(arrays) {
  var comparator = last_default(arrays), mapped = arrayMap_default(arrays, castArrayLikeObject_default);
  comparator = typeof comparator == "function" ? comparator : void 0;
  if (comparator) {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0] ? baseIntersection_default(mapped, void 0, comparator) : [];
});
var intersectionWith_default = intersectionWith;

// node_modules/lodash-es/_baseInverter.js
function baseInverter(object, setter, iteratee2, accumulator) {
  baseForOwn_default(object, function(value, key, object2) {
    setter(accumulator, iteratee2(value), key, object2);
  });
  return accumulator;
}
var baseInverter_default = baseInverter;

// node_modules/lodash-es/_createInverter.js
function createInverter(setter, toIteratee) {
  return function(object, iteratee2) {
    return baseInverter_default(object, setter, toIteratee(iteratee2), {});
  };
}
var createInverter_default = createInverter;

// node_modules/lodash-es/invert.js
var objectProto24 = Object.prototype;
var nativeObjectToString3 = objectProto24.toString;
var invert = createInverter_default(function(result2, value, key) {
  if (value != null && typeof value.toString != "function") {
    value = nativeObjectToString3.call(value);
  }
  result2[value] = key;
}, constant_default5(identity_default));
var invert_default = invert;

// node_modules/lodash-es/invertBy.js
var objectProto25 = Object.prototype;
var hasOwnProperty21 = objectProto25.hasOwnProperty;
var nativeObjectToString4 = objectProto25.toString;
var invertBy = createInverter_default(function(result2, value, key) {
  if (value != null && typeof value.toString != "function") {
    value = nativeObjectToString4.call(value);
  }
  if (hasOwnProperty21.call(result2, value)) {
    result2[value].push(key);
  } else {
    result2[value] = [key];
  }
}, baseIteratee_default);
var invertBy_default = invertBy;

// node_modules/lodash-es/_parent.js
function parent(object, path) {
  return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
}
var parent_default = parent;

// node_modules/lodash-es/_baseInvoke.js
function baseInvoke(object, path, args) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  var func = object == null ? object : object[toKey_default(last_default(path))];
  return func == null ? void 0 : apply_default(func, object, args);
}
var baseInvoke_default = baseInvoke;

// node_modules/lodash-es/invoke.js
var invoke = baseRest_default(baseInvoke_default);
var invoke_default = invoke;

// node_modules/lodash-es/invokeMap.js
var invokeMap = baseRest_default(function(collection, path, args) {
  var index8 = -1, isFunc = typeof path == "function", result2 = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value) {
    result2[++index8] = isFunc ? apply_default(path, value, args) : baseInvoke_default(value, path, args);
  });
  return result2;
});
var invokeMap_default = invokeMap;

// node_modules/lodash-es/_baseIsArrayBuffer.js
var arrayBufferTag5 = "[object ArrayBuffer]";
function baseIsArrayBuffer(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == arrayBufferTag5;
}
var baseIsArrayBuffer_default = baseIsArrayBuffer;

// node_modules/lodash-es/isArrayBuffer.js
var nodeIsArrayBuffer = nodeUtil_default && nodeUtil_default.isArrayBuffer;
var isArrayBuffer = nodeIsArrayBuffer ? baseUnary_default(nodeIsArrayBuffer) : baseIsArrayBuffer_default;
var isArrayBuffer_default = isArrayBuffer;

// node_modules/lodash-es/isBoolean.js
var boolTag5 = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike_default(value) && baseGetTag_default(value) == boolTag5;
}
var isBoolean_default = isBoolean;

// node_modules/lodash-es/_baseIsDate.js
var dateTag5 = "[object Date]";
function baseIsDate(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == dateTag5;
}
var baseIsDate_default = baseIsDate;

// node_modules/lodash-es/isDate.js
var nodeIsDate = nodeUtil_default && nodeUtil_default.isDate;
var isDate = nodeIsDate ? baseUnary_default(nodeIsDate) : baseIsDate_default;
var isDate_default = isDate;

// node_modules/lodash-es/isElement.js
function isElement(value) {
  return isObjectLike_default(value) && value.nodeType === 1 && !isPlainObject_default(value);
}
var isElement_default = isElement;

// node_modules/lodash-es/isEmpty.js
var mapTag8 = "[object Map]";
var setTag8 = "[object Set]";
var objectProto26 = Object.prototype;
var hasOwnProperty22 = objectProto26.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
    return !value.length;
  }
  var tag = getTag_default(value);
  if (tag == mapTag8 || tag == setTag8) {
    return !value.size;
  }
  if (isPrototype_default(value)) {
    return !baseKeys_default(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty22.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_default = isEmpty;

// node_modules/lodash-es/isEqual.js
function isEqual(value, other) {
  return baseIsEqual_default(value, other);
}
var isEqual_default = isEqual;

// node_modules/lodash-es/isEqualWith.js
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  var result2 = customizer ? customizer(value, other) : void 0;
  return result2 === void 0 ? baseIsEqual_default(value, other, void 0, customizer) : !!result2;
}
var isEqualWith_default = isEqualWith;

// node_modules/lodash-es/isFinite.js
var nativeIsFinite2 = root_default.isFinite;
function isFinite2(value) {
  return typeof value == "number" && nativeIsFinite2(value);
}
var isFinite_default = isFinite2;

// node_modules/lodash-es/isInteger.js
function isInteger(value) {
  return typeof value == "number" && value == toInteger_default(value);
}
var isInteger_default = isInteger;

// node_modules/lodash-es/isMatch.js
function isMatch(object, source) {
  return object === source || baseIsMatch_default(object, source, getMatchData_default(source));
}
var isMatch_default = isMatch;

// node_modules/lodash-es/isMatchWith.js
function isMatchWith(object, source, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return baseIsMatch_default(object, source, getMatchData_default(source), customizer);
}
var isMatchWith_default = isMatchWith;

// node_modules/lodash-es/isNumber.js
var numberTag5 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike_default(value) && baseGetTag_default(value) == numberTag5;
}
var isNumber_default = isNumber;

// node_modules/lodash-es/isNaN.js
function isNaN2(value) {
  return isNumber_default(value) && value != +value;
}
var isNaN_default = isNaN2;

// node_modules/lodash-es/_isMaskable.js
var isMaskable = coreJsData_default ? isFunction_default : stubFalse_default;
var isMaskable_default = isMaskable;

// node_modules/lodash-es/isNative.js
var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function isNative(value) {
  if (isMaskable_default(value)) {
    throw new Error(CORE_ERROR_TEXT);
  }
  return baseIsNative_default(value);
}
var isNative_default = isNative;

// node_modules/lodash-es/isNil.js
function isNil(value) {
  return value == null;
}
var isNil_default = isNil;

// node_modules/lodash-es/isNull.js
function isNull(value) {
  return value === null;
}
var isNull_default = isNull;

// node_modules/lodash-es/_baseIsRegExp.js
var regexpTag5 = "[object RegExp]";
function baseIsRegExp(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == regexpTag5;
}
var baseIsRegExp_default = baseIsRegExp;

// node_modules/lodash-es/isRegExp.js
var nodeIsRegExp = nodeUtil_default && nodeUtil_default.isRegExp;
var isRegExp = nodeIsRegExp ? baseUnary_default(nodeIsRegExp) : baseIsRegExp_default;
var isRegExp_default = isRegExp;

// node_modules/lodash-es/isSafeInteger.js
var MAX_SAFE_INTEGER3 = 9007199254740991;
function isSafeInteger(value) {
  return isInteger_default(value) && value >= -MAX_SAFE_INTEGER3 && value <= MAX_SAFE_INTEGER3;
}
var isSafeInteger_default = isSafeInteger;

// node_modules/lodash-es/isUndefined.js
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_default = isUndefined;

// node_modules/lodash-es/isWeakMap.js
var weakMapTag4 = "[object WeakMap]";
function isWeakMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == weakMapTag4;
}
var isWeakMap_default = isWeakMap;

// node_modules/lodash-es/isWeakSet.js
var weakSetTag = "[object WeakSet]";
function isWeakSet(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == weakSetTag;
}
var isWeakSet_default = isWeakSet;

// node_modules/lodash-es/iteratee.js
var CLONE_DEEP_FLAG5 = 1;
function iteratee(func) {
  return baseIteratee_default(typeof func == "function" ? func : baseClone_default(func, CLONE_DEEP_FLAG5));
}
var iteratee_default = iteratee;

// node_modules/lodash-es/join.js
var arrayProto2 = Array.prototype;
var nativeJoin = arrayProto2.join;
function join(array3, separator) {
  return array3 == null ? "" : nativeJoin.call(array3, separator);
}
var join_default2 = join;

// node_modules/lodash-es/kebabCase.js
var kebabCase = createCompounder_default(function(result2, word, index8) {
  return result2 + (index8 ? "-" : "") + word.toLowerCase();
});
var kebabCase_default = kebabCase;

// node_modules/lodash-es/keyBy.js
var keyBy = createAggregator_default(function(result2, value, key) {
  baseAssignValue_default(result2, key, value);
});
var keyBy_default = keyBy;

// node_modules/lodash-es/_strictLastIndexOf.js
function strictLastIndexOf(array3, value, fromIndex) {
  var index8 = fromIndex + 1;
  while (index8--) {
    if (array3[index8] === value) {
      return index8;
    }
  }
  return index8;
}
var strictLastIndexOf_default = strictLastIndexOf;

// node_modules/lodash-es/lastIndexOf.js
var nativeMax12 = Math.max;
var nativeMin8 = Math.min;
function lastIndexOf(array3, value, fromIndex) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return -1;
  }
  var index8 = length;
  if (fromIndex !== void 0) {
    index8 = toInteger_default(fromIndex);
    index8 = index8 < 0 ? nativeMax12(length + index8, 0) : nativeMin8(index8, length - 1);
  }
  return value === value ? strictLastIndexOf_default(array3, value, index8) : baseFindIndex_default(array3, baseIsNaN_default, index8, true);
}
var lastIndexOf_default = lastIndexOf;

// node_modules/lodash-es/lowerCase.js
var lowerCase = createCompounder_default(function(result2, word, index8) {
  return result2 + (index8 ? " " : "") + word.toLowerCase();
});
var lowerCase_default = lowerCase;

// node_modules/lodash-es/lowerFirst.js
var lowerFirst = createCaseFirst_default("toLowerCase");
var lowerFirst_default = lowerFirst;

// node_modules/lodash-es/_baseLt.js
function baseLt(value, other) {
  return value < other;
}
var baseLt_default = baseLt;

// node_modules/lodash-es/lt.js
var lt = createRelationalOperation_default(baseLt_default);
var lt_default = lt;

// node_modules/lodash-es/lte.js
var lte = createRelationalOperation_default(function(value, other) {
  return value <= other;
});
var lte_default = lte;

// node_modules/lodash-es/mapKeys.js
function mapKeys(object, iteratee2) {
  var result2 = {};
  iteratee2 = baseIteratee_default(iteratee2, 3);
  baseForOwn_default(object, function(value, key, object2) {
    baseAssignValue_default(result2, iteratee2(value, key, object2), value);
  });
  return result2;
}
var mapKeys_default = mapKeys;

// node_modules/lodash-es/mapValues.js
function mapValues(object, iteratee2) {
  var result2 = {};
  iteratee2 = baseIteratee_default(iteratee2, 3);
  baseForOwn_default(object, function(value, key, object2) {
    baseAssignValue_default(result2, key, iteratee2(value, key, object2));
  });
  return result2;
}
var mapValues_default = mapValues;

// node_modules/lodash-es/matches.js
var CLONE_DEEP_FLAG6 = 1;
function matches(source) {
  return baseMatches_default(baseClone_default(source, CLONE_DEEP_FLAG6));
}
var matches_default = matches;

// node_modules/lodash-es/matchesProperty.js
var CLONE_DEEP_FLAG7 = 1;
function matchesProperty(path, srcValue) {
  return baseMatchesProperty_default(path, baseClone_default(srcValue, CLONE_DEEP_FLAG7));
}
var matchesProperty_default = matchesProperty;

// node_modules/lodash-es/_baseExtremum.js
function baseExtremum(array3, iteratee2, comparator) {
  var index8 = -1, length = array3.length;
  while (++index8 < length) {
    var value = array3[index8], current = iteratee2(value);
    if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) {
      var computed = current, result2 = value;
    }
  }
  return result2;
}
var baseExtremum_default = baseExtremum;

// node_modules/lodash-es/max.js
function max2(array3) {
  return array3 && array3.length ? baseExtremum_default(array3, identity_default, baseGt_default) : void 0;
}
var max_default = max2;

// node_modules/lodash-es/maxBy.js
function maxBy(array3, iteratee2) {
  return array3 && array3.length ? baseExtremum_default(array3, baseIteratee_default(iteratee2, 2), baseGt_default) : void 0;
}
var maxBy_default = maxBy;

// node_modules/lodash-es/_baseSum.js
function baseSum(array3, iteratee2) {
  var result2, index8 = -1, length = array3.length;
  while (++index8 < length) {
    var current = iteratee2(array3[index8]);
    if (current !== void 0) {
      result2 = result2 === void 0 ? current : result2 + current;
    }
  }
  return result2;
}
var baseSum_default = baseSum;

// node_modules/lodash-es/_baseMean.js
var NAN3 = 0 / 0;
function baseMean(array3, iteratee2) {
  var length = array3 == null ? 0 : array3.length;
  return length ? baseSum_default(array3, iteratee2) / length : NAN3;
}
var baseMean_default = baseMean;

// node_modules/lodash-es/mean.js
function mean2(array3) {
  return baseMean_default(array3, identity_default);
}
var mean_default = mean2;

// node_modules/lodash-es/meanBy.js
function meanBy(array3, iteratee2) {
  return baseMean_default(array3, baseIteratee_default(iteratee2, 2));
}
var meanBy_default = meanBy;

// node_modules/lodash-es/merge.js
var merge2 = createAssigner_default(function(object, source, srcIndex) {
  baseMerge_default(object, source, srcIndex);
});
var merge_default3 = merge2;

// node_modules/lodash-es/method.js
var method = baseRest_default(function(path, args) {
  return function(object) {
    return baseInvoke_default(object, path, args);
  };
});
var method_default = method;

// node_modules/lodash-es/methodOf.js
var methodOf = baseRest_default(function(object, args) {
  return function(path) {
    return baseInvoke_default(object, path, args);
  };
});
var methodOf_default = methodOf;

// node_modules/lodash-es/min.js
function min2(array3) {
  return array3 && array3.length ? baseExtremum_default(array3, identity_default, baseLt_default) : void 0;
}
var min_default = min2;

// node_modules/lodash-es/minBy.js
function minBy(array3, iteratee2) {
  return array3 && array3.length ? baseExtremum_default(array3, baseIteratee_default(iteratee2, 2), baseLt_default) : void 0;
}
var minBy_default = minBy;

// node_modules/lodash-es/mixin.js
function mixin(object, source, options) {
  var props = keys_default(source), methodNames = baseFunctions_default(source, props);
  var chain2 = !(isObject_default(options) && "chain" in options) || !!options.chain, isFunc = isFunction_default(object);
  arrayEach_default(methodNames, function(methodName) {
    var func = source[methodName];
    object[methodName] = func;
    if (isFunc) {
      object.prototype[methodName] = function() {
        var chainAll = this.__chain__;
        if (chain2 || chainAll) {
          var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray_default(this.__actions__);
          actions.push({ "func": func, "args": arguments, "thisArg": object });
          result2.__chain__ = chainAll;
          return result2;
        }
        return func.apply(object, arrayPush_default([this.value()], arguments));
      };
    }
  });
  return object;
}
var mixin_default = mixin;

// node_modules/lodash-es/multiply.js
var multiply = createMathOperation_default(function(multiplier, multiplicand) {
  return multiplier * multiplicand;
}, 1);
var multiply_default = multiply;

// node_modules/lodash-es/negate.js
var FUNC_ERROR_TEXT9 = "Expected a function";
function negate(predicate) {
  if (typeof predicate != "function") {
    throw new TypeError(FUNC_ERROR_TEXT9);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return !predicate.call(this);
      case 1:
        return !predicate.call(this, args[0]);
      case 2:
        return !predicate.call(this, args[0], args[1]);
      case 3:
        return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}
var negate_default = negate;

// node_modules/lodash-es/_iteratorToArray.js
function iteratorToArray(iterator) {
  var data, result2 = [];
  while (!(data = iterator.next()).done) {
    result2.push(data.value);
  }
  return result2;
}
var iteratorToArray_default = iteratorToArray;

// node_modules/lodash-es/toArray.js
var mapTag9 = "[object Map]";
var setTag9 = "[object Set]";
var symIterator = Symbol_default ? Symbol_default.iterator : void 0;
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike_default(value)) {
    return isString_default(value) ? stringToArray_default(value) : copyArray_default(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray_default(value[symIterator]());
  }
  var tag = getTag_default(value), func = tag == mapTag9 ? mapToArray_default : tag == setTag9 ? setToArray_default : values_default;
  return func(value);
}
var toArray_default = toArray;

// node_modules/lodash-es/next.js
function wrapperNext() {
  if (this.__values__ === void 0) {
    this.__values__ = toArray_default(this.value());
  }
  var done = this.__index__ >= this.__values__.length, value = done ? void 0 : this.__values__[this.__index__++];
  return { "done": done, "value": value };
}
var next_default = wrapperNext;

// node_modules/lodash-es/_baseNth.js
function baseNth(array3, n2) {
  var length = array3.length;
  if (!length) {
    return;
  }
  n2 += n2 < 0 ? length : 0;
  return isIndex_default(n2, length) ? array3[n2] : void 0;
}
var baseNth_default = baseNth;

// node_modules/lodash-es/nth.js
function nth(array3, n2) {
  return array3 && array3.length ? baseNth_default(array3, toInteger_default(n2)) : void 0;
}
var nth_default = nth;

// node_modules/lodash-es/nthArg.js
function nthArg(n2) {
  n2 = toInteger_default(n2);
  return baseRest_default(function(args) {
    return baseNth_default(args, n2);
  });
}
var nthArg_default = nthArg;

// node_modules/lodash-es/_baseUnset.js
function baseUnset(object, path) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  return object == null || delete object[toKey_default(last_default(path))];
}
var baseUnset_default = baseUnset;

// node_modules/lodash-es/_customOmitClone.js
function customOmitClone(value) {
  return isPlainObject_default(value) ? void 0 : value;
}
var customOmitClone_default = customOmitClone;

// node_modules/lodash-es/omit.js
var CLONE_DEEP_FLAG8 = 1;
var CLONE_FLAT_FLAG2 = 2;
var CLONE_SYMBOLS_FLAG6 = 4;
var omit3 = flatRest_default(function(object, paths) {
  var result2 = {};
  if (object == null) {
    return result2;
  }
  var isDeep = false;
  paths = arrayMap_default(paths, function(path) {
    path = castPath_default(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject_default(object, getAllKeysIn_default(object), result2);
  if (isDeep) {
    result2 = baseClone_default(result2, CLONE_DEEP_FLAG8 | CLONE_FLAT_FLAG2 | CLONE_SYMBOLS_FLAG6, customOmitClone_default);
  }
  var length = paths.length;
  while (length--) {
    baseUnset_default(result2, paths[length]);
  }
  return result2;
});
var omit_default = omit3;

// node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index8 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index8 < length) {
    var key = toKey_default(path[index8]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index8 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index8 + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index8 = -1, length = paths.length, result2 = {};
  while (++index8 < length) {
    var path = paths[index8], value = baseGet_default(object, path);
    if (predicate(value, path)) {
      baseSet_default(result2, castPath_default(path, object), value);
    }
  }
  return result2;
}
var basePickBy_default = basePickBy;

// node_modules/lodash-es/pickBy.js
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap_default(getAllKeysIn_default(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee_default(predicate);
  return basePickBy_default(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_default = pickBy;

// node_modules/lodash-es/omitBy.js
function omitBy(object, predicate) {
  return pickBy_default(object, negate_default(baseIteratee_default(predicate)));
}
var omitBy_default = omitBy;

// node_modules/lodash-es/once.js
function once(func) {
  return before_default(2, func);
}
var once_default = once;

// node_modules/lodash-es/_baseSortBy.js
function baseSortBy(array3, comparer) {
  var length = array3.length;
  array3.sort(comparer);
  while (length--) {
    array3[length] = array3[length].value;
  }
  return array3;
}
var baseSortBy_default = baseSortBy;

// node_modules/lodash-es/_compareAscending.js
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol_default(value);
    var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol_default(other);
    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}
var compareAscending_default = compareAscending;

// node_modules/lodash-es/_compareMultiple.js
function compareMultiple(object, other, orders) {
  var index8 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
  while (++index8 < length) {
    var result2 = compareAscending_default(objCriteria[index8], othCriteria[index8]);
    if (result2) {
      if (index8 >= ordersLength) {
        return result2;
      }
      var order = orders[index8];
      return result2 * (order == "desc" ? -1 : 1);
    }
  }
  return object.index - other.index;
}
var compareMultiple_default = compareMultiple;

// node_modules/lodash-es/_baseOrderBy.js
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap_default(iteratees, function(iteratee2) {
      if (isArray_default(iteratee2)) {
        return function(value) {
          return baseGet_default(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
        };
      }
      return iteratee2;
    });
  } else {
    iteratees = [identity_default];
  }
  var index8 = -1;
  iteratees = arrayMap_default(iteratees, baseUnary_default(baseIteratee_default));
  var result2 = baseMap_default(collection, function(value, key, collection2) {
    var criteria = arrayMap_default(iteratees, function(iteratee2) {
      return iteratee2(value);
    });
    return { "criteria": criteria, "index": ++index8, "value": value };
  });
  return baseSortBy_default(result2, function(object, other) {
    return compareMultiple_default(object, other, orders);
  });
}
var baseOrderBy_default = baseOrderBy;

// node_modules/lodash-es/orderBy.js
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray_default(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? void 0 : orders;
  if (!isArray_default(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy_default(collection, iteratees, orders);
}
var orderBy_default = orderBy;

// node_modules/lodash-es/_createOver.js
function createOver(arrayFunc) {
  return flatRest_default(function(iteratees) {
    iteratees = arrayMap_default(iteratees, baseUnary_default(baseIteratee_default));
    return baseRest_default(function(args) {
      var thisArg = this;
      return arrayFunc(iteratees, function(iteratee2) {
        return apply_default(iteratee2, thisArg, args);
      });
    });
  });
}
var createOver_default = createOver;

// node_modules/lodash-es/over.js
var over = createOver_default(arrayMap_default);
var over_default = over;

// node_modules/lodash-es/_castRest.js
var castRest = baseRest_default;
var castRest_default = castRest;

// node_modules/lodash-es/overArgs.js
var nativeMin9 = Math.min;
var overArgs = castRest_default(function(func, transforms) {
  transforms = transforms.length == 1 && isArray_default(transforms[0]) ? arrayMap_default(transforms[0], baseUnary_default(baseIteratee_default)) : arrayMap_default(baseFlatten_default(transforms, 1), baseUnary_default(baseIteratee_default));
  var funcsLength = transforms.length;
  return baseRest_default(function(args) {
    var index8 = -1, length = nativeMin9(args.length, funcsLength);
    while (++index8 < length) {
      args[index8] = transforms[index8].call(this, args[index8]);
    }
    return apply_default(func, this, args);
  });
});
var overArgs_default = overArgs;

// node_modules/lodash-es/overEvery.js
var overEvery = createOver_default(arrayEvery_default);
var overEvery_default = overEvery;

// node_modules/lodash-es/overSome.js
var overSome = createOver_default(arraySome_default);
var overSome_default = overSome;

// node_modules/lodash-es/_baseRepeat.js
var MAX_SAFE_INTEGER4 = 9007199254740991;
var nativeFloor = Math.floor;
function baseRepeat(string, n2) {
  var result2 = "";
  if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER4) {
    return result2;
  }
  do {
    if (n2 % 2) {
      result2 += string;
    }
    n2 = nativeFloor(n2 / 2);
    if (n2) {
      string += string;
    }
  } while (n2);
  return result2;
}
var baseRepeat_default = baseRepeat;

// node_modules/lodash-es/_asciiSize.js
var asciiSize = baseProperty_default("length");
var asciiSize_default = asciiSize;

// node_modules/lodash-es/_unicodeSize.js
var rsAstralRange4 = "\\ud800-\\udfff";
var rsComboMarksRange5 = "\\u0300-\\u036f";
var reComboHalfMarksRange5 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange5 = "\\u20d0-\\u20ff";
var rsComboRange5 = rsComboMarksRange5 + reComboHalfMarksRange5 + rsComboSymbolsRange5;
var rsVarRange4 = "\\ufe0e\\ufe0f";
var rsAstral2 = "[" + rsAstralRange4 + "]";
var rsCombo4 = "[" + rsComboRange5 + "]";
var rsFitz3 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier3 = "(?:" + rsCombo4 + "|" + rsFitz3 + ")";
var rsNonAstral3 = "[^" + rsAstralRange4 + "]";
var rsRegional3 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair3 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ4 = "\\u200d";
var reOptMod3 = rsModifier3 + "?";
var rsOptVar3 = "[" + rsVarRange4 + "]?";
var rsOptJoin3 = "(?:" + rsZWJ4 + "(?:" + [rsNonAstral3, rsRegional3, rsSurrPair3].join("|") + ")" + rsOptVar3 + reOptMod3 + ")*";
var rsSeq3 = rsOptVar3 + reOptMod3 + rsOptJoin3;
var rsSymbol2 = "(?:" + [rsNonAstral3 + rsCombo4 + "?", rsCombo4, rsRegional3, rsSurrPair3, rsAstral2].join("|") + ")";
var reUnicode2 = RegExp(rsFitz3 + "(?=" + rsFitz3 + ")|" + rsSymbol2 + rsSeq3, "g");
function unicodeSize(string) {
  var result2 = reUnicode2.lastIndex = 0;
  while (reUnicode2.test(string)) {
    ++result2;
  }
  return result2;
}
var unicodeSize_default = unicodeSize;

// node_modules/lodash-es/_stringSize.js
function stringSize(string) {
  return hasUnicode_default(string) ? unicodeSize_default(string) : asciiSize_default(string);
}
var stringSize_default = stringSize;

// node_modules/lodash-es/_createPadding.js
var nativeCeil2 = Math.ceil;
function createPadding(length, chars) {
  chars = chars === void 0 ? " " : baseToString_default(chars);
  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat_default(chars, length) : chars;
  }
  var result2 = baseRepeat_default(chars, nativeCeil2(length / stringSize_default(chars)));
  return hasUnicode_default(chars) ? castSlice_default(stringToArray_default(result2), 0, length).join("") : result2.slice(0, length);
}
var createPadding_default = createPadding;

// node_modules/lodash-es/pad.js
var nativeCeil3 = Math.ceil;
var nativeFloor2 = Math.floor;
function pad(string, length, chars) {
  string = toString_default(string);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string) : 0;
  if (!length || strLength >= length) {
    return string;
  }
  var mid = (length - strLength) / 2;
  return createPadding_default(nativeFloor2(mid), chars) + string + createPadding_default(nativeCeil3(mid), chars);
}
var pad_default = pad;

// node_modules/lodash-es/padEnd.js
function padEnd(string, length, chars) {
  string = toString_default(string);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string) : 0;
  return length && strLength < length ? string + createPadding_default(length - strLength, chars) : string;
}
var padEnd_default = padEnd;

// node_modules/lodash-es/padStart.js
function padStart(string, length, chars) {
  string = toString_default(string);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string) : 0;
  return length && strLength < length ? createPadding_default(length - strLength, chars) + string : string;
}
var padStart_default = padStart;

// node_modules/lodash-es/parseInt.js
var reTrimStart2 = /^\s+/;
var nativeParseInt = root_default.parseInt;
function parseInt2(string, radix, guard) {
  if (guard || radix == null) {
    radix = 0;
  } else if (radix) {
    radix = +radix;
  }
  return nativeParseInt(toString_default(string).replace(reTrimStart2, ""), radix || 0);
}
var parseInt_default = parseInt2;

// node_modules/lodash-es/partial.js
var WRAP_PARTIAL_FLAG7 = 32;
var partial = baseRest_default(function(func, partials) {
  var holders = replaceHolders_default(partials, getHolder_default(partial));
  return createWrap_default(func, WRAP_PARTIAL_FLAG7, void 0, partials, holders);
});
partial.placeholder = {};
var partial_default = partial;

// node_modules/lodash-es/partialRight.js
var WRAP_PARTIAL_RIGHT_FLAG4 = 64;
var partialRight = baseRest_default(function(func, partials) {
  var holders = replaceHolders_default(partials, getHolder_default(partialRight));
  return createWrap_default(func, WRAP_PARTIAL_RIGHT_FLAG4, void 0, partials, holders);
});
partialRight.placeholder = {};
var partialRight_default = partialRight;

// node_modules/lodash-es/partition.js
var partition = createAggregator_default(function(result2, value, key) {
  result2[key ? 0 : 1].push(value);
}, function() {
  return [[], []];
});
var partition_default = partition;

// node_modules/lodash-es/_basePick.js
function basePick(object, paths) {
  return basePickBy_default(object, paths, function(value, path) {
    return hasIn_default(object, path);
  });
}
var basePick_default = basePick;

// node_modules/lodash-es/pick.js
var pick = flatRest_default(function(object, paths) {
  return object == null ? {} : basePick_default(object, paths);
});
var pick_default = pick;

// node_modules/lodash-es/plant.js
function wrapperPlant(value) {
  var result2, parent2 = this;
  while (parent2 instanceof baseLodash_default) {
    var clone3 = wrapperClone_default(parent2);
    clone3.__index__ = 0;
    clone3.__values__ = void 0;
    if (result2) {
      previous.__wrapped__ = clone3;
    } else {
      result2 = clone3;
    }
    var previous = clone3;
    parent2 = parent2.__wrapped__;
  }
  previous.__wrapped__ = value;
  return result2;
}
var plant_default = wrapperPlant;

// node_modules/lodash-es/propertyOf.js
function propertyOf(object) {
  return function(path) {
    return object == null ? void 0 : baseGet_default(object, path);
  };
}
var propertyOf_default = propertyOf;

// node_modules/lodash-es/_baseIndexOfWith.js
function baseIndexOfWith(array3, value, fromIndex, comparator) {
  var index8 = fromIndex - 1, length = array3.length;
  while (++index8 < length) {
    if (comparator(array3[index8], value)) {
      return index8;
    }
  }
  return -1;
}
var baseIndexOfWith_default = baseIndexOfWith;

// node_modules/lodash-es/_basePullAll.js
var arrayProto3 = Array.prototype;
var splice2 = arrayProto3.splice;
function basePullAll(array3, values2, iteratee2, comparator) {
  var indexOf2 = comparator ? baseIndexOfWith_default : baseIndexOf_default, index8 = -1, length = values2.length, seen = array3;
  if (array3 === values2) {
    values2 = copyArray_default(values2);
  }
  if (iteratee2) {
    seen = arrayMap_default(array3, baseUnary_default(iteratee2));
  }
  while (++index8 < length) {
    var fromIndex = 0, value = values2[index8], computed = iteratee2 ? iteratee2(value) : value;
    while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array3) {
        splice2.call(seen, fromIndex, 1);
      }
      splice2.call(array3, fromIndex, 1);
    }
  }
  return array3;
}
var basePullAll_default = basePullAll;

// node_modules/lodash-es/pullAll.js
function pullAll(array3, values2) {
  return array3 && array3.length && values2 && values2.length ? basePullAll_default(array3, values2) : array3;
}
var pullAll_default = pullAll;

// node_modules/lodash-es/pull.js
var pull = baseRest_default(pullAll_default);
var pull_default = pull;

// node_modules/lodash-es/pullAllBy.js
function pullAllBy(array3, values2, iteratee2) {
  return array3 && array3.length && values2 && values2.length ? basePullAll_default(array3, values2, baseIteratee_default(iteratee2, 2)) : array3;
}
var pullAllBy_default = pullAllBy;

// node_modules/lodash-es/pullAllWith.js
function pullAllWith(array3, values2, comparator) {
  return array3 && array3.length && values2 && values2.length ? basePullAll_default(array3, values2, void 0, comparator) : array3;
}
var pullAllWith_default = pullAllWith;

// node_modules/lodash-es/_basePullAt.js
var arrayProto4 = Array.prototype;
var splice3 = arrayProto4.splice;
function basePullAt(array3, indexes2) {
  var length = array3 ? indexes2.length : 0, lastIndex = length - 1;
  while (length--) {
    var index8 = indexes2[length];
    if (length == lastIndex || index8 !== previous) {
      var previous = index8;
      if (isIndex_default(index8)) {
        splice3.call(array3, index8, 1);
      } else {
        baseUnset_default(array3, index8);
      }
    }
  }
  return array3;
}
var basePullAt_default = basePullAt;

// node_modules/lodash-es/pullAt.js
var pullAt = flatRest_default(function(array3, indexes2) {
  var length = array3 == null ? 0 : array3.length, result2 = baseAt_default(array3, indexes2);
  basePullAt_default(array3, arrayMap_default(indexes2, function(index8) {
    return isIndex_default(index8, length) ? +index8 : index8;
  }).sort(compareAscending_default));
  return result2;
});
var pullAt_default = pullAt;

// node_modules/lodash-es/_baseRandom.js
var nativeFloor3 = Math.floor;
var nativeRandom = Math.random;
function baseRandom(lower2, upper) {
  return lower2 + nativeFloor3(nativeRandom() * (upper - lower2 + 1));
}
var baseRandom_default = baseRandom;

// node_modules/lodash-es/random.js
var freeParseFloat = parseFloat;
var nativeMin10 = Math.min;
var nativeRandom2 = Math.random;
function random(lower2, upper, floating) {
  if (floating && typeof floating != "boolean" && isIterateeCall_default(lower2, upper, floating)) {
    upper = floating = void 0;
  }
  if (floating === void 0) {
    if (typeof upper == "boolean") {
      floating = upper;
      upper = void 0;
    } else if (typeof lower2 == "boolean") {
      floating = lower2;
      lower2 = void 0;
    }
  }
  if (lower2 === void 0 && upper === void 0) {
    lower2 = 0;
    upper = 1;
  } else {
    lower2 = toFinite_default(lower2);
    if (upper === void 0) {
      upper = lower2;
      lower2 = 0;
    } else {
      upper = toFinite_default(upper);
    }
  }
  if (lower2 > upper) {
    var temp = lower2;
    lower2 = upper;
    upper = temp;
  }
  if (floating || lower2 % 1 || upper % 1) {
    var rand = nativeRandom2();
    return nativeMin10(lower2 + rand * (upper - lower2 + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
  }
  return baseRandom_default(lower2, upper);
}
var random_default = random;

// node_modules/lodash-es/_baseRange.js
var nativeCeil4 = Math.ceil;
var nativeMax13 = Math.max;
function baseRange(start2, end, step, fromRight) {
  var index8 = -1, length = nativeMax13(nativeCeil4((end - start2) / (step || 1)), 0), result2 = Array(length);
  while (length--) {
    result2[fromRight ? length : ++index8] = start2;
    start2 += step;
  }
  return result2;
}
var baseRange_default = baseRange;

// node_modules/lodash-es/_createRange.js
function createRange(fromRight) {
  return function(start2, end, step) {
    if (step && typeof step != "number" && isIterateeCall_default(start2, end, step)) {
      end = step = void 0;
    }
    start2 = toFinite_default(start2);
    if (end === void 0) {
      end = start2;
      start2 = 0;
    } else {
      end = toFinite_default(end);
    }
    step = step === void 0 ? start2 < end ? 1 : -1 : toFinite_default(step);
    return baseRange_default(start2, end, step, fromRight);
  };
}
var createRange_default = createRange;

// node_modules/lodash-es/range.js
var range2 = createRange_default();
var range_default = range2;

// node_modules/lodash-es/rangeRight.js
var rangeRight = createRange_default(true);
var rangeRight_default = rangeRight;

// node_modules/lodash-es/rearg.js
var WRAP_REARG_FLAG4 = 256;
var rearg = flatRest_default(function(func, indexes2) {
  return createWrap_default(func, WRAP_REARG_FLAG4, void 0, void 0, void 0, indexes2);
});
var rearg_default = rearg;

// node_modules/lodash-es/_baseReduce.js
function baseReduce(collection, iteratee2, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index8, collection2) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee2(accumulator, value, index8, collection2);
  });
  return accumulator;
}
var baseReduce_default = baseReduce;

// node_modules/lodash-es/reduce.js
function reduce2(collection, iteratee2, accumulator) {
  var func = isArray_default(collection) ? arrayReduce_default : baseReduce_default, initAccum = arguments.length < 3;
  return func(collection, baseIteratee_default(iteratee2, 4), accumulator, initAccum, baseEach_default);
}
var reduce_default = reduce2;

// node_modules/lodash-es/_arrayReduceRight.js
function arrayReduceRight(array3, iteratee2, accumulator, initAccum) {
  var length = array3 == null ? 0 : array3.length;
  if (initAccum && length) {
    accumulator = array3[--length];
  }
  while (length--) {
    accumulator = iteratee2(accumulator, array3[length], length, array3);
  }
  return accumulator;
}
var arrayReduceRight_default = arrayReduceRight;

// node_modules/lodash-es/reduceRight.js
function reduceRight(collection, iteratee2, accumulator) {
  var func = isArray_default(collection) ? arrayReduceRight_default : baseReduce_default, initAccum = arguments.length < 3;
  return func(collection, baseIteratee_default(iteratee2, 4), accumulator, initAccum, baseEachRight_default);
}
var reduceRight_default = reduceRight;

// node_modules/lodash-es/reject.js
function reject(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, negate_default(baseIteratee_default(predicate, 3)));
}
var reject_default = reject;

// node_modules/lodash-es/remove.js
function remove2(array3, predicate) {
  var result2 = [];
  if (!(array3 && array3.length)) {
    return result2;
  }
  var index8 = -1, indexes2 = [], length = array3.length;
  predicate = baseIteratee_default(predicate, 3);
  while (++index8 < length) {
    var value = array3[index8];
    if (predicate(value, index8, array3)) {
      result2.push(value);
      indexes2.push(index8);
    }
  }
  basePullAt_default(array3, indexes2);
  return result2;
}
var remove_default3 = remove2;

// node_modules/lodash-es/repeat.js
function repeat(string, n2, guard) {
  if (guard ? isIterateeCall_default(string, n2, guard) : n2 === void 0) {
    n2 = 1;
  } else {
    n2 = toInteger_default(n2);
  }
  return baseRepeat_default(toString_default(string), n2);
}
var repeat_default = repeat;

// node_modules/lodash-es/replace.js
function replace() {
  var args = arguments, string = toString_default(args[0]);
  return args.length < 3 ? string : string.replace(args[1], args[2]);
}
var replace_default = replace;

// node_modules/lodash-es/rest.js
var FUNC_ERROR_TEXT10 = "Expected a function";
function rest(func, start2) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT10);
  }
  start2 = start2 === void 0 ? start2 : toInteger_default(start2);
  return baseRest_default(func, start2);
}
var rest_default = rest;

// node_modules/lodash-es/result.js
function result(object, path, defaultValue) {
  path = castPath_default(path, object);
  var index8 = -1, length = path.length;
  if (!length) {
    length = 1;
    object = void 0;
  }
  while (++index8 < length) {
    var value = object == null ? void 0 : object[toKey_default(path[index8])];
    if (value === void 0) {
      index8 = length;
      value = defaultValue;
    }
    object = isFunction_default(value) ? value.call(object) : value;
  }
  return object;
}
var result_default = result;

// node_modules/lodash-es/reverse.js
var arrayProto5 = Array.prototype;
var nativeReverse = arrayProto5.reverse;
function reverse2(array3) {
  return array3 == null ? array3 : nativeReverse.call(array3);
}
var reverse_default = reverse2;

// node_modules/lodash-es/round.js
var round = createRound_default("round");
var round_default2 = round;

// node_modules/lodash-es/_arraySample.js
function arraySample(array3) {
  var length = array3.length;
  return length ? array3[baseRandom_default(0, length - 1)] : void 0;
}
var arraySample_default = arraySample;

// node_modules/lodash-es/_baseSample.js
function baseSample(collection) {
  return arraySample_default(values_default(collection));
}
var baseSample_default = baseSample;

// node_modules/lodash-es/sample.js
function sample(collection) {
  var func = isArray_default(collection) ? arraySample_default : baseSample_default;
  return func(collection);
}
var sample_default = sample;

// node_modules/lodash-es/_shuffleSelf.js
function shuffleSelf(array3, size2) {
  var index8 = -1, length = array3.length, lastIndex = length - 1;
  size2 = size2 === void 0 ? length : size2;
  while (++index8 < size2) {
    var rand = baseRandom_default(index8, lastIndex), value = array3[rand];
    array3[rand] = array3[index8];
    array3[index8] = value;
  }
  array3.length = size2;
  return array3;
}
var shuffleSelf_default = shuffleSelf;

// node_modules/lodash-es/_arraySampleSize.js
function arraySampleSize(array3, n2) {
  return shuffleSelf_default(copyArray_default(array3), baseClamp_default(n2, 0, array3.length));
}
var arraySampleSize_default = arraySampleSize;

// node_modules/lodash-es/_baseSampleSize.js
function baseSampleSize(collection, n2) {
  var array3 = values_default(collection);
  return shuffleSelf_default(array3, baseClamp_default(n2, 0, array3.length));
}
var baseSampleSize_default = baseSampleSize;

// node_modules/lodash-es/sampleSize.js
function sampleSize(collection, n2, guard) {
  if (guard ? isIterateeCall_default(collection, n2, guard) : n2 === void 0) {
    n2 = 1;
  } else {
    n2 = toInteger_default(n2);
  }
  var func = isArray_default(collection) ? arraySampleSize_default : baseSampleSize_default;
  return func(collection, n2);
}
var sampleSize_default = sampleSize;

// node_modules/lodash-es/set.js
function set2(object, path, value) {
  return object == null ? object : baseSet_default(object, path, value);
}
var set_default = set2;

// node_modules/lodash-es/setWith.js
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return object == null ? object : baseSet_default(object, path, value, customizer);
}
var setWith_default = setWith;

// node_modules/lodash-es/_arrayShuffle.js
function arrayShuffle(array3) {
  return shuffleSelf_default(copyArray_default(array3));
}
var arrayShuffle_default = arrayShuffle;

// node_modules/lodash-es/_baseShuffle.js
function baseShuffle(collection) {
  return shuffleSelf_default(values_default(collection));
}
var baseShuffle_default = baseShuffle;

// node_modules/lodash-es/shuffle.js
function shuffle(collection) {
  var func = isArray_default(collection) ? arrayShuffle_default : baseShuffle_default;
  return func(collection);
}
var shuffle_default2 = shuffle;

// node_modules/lodash-es/size.js
var mapTag10 = "[object Map]";
var setTag10 = "[object Set]";
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike_default(collection)) {
    return isString_default(collection) ? stringSize_default(collection) : collection.length;
  }
  var tag = getTag_default(collection);
  if (tag == mapTag10 || tag == setTag10) {
    return collection.size;
  }
  return baseKeys_default(collection).length;
}
var size_default2 = size;

// node_modules/lodash-es/slice.js
function slice2(array3, start2, end) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return [];
  }
  if (end && typeof end != "number" && isIterateeCall_default(array3, start2, end)) {
    start2 = 0;
    end = length;
  } else {
    start2 = start2 == null ? 0 : toInteger_default(start2);
    end = end === void 0 ? length : toInteger_default(end);
  }
  return baseSlice_default(array3, start2, end);
}
var slice_default = slice2;

// node_modules/lodash-es/snakeCase.js
var snakeCase = createCompounder_default(function(result2, word, index8) {
  return result2 + (index8 ? "_" : "") + word.toLowerCase();
});
var snakeCase_default = snakeCase;

// node_modules/lodash-es/_baseSome.js
function baseSome(collection, predicate) {
  var result2;
  baseEach_default(collection, function(value, index8, collection2) {
    result2 = predicate(value, index8, collection2);
    return !result2;
  });
  return !!result2;
}
var baseSome_default = baseSome;

// node_modules/lodash-es/some.js
function some2(collection, predicate, guard) {
  var func = isArray_default(collection) ? arraySome_default : baseSome_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var some_default = some2;

// node_modules/lodash-es/sortBy.js
var sortBy = baseRest_default(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall_default(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall_default(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy_default(collection, baseFlatten_default(iteratees, 1), []);
});
var sortBy_default = sortBy;

// node_modules/lodash-es/_baseSortedIndexBy.js
var MAX_ARRAY_LENGTH3 = 4294967295;
var MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH3 - 1;
var nativeFloor4 = Math.floor;
var nativeMin11 = Math.min;
function baseSortedIndexBy(array3, value, iteratee2, retHighest) {
  var low = 0, high = array3 == null ? 0 : array3.length;
  if (high === 0) {
    return 0;
  }
  value = iteratee2(value);
  var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol_default(value), valIsUndefined = value === void 0;
  while (low < high) {
    var mid = nativeFloor4((low + high) / 2), computed = iteratee2(array3[mid]), othIsDefined = computed !== void 0, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol_default(computed);
    if (valIsNaN) {
      var setLow = retHighest || othIsReflexive;
    } else if (valIsUndefined) {
      setLow = othIsReflexive && (retHighest || othIsDefined);
    } else if (valIsNull) {
      setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
    } else if (valIsSymbol) {
      setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
    } else if (othIsNull || othIsSymbol) {
      setLow = false;
    } else {
      setLow = retHighest ? computed <= value : computed < value;
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return nativeMin11(high, MAX_ARRAY_INDEX);
}
var baseSortedIndexBy_default = baseSortedIndexBy;

// node_modules/lodash-es/_baseSortedIndex.js
var MAX_ARRAY_LENGTH4 = 4294967295;
var HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH4 >>> 1;
function baseSortedIndex(array3, value, retHighest) {
  var low = 0, high = array3 == null ? low : array3.length;
  if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
    while (low < high) {
      var mid = low + high >>> 1, computed = array3[mid];
      if (computed !== null && !isSymbol_default(computed) && (retHighest ? computed <= value : computed < value)) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return high;
  }
  return baseSortedIndexBy_default(array3, value, identity_default, retHighest);
}
var baseSortedIndex_default = baseSortedIndex;

// node_modules/lodash-es/sortedIndex.js
function sortedIndex(array3, value) {
  return baseSortedIndex_default(array3, value);
}
var sortedIndex_default = sortedIndex;

// node_modules/lodash-es/sortedIndexBy.js
function sortedIndexBy(array3, value, iteratee2) {
  return baseSortedIndexBy_default(array3, value, baseIteratee_default(iteratee2, 2));
}
var sortedIndexBy_default = sortedIndexBy;

// node_modules/lodash-es/sortedIndexOf.js
function sortedIndexOf(array3, value) {
  var length = array3 == null ? 0 : array3.length;
  if (length) {
    var index8 = baseSortedIndex_default(array3, value);
    if (index8 < length && eq_default(array3[index8], value)) {
      return index8;
    }
  }
  return -1;
}
var sortedIndexOf_default = sortedIndexOf;

// node_modules/lodash-es/sortedLastIndex.js
function sortedLastIndex(array3, value) {
  return baseSortedIndex_default(array3, value, true);
}
var sortedLastIndex_default = sortedLastIndex;

// node_modules/lodash-es/sortedLastIndexBy.js
function sortedLastIndexBy(array3, value, iteratee2) {
  return baseSortedIndexBy_default(array3, value, baseIteratee_default(iteratee2, 2), true);
}
var sortedLastIndexBy_default = sortedLastIndexBy;

// node_modules/lodash-es/sortedLastIndexOf.js
function sortedLastIndexOf(array3, value) {
  var length = array3 == null ? 0 : array3.length;
  if (length) {
    var index8 = baseSortedIndex_default(array3, value, true) - 1;
    if (eq_default(array3[index8], value)) {
      return index8;
    }
  }
  return -1;
}
var sortedLastIndexOf_default = sortedLastIndexOf;

// node_modules/lodash-es/_baseSortedUniq.js
function baseSortedUniq(array3, iteratee2) {
  var index8 = -1, length = array3.length, resIndex = 0, result2 = [];
  while (++index8 < length) {
    var value = array3[index8], computed = iteratee2 ? iteratee2(value) : value;
    if (!index8 || !eq_default(computed, seen)) {
      var seen = computed;
      result2[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result2;
}
var baseSortedUniq_default = baseSortedUniq;

// node_modules/lodash-es/sortedUniq.js
function sortedUniq(array3) {
  return array3 && array3.length ? baseSortedUniq_default(array3) : [];
}
var sortedUniq_default = sortedUniq;

// node_modules/lodash-es/sortedUniqBy.js
function sortedUniqBy(array3, iteratee2) {
  return array3 && array3.length ? baseSortedUniq_default(array3, baseIteratee_default(iteratee2, 2)) : [];
}
var sortedUniqBy_default = sortedUniqBy;

// node_modules/lodash-es/split.js
var MAX_ARRAY_LENGTH5 = 4294967295;
function split(string, separator, limit) {
  if (limit && typeof limit != "number" && isIterateeCall_default(string, separator, limit)) {
    separator = limit = void 0;
  }
  limit = limit === void 0 ? MAX_ARRAY_LENGTH5 : limit >>> 0;
  if (!limit) {
    return [];
  }
  string = toString_default(string);
  if (string && (typeof separator == "string" || separator != null && !isRegExp_default(separator))) {
    separator = baseToString_default(separator);
    if (!separator && hasUnicode_default(string)) {
      return castSlice_default(stringToArray_default(string), 0, limit);
    }
  }
  return string.split(separator, limit);
}
var split_default = split;

// node_modules/lodash-es/spread.js
var FUNC_ERROR_TEXT11 = "Expected a function";
var nativeMax14 = Math.max;
function spread(func, start2) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT11);
  }
  start2 = start2 == null ? 0 : nativeMax14(toInteger_default(start2), 0);
  return baseRest_default(function(args) {
    var array3 = args[start2], otherArgs = castSlice_default(args, 0, start2);
    if (array3) {
      arrayPush_default(otherArgs, array3);
    }
    return apply_default(func, this, otherArgs);
  });
}
var spread_default = spread;

// node_modules/lodash-es/startCase.js
var startCase = createCompounder_default(function(result2, word, index8) {
  return result2 + (index8 ? " " : "") + upperFirst_default(word);
});
var startCase_default = startCase;

// node_modules/lodash-es/startsWith.js
function startsWith(string, target, position) {
  string = toString_default(string);
  position = position == null ? 0 : baseClamp_default(toInteger_default(position), 0, string.length);
  target = baseToString_default(target);
  return string.slice(position, position + target.length) == target;
}
var startsWith_default = startsWith;

// node_modules/lodash-es/stubObject.js
function stubObject() {
  return {};
}
var stubObject_default = stubObject;

// node_modules/lodash-es/stubString.js
function stubString() {
  return "";
}
var stubString_default = stubString;

// node_modules/lodash-es/stubTrue.js
function stubTrue() {
  return true;
}
var stubTrue_default = stubTrue;

// node_modules/lodash-es/subtract.js
var subtract = createMathOperation_default(function(minuend, subtrahend) {
  return minuend - subtrahend;
}, 0);
var subtract_default = subtract;

// node_modules/lodash-es/sum.js
function sum2(array3) {
  return array3 && array3.length ? baseSum_default(array3, identity_default) : 0;
}
var sum_default = sum2;

// node_modules/lodash-es/sumBy.js
function sumBy(array3, iteratee2) {
  return array3 && array3.length ? baseSum_default(array3, baseIteratee_default(iteratee2, 2)) : 0;
}
var sumBy_default = sumBy;

// node_modules/lodash-es/tail.js
function tail(array3) {
  var length = array3 == null ? 0 : array3.length;
  return length ? baseSlice_default(array3, 1, length) : [];
}
var tail_default = tail;

// node_modules/lodash-es/take.js
function take(array3, n2, guard) {
  if (!(array3 && array3.length)) {
    return [];
  }
  n2 = guard || n2 === void 0 ? 1 : toInteger_default(n2);
  return baseSlice_default(array3, 0, n2 < 0 ? 0 : n2);
}
var take_default = take;

// node_modules/lodash-es/takeRight.js
function takeRight(array3, n2, guard) {
  var length = array3 == null ? 0 : array3.length;
  if (!length) {
    return [];
  }
  n2 = guard || n2 === void 0 ? 1 : toInteger_default(n2);
  n2 = length - n2;
  return baseSlice_default(array3, n2 < 0 ? 0 : n2, length);
}
var takeRight_default = takeRight;

// node_modules/lodash-es/takeRightWhile.js
function takeRightWhile(array3, predicate) {
  return array3 && array3.length ? baseWhile_default(array3, baseIteratee_default(predicate, 3), false, true) : [];
}
var takeRightWhile_default = takeRightWhile;

// node_modules/lodash-es/takeWhile.js
function takeWhile(array3, predicate) {
  return array3 && array3.length ? baseWhile_default(array3, baseIteratee_default(predicate, 3)) : [];
}
var takeWhile_default = takeWhile;

// node_modules/lodash-es/tap.js
function tap(value, interceptor) {
  interceptor(value);
  return value;
}
var tap_default = tap;

// node_modules/lodash-es/_customDefaultsAssignIn.js
var objectProto27 = Object.prototype;
var hasOwnProperty23 = objectProto27.hasOwnProperty;
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === void 0 || eq_default(objValue, objectProto27[key]) && !hasOwnProperty23.call(object, key)) {
    return srcValue;
  }
  return objValue;
}
var customDefaultsAssignIn_default = customDefaultsAssignIn;

// node_modules/lodash-es/_escapeStringChar.js
var stringEscapes = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function escapeStringChar(chr) {
  return "\\" + stringEscapes[chr];
}
var escapeStringChar_default = escapeStringChar;

// node_modules/lodash-es/_reInterpolate.js
var reInterpolate = /<%=([\s\S]+?)%>/g;
var reInterpolate_default = reInterpolate;

// node_modules/lodash-es/_reEscape.js
var reEscape = /<%-([\s\S]+?)%>/g;
var reEscape_default = reEscape;

// node_modules/lodash-es/_reEvaluate.js
var reEvaluate = /<%([\s\S]+?)%>/g;
var reEvaluate_default = reEvaluate;

// node_modules/lodash-es/templateSettings.js
var templateSettings = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "escape": reEscape_default,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "evaluate": reEvaluate_default,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  "interpolate": reInterpolate_default,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  "variable": "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  "imports": {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    "_": { "escape": escape_default }
  }
};
var templateSettings_default = templateSettings;

// node_modules/lodash-es/template.js
var INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
var reEmptyStringLeading = /\b__p \+= '';/g;
var reEmptyStringMiddle = /\b(__p \+=) '' \+/g;
var reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
var reNoMatch = /($^)/;
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
var objectProto28 = Object.prototype;
var hasOwnProperty24 = objectProto28.hasOwnProperty;
function template(string, options, guard) {
  var settings = templateSettings_default.imports._.templateSettings || templateSettings_default;
  if (guard && isIterateeCall_default(string, options, guard)) {
    options = void 0;
  }
  string = toString_default(string);
  options = assignInWith_default({}, options, settings, customDefaultsAssignIn_default);
  var imports = assignInWith_default({}, options.imports, settings.imports, customDefaultsAssignIn_default), importsKeys = keys_default(imports), importsValues = baseValues_default(imports, importsKeys);
  var isEscaping, isEvaluating, index8 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate_default ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
    "g"
  );
  var sourceURL = hasOwnProperty24.call(options, "sourceURL") ? "//# sourceURL=" + (options.sourceURL + "").replace(/\s/g, " ") + "\n" : "";
  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue);
    source += string.slice(index8, offset).replace(reUnescapedString, escapeStringChar_default);
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index8 = offset + match.length;
    return match;
  });
  source += "';\n";
  var variable = hasOwnProperty24.call(options, "variable") && options.variable;
  if (!variable) {
    source = "with (obj) {\n" + source + "\n}\n";
  } else if (reForbiddenIdentifierChars.test(variable)) {
    throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
  }
  source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
  source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
  var result2 = attempt_default(function() {
    return Function(importsKeys, sourceURL + "return " + source).apply(void 0, importsValues);
  });
  result2.source = source;
  if (isError_default(result2)) {
    throw result2;
  }
  return result2;
}
var template_default = template;

// node_modules/lodash-es/throttle.js
var FUNC_ERROR_TEXT12 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT12);
  }
  if (isObject_default(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce_default(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_default = throttle;

// node_modules/lodash-es/thru.js
function thru(value, interceptor) {
  return interceptor(value);
}
var thru_default = thru;

// node_modules/lodash-es/times.js
var MAX_SAFE_INTEGER5 = 9007199254740991;
var MAX_ARRAY_LENGTH6 = 4294967295;
var nativeMin12 = Math.min;
function times(n2, iteratee2) {
  n2 = toInteger_default(n2);
  if (n2 < 1 || n2 > MAX_SAFE_INTEGER5) {
    return [];
  }
  var index8 = MAX_ARRAY_LENGTH6, length = nativeMin12(n2, MAX_ARRAY_LENGTH6);
  iteratee2 = castFunction_default(iteratee2);
  n2 -= MAX_ARRAY_LENGTH6;
  var result2 = baseTimes_default(length, iteratee2);
  while (++index8 < n2) {
    iteratee2(index8);
  }
  return result2;
}
var times_default = times;

// node_modules/lodash-es/toIterator.js
function wrapperToIterator() {
  return this;
}
var toIterator_default = wrapperToIterator;

// node_modules/lodash-es/_baseWrapperValue.js
function baseWrapperValue(value, actions) {
  var result2 = value;
  if (result2 instanceof LazyWrapper_default) {
    result2 = result2.value();
  }
  return arrayReduce_default(actions, function(result3, action) {
    return action.func.apply(action.thisArg, arrayPush_default([result3], action.args));
  }, result2);
}
var baseWrapperValue_default = baseWrapperValue;

// node_modules/lodash-es/wrapperValue.js
function wrapperValue() {
  return baseWrapperValue_default(this.__wrapped__, this.__actions__);
}
var wrapperValue_default = wrapperValue;

// node_modules/lodash-es/toLower.js
function toLower(value) {
  return toString_default(value).toLowerCase();
}
var toLower_default = toLower;

// node_modules/lodash-es/toPath.js
function toPath(value) {
  if (isArray_default(value)) {
    return arrayMap_default(value, toKey_default);
  }
  return isSymbol_default(value) ? [value] : copyArray_default(stringToPath_default(toString_default(value)));
}
var toPath_default = toPath;

// node_modules/lodash-es/toSafeInteger.js
var MAX_SAFE_INTEGER6 = 9007199254740991;
function toSafeInteger(value) {
  return value ? baseClamp_default(toInteger_default(value), -MAX_SAFE_INTEGER6, MAX_SAFE_INTEGER6) : value === 0 ? value : 0;
}
var toSafeInteger_default = toSafeInteger;

// node_modules/lodash-es/toUpper.js
function toUpper(value) {
  return toString_default(value).toUpperCase();
}
var toUpper_default = toUpper;

// node_modules/lodash-es/transform.js
function transform2(object, iteratee2, accumulator) {
  var isArr = isArray_default(object), isArrLike = isArr || isBuffer_default(object) || isTypedArray_default(object);
  iteratee2 = baseIteratee_default(iteratee2, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (isObject_default(object)) {
      accumulator = isFunction_default(Ctor) ? baseCreate_default(getPrototype_default(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach_default : baseForOwn_default)(object, function(value, index8, object2) {
    return iteratee2(accumulator, value, index8, object2);
  });
  return accumulator;
}
var transform_default = transform2;

// node_modules/lodash-es/_charsEndIndex.js
function charsEndIndex(strSymbols, chrSymbols) {
  var index8 = strSymbols.length;
  while (index8-- && baseIndexOf_default(chrSymbols, strSymbols[index8], 0) > -1) {
  }
  return index8;
}
var charsEndIndex_default = charsEndIndex;

// node_modules/lodash-es/_charsStartIndex.js
function charsStartIndex(strSymbols, chrSymbols) {
  var index8 = -1, length = strSymbols.length;
  while (++index8 < length && baseIndexOf_default(chrSymbols, strSymbols[index8], 0) > -1) {
  }
  return index8;
}
var charsStartIndex_default = charsStartIndex;

// node_modules/lodash-es/trim.js
function trim(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return baseTrim_default(string);
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), chrSymbols = stringToArray_default(chars), start2 = charsStartIndex_default(strSymbols, chrSymbols), end = charsEndIndex_default(strSymbols, chrSymbols) + 1;
  return castSlice_default(strSymbols, start2, end).join("");
}
var trim_default = trim;

// node_modules/lodash-es/trimEnd.js
function trimEnd(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return string.slice(0, trimmedEndIndex_default(string) + 1);
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), end = charsEndIndex_default(strSymbols, stringToArray_default(chars)) + 1;
  return castSlice_default(strSymbols, 0, end).join("");
}
var trimEnd_default = trimEnd;

// node_modules/lodash-es/trimStart.js
var reTrimStart3 = /^\s+/;
function trimStart(string, chars, guard) {
  string = toString_default(string);
  if (string && (guard || chars === void 0)) {
    return string.replace(reTrimStart3, "");
  }
  if (!string || !(chars = baseToString_default(chars))) {
    return string;
  }
  var strSymbols = stringToArray_default(string), start2 = charsStartIndex_default(strSymbols, stringToArray_default(chars));
  return castSlice_default(strSymbols, start2).join("");
}
var trimStart_default = trimStart;

// node_modules/lodash-es/truncate.js
var DEFAULT_TRUNC_LENGTH = 30;
var DEFAULT_TRUNC_OMISSION = "...";
var reFlags2 = /\w*$/;
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
  if (isObject_default(options)) {
    var separator = "separator" in options ? options.separator : separator;
    length = "length" in options ? toInteger_default(options.length) : length;
    omission = "omission" in options ? baseToString_default(options.omission) : omission;
  }
  string = toString_default(string);
  var strLength = string.length;
  if (hasUnicode_default(string)) {
    var strSymbols = stringToArray_default(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize_default(omission);
  if (end < 1) {
    return omission;
  }
  var result2 = strSymbols ? castSlice_default(strSymbols, 0, end).join("") : string.slice(0, end);
  if (separator === void 0) {
    return result2 + omission;
  }
  if (strSymbols) {
    end += result2.length - end;
  }
  if (isRegExp_default(separator)) {
    if (string.slice(end).search(separator)) {
      var match, substring = result2;
      if (!separator.global) {
        separator = RegExp(separator.source, toString_default(reFlags2.exec(separator)) + "g");
      }
      separator.lastIndex = 0;
      while (match = separator.exec(substring)) {
        var newEnd = match.index;
      }
      result2 = result2.slice(0, newEnd === void 0 ? end : newEnd);
    }
  } else if (string.indexOf(baseToString_default(separator), end) != end) {
    var index8 = result2.lastIndexOf(separator);
    if (index8 > -1) {
      result2 = result2.slice(0, index8);
    }
  }
  return result2 + omission;
}
var truncate_default = truncate;

// node_modules/lodash-es/unary.js
function unary(func) {
  return ary_default(func, 1);
}
var unary_default = unary;

// node_modules/lodash-es/_unescapeHtmlChar.js
var htmlUnescapes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
};
var unescapeHtmlChar = basePropertyOf_default(htmlUnescapes);
var unescapeHtmlChar_default = unescapeHtmlChar;

// node_modules/lodash-es/unescape.js
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
var reHasEscapedHtml = RegExp(reEscapedHtml.source);
function unescape(string) {
  string = toString_default(string);
  return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar_default) : string;
}
var unescape_default = unescape;

// node_modules/lodash-es/_createSet.js
var INFINITY6 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY6) ? noop_default : function(values2) {
  return new Set_default(values2);
};
var createSet_default = createSet;

// node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE3 = 200;
function baseUniq(array3, iteratee2, comparator) {
  var index8 = -1, includes2 = arrayIncludes_default, length = array3.length, isCommon = true, result2 = [], seen = result2;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith_default;
  } else if (length >= LARGE_ARRAY_SIZE3) {
    var set3 = iteratee2 ? null : createSet_default(array3);
    if (set3) {
      return setToArray_default(set3);
    }
    isCommon = false;
    includes2 = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee2 ? [] : result2;
  }
  outer:
    while (++index8 < length) {
      var value = array3[index8], computed = iteratee2 ? iteratee2(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee2) {
          seen.push(computed);
        }
        result2.push(value);
      } else if (!includes2(seen, computed, comparator)) {
        if (seen !== result2) {
          seen.push(computed);
        }
        result2.push(value);
      }
    }
  return result2;
}
var baseUniq_default = baseUniq;

// node_modules/lodash-es/union.js
var union2 = baseRest_default(function(arrays) {
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true));
});
var union_default = union2;

// node_modules/lodash-es/unionBy.js
var unionBy = baseRest_default(function(arrays) {
  var iteratee2 = last_default(arrays);
  if (isArrayLikeObject_default(iteratee2)) {
    iteratee2 = void 0;
  }
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true), baseIteratee_default(iteratee2, 2));
});
var unionBy_default = unionBy;

// node_modules/lodash-es/unionWith.js
var unionWith = baseRest_default(function(arrays) {
  var comparator = last_default(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseUniq_default(baseFlatten_default(arrays, 1, isArrayLikeObject_default, true), void 0, comparator);
});
var unionWith_default = unionWith;

// node_modules/lodash-es/uniq.js
function uniq(array3) {
  return array3 && array3.length ? baseUniq_default(array3) : [];
}
var uniq_default = uniq;

// node_modules/lodash-es/uniqBy.js
function uniqBy(array3, iteratee2) {
  return array3 && array3.length ? baseUniq_default(array3, baseIteratee_default(iteratee2, 2)) : [];
}
var uniqBy_default = uniqBy;

// node_modules/lodash-es/uniqWith.js
function uniqWith(array3, comparator) {
  comparator = typeof comparator == "function" ? comparator : void 0;
  return array3 && array3.length ? baseUniq_default(array3, void 0, comparator) : [];
}
var uniqWith_default = uniqWith;

// node_modules/lodash-es/uniqueId.js
var idCounter = 0;
function uniqueId(prefix) {
  var id2 = ++idCounter;
  return toString_default(prefix) + id2;
}
var uniqueId_default = uniqueId;

// node_modules/lodash-es/unset.js
function unset(object, path) {
  return object == null ? true : baseUnset_default(object, path);
}
var unset_default = unset;

// node_modules/lodash-es/unzip.js
var nativeMax15 = Math.max;
function unzip(array3) {
  if (!(array3 && array3.length)) {
    return [];
  }
  var length = 0;
  array3 = arrayFilter_default(array3, function(group2) {
    if (isArrayLikeObject_default(group2)) {
      length = nativeMax15(group2.length, length);
      return true;
    }
  });
  return baseTimes_default(length, function(index8) {
    return arrayMap_default(array3, baseProperty_default(index8));
  });
}
var unzip_default = unzip;

// node_modules/lodash-es/unzipWith.js
function unzipWith(array3, iteratee2) {
  if (!(array3 && array3.length)) {
    return [];
  }
  var result2 = unzip_default(array3);
  if (iteratee2 == null) {
    return result2;
  }
  return arrayMap_default(result2, function(group2) {
    return apply_default(iteratee2, void 0, group2);
  });
}
var unzipWith_default = unzipWith;

// node_modules/lodash-es/_baseUpdate.js
function baseUpdate(object, path, updater, customizer) {
  return baseSet_default(object, path, updater(baseGet_default(object, path)), customizer);
}
var baseUpdate_default = baseUpdate;

// node_modules/lodash-es/update.js
function update(object, path, updater) {
  return object == null ? object : baseUpdate_default(object, path, castFunction_default(updater));
}
var update_default = update;

// node_modules/lodash-es/updateWith.js
function updateWith(object, path, updater, customizer) {
  customizer = typeof customizer == "function" ? customizer : void 0;
  return object == null ? object : baseUpdate_default(object, path, castFunction_default(updater), customizer);
}
var updateWith_default = updateWith;

// node_modules/lodash-es/upperCase.js
var upperCase = createCompounder_default(function(result2, word, index8) {
  return result2 + (index8 ? " " : "") + word.toUpperCase();
});
var upperCase_default = upperCase;

// node_modules/lodash-es/valuesIn.js
function valuesIn(object) {
  return object == null ? [] : baseValues_default(object, keysIn_default(object));
}
var valuesIn_default = valuesIn;

// node_modules/lodash-es/without.js
var without = baseRest_default(function(array3, values2) {
  return isArrayLikeObject_default(array3) ? baseDifference_default(array3, values2) : [];
});
var without_default = without;

// node_modules/lodash-es/wrap.js
function wrap(value, wrapper) {
  return partial_default(castFunction_default(wrapper), value);
}
var wrap_default = wrap;

// node_modules/lodash-es/wrapperAt.js
var wrapperAt = flatRest_default(function(paths) {
  var length = paths.length, start2 = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
    return baseAt_default(object, paths);
  };
  if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper_default) || !isIndex_default(start2)) {
    return this.thru(interceptor);
  }
  value = value.slice(start2, +start2 + (length ? 1 : 0));
  value.__actions__.push({
    "func": thru_default,
    "args": [interceptor],
    "thisArg": void 0
  });
  return new LodashWrapper_default(value, this.__chain__).thru(function(array3) {
    if (length && !array3.length) {
      array3.push(void 0);
    }
    return array3;
  });
});
var wrapperAt_default = wrapperAt;

// node_modules/lodash-es/wrapperChain.js
function wrapperChain() {
  return chain_default(this);
}
var wrapperChain_default = wrapperChain;

// node_modules/lodash-es/wrapperReverse.js
function wrapperReverse() {
  var value = this.__wrapped__;
  if (value instanceof LazyWrapper_default) {
    var wrapped = value;
    if (this.__actions__.length) {
      wrapped = new LazyWrapper_default(this);
    }
    wrapped = wrapped.reverse();
    wrapped.__actions__.push({
      "func": thru_default,
      "args": [reverse_default],
      "thisArg": void 0
    });
    return new LodashWrapper_default(wrapped, this.__chain__);
  }
  return this.thru(reverse_default);
}
var wrapperReverse_default = wrapperReverse;

// node_modules/lodash-es/_baseXor.js
function baseXor(arrays, iteratee2, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? baseUniq_default(arrays[0]) : [];
  }
  var index8 = -1, result2 = Array(length);
  while (++index8 < length) {
    var array3 = arrays[index8], othIndex = -1;
    while (++othIndex < length) {
      if (othIndex != index8) {
        result2[index8] = baseDifference_default(result2[index8] || array3, arrays[othIndex], iteratee2, comparator);
      }
    }
  }
  return baseUniq_default(baseFlatten_default(result2, 1), iteratee2, comparator);
}
var baseXor_default = baseXor;

// node_modules/lodash-es/xor.js
var xor = baseRest_default(function(arrays) {
  return baseXor_default(arrayFilter_default(arrays, isArrayLikeObject_default));
});
var xor_default = xor;

// node_modules/lodash-es/xorBy.js
var xorBy = baseRest_default(function(arrays) {
  var iteratee2 = last_default(arrays);
  if (isArrayLikeObject_default(iteratee2)) {
    iteratee2 = void 0;
  }
  return baseXor_default(arrayFilter_default(arrays, isArrayLikeObject_default), baseIteratee_default(iteratee2, 2));
});
var xorBy_default = xorBy;

// node_modules/lodash-es/xorWith.js
var xorWith = baseRest_default(function(arrays) {
  var comparator = last_default(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseXor_default(arrayFilter_default(arrays, isArrayLikeObject_default), void 0, comparator);
});
var xorWith_default = xorWith;

// node_modules/lodash-es/zip.js
var zip2 = baseRest_default(unzip_default);
var zip_default = zip2;

// node_modules/lodash-es/_baseZipObject.js
function baseZipObject(props, values2, assignFunc) {
  var index8 = -1, length = props.length, valsLength = values2.length, result2 = {};
  while (++index8 < length) {
    var value = index8 < valsLength ? values2[index8] : void 0;
    assignFunc(result2, props[index8], value);
  }
  return result2;
}
var baseZipObject_default = baseZipObject;

// node_modules/lodash-es/zipObject.js
function zipObject(props, values2) {
  return baseZipObject_default(props || [], values2 || [], assignValue_default);
}
var zipObject_default = zipObject;

// node_modules/lodash-es/zipObjectDeep.js
function zipObjectDeep(props, values2) {
  return baseZipObject_default(props || [], values2 || [], baseSet_default);
}
var zipObjectDeep_default = zipObjectDeep;

// node_modules/lodash-es/zipWith.js
var zipWith = baseRest_default(function(arrays) {
  var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : void 0;
  iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : void 0;
  return unzipWith_default(arrays, iteratee2);
});
var zipWith_default = zipWith;

// node_modules/lodash-es/array.default.js
var array_default_default = {
  chunk: chunk_default,
  compact: compact_default,
  concat: concat_default,
  difference: difference_default,
  differenceBy: differenceBy_default,
  differenceWith: differenceWith_default,
  drop: drop_default,
  dropRight: dropRight_default,
  dropRightWhile: dropRightWhile_default,
  dropWhile: dropWhile_default,
  fill: fill_default,
  findIndex: findIndex_default,
  findLastIndex: findLastIndex_default,
  first: head_default,
  flatten: flatten_default,
  flattenDeep: flattenDeep_default,
  flattenDepth: flattenDepth_default,
  fromPairs: fromPairs_default,
  head: head_default,
  indexOf: indexOf_default,
  initial: initial_default,
  intersection: intersection_default,
  intersectionBy: intersectionBy_default,
  intersectionWith: intersectionWith_default,
  join: join_default2,
  last: last_default,
  lastIndexOf: lastIndexOf_default,
  nth: nth_default,
  pull: pull_default,
  pullAll: pullAll_default,
  pullAllBy: pullAllBy_default,
  pullAllWith: pullAllWith_default,
  pullAt: pullAt_default,
  remove: remove_default3,
  reverse: reverse_default,
  slice: slice_default,
  sortedIndex: sortedIndex_default,
  sortedIndexBy: sortedIndexBy_default,
  sortedIndexOf: sortedIndexOf_default,
  sortedLastIndex: sortedLastIndex_default,
  sortedLastIndexBy: sortedLastIndexBy_default,
  sortedLastIndexOf: sortedLastIndexOf_default,
  sortedUniq: sortedUniq_default,
  sortedUniqBy: sortedUniqBy_default,
  tail: tail_default,
  take: take_default,
  takeRight: takeRight_default,
  takeRightWhile: takeRightWhile_default,
  takeWhile: takeWhile_default,
  union: union_default,
  unionBy: unionBy_default,
  unionWith: unionWith_default,
  uniq: uniq_default,
  uniqBy: uniqBy_default,
  uniqWith: uniqWith_default,
  unzip: unzip_default,
  unzipWith: unzipWith_default,
  without: without_default,
  xor: xor_default,
  xorBy: xorBy_default,
  xorWith: xorWith_default,
  zip: zip_default,
  zipObject: zipObject_default,
  zipObjectDeep: zipObjectDeep_default,
  zipWith: zipWith_default
};

// node_modules/lodash-es/collection.default.js
var collection_default_default = {
  countBy: countBy_default,
  each: forEach_default,
  eachRight: forEachRight_default,
  every: every_default,
  filter: filter_default3,
  find: find_default,
  findLast: findLast_default,
  flatMap: flatMap_default,
  flatMapDeep: flatMapDeep_default,
  flatMapDepth: flatMapDepth_default,
  forEach: forEach_default,
  forEachRight: forEachRight_default,
  groupBy: groupBy_default,
  includes: includes_default,
  invokeMap: invokeMap_default,
  keyBy: keyBy_default,
  map: map_default,
  orderBy: orderBy_default,
  partition: partition_default,
  reduce: reduce_default,
  reduceRight: reduceRight_default,
  reject: reject_default,
  sample: sample_default,
  sampleSize: sampleSize_default,
  shuffle: shuffle_default2,
  size: size_default2,
  some: some_default,
  sortBy: sortBy_default
};

// node_modules/lodash-es/date.default.js
var date_default_default = {
  now: now_default
};

// node_modules/lodash-es/function.default.js
var function_default_default = {
  after: after_default,
  ary: ary_default,
  before: before_default,
  bind: bind_default,
  bindKey: bindKey_default,
  curry: curry_default,
  curryRight: curryRight_default,
  debounce: debounce_default,
  defer: defer_default,
  delay: delay_default2,
  flip: flip_default,
  memoize: memoize_default,
  negate: negate_default,
  once: once_default,
  overArgs: overArgs_default,
  partial: partial_default,
  partialRight: partialRight_default,
  rearg: rearg_default,
  rest: rest_default,
  spread: spread_default,
  throttle: throttle_default,
  unary: unary_default,
  wrap: wrap_default
};

// node_modules/lodash-es/lang.default.js
var lang_default_default = {
  castArray: castArray_default,
  clone: clone_default2,
  cloneDeep: cloneDeep_default,
  cloneDeepWith: cloneDeepWith_default,
  cloneWith: cloneWith_default,
  conformsTo: conformsTo_default,
  eq: eq_default,
  gt: gt_default,
  gte: gte_default,
  isArguments: isArguments_default,
  isArray: isArray_default,
  isArrayBuffer: isArrayBuffer_default,
  isArrayLike: isArrayLike_default,
  isArrayLikeObject: isArrayLikeObject_default,
  isBoolean: isBoolean_default,
  isBuffer: isBuffer_default,
  isDate: isDate_default,
  isElement: isElement_default,
  isEmpty: isEmpty_default,
  isEqual: isEqual_default,
  isEqualWith: isEqualWith_default,
  isError: isError_default,
  isFinite: isFinite_default,
  isFunction: isFunction_default,
  isInteger: isInteger_default,
  isLength: isLength_default,
  isMap: isMap_default,
  isMatch: isMatch_default,
  isMatchWith: isMatchWith_default,
  isNaN: isNaN_default,
  isNative: isNative_default,
  isNil: isNil_default,
  isNull: isNull_default,
  isNumber: isNumber_default,
  isObject: isObject_default,
  isObjectLike: isObjectLike_default,
  isPlainObject: isPlainObject_default,
  isRegExp: isRegExp_default,
  isSafeInteger: isSafeInteger_default,
  isSet: isSet_default,
  isString: isString_default,
  isSymbol: isSymbol_default,
  isTypedArray: isTypedArray_default,
  isUndefined: isUndefined_default,
  isWeakMap: isWeakMap_default,
  isWeakSet: isWeakSet_default,
  lt: lt_default,
  lte: lte_default,
  toArray: toArray_default,
  toFinite: toFinite_default,
  toInteger: toInteger_default,
  toLength: toLength_default,
  toNumber: toNumber_default,
  toPlainObject: toPlainObject_default,
  toSafeInteger: toSafeInteger_default,
  toString: toString_default
};

// node_modules/lodash-es/math.default.js
var math_default_default = {
  add: add_default,
  ceil: ceil_default,
  divide: divide_default,
  floor: floor_default,
  max: max_default,
  maxBy: maxBy_default,
  mean: mean_default,
  meanBy: meanBy_default,
  min: min_default,
  minBy: minBy_default,
  multiply: multiply_default,
  round: round_default2,
  subtract: subtract_default,
  sum: sum_default,
  sumBy: sumBy_default
};

// node_modules/lodash-es/number.default.js
var number_default_default = {
  clamp: clamp_default,
  inRange: inRange_default,
  random: random_default
};

// node_modules/lodash-es/object.default.js
var object_default_default = {
  assign: assign_default,
  assignIn: assignIn_default,
  assignInWith: assignInWith_default,
  assignWith: assignWith_default,
  at: at_default,
  create: create_default2,
  defaults: defaults_default,
  defaultsDeep: defaultsDeep_default,
  entries: toPairs_default,
  entriesIn: toPairsIn_default,
  extend: assignIn_default,
  extendWith: assignInWith_default,
  findKey: findKey_default,
  findLastKey: findLastKey_default,
  forIn: forIn_default,
  forInRight: forInRight_default,
  forOwn: forOwn_default,
  forOwnRight: forOwnRight_default,
  functions: functions_default,
  functionsIn: functionsIn_default,
  get: get_default,
  has: has_default,
  hasIn: hasIn_default,
  invert: invert_default,
  invertBy: invertBy_default,
  invoke: invoke_default,
  keys: keys_default,
  keysIn: keysIn_default,
  mapKeys: mapKeys_default,
  mapValues: mapValues_default,
  merge: merge_default3,
  mergeWith: mergeWith_default,
  omit: omit_default,
  omitBy: omitBy_default,
  pick: pick_default,
  pickBy: pickBy_default,
  result: result_default,
  set: set_default,
  setWith: setWith_default,
  toPairs: toPairs_default,
  toPairsIn: toPairsIn_default,
  transform: transform_default,
  unset: unset_default,
  update: update_default,
  updateWith: updateWith_default,
  values: values_default,
  valuesIn: valuesIn_default
};

// node_modules/lodash-es/seq.default.js
var seq_default_default = {
  at: wrapperAt_default,
  chain: chain_default,
  commit: commit_default,
  lodash: wrapperLodash_default,
  next: next_default,
  plant: plant_default,
  reverse: wrapperReverse_default,
  tap: tap_default,
  thru: thru_default,
  toIterator: toIterator_default,
  toJSON: wrapperValue_default,
  value: wrapperValue_default,
  valueOf: wrapperValue_default,
  wrapperChain: wrapperChain_default
};

// node_modules/lodash-es/string.default.js
var string_default_default = {
  camelCase: camelCase_default,
  capitalize: capitalize_default,
  deburr: deburr_default,
  endsWith: endsWith_default,
  escape: escape_default,
  escapeRegExp: escapeRegExp_default,
  kebabCase: kebabCase_default,
  lowerCase: lowerCase_default,
  lowerFirst: lowerFirst_default,
  pad: pad_default,
  padEnd: padEnd_default,
  padStart: padStart_default,
  parseInt: parseInt_default,
  repeat: repeat_default,
  replace: replace_default,
  snakeCase: snakeCase_default,
  split: split_default,
  startCase: startCase_default,
  startsWith: startsWith_default,
  template: template_default,
  templateSettings: templateSettings_default,
  toLower: toLower_default,
  toUpper: toUpper_default,
  trim: trim_default,
  trimEnd: trimEnd_default,
  trimStart: trimStart_default,
  truncate: truncate_default,
  unescape: unescape_default,
  upperCase: upperCase_default,
  upperFirst: upperFirst_default,
  words: words_default
};

// node_modules/lodash-es/util.default.js
var util_default_default = {
  attempt: attempt_default,
  bindAll: bindAll_default,
  cond: cond_default,
  conforms: conforms_default,
  constant: constant_default5,
  defaultTo: defaultTo_default,
  flow: flow_default,
  flowRight: flowRight_default,
  identity: identity_default,
  iteratee: iteratee_default,
  matches: matches_default,
  matchesProperty: matchesProperty_default,
  method: method_default,
  methodOf: methodOf_default,
  mixin: mixin_default,
  noop: noop_default,
  nthArg: nthArg_default,
  over: over_default,
  overEvery: overEvery_default,
  overSome: overSome_default,
  property: property_default2,
  propertyOf: propertyOf_default,
  range: range_default,
  rangeRight: rangeRight_default,
  stubArray: stubArray_default,
  stubFalse: stubFalse_default,
  stubObject: stubObject_default,
  stubString: stubString_default,
  stubTrue: stubTrue_default,
  times: times_default,
  toPath: toPath_default,
  uniqueId: uniqueId_default
};

// node_modules/lodash-es/_lazyClone.js
function lazyClone() {
  var result2 = new LazyWrapper_default(this.__wrapped__);
  result2.__actions__ = copyArray_default(this.__actions__);
  result2.__dir__ = this.__dir__;
  result2.__filtered__ = this.__filtered__;
  result2.__iteratees__ = copyArray_default(this.__iteratees__);
  result2.__takeCount__ = this.__takeCount__;
  result2.__views__ = copyArray_default(this.__views__);
  return result2;
}
var lazyClone_default = lazyClone;

// node_modules/lodash-es/_lazyReverse.js
function lazyReverse() {
  if (this.__filtered__) {
    var result2 = new LazyWrapper_default(this);
    result2.__dir__ = -1;
    result2.__filtered__ = true;
  } else {
    result2 = this.clone();
    result2.__dir__ *= -1;
  }
  return result2;
}
var lazyReverse_default = lazyReverse;

// node_modules/lodash-es/_getView.js
var nativeMax16 = Math.max;
var nativeMin13 = Math.min;
function getView(start2, end, transforms) {
  var index8 = -1, length = transforms.length;
  while (++index8 < length) {
    var data = transforms[index8], size2 = data.size;
    switch (data.type) {
      case "drop":
        start2 += size2;
        break;
      case "dropRight":
        end -= size2;
        break;
      case "take":
        end = nativeMin13(end, start2 + size2);
        break;
      case "takeRight":
        start2 = nativeMax16(start2, end - size2);
        break;
    }
  }
  return { "start": start2, "end": end };
}
var getView_default = getView;

// node_modules/lodash-es/_lazyValue.js
var LAZY_FILTER_FLAG = 1;
var LAZY_MAP_FLAG = 2;
var nativeMin14 = Math.min;
function lazyValue() {
  var array3 = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray_default(array3), isRight = dir < 0, arrLength = isArr ? array3.length : 0, view = getView_default(0, arrLength, this.__views__), start2 = view.start, end = view.end, length = end - start2, index8 = isRight ? end : start2 - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin14(length, this.__takeCount__);
  if (!isArr || !isRight && arrLength == length && takeCount == length) {
    return baseWrapperValue_default(array3, this.__actions__);
  }
  var result2 = [];
  outer:
    while (length-- && resIndex < takeCount) {
      index8 += dir;
      var iterIndex = -1, value = array3[index8];
      while (++iterIndex < iterLength) {
        var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
        if (type == LAZY_MAP_FLAG) {
          value = computed;
        } else if (!computed) {
          if (type == LAZY_FILTER_FLAG) {
            continue outer;
          } else {
            break outer;
          }
        }
      }
      result2[resIndex++] = value;
    }
  return result2;
}
var lazyValue_default = lazyValue;

// node_modules/lodash-es/lodash.default.js
var VERSION = "4.17.21";
var WRAP_BIND_KEY_FLAG7 = 2;
var LAZY_FILTER_FLAG2 = 1;
var LAZY_WHILE_FLAG = 3;
var MAX_ARRAY_LENGTH7 = 4294967295;
var arrayProto6 = Array.prototype;
var objectProto29 = Object.prototype;
var hasOwnProperty25 = objectProto29.hasOwnProperty;
var symIterator2 = Symbol_default ? Symbol_default.iterator : void 0;
var nativeMax17 = Math.max;
var nativeMin15 = Math.min;
var mixin2 = /* @__PURE__ */ (function(func) {
  return function(object, source, options) {
    if (options == null) {
      var isObj = isObject_default(source), props = isObj && keys_default(source), methodNames = props && props.length && baseFunctions_default(source, props);
      if (!(methodNames ? methodNames.length : isObj)) {
        options = source;
        source = object;
        object = this;
      }
    }
    return func(object, source, options);
  };
})(mixin_default);
wrapperLodash_default.after = function_default_default.after;
wrapperLodash_default.ary = function_default_default.ary;
wrapperLodash_default.assign = object_default_default.assign;
wrapperLodash_default.assignIn = object_default_default.assignIn;
wrapperLodash_default.assignInWith = object_default_default.assignInWith;
wrapperLodash_default.assignWith = object_default_default.assignWith;
wrapperLodash_default.at = object_default_default.at;
wrapperLodash_default.before = function_default_default.before;
wrapperLodash_default.bind = function_default_default.bind;
wrapperLodash_default.bindAll = util_default_default.bindAll;
wrapperLodash_default.bindKey = function_default_default.bindKey;
wrapperLodash_default.castArray = lang_default_default.castArray;
wrapperLodash_default.chain = seq_default_default.chain;
wrapperLodash_default.chunk = array_default_default.chunk;
wrapperLodash_default.compact = array_default_default.compact;
wrapperLodash_default.concat = array_default_default.concat;
wrapperLodash_default.cond = util_default_default.cond;
wrapperLodash_default.conforms = util_default_default.conforms;
wrapperLodash_default.constant = util_default_default.constant;
wrapperLodash_default.countBy = collection_default_default.countBy;
wrapperLodash_default.create = object_default_default.create;
wrapperLodash_default.curry = function_default_default.curry;
wrapperLodash_default.curryRight = function_default_default.curryRight;
wrapperLodash_default.debounce = function_default_default.debounce;
wrapperLodash_default.defaults = object_default_default.defaults;
wrapperLodash_default.defaultsDeep = object_default_default.defaultsDeep;
wrapperLodash_default.defer = function_default_default.defer;
wrapperLodash_default.delay = function_default_default.delay;
wrapperLodash_default.difference = array_default_default.difference;
wrapperLodash_default.differenceBy = array_default_default.differenceBy;
wrapperLodash_default.differenceWith = array_default_default.differenceWith;
wrapperLodash_default.drop = array_default_default.drop;
wrapperLodash_default.dropRight = array_default_default.dropRight;
wrapperLodash_default.dropRightWhile = array_default_default.dropRightWhile;
wrapperLodash_default.dropWhile = array_default_default.dropWhile;
wrapperLodash_default.fill = array_default_default.fill;
wrapperLodash_default.filter = collection_default_default.filter;
wrapperLodash_default.flatMap = collection_default_default.flatMap;
wrapperLodash_default.flatMapDeep = collection_default_default.flatMapDeep;
wrapperLodash_default.flatMapDepth = collection_default_default.flatMapDepth;
wrapperLodash_default.flatten = array_default_default.flatten;
wrapperLodash_default.flattenDeep = array_default_default.flattenDeep;
wrapperLodash_default.flattenDepth = array_default_default.flattenDepth;
wrapperLodash_default.flip = function_default_default.flip;
wrapperLodash_default.flow = util_default_default.flow;
wrapperLodash_default.flowRight = util_default_default.flowRight;
wrapperLodash_default.fromPairs = array_default_default.fromPairs;
wrapperLodash_default.functions = object_default_default.functions;
wrapperLodash_default.functionsIn = object_default_default.functionsIn;
wrapperLodash_default.groupBy = collection_default_default.groupBy;
wrapperLodash_default.initial = array_default_default.initial;
wrapperLodash_default.intersection = array_default_default.intersection;
wrapperLodash_default.intersectionBy = array_default_default.intersectionBy;
wrapperLodash_default.intersectionWith = array_default_default.intersectionWith;
wrapperLodash_default.invert = object_default_default.invert;
wrapperLodash_default.invertBy = object_default_default.invertBy;
wrapperLodash_default.invokeMap = collection_default_default.invokeMap;
wrapperLodash_default.iteratee = util_default_default.iteratee;
wrapperLodash_default.keyBy = collection_default_default.keyBy;
wrapperLodash_default.keys = keys_default;
wrapperLodash_default.keysIn = object_default_default.keysIn;
wrapperLodash_default.map = collection_default_default.map;
wrapperLodash_default.mapKeys = object_default_default.mapKeys;
wrapperLodash_default.mapValues = object_default_default.mapValues;
wrapperLodash_default.matches = util_default_default.matches;
wrapperLodash_default.matchesProperty = util_default_default.matchesProperty;
wrapperLodash_default.memoize = function_default_default.memoize;
wrapperLodash_default.merge = object_default_default.merge;
wrapperLodash_default.mergeWith = object_default_default.mergeWith;
wrapperLodash_default.method = util_default_default.method;
wrapperLodash_default.methodOf = util_default_default.methodOf;
wrapperLodash_default.mixin = mixin2;
wrapperLodash_default.negate = negate_default;
wrapperLodash_default.nthArg = util_default_default.nthArg;
wrapperLodash_default.omit = object_default_default.omit;
wrapperLodash_default.omitBy = object_default_default.omitBy;
wrapperLodash_default.once = function_default_default.once;
wrapperLodash_default.orderBy = collection_default_default.orderBy;
wrapperLodash_default.over = util_default_default.over;
wrapperLodash_default.overArgs = function_default_default.overArgs;
wrapperLodash_default.overEvery = util_default_default.overEvery;
wrapperLodash_default.overSome = util_default_default.overSome;
wrapperLodash_default.partial = function_default_default.partial;
wrapperLodash_default.partialRight = function_default_default.partialRight;
wrapperLodash_default.partition = collection_default_default.partition;
wrapperLodash_default.pick = object_default_default.pick;
wrapperLodash_default.pickBy = object_default_default.pickBy;
wrapperLodash_default.property = util_default_default.property;
wrapperLodash_default.propertyOf = util_default_default.propertyOf;
wrapperLodash_default.pull = array_default_default.pull;
wrapperLodash_default.pullAll = array_default_default.pullAll;
wrapperLodash_default.pullAllBy = array_default_default.pullAllBy;
wrapperLodash_default.pullAllWith = array_default_default.pullAllWith;
wrapperLodash_default.pullAt = array_default_default.pullAt;
wrapperLodash_default.range = util_default_default.range;
wrapperLodash_default.rangeRight = util_default_default.rangeRight;
wrapperLodash_default.rearg = function_default_default.rearg;
wrapperLodash_default.reject = collection_default_default.reject;
wrapperLodash_default.remove = array_default_default.remove;
wrapperLodash_default.rest = function_default_default.rest;
wrapperLodash_default.reverse = array_default_default.reverse;
wrapperLodash_default.sampleSize = collection_default_default.sampleSize;
wrapperLodash_default.set = object_default_default.set;
wrapperLodash_default.setWith = object_default_default.setWith;
wrapperLodash_default.shuffle = collection_default_default.shuffle;
wrapperLodash_default.slice = array_default_default.slice;
wrapperLodash_default.sortBy = collection_default_default.sortBy;
wrapperLodash_default.sortedUniq = array_default_default.sortedUniq;
wrapperLodash_default.sortedUniqBy = array_default_default.sortedUniqBy;
wrapperLodash_default.split = string_default_default.split;
wrapperLodash_default.spread = function_default_default.spread;
wrapperLodash_default.tail = array_default_default.tail;
wrapperLodash_default.take = array_default_default.take;
wrapperLodash_default.takeRight = array_default_default.takeRight;
wrapperLodash_default.takeRightWhile = array_default_default.takeRightWhile;
wrapperLodash_default.takeWhile = array_default_default.takeWhile;
wrapperLodash_default.tap = seq_default_default.tap;
wrapperLodash_default.throttle = function_default_default.throttle;
wrapperLodash_default.thru = thru_default;
wrapperLodash_default.toArray = lang_default_default.toArray;
wrapperLodash_default.toPairs = object_default_default.toPairs;
wrapperLodash_default.toPairsIn = object_default_default.toPairsIn;
wrapperLodash_default.toPath = util_default_default.toPath;
wrapperLodash_default.toPlainObject = lang_default_default.toPlainObject;
wrapperLodash_default.transform = object_default_default.transform;
wrapperLodash_default.unary = function_default_default.unary;
wrapperLodash_default.union = array_default_default.union;
wrapperLodash_default.unionBy = array_default_default.unionBy;
wrapperLodash_default.unionWith = array_default_default.unionWith;
wrapperLodash_default.uniq = array_default_default.uniq;
wrapperLodash_default.uniqBy = array_default_default.uniqBy;
wrapperLodash_default.uniqWith = array_default_default.uniqWith;
wrapperLodash_default.unset = object_default_default.unset;
wrapperLodash_default.unzip = array_default_default.unzip;
wrapperLodash_default.unzipWith = array_default_default.unzipWith;
wrapperLodash_default.update = object_default_default.update;
wrapperLodash_default.updateWith = object_default_default.updateWith;
wrapperLodash_default.values = object_default_default.values;
wrapperLodash_default.valuesIn = object_default_default.valuesIn;
wrapperLodash_default.without = array_default_default.without;
wrapperLodash_default.words = string_default_default.words;
wrapperLodash_default.wrap = function_default_default.wrap;
wrapperLodash_default.xor = array_default_default.xor;
wrapperLodash_default.xorBy = array_default_default.xorBy;
wrapperLodash_default.xorWith = array_default_default.xorWith;
wrapperLodash_default.zip = array_default_default.zip;
wrapperLodash_default.zipObject = array_default_default.zipObject;
wrapperLodash_default.zipObjectDeep = array_default_default.zipObjectDeep;
wrapperLodash_default.zipWith = array_default_default.zipWith;
wrapperLodash_default.entries = object_default_default.toPairs;
wrapperLodash_default.entriesIn = object_default_default.toPairsIn;
wrapperLodash_default.extend = object_default_default.assignIn;
wrapperLodash_default.extendWith = object_default_default.assignInWith;
mixin2(wrapperLodash_default, wrapperLodash_default);
wrapperLodash_default.add = math_default_default.add;
wrapperLodash_default.attempt = util_default_default.attempt;
wrapperLodash_default.camelCase = string_default_default.camelCase;
wrapperLodash_default.capitalize = string_default_default.capitalize;
wrapperLodash_default.ceil = math_default_default.ceil;
wrapperLodash_default.clamp = number_default_default.clamp;
wrapperLodash_default.clone = lang_default_default.clone;
wrapperLodash_default.cloneDeep = lang_default_default.cloneDeep;
wrapperLodash_default.cloneDeepWith = lang_default_default.cloneDeepWith;
wrapperLodash_default.cloneWith = lang_default_default.cloneWith;
wrapperLodash_default.conformsTo = lang_default_default.conformsTo;
wrapperLodash_default.deburr = string_default_default.deburr;
wrapperLodash_default.defaultTo = util_default_default.defaultTo;
wrapperLodash_default.divide = math_default_default.divide;
wrapperLodash_default.endsWith = string_default_default.endsWith;
wrapperLodash_default.eq = lang_default_default.eq;
wrapperLodash_default.escape = string_default_default.escape;
wrapperLodash_default.escapeRegExp = string_default_default.escapeRegExp;
wrapperLodash_default.every = collection_default_default.every;
wrapperLodash_default.find = collection_default_default.find;
wrapperLodash_default.findIndex = array_default_default.findIndex;
wrapperLodash_default.findKey = object_default_default.findKey;
wrapperLodash_default.findLast = collection_default_default.findLast;
wrapperLodash_default.findLastIndex = array_default_default.findLastIndex;
wrapperLodash_default.findLastKey = object_default_default.findLastKey;
wrapperLodash_default.floor = math_default_default.floor;
wrapperLodash_default.forEach = collection_default_default.forEach;
wrapperLodash_default.forEachRight = collection_default_default.forEachRight;
wrapperLodash_default.forIn = object_default_default.forIn;
wrapperLodash_default.forInRight = object_default_default.forInRight;
wrapperLodash_default.forOwn = object_default_default.forOwn;
wrapperLodash_default.forOwnRight = object_default_default.forOwnRight;
wrapperLodash_default.get = object_default_default.get;
wrapperLodash_default.gt = lang_default_default.gt;
wrapperLodash_default.gte = lang_default_default.gte;
wrapperLodash_default.has = object_default_default.has;
wrapperLodash_default.hasIn = object_default_default.hasIn;
wrapperLodash_default.head = array_default_default.head;
wrapperLodash_default.identity = identity_default;
wrapperLodash_default.includes = collection_default_default.includes;
wrapperLodash_default.indexOf = array_default_default.indexOf;
wrapperLodash_default.inRange = number_default_default.inRange;
wrapperLodash_default.invoke = object_default_default.invoke;
wrapperLodash_default.isArguments = lang_default_default.isArguments;
wrapperLodash_default.isArray = isArray_default;
wrapperLodash_default.isArrayBuffer = lang_default_default.isArrayBuffer;
wrapperLodash_default.isArrayLike = lang_default_default.isArrayLike;
wrapperLodash_default.isArrayLikeObject = lang_default_default.isArrayLikeObject;
wrapperLodash_default.isBoolean = lang_default_default.isBoolean;
wrapperLodash_default.isBuffer = lang_default_default.isBuffer;
wrapperLodash_default.isDate = lang_default_default.isDate;
wrapperLodash_default.isElement = lang_default_default.isElement;
wrapperLodash_default.isEmpty = lang_default_default.isEmpty;
wrapperLodash_default.isEqual = lang_default_default.isEqual;
wrapperLodash_default.isEqualWith = lang_default_default.isEqualWith;
wrapperLodash_default.isError = lang_default_default.isError;
wrapperLodash_default.isFinite = lang_default_default.isFinite;
wrapperLodash_default.isFunction = lang_default_default.isFunction;
wrapperLodash_default.isInteger = lang_default_default.isInteger;
wrapperLodash_default.isLength = lang_default_default.isLength;
wrapperLodash_default.isMap = lang_default_default.isMap;
wrapperLodash_default.isMatch = lang_default_default.isMatch;
wrapperLodash_default.isMatchWith = lang_default_default.isMatchWith;
wrapperLodash_default.isNaN = lang_default_default.isNaN;
wrapperLodash_default.isNative = lang_default_default.isNative;
wrapperLodash_default.isNil = lang_default_default.isNil;
wrapperLodash_default.isNull = lang_default_default.isNull;
wrapperLodash_default.isNumber = lang_default_default.isNumber;
wrapperLodash_default.isObject = isObject_default;
wrapperLodash_default.isObjectLike = lang_default_default.isObjectLike;
wrapperLodash_default.isPlainObject = lang_default_default.isPlainObject;
wrapperLodash_default.isRegExp = lang_default_default.isRegExp;
wrapperLodash_default.isSafeInteger = lang_default_default.isSafeInteger;
wrapperLodash_default.isSet = lang_default_default.isSet;
wrapperLodash_default.isString = lang_default_default.isString;
wrapperLodash_default.isSymbol = lang_default_default.isSymbol;
wrapperLodash_default.isTypedArray = lang_default_default.isTypedArray;
wrapperLodash_default.isUndefined = lang_default_default.isUndefined;
wrapperLodash_default.isWeakMap = lang_default_default.isWeakMap;
wrapperLodash_default.isWeakSet = lang_default_default.isWeakSet;
wrapperLodash_default.join = array_default_default.join;
wrapperLodash_default.kebabCase = string_default_default.kebabCase;
wrapperLodash_default.last = last_default;
wrapperLodash_default.lastIndexOf = array_default_default.lastIndexOf;
wrapperLodash_default.lowerCase = string_default_default.lowerCase;
wrapperLodash_default.lowerFirst = string_default_default.lowerFirst;
wrapperLodash_default.lt = lang_default_default.lt;
wrapperLodash_default.lte = lang_default_default.lte;
wrapperLodash_default.max = math_default_default.max;
wrapperLodash_default.maxBy = math_default_default.maxBy;
wrapperLodash_default.mean = math_default_default.mean;
wrapperLodash_default.meanBy = math_default_default.meanBy;
wrapperLodash_default.min = math_default_default.min;
wrapperLodash_default.minBy = math_default_default.minBy;
wrapperLodash_default.stubArray = util_default_default.stubArray;
wrapperLodash_default.stubFalse = util_default_default.stubFalse;
wrapperLodash_default.stubObject = util_default_default.stubObject;
wrapperLodash_default.stubString = util_default_default.stubString;
wrapperLodash_default.stubTrue = util_default_default.stubTrue;
wrapperLodash_default.multiply = math_default_default.multiply;
wrapperLodash_default.nth = array_default_default.nth;
wrapperLodash_default.noop = util_default_default.noop;
wrapperLodash_default.now = date_default_default.now;
wrapperLodash_default.pad = string_default_default.pad;
wrapperLodash_default.padEnd = string_default_default.padEnd;
wrapperLodash_default.padStart = string_default_default.padStart;
wrapperLodash_default.parseInt = string_default_default.parseInt;
wrapperLodash_default.random = number_default_default.random;
wrapperLodash_default.reduce = collection_default_default.reduce;
wrapperLodash_default.reduceRight = collection_default_default.reduceRight;
wrapperLodash_default.repeat = string_default_default.repeat;
wrapperLodash_default.replace = string_default_default.replace;
wrapperLodash_default.result = object_default_default.result;
wrapperLodash_default.round = math_default_default.round;
wrapperLodash_default.sample = collection_default_default.sample;
wrapperLodash_default.size = collection_default_default.size;
wrapperLodash_default.snakeCase = string_default_default.snakeCase;
wrapperLodash_default.some = collection_default_default.some;
wrapperLodash_default.sortedIndex = array_default_default.sortedIndex;
wrapperLodash_default.sortedIndexBy = array_default_default.sortedIndexBy;
wrapperLodash_default.sortedIndexOf = array_default_default.sortedIndexOf;
wrapperLodash_default.sortedLastIndex = array_default_default.sortedLastIndex;
wrapperLodash_default.sortedLastIndexBy = array_default_default.sortedLastIndexBy;
wrapperLodash_default.sortedLastIndexOf = array_default_default.sortedLastIndexOf;
wrapperLodash_default.startCase = string_default_default.startCase;
wrapperLodash_default.startsWith = string_default_default.startsWith;
wrapperLodash_default.subtract = math_default_default.subtract;
wrapperLodash_default.sum = math_default_default.sum;
wrapperLodash_default.sumBy = math_default_default.sumBy;
wrapperLodash_default.template = string_default_default.template;
wrapperLodash_default.times = util_default_default.times;
wrapperLodash_default.toFinite = lang_default_default.toFinite;
wrapperLodash_default.toInteger = toInteger_default;
wrapperLodash_default.toLength = lang_default_default.toLength;
wrapperLodash_default.toLower = string_default_default.toLower;
wrapperLodash_default.toNumber = lang_default_default.toNumber;
wrapperLodash_default.toSafeInteger = lang_default_default.toSafeInteger;
wrapperLodash_default.toString = lang_default_default.toString;
wrapperLodash_default.toUpper = string_default_default.toUpper;
wrapperLodash_default.trim = string_default_default.trim;
wrapperLodash_default.trimEnd = string_default_default.trimEnd;
wrapperLodash_default.trimStart = string_default_default.trimStart;
wrapperLodash_default.truncate = string_default_default.truncate;
wrapperLodash_default.unescape = string_default_default.unescape;
wrapperLodash_default.uniqueId = util_default_default.uniqueId;
wrapperLodash_default.upperCase = string_default_default.upperCase;
wrapperLodash_default.upperFirst = string_default_default.upperFirst;
wrapperLodash_default.each = collection_default_default.forEach;
wrapperLodash_default.eachRight = collection_default_default.forEachRight;
wrapperLodash_default.first = array_default_default.head;
mixin2(wrapperLodash_default, (function() {
  var source = {};
  baseForOwn_default(wrapperLodash_default, function(func, methodName) {
    if (!hasOwnProperty25.call(wrapperLodash_default.prototype, methodName)) {
      source[methodName] = func;
    }
  });
  return source;
})(), { "chain": false });
wrapperLodash_default.VERSION = VERSION;
(wrapperLodash_default.templateSettings = string_default_default.templateSettings).imports._ = wrapperLodash_default;
arrayEach_default(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
  wrapperLodash_default[methodName].placeholder = wrapperLodash_default;
});
arrayEach_default(["drop", "take"], function(methodName, index8) {
  LazyWrapper_default.prototype[methodName] = function(n2) {
    n2 = n2 === void 0 ? 1 : nativeMax17(toInteger_default(n2), 0);
    var result2 = this.__filtered__ && !index8 ? new LazyWrapper_default(this) : this.clone();
    if (result2.__filtered__) {
      result2.__takeCount__ = nativeMin15(n2, result2.__takeCount__);
    } else {
      result2.__views__.push({
        "size": nativeMin15(n2, MAX_ARRAY_LENGTH7),
        "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
      });
    }
    return result2;
  };
  LazyWrapper_default.prototype[methodName + "Right"] = function(n2) {
    return this.reverse()[methodName](n2).reverse();
  };
});
arrayEach_default(["filter", "map", "takeWhile"], function(methodName, index8) {
  var type = index8 + 1, isFilter = type == LAZY_FILTER_FLAG2 || type == LAZY_WHILE_FLAG;
  LazyWrapper_default.prototype[methodName] = function(iteratee2) {
    var result2 = this.clone();
    result2.__iteratees__.push({
      "iteratee": baseIteratee_default(iteratee2, 3),
      "type": type
    });
    result2.__filtered__ = result2.__filtered__ || isFilter;
    return result2;
  };
});
arrayEach_default(["head", "last"], function(methodName, index8) {
  var takeName = "take" + (index8 ? "Right" : "");
  LazyWrapper_default.prototype[methodName] = function() {
    return this[takeName](1).value()[0];
  };
});
arrayEach_default(["initial", "tail"], function(methodName, index8) {
  var dropName = "drop" + (index8 ? "" : "Right");
  LazyWrapper_default.prototype[methodName] = function() {
    return this.__filtered__ ? new LazyWrapper_default(this) : this[dropName](1);
  };
});
LazyWrapper_default.prototype.compact = function() {
  return this.filter(identity_default);
};
LazyWrapper_default.prototype.find = function(predicate) {
  return this.filter(predicate).head();
};
LazyWrapper_default.prototype.findLast = function(predicate) {
  return this.reverse().find(predicate);
};
LazyWrapper_default.prototype.invokeMap = baseRest_default(function(path, args) {
  if (typeof path == "function") {
    return new LazyWrapper_default(this);
  }
  return this.map(function(value) {
    return baseInvoke_default(value, path, args);
  });
});
LazyWrapper_default.prototype.reject = function(predicate) {
  return this.filter(negate_default(baseIteratee_default(predicate)));
};
LazyWrapper_default.prototype.slice = function(start2, end) {
  start2 = toInteger_default(start2);
  var result2 = this;
  if (result2.__filtered__ && (start2 > 0 || end < 0)) {
    return new LazyWrapper_default(result2);
  }
  if (start2 < 0) {
    result2 = result2.takeRight(-start2);
  } else if (start2) {
    result2 = result2.drop(start2);
  }
  if (end !== void 0) {
    end = toInteger_default(end);
    result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start2);
  }
  return result2;
};
LazyWrapper_default.prototype.takeRightWhile = function(predicate) {
  return this.reverse().takeWhile(predicate).reverse();
};
LazyWrapper_default.prototype.toArray = function() {
  return this.take(MAX_ARRAY_LENGTH7);
};
baseForOwn_default(LazyWrapper_default.prototype, function(func, methodName) {
  var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = wrapperLodash_default[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
  if (!lodashFunc) {
    return;
  }
  wrapperLodash_default.prototype[methodName] = function() {
    var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper_default, iteratee2 = args[0], useLazy = isLazy || isArray_default(value);
    var interceptor = function(value2) {
      var result3 = lodashFunc.apply(wrapperLodash_default, arrayPush_default([value2], args));
      return isTaker && chainAll ? result3[0] : result3;
    };
    if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
      isLazy = useLazy = false;
    }
    var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
    if (!retUnwrapped && useLazy) {
      value = onlyLazy ? value : new LazyWrapper_default(this);
      var result2 = func.apply(value, args);
      result2.__actions__.push({ "func": thru_default, "args": [interceptor], "thisArg": void 0 });
      return new LodashWrapper_default(result2, chainAll);
    }
    if (isUnwrapped && onlyLazy) {
      return func.apply(this, args);
    }
    result2 = this.thru(interceptor);
    return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
  };
});
arrayEach_default(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
  var func = arrayProto6[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
  wrapperLodash_default.prototype[methodName] = function() {
    var args = arguments;
    if (retUnwrapped && !this.__chain__) {
      var value = this.value();
      return func.apply(isArray_default(value) ? value : [], args);
    }
    return this[chainName](function(value2) {
      return func.apply(isArray_default(value2) ? value2 : [], args);
    });
  };
});
baseForOwn_default(LazyWrapper_default.prototype, function(func, methodName) {
  var lodashFunc = wrapperLodash_default[methodName];
  if (lodashFunc) {
    var key = lodashFunc.name + "";
    if (!hasOwnProperty25.call(realNames_default, key)) {
      realNames_default[key] = [];
    }
    realNames_default[key].push({ "name": methodName, "func": lodashFunc });
  }
});
realNames_default[createHybrid_default(void 0, WRAP_BIND_KEY_FLAG7).name] = [{
  "name": "wrapper",
  "func": void 0
}];
LazyWrapper_default.prototype.clone = lazyClone_default;
LazyWrapper_default.prototype.reverse = lazyReverse_default;
LazyWrapper_default.prototype.value = lazyValue_default;
wrapperLodash_default.prototype.at = seq_default_default.at;
wrapperLodash_default.prototype.chain = seq_default_default.wrapperChain;
wrapperLodash_default.prototype.commit = seq_default_default.commit;
wrapperLodash_default.prototype.next = seq_default_default.next;
wrapperLodash_default.prototype.plant = seq_default_default.plant;
wrapperLodash_default.prototype.reverse = seq_default_default.reverse;
wrapperLodash_default.prototype.toJSON = wrapperLodash_default.prototype.valueOf = wrapperLodash_default.prototype.value = seq_default_default.value;
wrapperLodash_default.prototype.first = wrapperLodash_default.prototype.head;
if (symIterator2) {
  wrapperLodash_default.prototype[symIterator2] = seq_default_default.toIterator;
}

// node_modules/@tweenjs/tween.js/dist/tween.esm.js
var Easing = Object.freeze({
  Linear: Object.freeze({
    None: function(amount) {
      return amount;
    },
    In: function(amount) {
      return amount;
    },
    Out: function(amount) {
      return amount;
    },
    InOut: function(amount) {
      return amount;
    }
  }),
  Quadratic: Object.freeze({
    In: function(amount) {
      return amount * amount;
    },
    Out: function(amount) {
      return amount * (2 - amount);
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount;
      }
      return -0.5 * (--amount * (amount - 2) - 1);
    }
  }),
  Cubic: Object.freeze({
    In: function(amount) {
      return amount * amount * amount;
    },
    Out: function(amount) {
      return --amount * amount * amount + 1;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount + 2);
    }
  }),
  Quartic: Object.freeze({
    In: function(amount) {
      return amount * amount * amount * amount;
    },
    Out: function(amount) {
      return 1 - --amount * amount * amount * amount;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount;
      }
      return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
    }
  }),
  Quintic: Object.freeze({
    In: function(amount) {
      return amount * amount * amount * amount * amount;
    },
    Out: function(amount) {
      return --amount * amount * amount * amount * amount + 1;
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return 0.5 * amount * amount * amount * amount * amount;
      }
      return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
    }
  }),
  Sinusoidal: Object.freeze({
    In: function(amount) {
      return 1 - Math.sin((1 - amount) * Math.PI / 2);
    },
    Out: function(amount) {
      return Math.sin(amount * Math.PI / 2);
    },
    InOut: function(amount) {
      return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
    }
  }),
  Exponential: Object.freeze({
    In: function(amount) {
      return amount === 0 ? 0 : Math.pow(1024, amount - 1);
    },
    Out: function(amount) {
      return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
    },
    InOut: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      if ((amount *= 2) < 1) {
        return 0.5 * Math.pow(1024, amount - 1);
      }
      return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
    }
  }),
  Circular: Object.freeze({
    In: function(amount) {
      return 1 - Math.sqrt(1 - amount * amount);
    },
    Out: function(amount) {
      return Math.sqrt(1 - --amount * amount);
    },
    InOut: function(amount) {
      if ((amount *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
    }
  }),
  Elastic: Object.freeze({
    In: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
    },
    Out: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(amount) {
      if (amount === 0) {
        return 0;
      }
      if (amount === 1) {
        return 1;
      }
      amount *= 2;
      if (amount < 1) {
        return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
      }
      return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
    }
  }),
  Back: Object.freeze({
    In: function(amount) {
      var s2 = 1.70158;
      return amount === 1 ? 1 : amount * amount * ((s2 + 1) * amount - s2);
    },
    Out: function(amount) {
      var s2 = 1.70158;
      return amount === 0 ? 0 : --amount * amount * ((s2 + 1) * amount + s2) + 1;
    },
    InOut: function(amount) {
      var s2 = 1.70158 * 1.525;
      if ((amount *= 2) < 1) {
        return 0.5 * (amount * amount * ((s2 + 1) * amount - s2));
      }
      return 0.5 * ((amount -= 2) * amount * ((s2 + 1) * amount + s2) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(amount) {
      return 1 - Easing.Bounce.Out(1 - amount);
    },
    Out: function(amount) {
      if (amount < 1 / 2.75) {
        return 7.5625 * amount * amount;
      } else if (amount < 2 / 2.75) {
        return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
      } else if (amount < 2.5 / 2.75) {
        return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
      } else {
        return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
      }
    },
    InOut: function(amount) {
      if (amount < 0.5) {
        return Easing.Bounce.In(amount * 2) * 0.5;
      }
      return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(power) {
    if (power === void 0) {
      power = 4;
    }
    power = power < Number.EPSILON ? Number.EPSILON : power;
    power = power > 1e4 ? 1e4 : power;
    return {
      In: function(amount) {
        return Math.pow(amount, power);
      },
      Out: function(amount) {
        return 1 - Math.pow(1 - amount, power);
      },
      InOut: function(amount) {
        if (amount < 0.5) {
          return Math.pow(amount * 2, power) / 2;
        }
        return (1 - Math.pow(2 - amount * 2, power)) / 2 + 0.5;
      }
    };
  }
});
var now3 = function() {
  return performance.now();
};
var Group = (
  /** @class */
  (function() {
    function Group2() {
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      this._tweens = {};
      this._tweensAddedDuringUpdate = {};
      this.add.apply(this, tweens);
    }
    Group2.prototype.getAll = function() {
      var _this = this;
      return Object.keys(this._tweens).map(function(tweenId) {
        return _this._tweens[tweenId];
      });
    };
    Group2.prototype.removeAll = function() {
      this._tweens = {};
    };
    Group2.prototype.add = function() {
      var _a;
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      for (var _b = 0, tweens_1 = tweens; _b < tweens_1.length; _b++) {
        var tween = tweens_1[_b];
        (_a = tween._group) === null || _a === void 0 ? void 0 : _a.remove(tween);
        tween._group = this;
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
      }
    };
    Group2.prototype.remove = function() {
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      for (var _a = 0, tweens_2 = tweens; _a < tweens_2.length; _a++) {
        var tween = tweens_2[_a];
        tween._group = void 0;
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
      }
    };
    Group2.prototype.allStopped = function() {
      return this.getAll().every(function(tween) {
        return !tween.isPlaying();
      });
    };
    Group2.prototype.update = function(time2, preserve) {
      if (time2 === void 0) {
        time2 = now3();
      }
      if (preserve === void 0) {
        preserve = true;
      }
      var tweenIds = Object.keys(this._tweens);
      if (tweenIds.length === 0)
        return;
      while (tweenIds.length > 0) {
        this._tweensAddedDuringUpdate = {};
        for (var i2 = 0; i2 < tweenIds.length; i2++) {
          var tween = this._tweens[tweenIds[i2]];
          var autoStart = !preserve;
          if (tween && tween.update(time2, autoStart) === false && !preserve)
            this.remove(tween);
        }
        tweenIds = Object.keys(this._tweensAddedDuringUpdate);
      }
    };
    return Group2;
  })()
);
var Interpolation = {
  Linear: function(v2, k2) {
    var m3 = v2.length - 1;
    var f2 = m3 * k2;
    var i2 = Math.floor(f2);
    var fn = Interpolation.Utils.Linear;
    if (k2 < 0) {
      return fn(v2[0], v2[1], f2);
    }
    if (k2 > 1) {
      return fn(v2[m3], v2[m3 - 1], m3 - f2);
    }
    return fn(v2[i2], v2[i2 + 1 > m3 ? m3 : i2 + 1], f2 - i2);
  },
  Bezier: function(v2, k2) {
    var b = 0;
    var n2 = v2.length - 1;
    var pw = Math.pow;
    var bn = Interpolation.Utils.Bernstein;
    for (var i2 = 0; i2 <= n2; i2++) {
      b += pw(1 - k2, n2 - i2) * pw(k2, i2) * v2[i2] * bn(n2, i2);
    }
    return b;
  },
  CatmullRom: function(v2, k2) {
    var m3 = v2.length - 1;
    var f2 = m3 * k2;
    var i2 = Math.floor(f2);
    var fn = Interpolation.Utils.CatmullRom;
    if (v2[0] === v2[m3]) {
      if (k2 < 0) {
        i2 = Math.floor(f2 = m3 * (1 + k2));
      }
      return fn(v2[(i2 - 1 + m3) % m3], v2[i2], v2[(i2 + 1) % m3], v2[(i2 + 2) % m3], f2 - i2);
    } else {
      if (k2 < 0) {
        return v2[0] - (fn(v2[0], v2[0], v2[1], v2[1], -f2) - v2[0]);
      }
      if (k2 > 1) {
        return v2[m3] - (fn(v2[m3], v2[m3], v2[m3 - 1], v2[m3 - 1], f2 - m3) - v2[m3]);
      }
      return fn(v2[i2 ? i2 - 1 : 0], v2[i2], v2[m3 < i2 + 1 ? m3 : i2 + 1], v2[m3 < i2 + 2 ? m3 : i2 + 2], f2 - i2);
    }
  },
  Utils: {
    Linear: function(p0, p1, t5) {
      return (p1 - p0) * t5 + p0;
    },
    Bernstein: function(n2, i2) {
      var fc = Interpolation.Utils.Factorial;
      return fc(n2) / fc(i2) / fc(n2 - i2);
    },
    Factorial: /* @__PURE__ */ (function() {
      var a3 = [1];
      return function(n2) {
        var s2 = 1;
        if (a3[n2]) {
          return a3[n2];
        }
        for (var i2 = n2; i2 > 1; i2--) {
          s2 *= i2;
        }
        a3[n2] = s2;
        return s2;
      };
    })(),
    CatmullRom: function(p0, p1, p2, p3, t5) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t22 = t5 * t5;
      var t32 = t5 * t22;
      return (2 * p1 - 2 * p2 + v0 + v1) * t32 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t22 + v0 * t5 + p1;
    }
  }
};
var Sequence = (
  /** @class */
  (function() {
    function Sequence2() {
    }
    Sequence2.nextId = function() {
      return Sequence2._nextId++;
    };
    Sequence2._nextId = 0;
    return Sequence2;
  })()
);
var mainGroup = new Group();
var Tween = (
  /** @class */
  (function() {
    function Tween2(object, group2) {
      this._isPaused = false;
      this._pauseStart = 0;
      this._valuesStart = {};
      this._valuesEnd = {};
      this._valuesStartRepeat = {};
      this._duration = 1e3;
      this._isDynamic = false;
      this._initialRepeat = 0;
      this._repeat = 0;
      this._yoyo = false;
      this._isPlaying = false;
      this._reversed = false;
      this._delayTime = 0;
      this._startTime = 0;
      this._easingFunction = Easing.Linear.None;
      this._interpolationFunction = Interpolation.Linear;
      this._chainedTweens = [];
      this._onStartCallbackFired = false;
      this._onEveryStartCallbackFired = false;
      this._id = Sequence.nextId();
      this._isChainStopped = false;
      this._propertiesAreSetUp = false;
      this._goToEnd = false;
      this._object = object;
      if (typeof group2 === "object") {
        this._group = group2;
        group2.add(this);
      } else if (group2 === true) {
        this._group = mainGroup;
        mainGroup.add(this);
      }
    }
    Tween2.prototype.getId = function() {
      return this._id;
    };
    Tween2.prototype.isPlaying = function() {
      return this._isPlaying;
    };
    Tween2.prototype.isPaused = function() {
      return this._isPaused;
    };
    Tween2.prototype.getDuration = function() {
      return this._duration;
    };
    Tween2.prototype.to = function(target, duration) {
      if (duration === void 0) {
        duration = 1e3;
      }
      if (this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      this._valuesEnd = target;
      this._propertiesAreSetUp = false;
      this._duration = duration < 0 ? 0 : duration;
      return this;
    };
    Tween2.prototype.duration = function(duration) {
      if (duration === void 0) {
        duration = 1e3;
      }
      this._duration = duration < 0 ? 0 : duration;
      return this;
    };
    Tween2.prototype.dynamic = function(dynamic) {
      if (dynamic === void 0) {
        dynamic = false;
      }
      this._isDynamic = dynamic;
      return this;
    };
    Tween2.prototype.start = function(time2, overrideStartingValues) {
      if (time2 === void 0) {
        time2 = now3();
      }
      if (overrideStartingValues === void 0) {
        overrideStartingValues = false;
      }
      if (this._isPlaying) {
        return this;
      }
      this._repeat = this._initialRepeat;
      if (this._reversed) {
        this._reversed = false;
        for (var property2 in this._valuesStartRepeat) {
          this._swapEndStartRepeatValues(property2);
          this._valuesStart[property2] = this._valuesStartRepeat[property2];
        }
      }
      this._isPlaying = true;
      this._isPaused = false;
      this._onStartCallbackFired = false;
      this._onEveryStartCallbackFired = false;
      this._isChainStopped = false;
      this._startTime = time2;
      this._startTime += this._delayTime;
      if (!this._propertiesAreSetUp || overrideStartingValues) {
        this._propertiesAreSetUp = true;
        if (!this._isDynamic) {
          var tmp = {};
          for (var prop in this._valuesEnd)
            tmp[prop] = this._valuesEnd[prop];
          this._valuesEnd = tmp;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, overrideStartingValues);
      }
      return this;
    };
    Tween2.prototype.startFromCurrentValues = function(time2) {
      return this.start(time2, true);
    };
    Tween2.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overrideStartingValues) {
      for (var property2 in _valuesEnd) {
        var startValue = _object[property2];
        var startValueIsArray = Array.isArray(startValue);
        var propType = startValueIsArray ? "array" : typeof startValue;
        var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property2]);
        if (propType === "undefined" || propType === "function") {
          continue;
        }
        if (isInterpolationList) {
          var endValues = _valuesEnd[property2];
          if (endValues.length === 0) {
            continue;
          }
          var temp = [startValue];
          for (var i2 = 0, l2 = endValues.length; i2 < l2; i2 += 1) {
            var value = this._handleRelativeValue(startValue, endValues[i2]);
            if (isNaN(value)) {
              isInterpolationList = false;
              console.warn("Found invalid interpolation list. Skipping.");
              break;
            }
            temp.push(value);
          }
          if (isInterpolationList) {
            _valuesEnd[property2] = temp;
          }
        }
        if ((propType === "object" || startValueIsArray) && startValue && !isInterpolationList) {
          _valuesStart[property2] = startValueIsArray ? [] : {};
          var nestedObject = startValue;
          for (var prop in nestedObject) {
            _valuesStart[property2][prop] = nestedObject[prop];
          }
          _valuesStartRepeat[property2] = startValueIsArray ? [] : {};
          var endValues = _valuesEnd[property2];
          if (!this._isDynamic) {
            var tmp = {};
            for (var prop in endValues)
              tmp[prop] = endValues[prop];
            _valuesEnd[property2] = endValues = tmp;
          }
          this._setupProperties(nestedObject, _valuesStart[property2], endValues, _valuesStartRepeat[property2], overrideStartingValues);
        } else {
          if (typeof _valuesStart[property2] === "undefined" || overrideStartingValues) {
            _valuesStart[property2] = startValue;
          }
          if (!startValueIsArray) {
            _valuesStart[property2] *= 1;
          }
          if (isInterpolationList) {
            _valuesStartRepeat[property2] = _valuesEnd[property2].slice().reverse();
          } else {
            _valuesStartRepeat[property2] = _valuesStart[property2] || 0;
          }
        }
      }
    };
    Tween2.prototype.stop = function() {
      if (!this._isChainStopped) {
        this._isChainStopped = true;
        this.stopChainedTweens();
      }
      if (!this._isPlaying) {
        return this;
      }
      this._isPlaying = false;
      this._isPaused = false;
      if (this._onStopCallback) {
        this._onStopCallback(this._object);
      }
      return this;
    };
    Tween2.prototype.end = function() {
      this._goToEnd = true;
      this.update(this._startTime + this._duration);
      return this;
    };
    Tween2.prototype.pause = function(time2) {
      if (time2 === void 0) {
        time2 = now3();
      }
      if (this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = true;
      this._pauseStart = time2;
      return this;
    };
    Tween2.prototype.resume = function(time2) {
      if (time2 === void 0) {
        time2 = now3();
      }
      if (!this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = false;
      this._startTime += time2 - this._pauseStart;
      this._pauseStart = 0;
      return this;
    };
    Tween2.prototype.stopChainedTweens = function() {
      for (var i2 = 0, numChainedTweens = this._chainedTweens.length; i2 < numChainedTweens; i2++) {
        this._chainedTweens[i2].stop();
      }
      return this;
    };
    Tween2.prototype.group = function(group2) {
      if (!group2) {
        console.warn("tween.group() without args has been removed, use group.add(tween) instead.");
        return this;
      }
      group2.add(this);
      return this;
    };
    Tween2.prototype.remove = function() {
      var _a;
      (_a = this._group) === null || _a === void 0 ? void 0 : _a.remove(this);
      return this;
    };
    Tween2.prototype.delay = function(amount) {
      if (amount === void 0) {
        amount = 0;
      }
      this._delayTime = amount;
      return this;
    };
    Tween2.prototype.repeat = function(times2) {
      if (times2 === void 0) {
        times2 = 0;
      }
      this._initialRepeat = times2;
      this._repeat = times2;
      return this;
    };
    Tween2.prototype.repeatDelay = function(amount) {
      this._repeatDelayTime = amount;
      return this;
    };
    Tween2.prototype.yoyo = function(yoyo) {
      if (yoyo === void 0) {
        yoyo = false;
      }
      this._yoyo = yoyo;
      return this;
    };
    Tween2.prototype.easing = function(easingFunction) {
      if (easingFunction === void 0) {
        easingFunction = Easing.Linear.None;
      }
      this._easingFunction = easingFunction;
      return this;
    };
    Tween2.prototype.interpolation = function(interpolationFunction) {
      if (interpolationFunction === void 0) {
        interpolationFunction = Interpolation.Linear;
      }
      this._interpolationFunction = interpolationFunction;
      return this;
    };
    Tween2.prototype.chain = function() {
      var tweens = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        tweens[_i] = arguments[_i];
      }
      this._chainedTweens = tweens;
      return this;
    };
    Tween2.prototype.onStart = function(callback) {
      this._onStartCallback = callback;
      return this;
    };
    Tween2.prototype.onEveryStart = function(callback) {
      this._onEveryStartCallback = callback;
      return this;
    };
    Tween2.prototype.onUpdate = function(callback) {
      this._onUpdateCallback = callback;
      return this;
    };
    Tween2.prototype.onRepeat = function(callback) {
      this._onRepeatCallback = callback;
      return this;
    };
    Tween2.prototype.onComplete = function(callback) {
      this._onCompleteCallback = callback;
      return this;
    };
    Tween2.prototype.onStop = function(callback) {
      this._onStopCallback = callback;
      return this;
    };
    Tween2.prototype.update = function(time2, autoStart) {
      var _this = this;
      var _a;
      if (time2 === void 0) {
        time2 = now3();
      }
      if (autoStart === void 0) {
        autoStart = Tween2.autoStartOnUpdate;
      }
      if (this._isPaused)
        return true;
      var property2;
      if (!this._goToEnd && !this._isPlaying) {
        if (autoStart)
          this.start(time2, true);
        else
          return false;
      }
      this._goToEnd = false;
      if (time2 < this._startTime) {
        return true;
      }
      if (this._onStartCallbackFired === false) {
        if (this._onStartCallback) {
          this._onStartCallback(this._object);
        }
        this._onStartCallbackFired = true;
      }
      if (this._onEveryStartCallbackFired === false) {
        if (this._onEveryStartCallback) {
          this._onEveryStartCallback(this._object);
        }
        this._onEveryStartCallbackFired = true;
      }
      var elapsedTime = time2 - this._startTime;
      var durationAndDelay = this._duration + ((_a = this._repeatDelayTime) !== null && _a !== void 0 ? _a : this._delayTime);
      var totalTime = this._duration + this._repeat * durationAndDelay;
      var calculateElapsedPortion = function() {
        if (_this._duration === 0)
          return 1;
        if (elapsedTime > totalTime) {
          return 1;
        }
        var timesRepeated = Math.trunc(elapsedTime / durationAndDelay);
        var timeIntoCurrentRepeat = elapsedTime - timesRepeated * durationAndDelay;
        var portion = Math.min(timeIntoCurrentRepeat / _this._duration, 1);
        if (portion === 0 && elapsedTime === _this._duration) {
          return 1;
        }
        return portion;
      };
      var elapsed = calculateElapsedPortion();
      var value = this._easingFunction(elapsed);
      this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
      if (this._onUpdateCallback) {
        this._onUpdateCallback(this._object, elapsed);
      }
      if (this._duration === 0 || elapsedTime >= this._duration) {
        if (this._repeat > 0) {
          var completeCount = Math.min(Math.trunc((elapsedTime - this._duration) / durationAndDelay) + 1, this._repeat);
          if (isFinite(this._repeat)) {
            this._repeat -= completeCount;
          }
          for (property2 in this._valuesStartRepeat) {
            if (!this._yoyo && typeof this._valuesEnd[property2] === "string") {
              this._valuesStartRepeat[property2] = // eslint-disable-next-line
              // @ts-ignore FIXME?
              this._valuesStartRepeat[property2] + parseFloat(this._valuesEnd[property2]);
            }
            if (this._yoyo) {
              this._swapEndStartRepeatValues(property2);
            }
            this._valuesStart[property2] = this._valuesStartRepeat[property2];
          }
          if (this._yoyo) {
            this._reversed = !this._reversed;
          }
          this._startTime += durationAndDelay * completeCount;
          if (this._onRepeatCallback) {
            this._onRepeatCallback(this._object);
          }
          this._onEveryStartCallbackFired = false;
          return true;
        } else {
          if (this._onCompleteCallback) {
            this._onCompleteCallback(this._object);
          }
          for (var i2 = 0, numChainedTweens = this._chainedTweens.length; i2 < numChainedTweens; i2++) {
            this._chainedTweens[i2].start(this._startTime + this._duration, false);
          }
          this._isPlaying = false;
          return false;
        }
      }
      return true;
    };
    Tween2.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
      for (var property2 in _valuesEnd) {
        if (_valuesStart[property2] === void 0) {
          continue;
        }
        var start2 = _valuesStart[property2] || 0;
        var end = _valuesEnd[property2];
        var startIsArray = Array.isArray(_object[property2]);
        var endIsArray = Array.isArray(end);
        var isInterpolationList = !startIsArray && endIsArray;
        if (isInterpolationList) {
          _object[property2] = this._interpolationFunction(end, value);
        } else if (typeof end === "object" && end) {
          this._updateProperties(_object[property2], start2, end, value);
        } else {
          end = this._handleRelativeValue(start2, end);
          if (typeof end === "number") {
            _object[property2] = start2 + (end - start2) * value;
          }
        }
      }
    };
    Tween2.prototype._handleRelativeValue = function(start2, end) {
      if (typeof end !== "string") {
        return end;
      }
      if (end.charAt(0) === "+" || end.charAt(0) === "-") {
        return start2 + parseFloat(end);
      }
      return parseFloat(end);
    };
    Tween2.prototype._swapEndStartRepeatValues = function(property2) {
      var tmp = this._valuesStartRepeat[property2];
      var endValue = this._valuesEnd[property2];
      if (typeof endValue === "string") {
        this._valuesStartRepeat[property2] = this._valuesStartRepeat[property2] + parseFloat(endValue);
      } else {
        this._valuesStartRepeat[property2] = this._valuesEnd[property2];
      }
      this._valuesEnd[property2] = tmp;
    };
    Tween2.autoStartOnUpdate = false;
    return Tween2;
  })()
);
var nextId2 = Sequence.nextId;
var TWEEN = mainGroup;
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add2 = TWEEN.add.bind(TWEEN);
var remove3 = TWEEN.remove.bind(TWEEN);
var update2 = TWEEN.update.bind(TWEEN);

// node_modules/kapsule/dist/kapsule.mjs
function _arrayLikeToArray3(r2, a3) {
  (null == a3 || a3 > r2.length) && (a3 = r2.length);
  for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r2[e3];
  return n2;
}
function _arrayWithHoles3(r2) {
  if (Array.isArray(r2)) return r2;
}
function _classCallCheck(a3, n2) {
  if (!(a3 instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _createClass(e3, r2, t5) {
  return Object.defineProperty(e3, "prototype", {
    writable: false
  }), e3;
}
function _iterableToArrayLimit3(r2, l2) {
  var t5 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t5) {
    var e3, n2, i2, u2, a3 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t5 = t5.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e3 = i2.call(t5)).done) && (a3.push(e3.value), a3.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t5.return && (u2 = t5.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a3;
  }
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray3(r2, e3) {
  return _arrayWithHoles3(r2) || _iterableToArrayLimit3(r2, e3) || _unsupportedIterableToArray3(r2, e3) || _nonIterableRest3();
}
function _unsupportedIterableToArray3(r2, a3) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray3(r2, a3);
    var t5 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t5 && r2.constructor && (t5 = r2.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r2) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray3(r2, a3) : void 0;
  }
}
var Prop = _createClass(function Prop2(name, _ref) {
  var _ref$default = _ref["default"], defaultVal = _ref$default === void 0 ? null : _ref$default, _ref$triggerUpdate = _ref.triggerUpdate, triggerUpdate = _ref$triggerUpdate === void 0 ? true : _ref$triggerUpdate, _ref$onChange = _ref.onChange, onChange15 = _ref$onChange === void 0 ? function(newVal, state) {
  } : _ref$onChange;
  _classCallCheck(this, Prop2);
  this.name = name;
  this.defaultVal = defaultVal;
  this.triggerUpdate = triggerUpdate;
  this.onChange = onChange15;
});
function index3(_ref2) {
  var _ref2$stateInit = _ref2.stateInit, stateInit3 = _ref2$stateInit === void 0 ? function() {
    return {};
  } : _ref2$stateInit, _ref2$props = _ref2.props, rawProps = _ref2$props === void 0 ? {} : _ref2$props, _ref2$methods = _ref2.methods, methods = _ref2$methods === void 0 ? {} : _ref2$methods, _ref2$aliases = _ref2.aliases, aliases = _ref2$aliases === void 0 ? {} : _ref2$aliases, _ref2$init = _ref2.init, initFn = _ref2$init === void 0 ? function() {
  } : _ref2$init, _ref2$update = _ref2.update, updateFn2 = _ref2$update === void 0 ? function() {
  } : _ref2$update;
  var props = Object.keys(rawProps).map(function(propName) {
    return new Prop(propName, rawProps[propName]);
  });
  return function KapsuleComp() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var classMode = !!(this instanceof KapsuleComp ? this.constructor : void 0);
    var nodeElement = classMode ? args.shift() : void 0;
    var _args$ = args[0], options = _args$ === void 0 ? {} : _args$;
    var state = Object.assign(
      {},
      stateInit3 instanceof Function ? stateInit3(options) : stateInit3,
      // Support plain objects for backwards compatibility
      {
        initialised: false
      }
    );
    var changedProps = {};
    function comp(nodeElement2) {
      initStatic(nodeElement2, options);
      digest();
      return comp;
    }
    var initStatic = function initStatic2(nodeElement2, options2) {
      initFn.call(comp, nodeElement2, state, options2);
      state.initialised = true;
    };
    var digest = debounce_default(function() {
      if (!state.initialised) {
        return;
      }
      updateFn2.call(comp, state, changedProps);
      changedProps = {};
    }, 1);
    props.forEach(function(prop) {
      comp[prop.name] = getSetProp(prop);
      function getSetProp(_ref3) {
        var prop2 = _ref3.name, _ref3$triggerUpdate = _ref3.triggerUpdate, redigest = _ref3$triggerUpdate === void 0 ? false : _ref3$triggerUpdate, _ref3$onChange = _ref3.onChange, onChange15 = _ref3$onChange === void 0 ? function(newVal, state2) {
        } : _ref3$onChange, _ref3$defaultVal = _ref3.defaultVal, defaultVal = _ref3$defaultVal === void 0 ? null : _ref3$defaultVal;
        return function(_2) {
          var curVal = state[prop2];
          if (!arguments.length) {
            return curVal;
          }
          var val = _2 === void 0 ? defaultVal : _2;
          state[prop2] = val;
          onChange15.call(comp, val, state, curVal);
          !changedProps.hasOwnProperty(prop2) && (changedProps[prop2] = curVal);
          if (redigest) {
            digest();
          }
          return comp;
        };
      }
    });
    Object.keys(methods).forEach(function(methodName) {
      comp[methodName] = function() {
        var _methods$methodName;
        for (var _len2 = arguments.length, args2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args2[_key2] = arguments[_key2];
        }
        return (_methods$methodName = methods[methodName]).call.apply(_methods$methodName, [comp, state].concat(args2));
      };
    });
    Object.entries(aliases).forEach(function(_ref4) {
      var _ref5 = _slicedToArray3(_ref4, 2), alias = _ref5[0], target = _ref5[1];
      return comp[alias] = comp[target];
    });
    comp.resetProps = function() {
      props.forEach(function(prop) {
        comp[prop.name](prop.defaultVal);
      });
      return comp;
    };
    comp.resetProps();
    state._rerender = digest;
    classMode && nodeElement && comp(nodeElement);
    return comp;
  };
}

// node_modules/accessor-fn/dist/accessor-fn.mjs
var index4 = (function(p2) {
  return typeof p2 === "function" ? p2 : typeof p2 === "string" ? function(obj) {
    return obj[p2];
  } : function(obj) {
    return p2;
  };
});

// node_modules/tinycolor2/esm/tinycolor.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color2, opts) {
  color2 = color2 ? color2 : "";
  opts = opts || {};
  if (color2 instanceof tinycolor) {
    return color2;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color2, opts);
  }
  var rgb2 = inputToRGB(color2);
  this._originalInput = color2, this._r = rgb2.r, this._g = rgb2.g, this._b = rgb2.b, this._a = rgb2.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb2.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb2.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb2 = this.toRgb();
    return (rgb2.r * 299 + rgb2.g * 587 + rgb2.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb2 = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G2, B3;
    RsRGB = rgb2.r / 255;
    GsRGB = rgb2.g / 255;
    BsRGB = rgb2.b / 255;
    if (RsRGB <= 0.03928) R = RsRGB / 12.92;
    else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G2 = GsRGB / 12.92;
    else G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B3 = BsRGB / 12.92;
    else B3 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G2 + 0.0722 * B3;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h2 = Math.round(hsv.h * 360), s2 = Math.round(hsv.s * 100), v2 = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h2 + ", " + s2 + "%, " + v2 + "%)" : "hsva(" + h2 + ", " + s2 + "%, " + v2 + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl3 = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl3.h * 360,
      s: hsl3.s,
      l: hsl3.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl3 = rgbToHsl(this._r, this._g, this._b);
    var h2 = Math.round(hsl3.h * 360), s2 = Math.round(hsl3.s * 100), l2 = Math.round(hsl3.l * 100);
    return this._a == 1 ? "hsl(" + h2 + ", " + s2 + "%, " + l2 + "%)" : "hsla(" + h2 + ", " + s2 + "%, " + l2 + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s2 = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s2._r, s2._g, s2._b, s2._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString2(format2) {
    var formatSet = !!format2;
    format2 = format2 || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format2 === "hex" || format2 === "hex6" || format2 === "hex3" || format2 === "hex4" || format2 === "hex8" || format2 === "name");
    if (needsAlphaFormat) {
      if (format2 === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format2 === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format2 === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format2 === "hex" || format2 === "hex6") {
      formattedString = this.toHexString();
    }
    if (format2 === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format2 === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format2 === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format2 === "name") {
      formattedString = this.toName();
    }
    if (format2 === "hsl") {
      formattedString = this.toHslString();
    }
    if (format2 === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone2() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color2 = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color2._r;
    this._g = color2._g;
    this._b = color2._b;
    this.setAlpha(color2._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color2, opts) {
  if (_typeof(color2) == "object") {
    var newColor = {};
    for (var i2 in color2) {
      if (color2.hasOwnProperty(i2)) {
        if (i2 === "a") {
          newColor[i2] = color2[i2];
        } else {
          newColor[i2] = convertToPercentage(color2[i2]);
        }
      }
    }
    color2 = newColor;
  }
  return tinycolor(color2, opts);
};
function inputToRGB(color2) {
  var rgb2 = {
    r: 0,
    g: 0,
    b: 0
  };
  var a3 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format2 = false;
  if (typeof color2 == "string") {
    color2 = stringInputToObject(color2);
  }
  if (_typeof(color2) == "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb2 = rgbToRgb(color2.r, color2.g, color2.b);
      ok = true;
      format2 = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s2 = convertToPercentage(color2.s);
      v2 = convertToPercentage(color2.v);
      rgb2 = hsvToRgb(color2.h, s2, v2);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s2 = convertToPercentage(color2.s);
      l2 = convertToPercentage(color2.l);
      rgb2 = hslToRgb(color2.h, s2, l2);
      ok = true;
      format2 = "hsl";
    }
    if (color2.hasOwnProperty("a")) {
      a3 = color2.a;
    }
  }
  a3 = boundAlpha(a3);
  return {
    ok,
    format: color2.format || format2,
    r: Math.min(255, Math.max(rgb2.r, 0)),
    g: Math.min(255, Math.max(rgb2.g, 0)),
    b: Math.min(255, Math.max(rgb2.b, 0)),
    a: a3
  };
}
function rgbToRgb(r2, g2, b) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r2, g2, b) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b = bound01(b, 255);
  var max4 = Math.max(r2, g2, b), min4 = Math.min(r2, g2, b);
  var h2, s2, l2 = (max4 + min4) / 2;
  if (max4 == min4) {
    h2 = s2 = 0;
  } else {
    var d2 = max4 - min4;
    s2 = l2 > 0.5 ? d2 / (2 - max4 - min4) : d2 / (max4 + min4);
    switch (max4) {
      case r2:
        h2 = (g2 - b) / d2 + (g2 < b ? 6 : 0);
        break;
      case g2:
        h2 = (b - r2) / d2 + 2;
        break;
      case b:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {
    h: h2,
    s: s2,
    l: l2
  };
}
function hslToRgb(h2, s2, l2) {
  var r2, g2, b;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  function hue2rgb(p3, q3, t5) {
    if (t5 < 0) t5 += 1;
    if (t5 > 1) t5 -= 1;
    if (t5 < 1 / 6) return p3 + (q3 - p3) * 6 * t5;
    if (t5 < 1 / 2) return q3;
    if (t5 < 2 / 3) return p3 + (q3 - p3) * (2 / 3 - t5) * 6;
    return p3;
  }
  if (s2 === 0) {
    r2 = g2 = b = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p2 = 2 * l2 - q2;
    r2 = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b * 255
  };
}
function rgbToHsv(r2, g2, b) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b = bound01(b, 255);
  var max4 = Math.max(r2, g2, b), min4 = Math.min(r2, g2, b);
  var h2, s2, v2 = max4;
  var d2 = max4 - min4;
  s2 = max4 === 0 ? 0 : d2 / max4;
  if (max4 == min4) {
    h2 = 0;
  } else {
    switch (max4) {
      case r2:
        h2 = (g2 - b) / d2 + (g2 < b ? 6 : 0);
        break;
      case g2:
        h2 = (b - r2) / d2 + 2;
        break;
      case b:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {
    h: h2,
    s: s2,
    v: v2
  };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2), f2 = h2 - i2, p2 = v2 * (1 - s2), q2 = v2 * (1 - f2 * s2), t5 = v2 * (1 - (1 - f2) * s2), mod = i2 % 6, r2 = [v2, q2, p2, p2, t5, v2][mod], g2 = [t5, v2, v2, q2, p2, p2][mod], b = [p2, p2, t5, v2, v2, q2][mod];
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b * 255
  };
}
function rgbToHex(r2, g2, b, allow3Char) {
  var hex2 = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b).toString(16))];
  if (allow3Char && hex2[0].charAt(0) == hex2[0].charAt(1) && hex2[1].charAt(0) == hex2[1].charAt(1) && hex2[2].charAt(0) == hex2[2].charAt(1)) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r2, g2, b, a3, allow4Char) {
  var hex2 = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a3))];
  if (allow4Char && hex2[0].charAt(0) == hex2[0].charAt(1) && hex2[1].charAt(0) == hex2[1].charAt(1) && hex2[2].charAt(0) == hex2[2].charAt(1) && hex2[3].charAt(0) == hex2[3].charAt(1)) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function rgbaToArgbHex(r2, g2, b, a3) {
  var hex2 = [pad2(convertDecimalToHex(a3)), pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b).toString(16))];
  return hex2.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl3 = tinycolor(color2).toHsl();
  hsl3.s -= amount / 100;
  hsl3.s = clamp01(hsl3.s);
  return tinycolor(hsl3);
}
function _saturate(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl3 = tinycolor(color2).toHsl();
  hsl3.s += amount / 100;
  hsl3.s = clamp01(hsl3.s);
  return tinycolor(hsl3);
}
function _greyscale(color2) {
  return tinycolor(color2).desaturate(100);
}
function _lighten(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl3 = tinycolor(color2).toHsl();
  hsl3.l += amount / 100;
  hsl3.l = clamp01(hsl3.l);
  return tinycolor(hsl3);
}
function _brighten(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb2 = tinycolor(color2).toRgb();
  rgb2.r = Math.max(0, Math.min(255, rgb2.r - Math.round(255 * -(amount / 100))));
  rgb2.g = Math.max(0, Math.min(255, rgb2.g - Math.round(255 * -(amount / 100))));
  rgb2.b = Math.max(0, Math.min(255, rgb2.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb2);
}
function _darken(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl3 = tinycolor(color2).toHsl();
  hsl3.l -= amount / 100;
  hsl3.l = clamp01(hsl3.l);
  return tinycolor(hsl3);
}
function _spin(color2, amount) {
  var hsl3 = tinycolor(color2).toHsl();
  var hue2 = (hsl3.h + amount) % 360;
  hsl3.h = hue2 < 0 ? 360 + hue2 : hue2;
  return tinycolor(hsl3);
}
function _complement(color2) {
  var hsl3 = tinycolor(color2).toHsl();
  hsl3.h = (hsl3.h + 180) % 360;
  return tinycolor(hsl3);
}
function polyad(color2, number3) {
  if (isNaN(number3) || number3 <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl3 = tinycolor(color2).toHsl();
  var result2 = [tinycolor(color2)];
  var step = 360 / number3;
  for (var i2 = 1; i2 < number3; i2++) {
    result2.push(tinycolor({
      h: (hsl3.h + i2 * step) % 360,
      s: hsl3.s,
      l: hsl3.l
    }));
  }
  return result2;
}
function _splitcomplement(color2) {
  var hsl3 = tinycolor(color2).toHsl();
  var h2 = hsl3.h;
  return [tinycolor(color2), tinycolor({
    h: (h2 + 72) % 360,
    s: hsl3.s,
    l: hsl3.l
  }), tinycolor({
    h: (h2 + 216) % 360,
    s: hsl3.s,
    l: hsl3.l
  })];
}
function _analogous(color2, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl3 = tinycolor(color2).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color2)];
  for (hsl3.h = (hsl3.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl3.h = (hsl3.h + part) % 360;
    ret.push(tinycolor(hsl3));
  }
  return ret;
}
function _monochromatic(color2, results) {
  results = results || 6;
  var hsv = tinycolor(color2).toHsv();
  var h2 = hsv.h, s2 = hsv.s, v2 = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h: h2,
      s: s2,
      v: v2
    }));
    v2 = (v2 + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p2 = amount / 100;
  var rgba2 = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
    a: (rgb2.a - rgb1.a) * p2 + rgb1.a
  };
  return tinycolor(rgba2);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c22 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c22.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c22.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size2;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size2 = args.size;
  for (var i2 = 0; i2 < colorList.length; i2++) {
    readability = tinycolor.readability(baseColor, colorList[i2]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i2]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size: size2
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip2(names);
function flip2(o2) {
  var flipped = {};
  for (var i2 in o2) {
    if (o2.hasOwnProperty(i2)) {
      flipped[o2[i2]] = i2;
    }
  }
  return flipped;
}
function boundAlpha(a3) {
  a3 = parseFloat(a3);
  if (isNaN(a3) || a3 < 0 || a3 > 1) {
    a3 = 1;
  }
  return a3;
}
function bound01(n2, max4) {
  if (isOnePointZero(n2)) n2 = "100%";
  var processPercent = isPercentage(n2);
  n2 = Math.min(max4, Math.max(0, parseFloat(n2)));
  if (processPercent) {
    n2 = parseInt(n2 * max4, 10) / 100;
  }
  if (Math.abs(n2 - max4) < 1e-6) {
    return 1;
  }
  return n2 % max4 / parseFloat(max4);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n2) {
  return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") != -1;
}
function pad2(c5) {
  return c5.length == 1 ? "0" + c5 : "" + c5;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    n2 = n2 * 100 + "%";
  }
  return n2;
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
var matchers = (function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
})();
function isValidCSSUnit(color2) {
  return !!matchers.CSS_UNIT.exec(color2);
}
function stringInputToObject(color2) {
  color2 = color2.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named2 = false;
  if (names[color2]) {
    color2 = names[color2];
    named2 = true;
  } else if (color2 == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color2)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color2)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color2)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named2 ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color2)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named2 ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color2)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named2 ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color2)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named2 ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size2;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size2 = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size2 !== "small" && size2 !== "large") {
    size2 = "small";
  }
  return {
    level,
    size: size2
  };
}

// node_modules/canvas-color-tracker/dist/canvas-color-tracker.mjs
function _arrayLikeToArray4(r2, a3) {
  (null == a3 || a3 > r2.length) && (a3 = r2.length);
  for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r2[e3];
  return n2;
}
function _arrayWithoutHoles3(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray4(r2);
}
function _assertClassBrand(e3, t5, n2) {
  if ("function" == typeof e3 ? e3 === t5 : e3.has(t5)) return arguments.length < 3 ? t5 : n2;
  throw new TypeError("Private element is not present on this object");
}
function _checkPrivateRedeclaration(e3, t5) {
  if (t5.has(e3)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck2(a3, n2) {
  if (!(a3 instanceof n2)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s2, a3) {
  return s2.get(_assertClassBrand(s2, a3));
}
function _classPrivateFieldInitSpec(e3, t5, a3) {
  _checkPrivateRedeclaration(e3, t5), t5.set(e3, a3);
}
function _classPrivateFieldSet2(s2, a3, r2) {
  return s2.set(_assertClassBrand(s2, a3), r2), r2;
}
function _defineProperties(e3, r2) {
  for (var t5 = 0; t5 < r2.length; t5++) {
    var o2 = r2[t5];
    o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, _toPropertyKey2(o2.key), o2);
  }
}
function _createClass2(e3, r2, t5) {
  return r2 && _defineProperties(e3.prototype, r2), Object.defineProperty(e3, "prototype", {
    writable: false
  }), e3;
}
function _iterableToArray3(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray3(r2) {
  return _arrayWithoutHoles3(r2) || _iterableToArray3(r2) || _unsupportedIterableToArray4(r2) || _nonIterableSpread3();
}
function _toPrimitive2(t5, r2) {
  if ("object" != typeof t5 || !t5) return t5;
  var e3 = t5[Symbol.toPrimitive];
  if (void 0 !== e3) {
    var i2 = e3.call(t5, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t5);
}
function _toPropertyKey2(t5) {
  var i2 = _toPrimitive2(t5, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _unsupportedIterableToArray4(r2, a3) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray4(r2, a3);
    var t5 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t5 && r2.constructor && (t5 = r2.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r2) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray4(r2, a3) : void 0;
  }
}
var ENTROPY = 123;
var int2HexColor = function int2HexColor2(num) {
  return "#".concat(Math.min(num, Math.pow(2, 24)).toString(16).padStart(6, "0"));
};
var rgb2Int = function rgb2Int2(r2, g2, b) {
  return (r2 << 16) + (g2 << 8) + b;
};
var colorStr2Int = function colorStr2Int2(str) {
  var _tinyColor$toRgb = tinycolor(str).toRgb(), r2 = _tinyColor$toRgb.r, g2 = _tinyColor$toRgb.g, b = _tinyColor$toRgb.b;
  return rgb2Int(r2, g2, b);
};
var checksum = function checksum2(n2, csBits) {
  return n2 * ENTROPY % Math.pow(2, csBits);
};
var _registry = /* @__PURE__ */ new WeakMap();
var _csBits = /* @__PURE__ */ new WeakMap();
var _default = (function() {
  function _default11() {
    var csBits = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 6;
    _classCallCheck2(this, _default11);
    _classPrivateFieldInitSpec(this, _registry, void 0);
    _classPrivateFieldInitSpec(this, _csBits, void 0);
    _classPrivateFieldSet2(_csBits, this, csBits);
    this.reset();
  }
  return _createClass2(_default11, [{
    key: "reset",
    value: function reset() {
      _classPrivateFieldSet2(_registry, this, ["__reserved for background__"]);
    }
  }, {
    key: "register",
    value: function register(obj) {
      if (_classPrivateFieldGet2(_registry, this).length >= Math.pow(2, 24 - _classPrivateFieldGet2(_csBits, this))) {
        return null;
      }
      var idx = _classPrivateFieldGet2(_registry, this).length;
      var cs = checksum(idx, _classPrivateFieldGet2(_csBits, this));
      var color2 = int2HexColor(idx + (cs << 24 - _classPrivateFieldGet2(_csBits, this)));
      _classPrivateFieldGet2(_registry, this).push(obj);
      return color2;
    }
  }, {
    key: "lookup",
    value: function lookup(color2) {
      if (!color2) return null;
      var n2 = typeof color2 === "string" ? colorStr2Int(color2) : rgb2Int.apply(void 0, _toConsumableArray3(color2));
      if (!n2) return null;
      var idx = n2 & Math.pow(2, 24 - _classPrivateFieldGet2(_csBits, this)) - 1;
      var cs = n2 >> 24 - _classPrivateFieldGet2(_csBits, this) & Math.pow(2, _classPrivateFieldGet2(_csBits, this)) - 1;
      if (checksum(idx, _classPrivateFieldGet2(_csBits, this)) !== cs || idx >= _classPrivateFieldGet2(_registry, this).length) return null;
      return _classPrivateFieldGet2(_registry, this)[idx];
    }
    // How many bits to reserve for checksum. Will eat away into the usable size of the registry.
  }]);
})();

// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t4;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n2, l2) {
  for (var u2 in l2) n2[u2] = l2[u2];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, u2, t5) {
  var i2, r2, o2, e3 = {};
  for (o2 in u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : e3[o2] = u2[o2];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t5), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e3[o2] && (e3[o2] = l2.defaultProps[o2]);
  return m(l2, e3, i2, r2, null);
}
function m(n2, t5, i2, r2, o2) {
  var e3 = { type: n2, props: t5, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e3), e3;
}
function k(n2) {
  return n2.children;
}
function x(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) return u2.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C2(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++) if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
      n2.__e = n2.__c.base = u2.__e;
      break;
    }
    return C2(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, u2, t5, r2, o2, f2, c5, s2 = 1; i.length; ) i.length > s2 && i.sort(e), n2 = i.shift(), s2 = i.length, n2.__d && (t5 = void 0, r2 = void 0, o2 = (r2 = (u2 = n2).__v).__e, f2 = [], c5 = [], u2.__P && ((t5 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(t5), O(u2.__P, t5, r2, u2.__n, u2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f2, null == o2 ? S(r2) : o2, !!(32 & r2.__u), c5), t5.__v = r2.__v, t5.__.__k[t5.__i] = t5, N(f2, t5, c5), r2.__e = r2.__ = null, t5.__e != o2 && C2(t5)));
  $.__r = 0;
}
function I(n2, l2, u2, t5, i2, r2, o2, e3, f2, c5, s2) {
  var a3, h2, y3, w2, d2, g2, _2, m3 = t5 && t5.__k || v, b = l2.length;
  for (f2 = P(u2, l2, m3, f2, b), a3 = 0; a3 < b; a3++) null != (y3 = u2.__k[a3]) && (h2 = -1 == y3.__i ? p : m3[y3.__i] || p, y3.__i = a3, g2 = O(n2, y3, h2, i2, r2, o2, e3, f2, c5, s2), w2 = y3.__e, y3.ref && h2.ref != y3.ref && (h2.ref && B2(h2.ref, null, y3), s2.push(y3.ref, y3.__c || w2, y3)), null == d2 && null != w2 && (d2 = w2), (_2 = !!(4 & y3.__u)) || h2.__k === y3.__k ? f2 = A2(y3, f2, n2, _2) : "function" == typeof y3.type && void 0 !== g2 ? f2 = g2 : w2 && (f2 = w2.nextSibling), y3.__u &= -7);
  return u2.__e = d2, f2;
}
function P(n2, l2, u2, t5, i2) {
  var r2, o2, e3, f2, c5, s2 = u2.length, a3 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? (f2 = r2 + h2, (o2 = n2.__k[r2] = "string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? m(null, o2, null, null, null) : w(o2) ? m(k, { children: o2 }, null, null, null) : null == o2.constructor && o2.__b > 0 ? m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e3 = null, -1 != (c5 = o2.__i = L(o2, u2, f2, a3)) && (a3--, (e3 = u2[c5]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c5 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c5 != f2 && (c5 == f2 - 1 ? h2-- : c5 == f2 + 1 ? h2++ : (c5 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a3) for (r2 = 0; r2 < s2; r2++) null != (e3 = u2[r2]) && 0 == (2 & e3.__u) && (e3.__e == t5 && (t5 = S(e3)), D2(e3, e3));
  return t5;
}
function A2(n2, l2, u2, t5) {
  var i2, r2;
  if ("function" == typeof n2.type) {
    for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = A2(i2[r2], l2, u2, t5));
    return l2;
  }
  n2.__e != l2 && (t5 && (l2 && n2.type && !l2.parentNode && (l2 = S(n2)), u2.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function L(n2, l2, u2, t5) {
  var i2, r2, o2, e3 = n2.key, f2 = n2.type, c5 = l2[u2], s2 = null != c5 && 0 == (2 & c5.__u);
  if (null === c5 && null == n2.key || s2 && e3 == c5.key && f2 == c5.type) return u2;
  if (t5 > (s2 ? 1 : 0)) {
    for (i2 = u2 - 1, r2 = u2 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c5 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c5.__u) && e3 == c5.key && f2 == c5.type) return o2;
  }
  return -1;
}
function T(n2, l2, u2) {
  "-" == l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || y.test(l2) ? u2 : u2 + "px";
}
function j(n2, l2, u2, t5, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u2) n2.style.cssText = u2;
  else {
    if ("string" == typeof t5 && (n2.style.cssText = t5 = ""), t5) for (l2 in t5) u2 && l2 in u2 || T(n2.style, l2, "");
    if (u2) for (l2 in u2) t5 && u2[l2] == t5[l2] || T(n2.style, l2, u2[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? t5 ? u2.u = t5.u : (u2.u = c, n2.addEventListener(l2, r2 ? a : s, r2)) : n2.removeEventListener(l2, r2 ? a : s, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u2 ? "" : u2;
      break n;
    } catch (n3) {
    }
    "function" == typeof u2 || (null == u2 || false === u2 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u2 ? "" : u2));
  }
}
function F(n2) {
  return function(u2) {
    if (this.l) {
      var t5 = this.l[u2.type + n2];
      if (null == u2.t) u2.t = c++;
      else if (u2.t < t5.u) return;
      return t5(l.event ? l.event(u2) : u2);
    }
  };
}
function O(n2, u2, t5, i2, r2, o2, e3, f2, c5, s2) {
  var a3, h2, p2, v2, y3, _2, m3, b, S2, C3, M2, $2, P2, A3, H, L2, T2, j2 = u2.type;
  if (null != u2.constructor) return null;
  128 & t5.__u && (c5 = !!(32 & t5.__u), o2 = [f2 = u2.__e = t5.__e]), (a3 = l.__b) && a3(u2);
  n: if ("function" == typeof j2) try {
    if (b = u2.props, S2 = "prototype" in j2 && j2.prototype.render, C3 = (a3 = j2.contextType) && i2[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i2, t5.__c ? m3 = (h2 = u2.__c = t5.__c).__ = h2.__E : (S2 ? u2.__c = h2 = new j2(b, M2) : (u2.__c = h2 = new x(b, M2), h2.constructor = j2, h2.render = E2), C3 && C3.sub(h2), h2.props = b, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && null == h2.__s && (h2.__s = h2.state), S2 && null != j2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = d({}, h2.__s)), d(h2.__s, j2.getDerivedStateFromProps(b, h2.__s))), v2 = h2.props, y3 = h2.state, h2.__v = u2, p2) S2 && null == j2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), S2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (S2 && null == j2.getDerivedStateFromProps && b !== v2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(b, M2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(b, h2.__s, M2) || u2.__v == t5.__v) {
        for (u2.__v != t5.__v && (h2.props = b, h2.state = h2.__s, h2.__d = false), u2.__e = t5.__e, u2.__k = t5.__k, u2.__k.some(function(n3) {
          n3 && (n3.__ = u2);
        }), $2 = 0; $2 < h2._sb.length; $2++) h2.__h.push(h2._sb[$2]);
        h2._sb = [], h2.__h.length && e3.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(b, h2.__s, M2), S2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(v2, y3, _2);
      });
    }
    if (h2.context = M2, h2.props = b, h2.__P = n2, h2.__e = false, P2 = l.__r, A3 = 0, S2) {
      for (h2.state = h2.__s, h2.__d = false, P2 && P2(u2), a3 = h2.render(h2.props, h2.state, h2.context), H = 0; H < h2._sb.length; H++) h2.__h.push(h2._sb[H]);
      h2._sb = [];
    } else do {
      h2.__d = false, P2 && P2(u2), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A3 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = d(d({}, i2), h2.getChildContext())), S2 && !p2 && null != h2.getSnapshotBeforeUpdate && (_2 = h2.getSnapshotBeforeUpdate(v2, y3)), L2 = a3, null != a3 && a3.type === k && null == a3.key && (L2 = V(a3.props.children)), f2 = I(n2, w(L2) ? L2 : [L2], u2, t5, i2, r2, o2, e3, f2, c5, s2), h2.base = u2.__e, u2.__u &= -161, h2.__h.length && e3.push(h2), m3 && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u2.__v = null, c5 || null != o2) if (n3.then) {
      for (u2.__u |= c5 ? 160 : 128; f2 && 8 == f2.nodeType && f2.nextSibling; ) f2 = f2.nextSibling;
      o2[o2.indexOf(f2)] = null, u2.__e = f2;
    } else {
      for (T2 = o2.length; T2--; ) g(o2[T2]);
      z(u2);
    }
    else u2.__e = t5.__e, u2.__k = t5.__k, n3.then || z(u2);
    l.__e(n3, u2, t5);
  }
  else null == o2 && u2.__v == t5.__v ? (u2.__k = t5.__k, u2.__e = t5.__e) : f2 = u2.__e = q(t5.__e, u2, t5, i2, r2, o2, e3, c5, s2);
  return (a3 = l.diffed) && a3(u2), 128 & u2.__u ? void 0 : f2;
}
function z(n2) {
  n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z);
}
function N(n2, u2, t5) {
  for (var i2 = 0; i2 < t5.length; i2++) B2(t5[i2], t5[++i2], t5[++i2]);
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function V(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(V) : d({}, n2);
}
function q(u2, t5, i2, r2, o2, e3, f2, c5, s2) {
  var a3, h2, v2, y3, d2, _2, m3, b = i2.props, k2 = t5.props, x3 = t5.type;
  if ("svg" == x3 ? o2 = "http://www.w3.org/2000/svg" : "math" == x3 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a3 = 0; a3 < e3.length; a3++) if ((d2 = e3[a3]) && "setAttribute" in d2 == !!x3 && (x3 ? d2.localName == x3 : 3 == d2.nodeType)) {
      u2 = d2, e3[a3] = null;
      break;
    }
  }
  if (null == u2) {
    if (null == x3) return document.createTextNode(k2);
    u2 = document.createElementNS(o2, x3, k2.is && k2), c5 && (l.__m && l.__m(t5, e3), c5 = false), e3 = null;
  }
  if (null == x3) b === k2 || c5 && u2.data == k2 || (u2.data = k2);
  else {
    if (e3 = e3 && n.call(u2.childNodes), b = i2.props || p, !c5 && null != e3) for (b = {}, a3 = 0; a3 < u2.attributes.length; a3++) b[(d2 = u2.attributes[a3]).name] = d2.value;
    for (a3 in b) if (d2 = b[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v2 = d2;
    else if (!(a3 in k2)) {
      if ("value" == a3 && "defaultValue" in k2 || "checked" == a3 && "defaultChecked" in k2) continue;
      j(u2, a3, null, d2, o2);
    }
    for (a3 in k2) d2 = k2[a3], "children" == a3 ? y3 = d2 : "dangerouslySetInnerHTML" == a3 ? h2 = d2 : "value" == a3 ? _2 = d2 : "checked" == a3 ? m3 = d2 : c5 && "function" != typeof d2 || b[a3] === d2 || j(u2, a3, d2, b[a3], o2);
    if (h2) c5 || v2 && (h2.__html == v2.__html || h2.__html == u2.innerHTML) || (u2.innerHTML = h2.__html), t5.__k = [];
    else if (v2 && (u2.innerHTML = ""), I("template" == t5.type ? u2.content : u2, w(y3) ? y3 : [y3], t5, i2, r2, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o2, e3, f2, e3 ? e3[0] : i2.__k && S(i2, 0), c5, s2), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
    c5 || (a3 = "value", "progress" == x3 && null == _2 ? u2.removeAttribute("value") : null != _2 && (_2 !== u2[a3] || "progress" == x3 && !_2 || "option" == x3 && _2 != b[a3]) && j(u2, a3, _2, b[a3], o2), a3 = "checked", null != m3 && m3 != u2[a3] && j(u2, a3, m3, b[a3], o2));
  }
  return u2;
}
function B2(n2, u2, t5) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u2 || (n2.__u = n2(u2));
    } else n2.current = u2;
  } catch (n3) {
    l.__e(n3, t5);
  }
}
function D2(n2, u2, t5) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || B2(i2, null, u2)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u2);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && D2(i2[r2], u2, t5 || "function" != typeof n2.type);
  t5 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function E2(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function G(u2, t5, i2) {
  var r2, o2, e3, f2;
  t5 == document && (t5 = document.documentElement), l.__ && l.__(u2, t5), o2 = (r2 = "function" == typeof i2) ? null : i2 && i2.__k || t5.__k, e3 = [], f2 = [], O(t5, u2 = (!r2 && i2 || t5).__k = _(k, null, [u2]), o2 || p, p, t5.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : t5.firstChild ? n.call(t5.childNodes) : null, e3, !r2 && i2 ? i2 : o2 ? o2.__e : t5.firstChild, r2, f2), N(e3, u2, f2);
}
function K2(l2, u2, t5) {
  var i2, r2, o2, e3, f2 = d({}, l2.props);
  for (o2 in l2.type && l2.type.defaultProps && (e3 = l2.type.defaultProps), u2) "key" == o2 ? i2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = void 0 === u2[o2] && null != e3 ? e3[o2] : u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : t5), m(l2.type, f2, i2 || l2.key, r2 || l2.ref, null);
}
n = v.slice, l = { __e: function(n2, l2, u2, t5) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t5 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t4 = function(n2) {
  return null != n2 && null == n2.constructor;
}, x.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u2), this.props)), n2 && d(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// node_modules/float-tooltip/dist/float-tooltip.mjs
function _arrayLikeToArray5(r2, a3) {
  (null == a3 || a3 > r2.length) && (a3 = r2.length);
  for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r2[e3];
  return n2;
}
function _arrayWithHoles4(r2) {
  if (Array.isArray(r2)) return r2;
}
function _defineProperty2(e3, r2, t5) {
  return (r2 = _toPropertyKey3(r2)) in e3 ? Object.defineProperty(e3, r2, {
    value: t5,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e3[r2] = t5, e3;
}
function _iterableToArrayLimit4(r2, l2) {
  var t5 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t5) {
    var e3, n2, i2, u2, a3 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t5 = t5.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e3 = i2.call(t5)).done) && (a3.push(e3.value), a3.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t5.return && (u2 = t5.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a3;
  }
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e3, r2) {
  var t5 = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e3);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e3, r3).enumerable;
    })), t5.push.apply(t5, o2);
  }
  return t5;
}
function _objectSpread2(e3) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t5 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t5), true).forEach(function(r3) {
      _defineProperty2(e3, r3, t5[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t5)) : ownKeys(Object(t5)).forEach(function(r3) {
      Object.defineProperty(e3, r3, Object.getOwnPropertyDescriptor(t5, r3));
    });
  }
  return e3;
}
function _slicedToArray4(r2, e3) {
  return _arrayWithHoles4(r2) || _iterableToArrayLimit4(r2, e3) || _unsupportedIterableToArray5(r2, e3) || _nonIterableRest4();
}
function _toPrimitive3(t5, r2) {
  if ("object" != typeof t5 || !t5) return t5;
  var e3 = t5[Symbol.toPrimitive];
  if (void 0 !== e3) {
    var i2 = e3.call(t5, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t5);
}
function _toPropertyKey3(t5) {
  var i2 = _toPrimitive3(t5, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _typeof2(o2) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof2(o2);
}
function _unsupportedIterableToArray5(r2, a3) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray5(r2, a3);
    var t5 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t5 && r2.constructor && (t5 = r2.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r2) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray5(r2, a3) : void 0;
  }
}
var _reactElement2VNode = function reactElement2VNode(el) {
  if (!(_typeof2(el) === "object")) return el;
  var res = K2(el);
  if (res.props) {
    var _res$props;
    res.props = _objectSpread2({}, res.props);
    if (res !== null && res !== void 0 && (_res$props = res.props) !== null && _res$props !== void 0 && _res$props.children) {
      res.props.children = Array.isArray(res.props.children) ? res.props.children.map(_reactElement2VNode) : _reactElement2VNode(res.props.children);
    }
  }
  return res;
};
var isReactRenderable = function isReactRenderable2(o2) {
  return t4(K2(o2));
};
var render = function render2(jsx, domEl) {
  delete domEl.__k;
  G(_reactElement2VNode(jsx), domEl);
};
function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === "undefined") {
    return;
  }
  var head2 = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head2.firstChild) {
      head2.insertBefore(style, head2.firstChild);
    } else {
      head2.appendChild(style);
    }
  } else {
    head2.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = ".float-tooltip-kap {\n  position: absolute;\n  width: max-content; /* prevent shrinking near right edge */\n  max-width: max(50%, 150px);\n  padding: 3px 5px;\n  border-radius: 3px;\n  font: 12px sans-serif;\n  color: #eee;\n  background: rgba(0,0,0,0.6);\n  pointer-events: none;\n}\n";
styleInject(css_248z);
var index5 = index3({
  props: {
    content: {
      "default": false
    },
    offsetX: {
      triggerUpdate: false
    },
    // null or number
    offsetY: {
      triggerUpdate: false
    }
    // null or number
  },
  init: function init2(domNode, state) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style;
    var isD3Selection = !!domNode && _typeof2(domNode) === "object" && !!domNode.node && typeof domNode.node === "function";
    var el = select_default2(isD3Selection ? domNode.node() : domNode);
    el.style("position") === "static" && el.style("position", "relative");
    state.tooltipEl = el.append("div").attr("class", "float-tooltip-kap");
    Object.entries(style).forEach(function(_ref2) {
      var _ref3 = _slicedToArray4(_ref2, 2), k2 = _ref3[0], v2 = _ref3[1];
      return state.tooltipEl.style(k2, v2);
    });
    state.tooltipEl.style("left", "-10000px").style("display", "none");
    var evSuffix = "tooltip-".concat(Math.round(Math.random() * 1e12));
    state.mouseInside = false;
    el.on("mousemove.".concat(evSuffix), function(ev) {
      state.mouseInside = true;
      var mousePos = pointer_default(ev);
      var domNode2 = el.node();
      var canvasWidth = domNode2.offsetWidth;
      var canvasHeight = domNode2.offsetHeight;
      var translate = [state.offsetX === null || state.offsetX === void 0 ? "-".concat(mousePos[0] / canvasWidth * 100, "%") : typeof state.offsetX === "number" ? "calc(-50% + ".concat(state.offsetX, "px)") : state.offsetX, state.offsetY === null || state.offsetY === void 0 ? canvasHeight > 130 && canvasHeight - mousePos[1] < 100 ? "calc(-100% - 6px)" : "21px" : typeof state.offsetY === "number" ? state.offsetY < 0 ? "calc(-100% - ".concat(Math.abs(state.offsetY), "px)") : "".concat(state.offsetY, "px") : state.offsetY];
      state.tooltipEl.style("left", mousePos[0] + "px").style("top", mousePos[1] + "px").style("transform", "translate(".concat(translate.join(","), ")"));
      state.content && state.tooltipEl.style("display", "inline");
    });
    el.on("mouseover.".concat(evSuffix), function() {
      state.mouseInside = true;
      state.content && state.tooltipEl.style("display", "inline");
    });
    el.on("mouseout.".concat(evSuffix), function() {
      state.mouseInside = false;
      state.tooltipEl.style("display", "none");
    });
  },
  update: function update3(state) {
    state.tooltipEl.style("display", !!state.content && state.mouseInside ? "inline" : "none");
    if (!state.content) {
      state.tooltipEl.text("");
    } else if (state.content instanceof HTMLElement) {
      state.tooltipEl.text("");
      state.tooltipEl.append(function() {
        return state.content;
      });
    } else if (typeof state.content === "string") {
      state.tooltipEl.html(state.content);
    } else if (isReactRenderable(state.content)) {
      state.tooltipEl.text("");
      render(state.content, state.tooltipEl.node());
    } else {
      state.tooltipEl.style("display", "none");
      console.warn("Tooltip content is invalid, skipping.", state.content, state.content.toString());
    }
  }
});

// node_modules/d3-force-3d/src/center.js
function center_default(x3, y3, z3) {
  var nodes, strength = 1;
  if (x3 == null) x3 = 0;
  if (y3 == null) y3 = 0;
  if (z3 == null) z3 = 0;
  function force() {
    var i2, n2 = nodes.length, node, sx = 0, sy = 0, sz = 0;
    for (i2 = 0; i2 < n2; ++i2) {
      node = nodes[i2], sx += node.x || 0, sy += node.y || 0, sz += node.z || 0;
    }
    for (sx = (sx / n2 - x3) * strength, sy = (sy / n2 - y3) * strength, sz = (sz / n2 - z3) * strength, i2 = 0; i2 < n2; ++i2) {
      node = nodes[i2];
      if (sx) {
        node.x -= sx;
      }
      if (sy) {
        node.y -= sy;
      }
      if (sz) {
        node.z -= sz;
      }
    }
  }
  force.initialize = function(_2) {
    nodes = _2;
  };
  force.x = function(_2) {
    return arguments.length ? (x3 = +_2, force) : x3;
  };
  force.y = function(_2) {
    return arguments.length ? (y3 = +_2, force) : y3;
  };
  force.z = function(_2) {
    return arguments.length ? (z3 = +_2, force) : z3;
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = +_2, force) : strength;
  };
  return force;
}

// node_modules/d3-binarytree/src/add.js
function add_default2(d2) {
  const x3 = +this._x.call(null, d2);
  return add3(this.cover(x3), x3, d2);
}
function add3(tree, x3, d2) {
  if (isNaN(x3)) return tree;
  var parent2, node = tree._root, leaf = { data: d2 }, x0 = tree._x0, x1 = tree._x1, xm, xp, right, i2, j2;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (parent2 = node, !(node = node[i2 = +right])) return parent2[i2] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  if (x3 === xp) return leaf.next = node, parent2 ? parent2[i2] = leaf : tree._root = leaf, tree;
  do {
    parent2 = parent2 ? parent2[i2] = new Array(2) : tree._root = new Array(2);
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
  } while ((i2 = +right) === (j2 = +(xp >= xm)));
  return parent2[j2] = node, parent2[i2] = leaf, tree;
}
function addAll(data) {
  if (!Array.isArray(data)) data = Array.from(data);
  const n2 = data.length;
  const xz = new Float64Array(n2);
  let x0 = Infinity, x1 = -Infinity;
  for (let i2 = 0, x3; i2 < n2; ++i2) {
    if (isNaN(x3 = +this._x.call(null, data[i2]))) continue;
    xz[i2] = x3;
    if (x3 < x0) x0 = x3;
    if (x3 > x1) x1 = x3;
  }
  if (x0 > x1) return this;
  this.cover(x0).cover(x1);
  for (let i2 = 0; i2 < n2; ++i2) {
    add3(this, xz[i2], data[i2]);
  }
  return this;
}

// node_modules/d3-binarytree/src/cover.js
function cover_default(x3) {
  if (isNaN(x3 = +x3)) return this;
  var x0 = this._x0, x1 = this._x1;
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x3)) + 1;
  } else {
    var z3 = x1 - x0 || 1, node = this._root, parent2, i2;
    while (x0 > x3 || x3 >= x1) {
      i2 = +(x3 < x0);
      parent2 = new Array(2), parent2[i2] = node, node = parent2, z3 *= 2;
      switch (i2) {
        case 0:
          x1 = x0 + z3;
          break;
        case 1:
          x0 = x1 - z3;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._x1 = x1;
  return this;
}

// node_modules/d3-binarytree/src/data.js
function data_default2() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}

// node_modules/d3-binarytree/src/extent.js
function extent_default(_2) {
  return arguments.length ? this.cover(+_2[0][0]).cover(+_2[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}

// node_modules/d3-binarytree/src/half.js
function half_default(node, x0, x1) {
  this.node = node;
  this.x0 = x0;
  this.x1 = x1;
}

// node_modules/d3-binarytree/src/find.js
function find_default2(x3, radius) {
  var data, x0 = this._x0, x1, x22, x32 = this._x1, halves = [], node = this._root, q2, i2;
  if (node) halves.push(new half_default(node, x0, x32));
  if (radius == null) radius = Infinity;
  else {
    x0 = x3 - radius;
    x32 = x3 + radius;
  }
  while (q2 = halves.pop()) {
    if (!(node = q2.node) || (x1 = q2.x0) > x32 || (x22 = q2.x1) < x0) continue;
    if (node.length) {
      var xm = (x1 + x22) / 2;
      halves.push(
        new half_default(node[1], xm, x22),
        new half_default(node[0], x1, xm)
      );
      if (i2 = +(x3 >= xm)) {
        q2 = halves[halves.length - 1];
        halves[halves.length - 1] = halves[halves.length - 1 - i2];
        halves[halves.length - 1 - i2] = q2;
      }
    } else {
      var d2 = Math.abs(x3 - +this._x.call(null, node.data));
      if (d2 < radius) {
        radius = d2;
        x0 = x3 - d2;
        x32 = x3 + d2;
        data = node.data;
      }
    }
  }
  return data;
}

// node_modules/d3-binarytree/src/remove.js
function remove_default4(d2) {
  if (isNaN(x3 = +this._x.call(null, d2))) return this;
  var parent2, node = this._root, retainer, previous, next, x0 = this._x0, x1 = this._x1, x3, xm, right, i2, j2;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (!(parent2 = node, node = node[i2 = +right])) return this;
    if (!node.length) break;
    if (parent2[i2 + 1 & 1]) retainer = parent2, j2 = i2;
  }
  while (node.data !== d2) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent2) return this._root = next, this;
  next ? parent2[i2] = next : delete parent2[i2];
  if ((node = parent2[0] || parent2[1]) && node === (parent2[1] || parent2[0]) && !node.length) {
    if (retainer) retainer[j2] = node;
    else this._root = node;
  }
  return this;
}
function removeAll2(data) {
  for (var i2 = 0, n2 = data.length; i2 < n2; ++i2) this.remove(data[i2]);
  return this;
}

// node_modules/d3-binarytree/src/root.js
function root_default2() {
  return this._root;
}

// node_modules/d3-binarytree/src/size.js
function size_default3() {
  var size2 = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size2;
    while (node = node.next);
  });
  return size2;
}

// node_modules/d3-binarytree/src/visit.js
function visit_default(callback) {
  var halves = [], q2, node = this._root, child, x0, x1;
  if (node) halves.push(new half_default(node, this._x0, this._x1));
  while (q2 = halves.pop()) {
    if (!callback(node = q2.node, x0 = q2.x0, x1 = q2.x1) && node.length) {
      var xm = (x0 + x1) / 2;
      if (child = node[1]) halves.push(new half_default(child, xm, x1));
      if (child = node[0]) halves.push(new half_default(child, x0, xm));
    }
  }
  return this;
}

// node_modules/d3-binarytree/src/visitAfter.js
function visitAfter_default(callback) {
  var halves = [], next = [], q2;
  if (this._root) halves.push(new half_default(this._root, this._x0, this._x1));
  while (q2 = halves.pop()) {
    var node = q2.node;
    if (node.length) {
      var child, x0 = q2.x0, x1 = q2.x1, xm = (x0 + x1) / 2;
      if (child = node[0]) halves.push(new half_default(child, x0, xm));
      if (child = node[1]) halves.push(new half_default(child, xm, x1));
    }
    next.push(q2);
  }
  while (q2 = next.pop()) {
    callback(q2.node, q2.x0, q2.x1);
  }
  return this;
}

// node_modules/d3-binarytree/src/x.js
function defaultX(d2) {
  return d2[0];
}
function x_default(_2) {
  return arguments.length ? (this._x = _2, this) : this._x;
}

// node_modules/d3-binarytree/src/binarytree.js
function binarytree(nodes, x3) {
  var tree = new Binarytree(x3 == null ? defaultX : x3, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Binarytree(x3, x0, x1) {
  this._x = x3;
  this._x0 = x0;
  this._x1 = x1;
  this._root = void 0;
}
function leaf_copy(leaf) {
  var copy3 = { data: leaf.data }, next = copy3;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy3;
}
var treeProto = binarytree.prototype = Binarytree.prototype;
treeProto.copy = function() {
  var copy3 = new Binarytree(this._x, this._x0, this._x1), node = this._root, nodes, child;
  if (!node) return copy3;
  if (!node.length) return copy3._root = leaf_copy(node), copy3;
  nodes = [{ source: node, target: copy3._root = new Array(2) }];
  while (node = nodes.pop()) {
    for (var i2 = 0; i2 < 2; ++i2) {
      if (child = node.source[i2]) {
        if (child.length) nodes.push({ source: child, target: node.target[i2] = new Array(2) });
        else node.target[i2] = leaf_copy(child);
      }
    }
  }
  return copy3;
};
treeProto.add = add_default2;
treeProto.addAll = addAll;
treeProto.cover = cover_default;
treeProto.data = data_default2;
treeProto.extent = extent_default;
treeProto.find = find_default2;
treeProto.remove = remove_default4;
treeProto.removeAll = removeAll2;
treeProto.root = root_default2;
treeProto.size = size_default3;
treeProto.visit = visit_default;
treeProto.visitAfter = visitAfter_default;
treeProto.x = x_default;

// node_modules/d3-octree/src/add.js
function add_default3(d2) {
  const x3 = +this._x.call(null, d2), y3 = +this._y.call(null, d2), z3 = +this._z.call(null, d2);
  return add4(this.cover(x3, y3, z3), x3, y3, z3, d2);
}
function add4(tree, x3, y3, z3, d2) {
  if (isNaN(x3) || isNaN(y3) || isNaN(z3)) return tree;
  var parent2, node = tree._root, leaf = { data: d2 }, x0 = tree._x0, y0 = tree._y0, z0 = tree._z0, x1 = tree._x1, y1 = tree._y1, z1 = tree._z1, xm, ym, zm, xp, yp, zp, right, bottom, deep, i2, j2;
  if (!node) return tree._root = leaf, tree;
  while (node.length) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (deep = z3 >= (zm = (z0 + z1) / 2)) z0 = zm;
    else z1 = zm;
    if (parent2 = node, !(node = node[i2 = deep << 2 | bottom << 1 | right])) return parent2[i2] = leaf, tree;
  }
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  zp = +tree._z.call(null, node.data);
  if (x3 === xp && y3 === yp && z3 === zp) return leaf.next = node, parent2 ? parent2[i2] = leaf : tree._root = leaf, tree;
  do {
    parent2 = parent2 ? parent2[i2] = new Array(8) : tree._root = new Array(8);
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (deep = z3 >= (zm = (z0 + z1) / 2)) z0 = zm;
    else z1 = zm;
  } while ((i2 = deep << 2 | bottom << 1 | right) === (j2 = (zp >= zm) << 2 | (yp >= ym) << 1 | xp >= xm));
  return parent2[j2] = node, parent2[i2] = leaf, tree;
}
function addAll2(data) {
  if (!Array.isArray(data)) data = Array.from(data);
  const n2 = data.length;
  const xz = new Float64Array(n2);
  const yz = new Float64Array(n2);
  const zz = new Float64Array(n2);
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity, z1 = -Infinity;
  for (let i2 = 0, d2, x3, y3, z3; i2 < n2; ++i2) {
    if (isNaN(x3 = +this._x.call(null, d2 = data[i2])) || isNaN(y3 = +this._y.call(null, d2)) || isNaN(z3 = +this._z.call(null, d2))) continue;
    xz[i2] = x3;
    yz[i2] = y3;
    zz[i2] = z3;
    if (x3 < x0) x0 = x3;
    if (x3 > x1) x1 = x3;
    if (y3 < y0) y0 = y3;
    if (y3 > y1) y1 = y3;
    if (z3 < z0) z0 = z3;
    if (z3 > z1) z1 = z3;
  }
  if (x0 > x1 || y0 > y1 || z0 > z1) return this;
  this.cover(x0, y0, z0).cover(x1, y1, z1);
  for (let i2 = 0; i2 < n2; ++i2) {
    add4(this, xz[i2], yz[i2], zz[i2], data[i2]);
  }
  return this;
}

// node_modules/d3-octree/src/cover.js
function cover_default2(x3, y3, z3) {
  if (isNaN(x3 = +x3) || isNaN(y3 = +y3) || isNaN(z3 = +z3)) return this;
  var x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1;
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x3)) + 1;
    y1 = (y0 = Math.floor(y3)) + 1;
    z1 = (z0 = Math.floor(z3)) + 1;
  } else {
    var t5 = x1 - x0 || 1, node = this._root, parent2, i2;
    while (x0 > x3 || x3 >= x1 || y0 > y3 || y3 >= y1 || z0 > z3 || z3 >= z1) {
      i2 = (z3 < z0) << 2 | (y3 < y0) << 1 | x3 < x0;
      parent2 = new Array(8), parent2[i2] = node, node = parent2, t5 *= 2;
      switch (i2) {
        case 0:
          x1 = x0 + t5, y1 = y0 + t5, z1 = z0 + t5;
          break;
        case 1:
          x0 = x1 - t5, y1 = y0 + t5, z1 = z0 + t5;
          break;
        case 2:
          x1 = x0 + t5, y0 = y1 - t5, z1 = z0 + t5;
          break;
        case 3:
          x0 = x1 - t5, y0 = y1 - t5, z1 = z0 + t5;
          break;
        case 4:
          x1 = x0 + t5, y1 = y0 + t5, z0 = z1 - t5;
          break;
        case 5:
          x0 = x1 - t5, y1 = y0 + t5, z0 = z1 - t5;
          break;
        case 6:
          x1 = x0 + t5, y0 = y1 - t5, z0 = z1 - t5;
          break;
        case 7:
          x0 = x1 - t5, y0 = y1 - t5, z0 = z1 - t5;
          break;
      }
    }
    if (this._root && this._root.length) this._root = node;
  }
  this._x0 = x0;
  this._y0 = y0;
  this._z0 = z0;
  this._x1 = x1;
  this._y1 = y1;
  this._z1 = z1;
  return this;
}

// node_modules/d3-octree/src/data.js
function data_default3() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do
      data.push(node.data);
    while (node = node.next);
  });
  return data;
}

// node_modules/d3-octree/src/extent.js
function extent_default2(_2) {
  return arguments.length ? this.cover(+_2[0][0], +_2[0][1], +_2[0][2]).cover(+_2[1][0], +_2[1][1], +_2[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}

// node_modules/d3-octree/src/octant.js
function octant_default(node, x0, y0, z0, x1, y1, z1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.z0 = z0;
  this.x1 = x1;
  this.y1 = y1;
  this.z1 = z1;
}

// node_modules/d3-octree/src/find.js
function find_default3(x3, y3, z3, radius) {
  var data, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1, y1, z1, x22, y22, z22, x32 = this._x1, y32 = this._y1, z32 = this._z1, octs = [], node = this._root, q2, i2;
  if (node) octs.push(new octant_default(node, x0, y0, z0, x32, y32, z32));
  if (radius == null) radius = Infinity;
  else {
    x0 = x3 - radius, y0 = y3 - radius, z0 = z3 - radius;
    x32 = x3 + radius, y32 = y3 + radius, z32 = z3 + radius;
    radius *= radius;
  }
  while (q2 = octs.pop()) {
    if (!(node = q2.node) || (x1 = q2.x0) > x32 || (y1 = q2.y0) > y32 || (z1 = q2.z0) > z32 || (x22 = q2.x1) < x0 || (y22 = q2.y1) < y0 || (z22 = q2.z1) < z0) continue;
    if (node.length) {
      var xm = (x1 + x22) / 2, ym = (y1 + y22) / 2, zm = (z1 + z22) / 2;
      octs.push(
        new octant_default(node[7], xm, ym, zm, x22, y22, z22),
        new octant_default(node[6], x1, ym, zm, xm, y22, z22),
        new octant_default(node[5], xm, y1, zm, x22, ym, z22),
        new octant_default(node[4], x1, y1, zm, xm, ym, z22),
        new octant_default(node[3], xm, ym, z1, x22, y22, zm),
        new octant_default(node[2], x1, ym, z1, xm, y22, zm),
        new octant_default(node[1], xm, y1, z1, x22, ym, zm),
        new octant_default(node[0], x1, y1, z1, xm, ym, zm)
      );
      if (i2 = (z3 >= zm) << 2 | (y3 >= ym) << 1 | x3 >= xm) {
        q2 = octs[octs.length - 1];
        octs[octs.length - 1] = octs[octs.length - 1 - i2];
        octs[octs.length - 1 - i2] = q2;
      }
    } else {
      var dx = x3 - +this._x.call(null, node.data), dy = y3 - +this._y.call(null, node.data), dz = z3 - +this._z.call(null, node.data), d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < radius) {
        var d3 = Math.sqrt(radius = d2);
        x0 = x3 - d3, y0 = y3 - d3, z0 = z3 - d3;
        x32 = x3 + d3, y32 = y3 + d3, z32 = z3 + d3;
        data = node.data;
      }
    }
  }
  return data;
}

// node_modules/d3-octree/src/findAll.js
var distance = (x1, y1, z1, x22, y22, z22) => Math.sqrt((x1 - x22) ** 2 + (y1 - y22) ** 2 + (z1 - z22) ** 2);
function findAllWithinRadius(x3, y3, z3, radius) {
  const result2 = [];
  const xMin = x3 - radius;
  const yMin = y3 - radius;
  const zMin = z3 - radius;
  const xMax = x3 + radius;
  const yMax = y3 + radius;
  const zMax = z3 + radius;
  this.visit((node, x1, y1, z1, x22, y22, z22) => {
    if (!node.length) {
      do {
        const d2 = node.data;
        if (distance(x3, y3, z3, this._x(d2), this._y(d2), this._z(d2)) <= radius) {
          result2.push(d2);
        }
      } while (node = node.next);
    }
    return x1 > xMax || y1 > yMax || z1 > zMax || x22 < xMin || y22 < yMin || z22 < zMin;
  });
  return result2;
}

// node_modules/d3-octree/src/remove.js
function remove_default5(d2) {
  if (isNaN(x3 = +this._x.call(null, d2)) || isNaN(y3 = +this._y.call(null, d2)) || isNaN(z3 = +this._z.call(null, d2))) return this;
  var parent2, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, z0 = this._z0, x1 = this._x1, y1 = this._y1, z1 = this._z1, x3, y3, z3, xm, ym, zm, right, bottom, deep, i2, j2;
  if (!node) return this;
  if (node.length) while (true) {
    if (right = x3 >= (xm = (x0 + x1) / 2)) x0 = xm;
    else x1 = xm;
    if (bottom = y3 >= (ym = (y0 + y1) / 2)) y0 = ym;
    else y1 = ym;
    if (deep = z3 >= (zm = (z0 + z1) / 2)) z0 = zm;
    else z1 = zm;
    if (!(parent2 = node, node = node[i2 = deep << 2 | bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent2[i2 + 1 & 7] || parent2[i2 + 2 & 7] || parent2[i2 + 3 & 7] || parent2[i2 + 4 & 7] || parent2[i2 + 5 & 7] || parent2[i2 + 6 & 7] || parent2[i2 + 7 & 7]) retainer = parent2, j2 = i2;
  }
  while (node.data !== d2) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;
  if (previous) return next ? previous.next = next : delete previous.next, this;
  if (!parent2) return this._root = next, this;
  next ? parent2[i2] = next : delete parent2[i2];
  if ((node = parent2[0] || parent2[1] || parent2[2] || parent2[3] || parent2[4] || parent2[5] || parent2[6] || parent2[7]) && node === (parent2[7] || parent2[6] || parent2[5] || parent2[4] || parent2[3] || parent2[2] || parent2[1] || parent2[0]) && !node.length) {
    if (retainer) retainer[j2] = node;
    else this._root = node;
  }
  return this;
}
function removeAll3(data) {
  for (var i2 = 0, n2 = data.length; i2 < n2; ++i2) this.remove(data[i2]);
  return this;
}

// node_modules/d3-octree/src/root.js
function root_default3() {
  return this._root;
}

// node_modules/d3-octree/src/size.js
function size_default4() {
  var size2 = 0;
  this.visit(function(node) {
    if (!node.length) do
      ++size2;
    while (node = node.next);
  });
  return size2;
}

// node_modules/d3-octree/src/visit.js
function visit_default2(callback) {
  var octs = [], q2, node = this._root, child, x0, y0, z0, x1, y1, z1;
  if (node) octs.push(new octant_default(node, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
  while (q2 = octs.pop()) {
    if (!callback(node = q2.node, x0 = q2.x0, y0 = q2.y0, z0 = q2.z0, x1 = q2.x1, y1 = q2.y1, z1 = q2.z1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
      if (child = node[7]) octs.push(new octant_default(child, xm, ym, zm, x1, y1, z1));
      if (child = node[6]) octs.push(new octant_default(child, x0, ym, zm, xm, y1, z1));
      if (child = node[5]) octs.push(new octant_default(child, xm, y0, zm, x1, ym, z1));
      if (child = node[4]) octs.push(new octant_default(child, x0, y0, zm, xm, ym, z1));
      if (child = node[3]) octs.push(new octant_default(child, xm, ym, z0, x1, y1, zm));
      if (child = node[2]) octs.push(new octant_default(child, x0, ym, z0, xm, y1, zm));
      if (child = node[1]) octs.push(new octant_default(child, xm, y0, z0, x1, ym, zm));
      if (child = node[0]) octs.push(new octant_default(child, x0, y0, z0, xm, ym, zm));
    }
  }
  return this;
}

// node_modules/d3-octree/src/visitAfter.js
function visitAfter_default2(callback) {
  var octs = [], next = [], q2;
  if (this._root) octs.push(new octant_default(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1));
  while (q2 = octs.pop()) {
    var node = q2.node;
    if (node.length) {
      var child, x0 = q2.x0, y0 = q2.y0, z0 = q2.z0, x1 = q2.x1, y1 = q2.y1, z1 = q2.z1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2, zm = (z0 + z1) / 2;
      if (child = node[0]) octs.push(new octant_default(child, x0, y0, z0, xm, ym, zm));
      if (child = node[1]) octs.push(new octant_default(child, xm, y0, z0, x1, ym, zm));
      if (child = node[2]) octs.push(new octant_default(child, x0, ym, z0, xm, y1, zm));
      if (child = node[3]) octs.push(new octant_default(child, xm, ym, z0, x1, y1, zm));
      if (child = node[4]) octs.push(new octant_default(child, x0, y0, zm, xm, ym, z1));
      if (child = node[5]) octs.push(new octant_default(child, xm, y0, zm, x1, ym, z1));
      if (child = node[6]) octs.push(new octant_default(child, x0, ym, zm, xm, y1, z1));
      if (child = node[7]) octs.push(new octant_default(child, xm, ym, zm, x1, y1, z1));
    }
    next.push(q2);
  }
  while (q2 = next.pop()) {
    callback(q2.node, q2.x0, q2.y0, q2.z0, q2.x1, q2.y1, q2.z1);
  }
  return this;
}

// node_modules/d3-octree/src/x.js
function defaultX2(d2) {
  return d2[0];
}
function x_default2(_2) {
  return arguments.length ? (this._x = _2, this) : this._x;
}

// node_modules/d3-octree/src/y.js
function defaultY(d2) {
  return d2[1];
}
function y_default(_2) {
  return arguments.length ? (this._y = _2, this) : this._y;
}

// node_modules/d3-octree/src/z.js
function defaultZ(d2) {
  return d2[2];
}
function z_default(_2) {
  return arguments.length ? (this._z = _2, this) : this._z;
}

// node_modules/d3-octree/src/octree.js
function octree(nodes, x3, y3, z3) {
  var tree = new Octree(x3 == null ? defaultX2 : x3, y3 == null ? defaultY : y3, z3 == null ? defaultZ : z3, NaN, NaN, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}
function Octree(x3, y3, z3, x0, y0, z0, x1, y1, z1) {
  this._x = x3;
  this._y = y3;
  this._z = z3;
  this._x0 = x0;
  this._y0 = y0;
  this._z0 = z0;
  this._x1 = x1;
  this._y1 = y1;
  this._z1 = z1;
  this._root = void 0;
}
function leaf_copy2(leaf) {
  var copy3 = { data: leaf.data }, next = copy3;
  while (leaf = leaf.next) next = next.next = { data: leaf.data };
  return copy3;
}
var treeProto2 = octree.prototype = Octree.prototype;
treeProto2.copy = function() {
  var copy3 = new Octree(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), node = this._root, nodes, child;
  if (!node) return copy3;
  if (!node.length) return copy3._root = leaf_copy2(node), copy3;
  nodes = [{ source: node, target: copy3._root = new Array(8) }];
  while (node = nodes.pop()) {
    for (var i2 = 0; i2 < 8; ++i2) {
      if (child = node.source[i2]) {
        if (child.length) nodes.push({ source: child, target: node.target[i2] = new Array(8) });
        else node.target[i2] = leaf_copy2(child);
      }
    }
  }
  return copy3;
};
treeProto2.add = add_default3;
treeProto2.addAll = addAll2;
treeProto2.cover = cover_default2;
treeProto2.data = data_default3;
treeProto2.extent = extent_default2;
treeProto2.find = find_default3;
treeProto2.findAllWithinRadius = findAllWithinRadius;
treeProto2.remove = remove_default5;
treeProto2.removeAll = removeAll3;
treeProto2.root = root_default3;
treeProto2.size = size_default4;
treeProto2.visit = visit_default2;
treeProto2.visitAfter = visitAfter_default2;
treeProto2.x = x_default2;
treeProto2.y = y_default;
treeProto2.z = z_default;

// node_modules/d3-force-3d/src/constant.js
function constant_default6(x3) {
  return function() {
    return x3;
  };
}

// node_modules/d3-force-3d/src/jiggle.js
function jiggle_default(random2) {
  return (random2() - 0.5) * 1e-6;
}

// node_modules/d3-force-3d/src/link.js
function index6(d2) {
  return d2.index;
}
function find3(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}
function link_default(links) {
  var id2 = index6, strength = defaultStrength, strengths, distance2 = constant_default6(30), distances, nodes, nDim, count2, bias, random2, iterations = 1;
  if (links == null) links = [];
  function defaultStrength(link) {
    return 1 / Math.min(count2[link.source.index], count2[link.target.index]);
  }
  function force(alpha) {
    for (var k2 = 0, n2 = links.length; k2 < iterations; ++k2) {
      for (var i2 = 0, link, source, target, x3 = 0, y3 = 0, z3 = 0, l2, b; i2 < n2; ++i2) {
        link = links[i2], source = link.source, target = link.target;
        x3 = target.x + target.vx - source.x - source.vx || jiggle_default(random2);
        if (nDim > 1) {
          y3 = target.y + target.vy - source.y - source.vy || jiggle_default(random2);
        }
        if (nDim > 2) {
          z3 = target.z + target.vz - source.z - source.vz || jiggle_default(random2);
        }
        l2 = Math.sqrt(x3 * x3 + y3 * y3 + z3 * z3);
        l2 = (l2 - distances[i2]) / l2 * alpha * strengths[i2];
        x3 *= l2, y3 *= l2, z3 *= l2;
        target.vx -= x3 * (b = bias[i2]);
        if (nDim > 1) {
          target.vy -= y3 * b;
        }
        if (nDim > 2) {
          target.vz -= z3 * b;
        }
        source.vx += x3 * (b = 1 - b);
        if (nDim > 1) {
          source.vy += y3 * b;
        }
        if (nDim > 2) {
          source.vz += z3 * b;
        }
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i2, n2 = nodes.length, m3 = links.length, nodeById = new Map(nodes.map((d2, i3) => [id2(d2, i3, nodes), d2])), link;
    for (i2 = 0, count2 = new Array(n2); i2 < m3; ++i2) {
      link = links[i2], link.index = i2;
      if (typeof link.source !== "object") link.source = find3(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find3(nodeById, link.target);
      count2[link.source.index] = (count2[link.source.index] || 0) + 1;
      count2[link.target.index] = (count2[link.target.index] || 0) + 1;
    }
    for (i2 = 0, bias = new Array(m3); i2 < m3; ++i2) {
      link = links[i2], bias[i2] = count2[link.source.index] / (count2[link.source.index] + count2[link.target.index]);
    }
    strengths = new Array(m3), initializeStrength();
    distances = new Array(m3), initializeDistance();
  }
  function initializeStrength() {
    if (!nodes) return;
    for (var i2 = 0, n2 = links.length; i2 < n2; ++i2) {
      strengths[i2] = +strength(links[i2], i2, links);
    }
  }
  function initializeDistance() {
    if (!nodes) return;
    for (var i2 = 0, n2 = links.length; i2 < n2; ++i2) {
      distances[i2] = +distance2(links[i2], i2, links);
    }
  }
  force.initialize = function(_nodes, ...args) {
    nodes = _nodes;
    random2 = args.find((arg) => typeof arg === "function") || Math.random;
    nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
    initialize();
  };
  force.links = function(_2) {
    return arguments.length ? (links = _2, initialize(), force) : links;
  };
  force.id = function(_2) {
    return arguments.length ? (id2 = _2, force) : id2;
  };
  force.iterations = function(_2) {
    return arguments.length ? (iterations = +_2, force) : iterations;
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default6(+_2), initializeStrength(), force) : strength;
  };
  force.distance = function(_2) {
    return arguments.length ? (distance2 = typeof _2 === "function" ? _2 : constant_default6(+_2), initializeDistance(), force) : distance2;
  };
  return force;
}

// node_modules/d3-force-3d/src/lcg.js
var a2 = 1664525;
var c2 = 1013904223;
var m2 = 4294967296;
function lcg_default() {
  let s2 = 1;
  return () => (s2 = (a2 * s2 + c2) % m2) / m2;
}

// node_modules/d3-force-3d/src/simulation.js
var MAX_DIMENSIONS = 3;
function x2(d2) {
  return d2.x;
}
function y2(d2) {
  return d2.y;
}
function z2(d2) {
  return d2.z;
}
var initialRadius = 10;
var initialAngleRoll = Math.PI * (3 - Math.sqrt(5));
var initialAngleYaw = Math.PI * 20 / (9 + Math.sqrt(221));
function simulation_default(nodes, numDimensions) {
  numDimensions = numDimensions || 2;
  var nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(numDimensions))), simulation, alpha = 1, alphaMin = 1e-3, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = /* @__PURE__ */ new Map(), stepper = timer(step), event = dispatch_default("tick", "end"), random2 = lcg_default();
  if (nodes == null) nodes = [];
  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }
  function tick(iterations) {
    var i2, n2 = nodes.length, node;
    if (iterations === void 0) iterations = 1;
    for (var k2 = 0; k2 < iterations; ++k2) {
      alpha += (alphaTarget - alpha) * alphaDecay;
      forces.forEach(function(force) {
        force(alpha);
      });
      for (i2 = 0; i2 < n2; ++i2) {
        node = nodes[i2];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (nDim > 1) {
          if (node.fy == null) node.y += node.vy *= velocityDecay;
          else node.y = node.fy, node.vy = 0;
        }
        if (nDim > 2) {
          if (node.fz == null) node.z += node.vz *= velocityDecay;
          else node.z = node.fz, node.vz = 0;
        }
      }
    }
    return simulation;
  }
  function initializeNodes() {
    for (var i2 = 0, n2 = nodes.length, node; i2 < n2; ++i2) {
      node = nodes[i2], node.index = i2;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (node.fz != null) node.z = node.fz;
      if (isNaN(node.x) || nDim > 1 && isNaN(node.y) || nDim > 2 && isNaN(node.z)) {
        var radius = initialRadius * (nDim > 2 ? Math.cbrt(0.5 + i2) : nDim > 1 ? Math.sqrt(0.5 + i2) : i2), rollAngle = i2 * initialAngleRoll, yawAngle = i2 * initialAngleYaw;
        if (nDim === 1) {
          node.x = radius;
        } else if (nDim === 2) {
          node.x = radius * Math.cos(rollAngle);
          node.y = radius * Math.sin(rollAngle);
        } else {
          node.x = radius * Math.sin(rollAngle) * Math.cos(yawAngle);
          node.y = radius * Math.cos(rollAngle);
          node.z = radius * Math.sin(rollAngle) * Math.sin(yawAngle);
        }
      }
      if (isNaN(node.vx) || nDim > 1 && isNaN(node.vy) || nDim > 2 && isNaN(node.vz)) {
        node.vx = 0;
        if (nDim > 1) {
          node.vy = 0;
        }
        if (nDim > 2) {
          node.vz = 0;
        }
      }
    }
  }
  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random2, nDim);
    return force;
  }
  initializeNodes();
  return simulation = {
    tick,
    restart: function() {
      return stepper.restart(step), simulation;
    },
    stop: function() {
      return stepper.stop(), simulation;
    },
    numDimensions: function(_2) {
      return arguments.length ? (nDim = Math.min(MAX_DIMENSIONS, Math.max(1, Math.round(_2))), forces.forEach(initializeForce), simulation) : nDim;
    },
    nodes: function(_2) {
      return arguments.length ? (nodes = _2, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },
    alpha: function(_2) {
      return arguments.length ? (alpha = +_2, simulation) : alpha;
    },
    alphaMin: function(_2) {
      return arguments.length ? (alphaMin = +_2, simulation) : alphaMin;
    },
    alphaDecay: function(_2) {
      return arguments.length ? (alphaDecay = +_2, simulation) : +alphaDecay;
    },
    alphaTarget: function(_2) {
      return arguments.length ? (alphaTarget = +_2, simulation) : alphaTarget;
    },
    velocityDecay: function(_2) {
      return arguments.length ? (velocityDecay = 1 - _2, simulation) : 1 - velocityDecay;
    },
    randomSource: function(_2) {
      return arguments.length ? (random2 = _2, forces.forEach(initializeForce), simulation) : random2;
    },
    force: function(name, _2) {
      return arguments.length > 1 ? (_2 == null ? forces.delete(name) : forces.set(name, initializeForce(_2)), simulation) : forces.get(name);
    },
    find: function() {
      var args = Array.prototype.slice.call(arguments);
      var x3 = args.shift() || 0, y3 = (nDim > 1 ? args.shift() : null) || 0, z3 = (nDim > 2 ? args.shift() : null) || 0, radius = args.shift() || Infinity;
      var i2 = 0, n2 = nodes.length, dx, dy, dz, d2, node, closest;
      radius *= radius;
      for (i2 = 0; i2 < n2; ++i2) {
        node = nodes[i2];
        dx = x3 - node.x;
        dy = y3 - (node.y || 0);
        dz = z3 - (node.z || 0);
        d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < radius) closest = node, radius = d2;
      }
      return closest;
    },
    on: function(name, _2) {
      return arguments.length > 1 ? (event.on(name, _2), simulation) : event.on(name);
    }
  };
}

// node_modules/d3-force-3d/src/manyBody.js
function manyBody_default() {
  var nodes, nDim, node, random2, alpha, strength = constant_default6(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
  function force(_2) {
    var i2, n2 = nodes.length, tree = (nDim === 1 ? binarytree(nodes, x2) : nDim === 2 ? quadtree(nodes, x2, y2) : nDim === 3 ? octree(nodes, x2, y2, z2) : null).visitAfter(accumulate);
    for (alpha = _2, i2 = 0; i2 < n2; ++i2) node = nodes[i2], tree.visit(apply2);
  }
  function initialize() {
    if (!nodes) return;
    var i2, n2 = nodes.length, node2;
    strengths = new Array(n2);
    for (i2 = 0; i2 < n2; ++i2) node2 = nodes[i2], strengths[node2.index] = +strength(node2, i2, nodes);
  }
  function accumulate(treeNode) {
    var strength2 = 0, q2, c5, weight = 0, x3, y3, z3, i2;
    var numChildren = treeNode.length;
    if (numChildren) {
      for (x3 = y3 = z3 = i2 = 0; i2 < numChildren; ++i2) {
        if ((q2 = treeNode[i2]) && (c5 = Math.abs(q2.value))) {
          strength2 += q2.value, weight += c5, x3 += c5 * (q2.x || 0), y3 += c5 * (q2.y || 0), z3 += c5 * (q2.z || 0);
        }
      }
      strength2 *= Math.sqrt(4 / numChildren);
      treeNode.x = x3 / weight;
      if (nDim > 1) {
        treeNode.y = y3 / weight;
      }
      if (nDim > 2) {
        treeNode.z = z3 / weight;
      }
    } else {
      q2 = treeNode;
      q2.x = q2.data.x;
      if (nDim > 1) {
        q2.y = q2.data.y;
      }
      if (nDim > 2) {
        q2.z = q2.data.z;
      }
      do
        strength2 += strengths[q2.data.index];
      while (q2 = q2.next);
    }
    treeNode.value = strength2;
  }
  function apply2(treeNode, x1, arg1, arg2, arg3) {
    if (!treeNode.value) return true;
    var x22 = [arg1, arg2, arg3][nDim - 1];
    var x3 = treeNode.x - node.x, y3 = nDim > 1 ? treeNode.y - node.y : 0, z3 = nDim > 2 ? treeNode.z - node.z : 0, w2 = x22 - x1, l2 = x3 * x3 + y3 * y3 + z3 * z3;
    if (w2 * w2 / theta2 < l2) {
      if (l2 < distanceMax2) {
        if (x3 === 0) x3 = jiggle_default(random2), l2 += x3 * x3;
        if (nDim > 1 && y3 === 0) y3 = jiggle_default(random2), l2 += y3 * y3;
        if (nDim > 2 && z3 === 0) z3 = jiggle_default(random2), l2 += z3 * z3;
        if (l2 < distanceMin2) l2 = Math.sqrt(distanceMin2 * l2);
        node.vx += x3 * treeNode.value * alpha / l2;
        if (nDim > 1) {
          node.vy += y3 * treeNode.value * alpha / l2;
        }
        if (nDim > 2) {
          node.vz += z3 * treeNode.value * alpha / l2;
        }
      }
      return true;
    } else if (treeNode.length || l2 >= distanceMax2) return;
    if (treeNode.data !== node || treeNode.next) {
      if (x3 === 0) x3 = jiggle_default(random2), l2 += x3 * x3;
      if (nDim > 1 && y3 === 0) y3 = jiggle_default(random2), l2 += y3 * y3;
      if (nDim > 2 && z3 === 0) z3 = jiggle_default(random2), l2 += z3 * z3;
      if (l2 < distanceMin2) l2 = Math.sqrt(distanceMin2 * l2);
    }
    do
      if (treeNode.data !== node) {
        w2 = strengths[treeNode.data.index] * alpha / l2;
        node.vx += x3 * w2;
        if (nDim > 1) {
          node.vy += y3 * w2;
        }
        if (nDim > 2) {
          node.vz += z3 * w2;
        }
      }
    while (treeNode = treeNode.next);
  }
  force.initialize = function(_nodes, ...args) {
    nodes = _nodes;
    random2 = args.find((arg) => typeof arg === "function") || Math.random;
    nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
    initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default6(+_2), initialize(), force) : strength;
  };
  force.distanceMin = function(_2) {
    return arguments.length ? (distanceMin2 = _2 * _2, force) : Math.sqrt(distanceMin2);
  };
  force.distanceMax = function(_2) {
    return arguments.length ? (distanceMax2 = _2 * _2, force) : Math.sqrt(distanceMax2);
  };
  force.theta = function(_2) {
    return arguments.length ? (theta2 = _2 * _2, force) : Math.sqrt(theta2);
  };
  return force;
}

// node_modules/d3-force-3d/src/radial.js
function radial_default(radius, x3, y3, z3) {
  var nodes, nDim, strength = constant_default6(0.1), strengths, radiuses;
  if (typeof radius !== "function") radius = constant_default6(+radius);
  if (x3 == null) x3 = 0;
  if (y3 == null) y3 = 0;
  if (z3 == null) z3 = 0;
  function force(alpha) {
    for (var i2 = 0, n2 = nodes.length; i2 < n2; ++i2) {
      var node = nodes[i2], dx = node.x - x3 || 1e-6, dy = (node.y || 0) - y3 || 1e-6, dz = (node.z || 0) - z3 || 1e-6, r2 = Math.sqrt(dx * dx + dy * dy + dz * dz), k2 = (radiuses[i2] - r2) * strengths[i2] * alpha / r2;
      node.vx += dx * k2;
      if (nDim > 1) {
        node.vy += dy * k2;
      }
      if (nDim > 2) {
        node.vz += dz * k2;
      }
    }
  }
  function initialize() {
    if (!nodes) return;
    var i2, n2 = nodes.length;
    strengths = new Array(n2);
    radiuses = new Array(n2);
    for (i2 = 0; i2 < n2; ++i2) {
      radiuses[i2] = +radius(nodes[i2], i2, nodes);
      strengths[i2] = isNaN(radiuses[i2]) ? 0 : +strength(nodes[i2], i2, nodes);
    }
  }
  force.initialize = function(initNodes, ...args) {
    nodes = initNodes;
    nDim = args.find((arg) => [1, 2, 3].includes(arg)) || 2;
    initialize();
  };
  force.strength = function(_2) {
    return arguments.length ? (strength = typeof _2 === "function" ? _2 : constant_default6(+_2), initialize(), force) : strength;
  };
  force.radius = function(_2) {
    return arguments.length ? (radius = typeof _2 === "function" ? _2 : constant_default6(+_2), initialize(), force) : radius;
  };
  force.x = function(_2) {
    return arguments.length ? (x3 = +_2, force) : x3;
  };
  force.y = function(_2) {
    return arguments.length ? (y3 = +_2, force) : y3;
  };
  force.z = function(_2) {
    return arguments.length ? (z3 = +_2, force) : z3;
  };
  return force;
}

// node_modules/bezier-js/src/utils.js
var { abs, cos, sin, acos, atan2, sqrt, pow } = Math;
function crt(v2) {
  return v2 < 0 ? -pow(-v2, 1 / 3) : pow(v2, 1 / 3);
}
var pi2 = Math.PI;
var tau2 = 2 * pi2;
var quart = pi2 / 2;
var epsilon = 1e-6;
var nMax = Number.MAX_SAFE_INTEGER || 9007199254740991;
var nMin = Number.MIN_SAFE_INTEGER || -9007199254740991;
var ZERO = { x: 0, y: 0, z: 0 };
var utils = {
  // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
  Tvalues: [
    -0.06405689286260563,
    0.06405689286260563,
    -0.1911188674736163,
    0.1911188674736163,
    -0.3150426796961634,
    0.3150426796961634,
    -0.4337935076260451,
    0.4337935076260451,
    -0.5454214713888396,
    0.5454214713888396,
    -0.6480936519369755,
    0.6480936519369755,
    -0.7401241915785544,
    0.7401241915785544,
    -0.820001985973903,
    0.820001985973903,
    -0.8864155270044011,
    0.8864155270044011,
    -0.9382745520027328,
    0.9382745520027328,
    -0.9747285559713095,
    0.9747285559713095,
    -0.9951872199970213,
    0.9951872199970213
  ],
  // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
  Cvalues: [
    0.12793819534675216,
    0.12793819534675216,
    0.1258374563468283,
    0.1258374563468283,
    0.12167047292780339,
    0.12167047292780339,
    0.1155056680537256,
    0.1155056680537256,
    0.10744427011596563,
    0.10744427011596563,
    0.09761865210411388,
    0.09761865210411388,
    0.08619016153195327,
    0.08619016153195327,
    0.0733464814110803,
    0.0733464814110803,
    0.05929858491543678,
    0.05929858491543678,
    0.04427743881741981,
    0.04427743881741981,
    0.028531388628933663,
    0.028531388628933663,
    0.0123412297999872,
    0.0123412297999872
  ],
  arcfn: function(t5, derivativeFn) {
    const d2 = derivativeFn(t5);
    let l2 = d2.x * d2.x + d2.y * d2.y;
    if (typeof d2.z !== "undefined") {
      l2 += d2.z * d2.z;
    }
    return sqrt(l2);
  },
  compute: function(t5, points, _3d) {
    if (t5 === 0) {
      points[0].t = 0;
      return points[0];
    }
    const order = points.length - 1;
    if (t5 === 1) {
      points[order].t = 1;
      return points[order];
    }
    const mt = 1 - t5;
    let p2 = points;
    if (order === 0) {
      points[0].t = t5;
      return points[0];
    }
    if (order === 1) {
      const ret = {
        x: mt * p2[0].x + t5 * p2[1].x,
        y: mt * p2[0].y + t5 * p2[1].y,
        t: t5
      };
      if (_3d) {
        ret.z = mt * p2[0].z + t5 * p2[1].z;
      }
      return ret;
    }
    if (order < 4) {
      let mt2 = mt * mt, t22 = t5 * t5, a3, b, c5, d2 = 0;
      if (order === 2) {
        p2 = [p2[0], p2[1], p2[2], ZERO];
        a3 = mt2;
        b = mt * t5 * 2;
        c5 = t22;
      } else if (order === 3) {
        a3 = mt2 * mt;
        b = mt2 * t5 * 3;
        c5 = mt * t22 * 3;
        d2 = t5 * t22;
      }
      const ret = {
        x: a3 * p2[0].x + b * p2[1].x + c5 * p2[2].x + d2 * p2[3].x,
        y: a3 * p2[0].y + b * p2[1].y + c5 * p2[2].y + d2 * p2[3].y,
        t: t5
      };
      if (_3d) {
        ret.z = a3 * p2[0].z + b * p2[1].z + c5 * p2[2].z + d2 * p2[3].z;
      }
      return ret;
    }
    const dCpts = JSON.parse(JSON.stringify(points));
    while (dCpts.length > 1) {
      for (let i2 = 0; i2 < dCpts.length - 1; i2++) {
        dCpts[i2] = {
          x: dCpts[i2].x + (dCpts[i2 + 1].x - dCpts[i2].x) * t5,
          y: dCpts[i2].y + (dCpts[i2 + 1].y - dCpts[i2].y) * t5
        };
        if (typeof dCpts[i2].z !== "undefined") {
          dCpts[i2].z = dCpts[i2].z + (dCpts[i2 + 1].z - dCpts[i2].z) * t5;
        }
      }
      dCpts.splice(dCpts.length - 1, 1);
    }
    dCpts[0].t = t5;
    return dCpts[0];
  },
  computeWithRatios: function(t5, points, ratios, _3d) {
    const mt = 1 - t5, r2 = ratios, p2 = points;
    let f1 = r2[0], f2 = r2[1], f3 = r2[2], f4 = r2[3], d2;
    f1 *= mt;
    f2 *= t5;
    if (p2.length === 2) {
      d2 = f1 + f2;
      return {
        x: (f1 * p2[0].x + f2 * p2[1].x) / d2,
        y: (f1 * p2[0].y + f2 * p2[1].y) / d2,
        z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z) / d2,
        t: t5
      };
    }
    f1 *= mt;
    f2 *= 2 * mt;
    f3 *= t5 * t5;
    if (p2.length === 3) {
      d2 = f1 + f2 + f3;
      return {
        x: (f1 * p2[0].x + f2 * p2[1].x + f3 * p2[2].x) / d2,
        y: (f1 * p2[0].y + f2 * p2[1].y + f3 * p2[2].y) / d2,
        z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z + f3 * p2[2].z) / d2,
        t: t5
      };
    }
    f1 *= mt;
    f2 *= 1.5 * mt;
    f3 *= 3 * mt;
    f4 *= t5 * t5 * t5;
    if (p2.length === 4) {
      d2 = f1 + f2 + f3 + f4;
      return {
        x: (f1 * p2[0].x + f2 * p2[1].x + f3 * p2[2].x + f4 * p2[3].x) / d2,
        y: (f1 * p2[0].y + f2 * p2[1].y + f3 * p2[2].y + f4 * p2[3].y) / d2,
        z: !_3d ? false : (f1 * p2[0].z + f2 * p2[1].z + f3 * p2[2].z + f4 * p2[3].z) / d2,
        t: t5
      };
    }
  },
  derive: function(points, _3d) {
    const dpoints = [];
    for (let p2 = points, d2 = p2.length, c5 = d2 - 1; d2 > 1; d2--, c5--) {
      const list = [];
      for (let j2 = 0, dpt; j2 < c5; j2++) {
        dpt = {
          x: c5 * (p2[j2 + 1].x - p2[j2].x),
          y: c5 * (p2[j2 + 1].y - p2[j2].y)
        };
        if (_3d) {
          dpt.z = c5 * (p2[j2 + 1].z - p2[j2].z);
        }
        list.push(dpt);
      }
      dpoints.push(list);
      p2 = list;
    }
    return dpoints;
  },
  between: function(v2, m3, M2) {
    return m3 <= v2 && v2 <= M2 || utils.approximately(v2, m3) || utils.approximately(v2, M2);
  },
  approximately: function(a3, b, precision) {
    return abs(a3 - b) <= (precision || epsilon);
  },
  length: function(derivativeFn) {
    const z3 = 0.5, len = utils.Tvalues.length;
    let sum3 = 0;
    for (let i2 = 0, t5; i2 < len; i2++) {
      t5 = z3 * utils.Tvalues[i2] + z3;
      sum3 += utils.Cvalues[i2] * utils.arcfn(t5, derivativeFn);
    }
    return z3 * sum3;
  },
  map: function(v2, ds, de, ts, te) {
    const d1 = de - ds, d2 = te - ts, v22 = v2 - ds, r2 = v22 / d1;
    return ts + d2 * r2;
  },
  lerp: function(r2, v1, v2) {
    const ret = {
      x: v1.x + r2 * (v2.x - v1.x),
      y: v1.y + r2 * (v2.y - v1.y)
    };
    if (v1.z !== void 0 && v2.z !== void 0) {
      ret.z = v1.z + r2 * (v2.z - v1.z);
    }
    return ret;
  },
  pointToString: function(p2) {
    let s2 = p2.x + "/" + p2.y;
    if (typeof p2.z !== "undefined") {
      s2 += "/" + p2.z;
    }
    return s2;
  },
  pointsToString: function(points) {
    return "[" + points.map(utils.pointToString).join(", ") + "]";
  },
  copy: function(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  angle: function(o2, v1, v2) {
    const dx1 = v1.x - o2.x, dy1 = v1.y - o2.y, dx2 = v2.x - o2.x, dy2 = v2.y - o2.y, cross2 = dx1 * dy2 - dy1 * dx2, dot = dx1 * dx2 + dy1 * dy2;
    return atan2(cross2, dot);
  },
  // round as string, to avoid rounding errors
  round: function(v2, d2) {
    const s2 = "" + v2;
    const pos = s2.indexOf(".");
    return parseFloat(s2.substring(0, pos + 1 + d2));
  },
  dist: function(p1, p2) {
    const dx = p1.x - p2.x, dy = p1.y - p2.y;
    return sqrt(dx * dx + dy * dy);
  },
  closest: function(LUT, point2) {
    let mdist = pow(2, 63), mpos, d2;
    LUT.forEach(function(p2, idx) {
      d2 = utils.dist(point2, p2);
      if (d2 < mdist) {
        mdist = d2;
        mpos = idx;
      }
    });
    return { mdist, mpos };
  },
  abcratio: function(t5, n2) {
    if (n2 !== 2 && n2 !== 3) {
      return false;
    }
    if (typeof t5 === "undefined") {
      t5 = 0.5;
    } else if (t5 === 0 || t5 === 1) {
      return t5;
    }
    const bottom = pow(t5, n2) + pow(1 - t5, n2), top = bottom - 1;
    return abs(top / bottom);
  },
  projectionratio: function(t5, n2) {
    if (n2 !== 2 && n2 !== 3) {
      return false;
    }
    if (typeof t5 === "undefined") {
      t5 = 0.5;
    } else if (t5 === 0 || t5 === 1) {
      return t5;
    }
    const top = pow(1 - t5, n2), bottom = pow(t5, n2) + top;
    return top / bottom;
  },
  lli8: function(x1, y1, x22, y22, x3, y3, x4, y4) {
    const nx = (x1 * y22 - y1 * x22) * (x3 - x4) - (x1 - x22) * (x3 * y4 - y3 * x4), ny = (x1 * y22 - y1 * x22) * (y3 - y4) - (y1 - y22) * (x3 * y4 - y3 * x4), d2 = (x1 - x22) * (y3 - y4) - (y1 - y22) * (x3 - x4);
    if (d2 == 0) {
      return false;
    }
    return { x: nx / d2, y: ny / d2 };
  },
  lli4: function(p1, p2, p3, p4) {
    const x1 = p1.x, y1 = p1.y, x22 = p2.x, y22 = p2.y, x3 = p3.x, y3 = p3.y, x4 = p4.x, y4 = p4.y;
    return utils.lli8(x1, y1, x22, y22, x3, y3, x4, y4);
  },
  lli: function(v1, v2) {
    return utils.lli4(v1, v1.c, v2, v2.c);
  },
  makeline: function(p1, p2) {
    return new Bezier(
      p1.x,
      p1.y,
      (p1.x + p2.x) / 2,
      (p1.y + p2.y) / 2,
      p2.x,
      p2.y
    );
  },
  findbbox: function(sections) {
    let mx = nMax, my = nMax, MX = nMin, MY = nMin;
    sections.forEach(function(s2) {
      const bbox = s2.bbox();
      if (mx > bbox.x.min) mx = bbox.x.min;
      if (my > bbox.y.min) my = bbox.y.min;
      if (MX < bbox.x.max) MX = bbox.x.max;
      if (MY < bbox.y.max) MY = bbox.y.max;
    });
    return {
      x: { min: mx, mid: (mx + MX) / 2, max: MX, size: MX - mx },
      y: { min: my, mid: (my + MY) / 2, max: MY, size: MY - my }
    };
  },
  shapeintersections: function(s1, bbox1, s2, bbox2, curveIntersectionThreshold) {
    if (!utils.bboxoverlap(bbox1, bbox2)) return [];
    const intersections = [];
    const a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
    const a22 = [s2.startcap, s2.forward, s2.back, s2.endcap];
    a1.forEach(function(l1) {
      if (l1.virtual) return;
      a22.forEach(function(l2) {
        if (l2.virtual) return;
        const iss = l1.intersects(l2, curveIntersectionThreshold);
        if (iss.length > 0) {
          iss.c1 = l1;
          iss.c2 = l2;
          iss.s1 = s1;
          iss.s2 = s2;
          intersections.push(iss);
        }
      });
    });
    return intersections;
  },
  makeshape: function(forward, back, curveIntersectionThreshold) {
    const bpl = back.points.length;
    const fpl = forward.points.length;
    const start2 = utils.makeline(back.points[bpl - 1], forward.points[0]);
    const end = utils.makeline(forward.points[fpl - 1], back.points[0]);
    const shape = {
      startcap: start2,
      forward,
      back,
      endcap: end,
      bbox: utils.findbbox([start2, forward, back, end])
    };
    shape.intersections = function(s2) {
      return utils.shapeintersections(
        shape,
        shape.bbox,
        s2,
        s2.bbox,
        curveIntersectionThreshold
      );
    };
    return shape;
  },
  getminmax: function(curve, d2, list) {
    if (!list) return { min: 0, max: 0 };
    let min4 = nMax, max4 = nMin, t5, c5;
    if (list.indexOf(0) === -1) {
      list = [0].concat(list);
    }
    if (list.indexOf(1) === -1) {
      list.push(1);
    }
    for (let i2 = 0, len = list.length; i2 < len; i2++) {
      t5 = list[i2];
      c5 = curve.get(t5);
      if (c5[d2] < min4) {
        min4 = c5[d2];
      }
      if (c5[d2] > max4) {
        max4 = c5[d2];
      }
    }
    return { min: min4, mid: (min4 + max4) / 2, max: max4, size: max4 - min4 };
  },
  align: function(points, line) {
    const tx = line.p1.x, ty = line.p1.y, a3 = -atan2(line.p2.y - ty, line.p2.x - tx), d2 = function(v2) {
      return {
        x: (v2.x - tx) * cos(a3) - (v2.y - ty) * sin(a3),
        y: (v2.x - tx) * sin(a3) + (v2.y - ty) * cos(a3)
      };
    };
    return points.map(d2);
  },
  roots: function(points, line) {
    line = line || { p1: { x: 0, y: 0 }, p2: { x: 1, y: 0 } };
    const order = points.length - 1;
    const aligned = utils.align(points, line);
    const reduce3 = function(t5) {
      return 0 <= t5 && t5 <= 1;
    };
    if (order === 2) {
      const a4 = aligned[0].y, b10 = aligned[1].y, c6 = aligned[2].y, d3 = a4 - 2 * b10 + c6;
      if (d3 !== 0) {
        const m1 = -sqrt(b10 * b10 - a4 * c6), m22 = -a4 + b10, v12 = -(m1 + m22) / d3, v2 = -(-m1 + m22) / d3;
        return [v12, v2].filter(reduce3);
      } else if (b10 !== c6 && d3 === 0) {
        return [(2 * b10 - c6) / (2 * b10 - 2 * c6)].filter(reduce3);
      }
      return [];
    }
    const pa = aligned[0].y, pb = aligned[1].y, pc = aligned[2].y, pd = aligned[3].y;
    let d2 = -pa + 3 * pb - 3 * pc + pd, a3 = 3 * pa - 6 * pb + 3 * pc, b = -3 * pa + 3 * pb, c5 = pa;
    if (utils.approximately(d2, 0)) {
      if (utils.approximately(a3, 0)) {
        if (utils.approximately(b, 0)) {
          return [];
        }
        return [-c5 / b].filter(reduce3);
      }
      const q3 = sqrt(b * b - 4 * a3 * c5), a22 = 2 * a3;
      return [(q3 - b) / a22, (-b - q3) / a22].filter(reduce3);
    }
    a3 /= d2;
    b /= d2;
    c5 /= d2;
    const p2 = (3 * b - a3 * a3) / 3, p3 = p2 / 3, q2 = (2 * a3 * a3 * a3 - 9 * a3 * b + 27 * c5) / 27, q22 = q2 / 2, discriminant = q22 * q22 + p3 * p3 * p3;
    let u1, v1, x1, x22, x3;
    if (discriminant < 0) {
      const mp3 = -p2 / 3, mp33 = mp3 * mp3 * mp3, r2 = sqrt(mp33), t5 = -q2 / (2 * r2), cosphi = t5 < -1 ? -1 : t5 > 1 ? 1 : t5, phi = acos(cosphi), crtr = crt(r2), t13 = 2 * crtr;
      x1 = t13 * cos(phi / 3) - a3 / 3;
      x22 = t13 * cos((phi + tau2) / 3) - a3 / 3;
      x3 = t13 * cos((phi + 2 * tau2) / 3) - a3 / 3;
      return [x1, x22, x3].filter(reduce3);
    } else if (discriminant === 0) {
      u1 = q22 < 0 ? crt(-q22) : -crt(q22);
      x1 = 2 * u1 - a3 / 3;
      x22 = -u1 - a3 / 3;
      return [x1, x22].filter(reduce3);
    } else {
      const sd = sqrt(discriminant);
      u1 = crt(-q22 + sd);
      v1 = crt(q22 + sd);
      return [u1 - v1 - a3 / 3].filter(reduce3);
    }
  },
  droots: function(p2) {
    if (p2.length === 3) {
      const a3 = p2[0], b = p2[1], c5 = p2[2], d2 = a3 - 2 * b + c5;
      if (d2 !== 0) {
        const m1 = -sqrt(b * b - a3 * c5), m22 = -a3 + b, v1 = -(m1 + m22) / d2, v2 = -(-m1 + m22) / d2;
        return [v1, v2];
      } else if (b !== c5 && d2 === 0) {
        return [(2 * b - c5) / (2 * (b - c5))];
      }
      return [];
    }
    if (p2.length === 2) {
      const a3 = p2[0], b = p2[1];
      if (a3 !== b) {
        return [a3 / (a3 - b)];
      }
      return [];
    }
    return [];
  },
  curvature: function(t5, d1, d2, _3d, kOnly) {
    let num, dnm, adk, dk, k2 = 0, r2 = 0;
    const d3 = utils.compute(t5, d1);
    const dd = utils.compute(t5, d2);
    const qdsum = d3.x * d3.x + d3.y * d3.y;
    if (_3d) {
      num = sqrt(
        pow(d3.y * dd.z - dd.y * d3.z, 2) + pow(d3.z * dd.x - dd.z * d3.x, 2) + pow(d3.x * dd.y - dd.x * d3.y, 2)
      );
      dnm = pow(qdsum + d3.z * d3.z, 3 / 2);
    } else {
      num = d3.x * dd.y - d3.y * dd.x;
      dnm = pow(qdsum, 3 / 2);
    }
    if (num === 0 || dnm === 0) {
      return { k: 0, r: 0 };
    }
    k2 = num / dnm;
    r2 = dnm / num;
    if (!kOnly) {
      const pk = utils.curvature(t5 - 1e-3, d1, d2, _3d, true).k;
      const nk = utils.curvature(t5 + 1e-3, d1, d2, _3d, true).k;
      dk = (nk - k2 + (k2 - pk)) / 2;
      adk = (abs(nk - k2) + abs(k2 - pk)) / 2;
    }
    return { k: k2, r: r2, dk, adk };
  },
  inflections: function(points) {
    if (points.length < 4) return [];
    const p2 = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }), a3 = p2[2].x * p2[1].y, b = p2[3].x * p2[1].y, c5 = p2[1].x * p2[2].y, d2 = p2[3].x * p2[2].y, v1 = 18 * (-3 * a3 + 2 * b + 3 * c5 - d2), v2 = 18 * (3 * a3 - b - 3 * c5), v3 = 18 * (c5 - a3);
    if (utils.approximately(v1, 0)) {
      if (!utils.approximately(v2, 0)) {
        let t5 = -v3 / v2;
        if (0 <= t5 && t5 <= 1) return [t5];
      }
      return [];
    }
    const d22 = 2 * v1;
    if (utils.approximately(d22, 0)) return [];
    const trm = v2 * v2 - 4 * v1 * v3;
    if (trm < 0) return [];
    const sq = Math.sqrt(trm);
    return [(sq - v2) / d22, -(v2 + sq) / d22].filter(function(r2) {
      return 0 <= r2 && r2 <= 1;
    });
  },
  bboxoverlap: function(b12, b22) {
    const dims = ["x", "y"], len = dims.length;
    for (let i2 = 0, dim, l2, t5, d2; i2 < len; i2++) {
      dim = dims[i2];
      l2 = b12[dim].mid;
      t5 = b22[dim].mid;
      d2 = (b12[dim].size + b22[dim].size) / 2;
      if (abs(l2 - t5) >= d2) return false;
    }
    return true;
  },
  expandbox: function(bbox, _bbox) {
    if (_bbox.x.min < bbox.x.min) {
      bbox.x.min = _bbox.x.min;
    }
    if (_bbox.y.min < bbox.y.min) {
      bbox.y.min = _bbox.y.min;
    }
    if (_bbox.z && _bbox.z.min < bbox.z.min) {
      bbox.z.min = _bbox.z.min;
    }
    if (_bbox.x.max > bbox.x.max) {
      bbox.x.max = _bbox.x.max;
    }
    if (_bbox.y.max > bbox.y.max) {
      bbox.y.max = _bbox.y.max;
    }
    if (_bbox.z && _bbox.z.max > bbox.z.max) {
      bbox.z.max = _bbox.z.max;
    }
    bbox.x.mid = (bbox.x.min + bbox.x.max) / 2;
    bbox.y.mid = (bbox.y.min + bbox.y.max) / 2;
    if (bbox.z) {
      bbox.z.mid = (bbox.z.min + bbox.z.max) / 2;
    }
    bbox.x.size = bbox.x.max - bbox.x.min;
    bbox.y.size = bbox.y.max - bbox.y.min;
    if (bbox.z) {
      bbox.z.size = bbox.z.max - bbox.z.min;
    }
  },
  pairiteration: function(c1, c22, curveIntersectionThreshold) {
    const c1b = c1.bbox(), c2b = c22.bbox(), r2 = 1e5, threshold2 = curveIntersectionThreshold || 0.5;
    if (c1b.x.size + c1b.y.size < threshold2 && c2b.x.size + c2b.y.size < threshold2) {
      return [
        (r2 * (c1._t1 + c1._t2) / 2 | 0) / r2 + "/" + (r2 * (c22._t1 + c22._t2) / 2 | 0) / r2
      ];
    }
    let cc1 = c1.split(0.5), cc2 = c22.split(0.5), pairs2 = [
      { left: cc1.left, right: cc2.left },
      { left: cc1.left, right: cc2.right },
      { left: cc1.right, right: cc2.right },
      { left: cc1.right, right: cc2.left }
    ];
    pairs2 = pairs2.filter(function(pair) {
      return utils.bboxoverlap(pair.left.bbox(), pair.right.bbox());
    });
    let results = [];
    if (pairs2.length === 0) return results;
    pairs2.forEach(function(pair) {
      results = results.concat(
        utils.pairiteration(pair.left, pair.right, threshold2)
      );
    });
    results = results.filter(function(v2, i2) {
      return results.indexOf(v2) === i2;
    });
    return results;
  },
  getccenter: function(p1, p2, p3) {
    const dx1 = p2.x - p1.x, dy1 = p2.y - p1.y, dx2 = p3.x - p2.x, dy2 = p3.y - p2.y, dx1p = dx1 * cos(quart) - dy1 * sin(quart), dy1p = dx1 * sin(quart) + dy1 * cos(quart), dx2p = dx2 * cos(quart) - dy2 * sin(quart), dy2p = dx2 * sin(quart) + dy2 * cos(quart), mx1 = (p1.x + p2.x) / 2, my1 = (p1.y + p2.y) / 2, mx2 = (p2.x + p3.x) / 2, my2 = (p2.y + p3.y) / 2, mx1n = mx1 + dx1p, my1n = my1 + dy1p, mx2n = mx2 + dx2p, my2n = my2 + dy2p, arc = utils.lli8(mx1, my1, mx1n, my1n, mx2, my2, mx2n, my2n), r2 = utils.dist(arc, p1);
    let s2 = atan2(p1.y - arc.y, p1.x - arc.x), m3 = atan2(p2.y - arc.y, p2.x - arc.x), e3 = atan2(p3.y - arc.y, p3.x - arc.x), _2;
    if (s2 < e3) {
      if (s2 > m3 || m3 > e3) {
        s2 += tau2;
      }
      if (s2 > e3) {
        _2 = e3;
        e3 = s2;
        s2 = _2;
      }
    } else {
      if (e3 < m3 && m3 < s2) {
        _2 = e3;
        e3 = s2;
        s2 = _2;
      } else {
        e3 += tau2;
      }
    }
    arc.s = s2;
    arc.e = e3;
    arc.r = r2;
    return arc;
  },
  numberSort: function(a3, b) {
    return a3 - b;
  }
};

// node_modules/bezier-js/src/poly-bezier.js
var PolyBezier = class _PolyBezier {
  constructor(curves) {
    this.curves = [];
    this._3d = false;
    if (!!curves) {
      this.curves = curves;
      this._3d = this.curves[0]._3d;
    }
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return "[" + this.curves.map(function(curve) {
      return utils.pointsToString(curve.points);
    }).join(", ") + "]";
  }
  addCurve(curve) {
    this.curves.push(curve);
    this._3d = this._3d || curve._3d;
  }
  length() {
    return this.curves.map(function(v2) {
      return v2.length();
    }).reduce(function(a3, b) {
      return a3 + b;
    });
  }
  curve(idx) {
    return this.curves[idx];
  }
  bbox() {
    const c5 = this.curves;
    var bbox = c5[0].bbox();
    for (var i2 = 1; i2 < c5.length; i2++) {
      utils.expandbox(bbox, c5[i2].bbox());
    }
    return bbox;
  }
  offset(d2) {
    const offset = [];
    this.curves.forEach(function(v2) {
      offset.push(...v2.offset(d2));
    });
    return new _PolyBezier(offset);
  }
};

// node_modules/bezier-js/src/bezier.js
var { abs: abs2, min: min3, max: max3, cos: cos2, sin: sin2, acos: acos2, sqrt: sqrt2 } = Math;
var pi3 = Math.PI;
var Bezier = class _Bezier {
  constructor(coords) {
    let args = coords && coords.forEach ? coords : Array.from(arguments).slice();
    let coordlen = false;
    if (typeof args[0] === "object") {
      coordlen = args.length;
      const newargs = [];
      args.forEach(function(point3) {
        ["x", "y", "z"].forEach(function(d2) {
          if (typeof point3[d2] !== "undefined") {
            newargs.push(point3[d2]);
          }
        });
      });
      args = newargs;
    }
    let higher = false;
    const len = args.length;
    if (coordlen) {
      if (coordlen > 4) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
        higher = true;
      }
    } else {
      if (len !== 6 && len !== 8 && len !== 9 && len !== 12) {
        if (arguments.length !== 1) {
          throw new Error(
            "Only new Bezier(point[]) is accepted for 4th and higher order curves"
          );
        }
      }
    }
    const _3d = this._3d = !higher && (len === 9 || len === 12) || coords && coords[0] && typeof coords[0].z !== "undefined";
    const points = this.points = [];
    for (let idx = 0, step = _3d ? 3 : 2; idx < len; idx += step) {
      var point2 = {
        x: args[idx],
        y: args[idx + 1]
      };
      if (_3d) {
        point2.z = args[idx + 2];
      }
      points.push(point2);
    }
    const order = this.order = points.length - 1;
    const dims = this.dims = ["x", "y"];
    if (_3d) dims.push("z");
    this.dimlen = dims.length;
    const aligned = utils.align(points, { p1: points[0], p2: points[order] });
    const baselength = utils.dist(points[0], points[order]);
    this._linear = aligned.reduce((t5, p2) => t5 + abs2(p2.y), 0) < baselength / 50;
    this._lut = [];
    this._t1 = 0;
    this._t2 = 1;
    this.update();
  }
  static quadraticFromPoints(p1, p2, p3, t5) {
    if (typeof t5 === "undefined") {
      t5 = 0.5;
    }
    if (t5 === 0) {
      return new _Bezier(p2, p2, p3);
    }
    if (t5 === 1) {
      return new _Bezier(p1, p2, p2);
    }
    const abc = _Bezier.getABC(2, p1, p2, p3, t5);
    return new _Bezier(p1, abc.A, p3);
  }
  static cubicFromPoints(S2, B3, E3, t5, d1) {
    if (typeof t5 === "undefined") {
      t5 = 0.5;
    }
    const abc = _Bezier.getABC(3, S2, B3, E3, t5);
    if (typeof d1 === "undefined") {
      d1 = utils.dist(B3, abc.C);
    }
    const d2 = d1 * (1 - t5) / t5;
    const selen = utils.dist(S2, E3), lx = (E3.x - S2.x) / selen, ly = (E3.y - S2.y) / selen, bx1 = d1 * lx, by1 = d1 * ly, bx2 = d2 * lx, by2 = d2 * ly;
    const e1 = { x: B3.x - bx1, y: B3.y - by1 }, e22 = { x: B3.x + bx2, y: B3.y + by2 }, A3 = abc.A, v1 = { x: A3.x + (e1.x - A3.x) / (1 - t5), y: A3.y + (e1.y - A3.y) / (1 - t5) }, v2 = { x: A3.x + (e22.x - A3.x) / t5, y: A3.y + (e22.y - A3.y) / t5 }, nc1 = { x: S2.x + (v1.x - S2.x) / t5, y: S2.y + (v1.y - S2.y) / t5 }, nc2 = {
      x: E3.x + (v2.x - E3.x) / (1 - t5),
      y: E3.y + (v2.y - E3.y) / (1 - t5)
    };
    return new _Bezier(S2, nc1, nc2, E3);
  }
  static getUtils() {
    return utils;
  }
  getUtils() {
    return _Bezier.getUtils();
  }
  static get PolyBezier() {
    return PolyBezier;
  }
  valueOf() {
    return this.toString();
  }
  toString() {
    return utils.pointsToString(this.points);
  }
  toSVG() {
    if (this._3d) return false;
    const p2 = this.points, x3 = p2[0].x, y3 = p2[0].y, s2 = ["M", x3, y3, this.order === 2 ? "Q" : "C"];
    for (let i2 = 1, last2 = p2.length; i2 < last2; i2++) {
      s2.push(p2[i2].x);
      s2.push(p2[i2].y);
    }
    return s2.join(" ");
  }
  setRatios(ratios) {
    if (ratios.length !== this.points.length) {
      throw new Error("incorrect number of ratio values");
    }
    this.ratios = ratios;
    this._lut = [];
  }
  verify() {
    const print = this.coordDigest();
    if (print !== this._print) {
      this._print = print;
      this.update();
    }
  }
  coordDigest() {
    return this.points.map(function(c5, pos) {
      return "" + pos + c5.x + c5.y + (c5.z ? c5.z : 0);
    }).join("");
  }
  update() {
    this._lut = [];
    this.dpoints = utils.derive(this.points, this._3d);
    this.computedirection();
  }
  computedirection() {
    const points = this.points;
    const angle = utils.angle(points[0], points[this.order], points[1]);
    this.clockwise = angle > 0;
  }
  length() {
    return utils.length(this.derivative.bind(this));
  }
  static getABC(order = 2, S2, B3, E3, t5 = 0.5) {
    const u2 = utils.projectionratio(t5, order), um = 1 - u2, C3 = {
      x: u2 * S2.x + um * E3.x,
      y: u2 * S2.y + um * E3.y
    }, s2 = utils.abcratio(t5, order), A3 = {
      x: B3.x + (B3.x - C3.x) / s2,
      y: B3.y + (B3.y - C3.y) / s2
    };
    return { A: A3, B: B3, C: C3, S: S2, E: E3 };
  }
  getABC(t5, B3) {
    B3 = B3 || this.get(t5);
    let S2 = this.points[0];
    let E3 = this.points[this.order];
    return _Bezier.getABC(this.order, S2, B3, E3, t5);
  }
  getLUT(steps) {
    this.verify();
    steps = steps || 100;
    if (this._lut.length === steps + 1) {
      return this._lut;
    }
    this._lut = [];
    steps++;
    this._lut = [];
    for (let i2 = 0, p2, t5; i2 < steps; i2++) {
      t5 = i2 / (steps - 1);
      p2 = this.compute(t5);
      p2.t = t5;
      this._lut.push(p2);
    }
    return this._lut;
  }
  on(point2, error) {
    error = error || 5;
    const lut = this.getLUT(), hits = [];
    for (let i2 = 0, c5, t5 = 0; i2 < lut.length; i2++) {
      c5 = lut[i2];
      if (utils.dist(c5, point2) < error) {
        hits.push(c5);
        t5 += i2 / lut.length;
      }
    }
    if (!hits.length) return false;
    return t /= hits.length;
  }
  project(point2) {
    const LUT = this.getLUT(), l2 = LUT.length - 1, closest = utils.closest(LUT, point2), mpos = closest.mpos, t13 = (mpos - 1) / l2, t22 = (mpos + 1) / l2, step = 0.1 / l2;
    let mdist = closest.mdist, t5 = t13, ft = t5, p2;
    mdist += 1;
    for (let d2; t5 < t22 + step; t5 += step) {
      p2 = this.compute(t5);
      d2 = utils.dist(point2, p2);
      if (d2 < mdist) {
        mdist = d2;
        ft = t5;
      }
    }
    ft = ft < 0 ? 0 : ft > 1 ? 1 : ft;
    p2 = this.compute(ft);
    p2.t = ft;
    p2.d = mdist;
    return p2;
  }
  get(t5) {
    return this.compute(t5);
  }
  point(idx) {
    return this.points[idx];
  }
  compute(t5) {
    if (this.ratios) {
      return utils.computeWithRatios(t5, this.points, this.ratios, this._3d);
    }
    return utils.compute(t5, this.points, this._3d, this.ratios);
  }
  raise() {
    const p2 = this.points, np = [p2[0]], k2 = p2.length;
    for (let i2 = 1, pi4, pim; i2 < k2; i2++) {
      pi4 = p2[i2];
      pim = p2[i2 - 1];
      np[i2] = {
        x: (k2 - i2) / k2 * pi4.x + i2 / k2 * pim.x,
        y: (k2 - i2) / k2 * pi4.y + i2 / k2 * pim.y
      };
    }
    np[k2] = p2[k2 - 1];
    return new _Bezier(np);
  }
  derivative(t5) {
    return utils.compute(t5, this.dpoints[0], this._3d);
  }
  dderivative(t5) {
    return utils.compute(t5, this.dpoints[1], this._3d);
  }
  align() {
    let p2 = this.points;
    return new _Bezier(utils.align(p2, { p1: p2[0], p2: p2[p2.length - 1] }));
  }
  curvature(t5) {
    return utils.curvature(t5, this.dpoints[0], this.dpoints[1], this._3d);
  }
  inflections() {
    return utils.inflections(this.points);
  }
  normal(t5) {
    return this._3d ? this.__normal3(t5) : this.__normal2(t5);
  }
  __normal2(t5) {
    const d2 = this.derivative(t5);
    const q2 = sqrt2(d2.x * d2.x + d2.y * d2.y);
    return { t: t5, x: -d2.y / q2, y: d2.x / q2 };
  }
  __normal3(t5) {
    const r1 = this.derivative(t5), r2 = this.derivative(t5 + 0.01), q1 = sqrt2(r1.x * r1.x + r1.y * r1.y + r1.z * r1.z), q2 = sqrt2(r2.x * r2.x + r2.y * r2.y + r2.z * r2.z);
    r1.x /= q1;
    r1.y /= q1;
    r1.z /= q1;
    r2.x /= q2;
    r2.y /= q2;
    r2.z /= q2;
    const c5 = {
      x: r2.y * r1.z - r2.z * r1.y,
      y: r2.z * r1.x - r2.x * r1.z,
      z: r2.x * r1.y - r2.y * r1.x
    };
    const m3 = sqrt2(c5.x * c5.x + c5.y * c5.y + c5.z * c5.z);
    c5.x /= m3;
    c5.y /= m3;
    c5.z /= m3;
    const R = [
      c5.x * c5.x,
      c5.x * c5.y - c5.z,
      c5.x * c5.z + c5.y,
      c5.x * c5.y + c5.z,
      c5.y * c5.y,
      c5.y * c5.z - c5.x,
      c5.x * c5.z - c5.y,
      c5.y * c5.z + c5.x,
      c5.z * c5.z
    ];
    const n2 = {
      t: t5,
      x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
      y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
      z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
    };
    return n2;
  }
  hull(t5) {
    let p2 = this.points, _p = [], q2 = [], idx = 0;
    q2[idx++] = p2[0];
    q2[idx++] = p2[1];
    q2[idx++] = p2[2];
    if (this.order === 3) {
      q2[idx++] = p2[3];
    }
    while (p2.length > 1) {
      _p = [];
      for (let i2 = 0, pt, l2 = p2.length - 1; i2 < l2; i2++) {
        pt = utils.lerp(t5, p2[i2], p2[i2 + 1]);
        q2[idx++] = pt;
        _p.push(pt);
      }
      p2 = _p;
    }
    return q2;
  }
  split(t13, t22) {
    if (t13 === 0 && !!t22) {
      return this.split(t22).left;
    }
    if (t22 === 1) {
      return this.split(t13).right;
    }
    const q2 = this.hull(t13);
    const result2 = {
      left: this.order === 2 ? new _Bezier([q2[0], q2[3], q2[5]]) : new _Bezier([q2[0], q2[4], q2[7], q2[9]]),
      right: this.order === 2 ? new _Bezier([q2[5], q2[4], q2[2]]) : new _Bezier([q2[9], q2[8], q2[6], q2[3]]),
      span: q2
    };
    result2.left._t1 = utils.map(0, 0, 1, this._t1, this._t2);
    result2.left._t2 = utils.map(t13, 0, 1, this._t1, this._t2);
    result2.right._t1 = utils.map(t13, 0, 1, this._t1, this._t2);
    result2.right._t2 = utils.map(1, 0, 1, this._t1, this._t2);
    if (!t22) {
      return result2;
    }
    t22 = utils.map(t22, t13, 1, 0, 1);
    return result2.right.split(t22).left;
  }
  extrema() {
    const result2 = {};
    let roots = [];
    this.dims.forEach(
      (function(dim) {
        let mfn = function(v2) {
          return v2[dim];
        };
        let p2 = this.dpoints[0].map(mfn);
        result2[dim] = utils.droots(p2);
        if (this.order === 3) {
          p2 = this.dpoints[1].map(mfn);
          result2[dim] = result2[dim].concat(utils.droots(p2));
        }
        result2[dim] = result2[dim].filter(function(t5) {
          return t5 >= 0 && t5 <= 1;
        });
        roots = roots.concat(result2[dim].sort(utils.numberSort));
      }).bind(this)
    );
    result2.values = roots.sort(utils.numberSort).filter(function(v2, idx) {
      return roots.indexOf(v2) === idx;
    });
    return result2;
  }
  bbox() {
    const extrema = this.extrema(), result2 = {};
    this.dims.forEach(
      (function(d2) {
        result2[d2] = utils.getminmax(this, d2, extrema[d2]);
      }).bind(this)
    );
    return result2;
  }
  overlaps(curve) {
    const lbbox = this.bbox(), tbbox = curve.bbox();
    return utils.bboxoverlap(lbbox, tbbox);
  }
  offset(t5, d2) {
    if (typeof d2 !== "undefined") {
      const c5 = this.get(t5), n2 = this.normal(t5);
      const ret = {
        c: c5,
        n: n2,
        x: c5.x + n2.x * d2,
        y: c5.y + n2.y * d2
      };
      if (this._3d) {
        ret.z = c5.z + n2.z * d2;
      }
      return ret;
    }
    if (this._linear) {
      const nv = this.normal(0), coords = this.points.map(function(p2) {
        const ret = {
          x: p2.x + t5 * nv.x,
          y: p2.y + t5 * nv.y
        };
        if (p2.z && nv.z) {
          ret.z = p2.z + t5 * nv.z;
        }
        return ret;
      });
      return [new _Bezier(coords)];
    }
    return this.reduce().map(function(s2) {
      if (s2._linear) {
        return s2.offset(t5)[0];
      }
      return s2.scale(t5);
    });
  }
  simple() {
    if (this.order === 3) {
      const a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
      const a22 = utils.angle(this.points[0], this.points[3], this.points[2]);
      if (a1 > 0 && a22 < 0 || a1 < 0 && a22 > 0) return false;
    }
    const n1 = this.normal(0);
    const n2 = this.normal(1);
    let s2 = n1.x * n2.x + n1.y * n2.y;
    if (this._3d) {
      s2 += n1.z * n2.z;
    }
    return abs2(acos2(s2)) < pi3 / 3;
  }
  reduce() {
    let i2, t13 = 0, t22 = 0, step = 0.01, segment, pass1 = [], pass2 = [];
    let extrema = this.extrema().values;
    if (extrema.indexOf(0) === -1) {
      extrema = [0].concat(extrema);
    }
    if (extrema.indexOf(1) === -1) {
      extrema.push(1);
    }
    for (t13 = extrema[0], i2 = 1; i2 < extrema.length; i2++) {
      t22 = extrema[i2];
      segment = this.split(t13, t22);
      segment._t1 = t13;
      segment._t2 = t22;
      pass1.push(segment);
      t13 = t22;
    }
    pass1.forEach(function(p1) {
      t13 = 0;
      t22 = 0;
      while (t22 <= 1) {
        for (t22 = t13 + step; t22 <= 1 + step; t22 += step) {
          segment = p1.split(t13, t22);
          if (!segment.simple()) {
            t22 -= step;
            if (abs2(t13 - t22) < step) {
              return [];
            }
            segment = p1.split(t13, t22);
            segment._t1 = utils.map(t13, 0, 1, p1._t1, p1._t2);
            segment._t2 = utils.map(t22, 0, 1, p1._t1, p1._t2);
            pass2.push(segment);
            t13 = t22;
            break;
          }
        }
      }
      if (t13 < 1) {
        segment = p1.split(t13, 1);
        segment._t1 = utils.map(t13, 0, 1, p1._t1, p1._t2);
        segment._t2 = p1._t2;
        pass2.push(segment);
      }
    });
    return pass2;
  }
  translate(v2, d1, d2) {
    d2 = typeof d2 === "number" ? d2 : d1;
    const o2 = this.order;
    let d3 = this.points.map((_2, i2) => (1 - i2 / o2) * d1 + i2 / o2 * d2);
    return new _Bezier(
      this.points.map((p2, i2) => ({
        x: p2.x + v2.x * d3[i2],
        y: p2.y + v2.y * d3[i2]
      }))
    );
  }
  scale(d2) {
    const order = this.order;
    let distanceFn = false;
    if (typeof d2 === "function") {
      distanceFn = d2;
    }
    if (distanceFn && order === 2) {
      return this.raise().scale(distanceFn);
    }
    const clockwise = this.clockwise;
    const points = this.points;
    if (this._linear) {
      return this.translate(
        this.normal(0),
        distanceFn ? distanceFn(0) : d2,
        distanceFn ? distanceFn(1) : d2
      );
    }
    const r1 = distanceFn ? distanceFn(0) : d2;
    const r2 = distanceFn ? distanceFn(1) : d2;
    const v2 = [this.offset(0, 10), this.offset(1, 10)];
    const np = [];
    const o2 = utils.lli4(v2[0], v2[0].c, v2[1], v2[1].c);
    if (!o2) {
      throw new Error("cannot scale this curve. Try reducing it first.");
    }
    [0, 1].forEach(function(t5) {
      const p2 = np[t5 * order] = utils.copy(points[t5 * order]);
      p2.x += (t5 ? r2 : r1) * v2[t5].n.x;
      p2.y += (t5 ? r2 : r1) * v2[t5].n.y;
    });
    if (!distanceFn) {
      [0, 1].forEach((t5) => {
        if (order === 2 && !!t5) return;
        const p2 = np[t5 * order];
        const d3 = this.derivative(t5);
        const p22 = { x: p2.x + d3.x, y: p2.y + d3.y };
        np[t5 + 1] = utils.lli4(p2, p22, o2, points[t5 + 1]);
      });
      return new _Bezier(np);
    }
    [0, 1].forEach(function(t5) {
      if (order === 2 && !!t5) return;
      var p2 = points[t5 + 1];
      var ov = {
        x: p2.x - o2.x,
        y: p2.y - o2.y
      };
      var rc = distanceFn ? distanceFn((t5 + 1) / order) : d2;
      if (distanceFn && !clockwise) rc = -rc;
      var m3 = sqrt2(ov.x * ov.x + ov.y * ov.y);
      ov.x /= m3;
      ov.y /= m3;
      np[t5 + 1] = {
        x: p2.x + rc * ov.x,
        y: p2.y + rc * ov.y
      };
    });
    return new _Bezier(np);
  }
  outline(d1, d2, d3, d4) {
    d2 = d2 === void 0 ? d1 : d2;
    if (this._linear) {
      const n2 = this.normal(0);
      const start2 = this.points[0];
      const end = this.points[this.points.length - 1];
      let s2, mid, e3;
      if (d3 === void 0) {
        d3 = d1;
        d4 = d2;
      }
      s2 = { x: start2.x + n2.x * d1, y: start2.y + n2.y * d1 };
      e3 = { x: end.x + n2.x * d3, y: end.y + n2.y * d3 };
      mid = { x: (s2.x + e3.x) / 2, y: (s2.y + e3.y) / 2 };
      const fline = [s2, mid, e3];
      s2 = { x: start2.x - n2.x * d2, y: start2.y - n2.y * d2 };
      e3 = { x: end.x - n2.x * d4, y: end.y - n2.y * d4 };
      mid = { x: (s2.x + e3.x) / 2, y: (s2.y + e3.y) / 2 };
      const bline = [e3, mid, s2];
      const ls2 = utils.makeline(bline[2], fline[0]);
      const le2 = utils.makeline(fline[2], bline[0]);
      const segments2 = [ls2, new _Bezier(fline), le2, new _Bezier(bline)];
      return new PolyBezier(segments2);
    }
    const reduced = this.reduce(), len = reduced.length, fcurves = [];
    let bcurves = [], p2, alen = 0, tlen = this.length();
    const graduated = typeof d3 !== "undefined" && typeof d4 !== "undefined";
    function linearDistanceFunction(s2, e3, tlen2, alen2, slen) {
      return function(v2) {
        const f1 = alen2 / tlen2, f2 = (alen2 + slen) / tlen2, d5 = e3 - s2;
        return utils.map(v2, 0, 1, s2 + f1 * d5, s2 + f2 * d5);
      };
    }
    reduced.forEach(function(segment) {
      const slen = segment.length();
      if (graduated) {
        fcurves.push(
          segment.scale(linearDistanceFunction(d1, d3, tlen, alen, slen))
        );
        bcurves.push(
          segment.scale(linearDistanceFunction(-d2, -d4, tlen, alen, slen))
        );
      } else {
        fcurves.push(segment.scale(d1));
        bcurves.push(segment.scale(-d2));
      }
      alen += slen;
    });
    bcurves = bcurves.map(function(s2) {
      p2 = s2.points;
      if (p2[3]) {
        s2.points = [p2[3], p2[2], p2[1], p2[0]];
      } else {
        s2.points = [p2[2], p2[1], p2[0]];
      }
      return s2;
    }).reverse();
    const fs = fcurves[0].points[0], fe = fcurves[len - 1].points[fcurves[len - 1].points.length - 1], bs = bcurves[len - 1].points[bcurves[len - 1].points.length - 1], be = bcurves[0].points[0], ls = utils.makeline(bs, fs), le = utils.makeline(fe, be), segments = [ls].concat(fcurves).concat([le]).concat(bcurves);
    return new PolyBezier(segments);
  }
  outlineshapes(d1, d2, curveIntersectionThreshold) {
    d2 = d2 || d1;
    const outline = this.outline(d1, d2).curves;
    const shapes = [];
    for (let i2 = 1, len = outline.length; i2 < len / 2; i2++) {
      const shape = utils.makeshape(
        outline[i2],
        outline[len - i2],
        curveIntersectionThreshold
      );
      shape.startcap.virtual = i2 > 1;
      shape.endcap.virtual = i2 < len / 2 - 1;
      shapes.push(shape);
    }
    return shapes;
  }
  intersects(curve, curveIntersectionThreshold) {
    if (!curve) return this.selfintersects(curveIntersectionThreshold);
    if (curve.p1 && curve.p2) {
      return this.lineIntersects(curve);
    }
    if (curve instanceof _Bezier) {
      curve = curve.reduce();
    }
    return this.curveintersects(
      this.reduce(),
      curve,
      curveIntersectionThreshold
    );
  }
  lineIntersects(line) {
    const mx = min3(line.p1.x, line.p2.x), my = min3(line.p1.y, line.p2.y), MX = max3(line.p1.x, line.p2.x), MY = max3(line.p1.y, line.p2.y);
    return utils.roots(this.points, line).filter((t5) => {
      var p2 = this.get(t5);
      return utils.between(p2.x, mx, MX) && utils.between(p2.y, my, MY);
    });
  }
  selfintersects(curveIntersectionThreshold) {
    const reduced = this.reduce(), len = reduced.length - 2, results = [];
    for (let i2 = 0, result2, left, right; i2 < len; i2++) {
      left = reduced.slice(i2, i2 + 1);
      right = reduced.slice(i2 + 2);
      result2 = this.curveintersects(left, right, curveIntersectionThreshold);
      results.push(...result2);
    }
    return results;
  }
  curveintersects(c1, c22, curveIntersectionThreshold) {
    const pairs2 = [];
    c1.forEach(function(l2) {
      c22.forEach(function(r2) {
        if (l2.overlaps(r2)) {
          pairs2.push({ left: l2, right: r2 });
        }
      });
    });
    let intersections = [];
    pairs2.forEach(function(pair) {
      const result2 = utils.pairiteration(
        pair.left,
        pair.right,
        curveIntersectionThreshold
      );
      if (result2.length > 0) {
        intersections = intersections.concat(result2);
      }
    });
    return intersections;
  }
  arcs(errorThreshold) {
    errorThreshold = errorThreshold || 0.5;
    return this._iterate(errorThreshold, []);
  }
  _error(pc, np1, s2, e3) {
    const q2 = (e3 - s2) / 4, c1 = this.get(s2 + q2), c22 = this.get(e3 - q2), ref = utils.dist(pc, np1), d1 = utils.dist(pc, c1), d2 = utils.dist(pc, c22);
    return abs2(d1 - ref) + abs2(d2 - ref);
  }
  _iterate(errorThreshold, circles) {
    let t_s = 0, t_e = 1, safety;
    do {
      safety = 0;
      t_e = 1;
      let np1 = this.get(t_s), np2, np3, arc, prev_arc;
      let curr_good = false, prev_good = false, done;
      let t_m = t_e, prev_e = 1, step = 0;
      do {
        prev_good = curr_good;
        prev_arc = arc;
        t_m = (t_s + t_e) / 2;
        step++;
        np2 = this.get(t_m);
        np3 = this.get(t_e);
        arc = utils.getccenter(np1, np2, np3);
        arc.interval = {
          start: t_s,
          end: t_e
        };
        let error = this._error(arc, np1, t_s, t_e);
        curr_good = error <= errorThreshold;
        done = prev_good && !curr_good;
        if (!done) prev_e = t_e;
        if (curr_good) {
          if (t_e >= 1) {
            arc.interval.end = prev_e = 1;
            prev_arc = arc;
            if (t_e > 1) {
              let d2 = {
                x: arc.x + arc.r * cos2(arc.e),
                y: arc.y + arc.r * sin2(arc.e)
              };
              arc.e += utils.angle({ x: arc.x, y: arc.y }, d2, this.get(1));
            }
            break;
          }
          t_e = t_e + (t_e - t_s) / 2;
        } else {
          t_e = t_m;
        }
      } while (!done && safety++ < 100);
      if (safety >= 100) {
        break;
      }
      prev_arc = prev_arc ? prev_arc : arc;
      circles.push(prev_arc);
      t_s = prev_e;
    } while (t_e < 1);
    return circles;
  }
};

// node_modules/index-array-by/dist/index-array-by.mjs
function _arrayLikeToArray6(r2, a3) {
  (null == a3 || a3 > r2.length) && (a3 = r2.length);
  for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r2[e3];
  return n2;
}
function _arrayWithHoles5(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles4(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray6(r2);
}
function _iterableToArray4(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit5(r2, l2) {
  var t5 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t5) {
    var e3, n2, i2, u2, a3 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t5 = t5.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e3 = i2.call(t5)).done) && (a3.push(e3.value), a3.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t5.return && (u2 = t5.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a3;
  }
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(e3, t5) {
  if (null == e3) return {};
  var o2, r2, i2 = _objectWithoutPropertiesLoose(e3, t5);
  if (Object.getOwnPropertySymbols) {
    var s2 = Object.getOwnPropertySymbols(e3);
    for (r2 = 0; r2 < s2.length; r2++) o2 = s2[r2], t5.includes(o2) || {}.propertyIsEnumerable.call(e3, o2) && (i2[o2] = e3[o2]);
  }
  return i2;
}
function _objectWithoutPropertiesLoose(r2, e3) {
  if (null == r2) return {};
  var t5 = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (e3.includes(n2)) continue;
    t5[n2] = r2[n2];
  }
  return t5;
}
function _slicedToArray5(r2, e3) {
  return _arrayWithHoles5(r2) || _iterableToArrayLimit5(r2, e3) || _unsupportedIterableToArray6(r2, e3) || _nonIterableRest5();
}
function _toConsumableArray4(r2) {
  return _arrayWithoutHoles4(r2) || _iterableToArray4(r2) || _unsupportedIterableToArray6(r2) || _nonIterableSpread4();
}
function _toPrimitive4(t5, r2) {
  if ("object" != typeof t5 || !t5) return t5;
  var e3 = t5[Symbol.toPrimitive];
  if (void 0 !== e3) {
    var i2 = e3.call(t5, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t5);
}
function _toPropertyKey4(t5) {
  var i2 = _toPrimitive4(t5, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _unsupportedIterableToArray6(r2, a3) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray6(r2, a3);
    var t5 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t5 && r2.constructor && (t5 = r2.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r2) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray6(r2, a3) : void 0;
  }
}
var index7 = (function() {
  var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var keyAccessors = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var multiItem = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var flattenKeys = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var keys2 = (keyAccessors instanceof Array ? keyAccessors.length ? keyAccessors : [void 0] : [keyAccessors]).map(function(key) {
    return {
      keyAccessor: key,
      isProp: !(key instanceof Function)
    };
  });
  var indexedResult = list.reduce(function(res, item) {
    var iterObj = res;
    var itemVal = item;
    keys2.forEach(function(_ref, idx) {
      var keyAccessor = _ref.keyAccessor, isProp = _ref.isProp;
      var key;
      if (isProp) {
        var _itemVal = itemVal, propVal = _itemVal[keyAccessor], rest2 = _objectWithoutProperties(_itemVal, [keyAccessor].map(_toPropertyKey4));
        key = propVal;
        itemVal = rest2;
      } else {
        key = keyAccessor(itemVal, idx);
      }
      if (idx + 1 < keys2.length) {
        if (!iterObj.hasOwnProperty(key)) {
          iterObj[key] = {};
        }
        iterObj = iterObj[key];
      } else {
        if (multiItem) {
          if (!iterObj.hasOwnProperty(key)) {
            iterObj[key] = [];
          }
          iterObj[key].push(itemVal);
        } else {
          iterObj[key] = itemVal;
        }
      }
    });
    return res;
  }, {});
  if (multiItem instanceof Function) {
    (function reduce3(node) {
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      if (level === keys2.length) {
        Object.keys(node).forEach(function(k2) {
          return node[k2] = multiItem(node[k2]);
        });
      } else {
        Object.values(node).forEach(function(child) {
          return reduce3(child, level + 1);
        });
      }
    })(indexedResult);
  }
  var result2 = indexedResult;
  if (flattenKeys) {
    result2 = [];
    (function flatten2(node) {
      var accKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      if (accKeys.length === keys2.length) {
        result2.push({
          keys: accKeys,
          vals: node
        });
      } else {
        Object.entries(node).forEach(function(_ref2) {
          var _ref3 = _slicedToArray5(_ref2, 2), key = _ref3[0], val = _ref3[1];
          return flatten2(val, [].concat(_toConsumableArray4(accKeys), [key]));
        });
      }
    })(indexedResult);
    if (keyAccessors instanceof Array && keyAccessors.length === 0 && result2.length === 1) {
      result2[0].keys = [];
    }
  }
  return result2;
});

// node_modules/d3-scale/src/init.js
function initRange(domain, range3) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range3).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index8 = new InternMap(), domain = [], range3 = [], unknown = implicit;
  function scale(d2) {
    let i2 = index8.get(d2);
    if (i2 === void 0) {
      if (unknown !== implicit) return unknown;
      index8.set(d2, i2 = domain.push(d2) - 1);
    }
    return range3[i2 % range3.length];
  }
  scale.domain = function(_2) {
    if (!arguments.length) return domain.slice();
    domain = [], index8 = new InternMap();
    for (const value of _2) {
      if (index8.has(value)) continue;
      index8.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_2) {
    return arguments.length ? (range3 = Array.from(_2), scale) : range3.slice();
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range3).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x3) {
  return Math.abs(x3 = Math.round(x3)) >= 1e21 ? x3.toLocaleString("en").replace(/,/g, "") : x3.toString(10);
}
function formatDecimalParts(x3, p2) {
  if ((i2 = (x3 = p2 ? x3.toExponential(p2 - 1) : x3.toExponential()).indexOf("e")) < 0) return null;
  var i2, coefficient = x3.slice(0, i2);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x3.slice(i2 + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x3) {
  return x3 = formatDecimalParts(Math.abs(x3)), x3 ? x3[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i2 = value.length, t5 = [], j2 = 0, g2 = grouping[0], length = 0;
    while (i2 > 0 && g2 > 0) {
      if (length + g2 + 1 > width) g2 = Math.max(1, width - length);
      t5.push(value.substring(i2 -= g2, i2 + g2));
      if ((length += g2 + 1) > width) break;
      g2 = grouping[j2 = (j2 + 1) % grouping.length];
    }
    return t5.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i2) {
      return numerals[+i2];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out: for (var n2 = s2.length, i2 = 1, i0 = -1, i1; i2 < n2; ++i2) {
    switch (s2[i2]) {
      case ".":
        i0 = i1 = i2;
        break;
      case "0":
        if (i0 === 0) i0 = i2;
        i1 = i2;
        break;
      default:
        if (!+s2[i2]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x3, p2) {
  var d2 = formatDecimalParts(x3, p2);
  if (!d2) return x3 + "";
  var coefficient = d2[0], exponent2 = d2[1], i2 = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n2 = coefficient.length;
  return i2 === n2 ? coefficient : i2 > n2 ? coefficient + new Array(i2 - n2 + 1).join("0") : i2 > 0 ? coefficient.slice(0, i2) + "." + coefficient.slice(i2) : "0." + new Array(1 - i2).join("0") + formatDecimalParts(x3, Math.max(0, p2 + i2 - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x3, p2) {
  var d2 = formatDecimalParts(x3, p2);
  if (!d2) return x3 + "";
  var coefficient = d2[0], exponent2 = d2[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x3, p2) => (x3 * 100).toFixed(p2),
  "b": (x3) => Math.round(x3).toString(2),
  "c": (x3) => x3 + "",
  "d": formatDecimal_default,
  "e": (x3, p2) => x3.toExponential(p2),
  "f": (x3, p2) => x3.toFixed(p2),
  "g": (x3, p2) => x3.toPrecision(p2),
  "o": (x3) => Math.round(x3).toString(8),
  "p": (x3, p2) => formatRounded_default(x3 * 100, p2),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x3) => Math.round(x3).toString(16).toUpperCase(),
  "x": (x3) => Math.round(x3).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default2(x3) {
  return x3;
}

// node_modules/d3-format/src/locale.js
var map4 = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map4.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map4.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "−" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill2 = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim2 = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes_default[type]) precision === void 0 && (precision = 12), trim2 = true, type = "g";
    if (zero3 || fill2 === "0" && align === "=") zero3 = true, fill2 = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i2, n2, c5;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim2) value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i2 = -1, n2 = value.length;
          while (++i2 < n2) {
            if (c5 = value.charCodeAt(i2), 48 > c5 || c5 > 57) {
              valueSuffix = (c5 === 46 ? decimal + value.slice(i2 + 1) : value.slice(i2)) + valueSuffix;
              value = value.slice(0, i2);
              break;
            }
          }
        }
      }
      if (comma && !zero3) value = group2(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill2) : "";
      if (comma && zero3) value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f2 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e3 = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e3), prefix = prefixes[8 + e3 / 3];
    return function(value2) {
      return f2(k2 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-time/src/interval.js
var t02 = /* @__PURE__ */ new Date();
var t12 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count2, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;
  }
  interval.floor = (date) => {
    return floori(date = /* @__PURE__ */ new Date(+date)), date;
  };
  interval.ceil = (date) => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = (date) => {
    const d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = (date, step) => {
    return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = (start2, stop, step) => {
    const range3 = [];
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop) || !(step > 0)) return range3;
    let previous;
    do
      range3.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop);
    return range3;
  };
  interval.filter = (test) => {
    return timeInterval((date) => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date, 1), !test(date)) {
          }
        }
      }
    });
  };
  if (count2) {
    interval.count = (start2, end) => {
      t02.setTime(+start2), t12.setTime(+end);
      floori(t02), floori(t12);
      return Math.floor(count2(t02, t12));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d2) => field(d2) % step === 0 : (d2) => interval.count(0, d2) % step === 0);
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date, step) => {
  date.setTime(+date + step);
}, (start2, end) => {
  return end - start2;
});
millisecond.every = (k2) => {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0)) return null;
  if (!(k2 > 1)) return millisecond;
  return timeInterval((date) => {
    date.setTime(Math.floor(date / k2) * k2);
  }, (date, step) => {
    date.setTime(+date + step * k2);
  }, (start2, end) => {
    return (end - start2) / k2;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds());
}, (date, step) => {
  date.setTime(+date + step * durationSecond);
}, (start2, end) => {
  return (end - start2) / durationSecond;
}, (date) => {
  return date.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date) => {
  return date.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date) => {
  date.setUTCSeconds(0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationMinute);
}, (start2, end) => {
  return (end - start2) / durationMinute;
}, (date) => {
  return date.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date) => {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date) => {
  return date.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date) => {
  date.setUTCMinutes(0, 0, 0);
}, (date, step) => {
  date.setTime(+date + step * durationHour);
}, (start2, end) => {
  return (end - start2) / durationHour;
}, (date) => {
  return date.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date) => date.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date) => {
  return date.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date) => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start2, end) => {
  return (end - start2) / durationDay;
}, (date) => {
  return Math.floor(date / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i2) {
  return timeInterval((date) => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i2) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start2, end) => {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i2) {
  return timeInterval((date) => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i2) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start2, end) => {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date) => {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setMonth(date.getMonth() + step);
}, (start2, end) => {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, (date) => {
  return date.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date) => {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCMonth(date.getUTCMonth() + step);
}, (start2, end) => {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, (date) => {
  return date.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date) => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start2, end) => {
  return end.getFullYear() - start2.getFullYear();
}, (date) => {
  return date.getFullYear();
});
timeYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date) => {
    date.setFullYear(Math.floor(date.getFullYear() / k2) * k2);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k2);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date) => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start2, end) => {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, (date) => {
  return date.getUTCFullYear();
});
utcYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date) => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k2) * k2);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k2);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start2, stop, count2) {
    const reverse3 = stop < start2;
    if (reverse3) [start2, stop] = [stop, start2];
    const interval = count2 && typeof count2.range === "function" ? count2 : tickInterval(start2, stop, count2);
    const ticks3 = interval ? interval.range(start2, +stop + 1) : [];
    return reverse3 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start2, stop, count2) {
    const target = Math.abs(stop - start2) / count2;
    const i2 = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i2 === tickIntervals.length) return year.every(tickStep(start2 / durationYear, stop / durationYear, count2));
    if (i2 === 0) return millisecond.every(Math.max(tickStep(start2, stop, count2), 1));
    const [t5, step] = tickIntervals[target / tickIntervals[i2 - 1][2] < tickIntervals[i2][2] / target ? i2 - 1 : i2];
    return t5.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d2) {
  if (0 <= d2.y && d2.y < 100) {
    var date = new Date(-1, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L);
    date.setFullYear(d2.y);
    return date;
  }
  return new Date(d2.y, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L);
}
function utcDate(d2) {
  if (0 <= d2.y && d2.y < 100) {
    var date = new Date(Date.UTC(-1, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L));
    date.setUTCFullYear(d2.y);
    return date;
  }
  return new Date(Date.UTC(d2.y, d2.m, d2.d, d2.H, d2.M, d2.S, d2.L));
}
function newDate(y3, m3, d2) {
  return { y: y3, m: m3, d: d2, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date) {
      var string = [], i2 = -1, j2 = 0, n2 = specifier.length, c5, pad4, format2;
      if (!(date instanceof Date)) date = /* @__PURE__ */ new Date(+date);
      while (++i2 < n2) {
        if (specifier.charCodeAt(i2) === 37) {
          string.push(specifier.slice(j2, i2));
          if ((pad4 = pads[c5 = specifier.charAt(++i2)]) != null) c5 = specifier.charAt(++i2);
          else pad4 = c5 === "e" ? " " : "0";
          if (format2 = formats2[c5]) c5 = format2(date, pad4);
          string.push(c5);
          j2 = i2 + 1;
        }
      }
      string.push(specifier.slice(j2, i2));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d2 = newDate(1900, void 0, 1), i2 = parseSpecifier(d2, specifier, string += "", 0), week, day;
      if (i2 != string.length) return null;
      if ("Q" in d2) return new Date(d2.Q);
      if ("s" in d2) return new Date(d2.s * 1e3 + ("L" in d2 ? d2.L : 0));
      if (Z && !("Z" in d2)) d2.Z = 0;
      if ("p" in d2) d2.H = d2.H % 12 + d2.p * 12;
      if (d2.m === void 0) d2.m = "q" in d2 ? d2.q : 0;
      if ("V" in d2) {
        if (d2.V < 1 || d2.V > 53) return null;
        if (!("w" in d2)) d2.w = 1;
        if ("Z" in d2) {
          week = utcDate(newDate(d2.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d2.V - 1) * 7);
          d2.y = week.getUTCFullYear();
          d2.m = week.getUTCMonth();
          d2.d = week.getUTCDate() + (d2.w + 6) % 7;
        } else {
          week = localDate(newDate(d2.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d2.V - 1) * 7);
          d2.y = week.getFullYear();
          d2.m = week.getMonth();
          d2.d = week.getDate() + (d2.w + 6) % 7;
        }
      } else if ("W" in d2 || "U" in d2) {
        if (!("w" in d2)) d2.w = "u" in d2 ? d2.u % 7 : "W" in d2 ? 1 : 0;
        day = "Z" in d2 ? utcDate(newDate(d2.y, 0, 1)).getUTCDay() : localDate(newDate(d2.y, 0, 1)).getDay();
        d2.m = 0;
        d2.d = "W" in d2 ? (d2.w + 6) % 7 + d2.W * 7 - (day + 5) % 7 : d2.w + d2.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d2) {
        d2.H += d2.Z / 100 | 0;
        d2.M += d2.Z % 100;
        return utcDate(d2);
      }
      return localDate(d2);
    };
  }
  function parseSpecifier(d2, specifier, string, j2) {
    var i2 = 0, n2 = specifier.length, m3 = string.length, c5, parse;
    while (i2 < n2) {
      if (j2 >= m3) return -1;
      c5 = specifier.charCodeAt(i2++);
      if (c5 === 37) {
        c5 = specifier.charAt(i2++);
        parse = parses[c5 in pads ? specifier.charAt(i2++) : c5];
        if (!parse || (j2 = parse(d2, string, j2)) < 0) return -1;
      } else if (c5 != string.charCodeAt(j2++)) {
        return -1;
      }
    }
    return j2;
  }
  function parsePeriod(d2, string, i2) {
    var n2 = periodRe.exec(string.slice(i2));
    return n2 ? (d2.p = periodLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseShortWeekday(d2, string, i2) {
    var n2 = shortWeekdayRe.exec(string.slice(i2));
    return n2 ? (d2.w = shortWeekdayLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseWeekday(d2, string, i2) {
    var n2 = weekdayRe.exec(string.slice(i2));
    return n2 ? (d2.w = weekdayLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseShortMonth(d2, string, i2) {
    var n2 = shortMonthRe.exec(string.slice(i2));
    return n2 ? (d2.m = shortMonthLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseMonth(d2, string, i2) {
    var n2 = monthRe.exec(string.slice(i2));
    return n2 ? (d2.m = monthLookup.get(n2[0].toLowerCase()), i2 + n2[0].length) : -1;
  }
  function parseLocaleDateTime(d2, string, i2) {
    return parseSpecifier(d2, locale_dateTime, string, i2);
  }
  function parseLocaleDate(d2, string, i2) {
    return parseSpecifier(d2, locale_date, string, i2);
  }
  function parseLocaleTime(d2, string, i2) {
    return parseSpecifier(d2, locale_time, string, i2);
  }
  function formatShortWeekday(d2) {
    return locale_shortWeekdays[d2.getDay()];
  }
  function formatWeekday(d2) {
    return locale_weekdays[d2.getDay()];
  }
  function formatShortMonth(d2) {
    return locale_shortMonths[d2.getMonth()];
  }
  function formatMonth(d2) {
    return locale_months[d2.getMonth()];
  }
  function formatPeriod(d2) {
    return locale_periods[+(d2.getHours() >= 12)];
  }
  function formatQuarter(d2) {
    return 1 + ~~(d2.getMonth() / 3);
  }
  function formatUTCShortWeekday(d2) {
    return locale_shortWeekdays[d2.getUTCDay()];
  }
  function formatUTCWeekday(d2) {
    return locale_weekdays[d2.getUTCDay()];
  }
  function formatUTCShortMonth(d2) {
    return locale_shortMonths[d2.getUTCMonth()];
  }
  function formatUTCMonth(d2) {
    return locale_months[d2.getUTCMonth()];
  }
  function formatUTCPeriod(d2) {
    return locale_periods[+(d2.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d2) {
    return 1 + ~~(d2.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f2 = newFormat(specifier += "", formats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    parse: function(specifier) {
      var p2 = newParse(specifier += "", false);
      p2.toString = function() {
        return specifier;
      };
      return p2;
    },
    utcFormat: function(specifier) {
      var f2 = newFormat(specifier += "", utcFormats);
      f2.toString = function() {
        return specifier;
      };
      return f2;
    },
    utcParse: function(specifier) {
      var p2 = newParse(specifier += "", true);
      p2.toString = function() {
        return specifier;
      };
      return p2;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad3(value, fill2, width) {
  var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill2) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names2) {
  return new RegExp("^(?:" + names2.map(requote).join("|") + ")", "i");
}
function formatLookup(names2) {
  return new Map(names2.map((name, i2) => [name.toLowerCase(), i2]));
}
function parseWeekdayNumberSunday(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 1));
  return n2 ? (d2.w = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekdayNumberMonday(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 1));
  return n2 ? (d2.u = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekNumberSunday(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.U = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekNumberISO(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.V = +n2[0], i2 + n2[0].length) : -1;
}
function parseWeekNumberMonday(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.W = +n2[0], i2 + n2[0].length) : -1;
}
function parseFullYear(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 4));
  return n2 ? (d2.y = +n2[0], i2 + n2[0].length) : -1;
}
function parseYear(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.y = +n2[0] + (+n2[0] > 68 ? 1900 : 2e3), i2 + n2[0].length) : -1;
}
function parseZone(d2, string, i2) {
  var n2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i2, i2 + 6));
  return n2 ? (d2.Z = n2[1] ? 0 : -(n2[2] + (n2[3] || "00")), i2 + n2[0].length) : -1;
}
function parseQuarter(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 1));
  return n2 ? (d2.q = n2[0] * 3 - 3, i2 + n2[0].length) : -1;
}
function parseMonthNumber(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.m = n2[0] - 1, i2 + n2[0].length) : -1;
}
function parseDayOfMonth(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.d = +n2[0], i2 + n2[0].length) : -1;
}
function parseDayOfYear(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 3));
  return n2 ? (d2.m = 0, d2.d = +n2[0], i2 + n2[0].length) : -1;
}
function parseHour24(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.H = +n2[0], i2 + n2[0].length) : -1;
}
function parseMinutes(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.M = +n2[0], i2 + n2[0].length) : -1;
}
function parseSeconds(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 2));
  return n2 ? (d2.S = +n2[0], i2 + n2[0].length) : -1;
}
function parseMilliseconds(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 3));
  return n2 ? (d2.L = +n2[0], i2 + n2[0].length) : -1;
}
function parseMicroseconds(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2, i2 + 6));
  return n2 ? (d2.L = Math.floor(n2[0] / 1e3), i2 + n2[0].length) : -1;
}
function parseLiteralPercent(d2, string, i2) {
  var n2 = percentRe.exec(string.slice(i2, i2 + 1));
  return n2 ? i2 + n2[0].length : -1;
}
function parseUnixTimestamp(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2));
  return n2 ? (d2.Q = +n2[0], i2 + n2[0].length) : -1;
}
function parseUnixTimestampSeconds(d2, string, i2) {
  var n2 = numberRe.exec(string.slice(i2));
  return n2 ? (d2.s = +n2[0], i2 + n2[0].length) : -1;
}
function formatDayOfMonth(d2, p2) {
  return pad3(d2.getDate(), p2, 2);
}
function formatHour24(d2, p2) {
  return pad3(d2.getHours(), p2, 2);
}
function formatHour12(d2, p2) {
  return pad3(d2.getHours() % 12 || 12, p2, 2);
}
function formatDayOfYear(d2, p2) {
  return pad3(1 + timeDay.count(timeYear(d2), d2), p2, 3);
}
function formatMilliseconds(d2, p2) {
  return pad3(d2.getMilliseconds(), p2, 3);
}
function formatMicroseconds(d2, p2) {
  return formatMilliseconds(d2, p2) + "000";
}
function formatMonthNumber(d2, p2) {
  return pad3(d2.getMonth() + 1, p2, 2);
}
function formatMinutes(d2, p2) {
  return pad3(d2.getMinutes(), p2, 2);
}
function formatSeconds(d2, p2) {
  return pad3(d2.getSeconds(), p2, 2);
}
function formatWeekdayNumberMonday(d2) {
  var day = d2.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d2, p2) {
  return pad3(timeSunday.count(timeYear(d2) - 1, d2), p2, 2);
}
function dISO(d2) {
  var day = d2.getDay();
  return day >= 4 || day === 0 ? timeThursday(d2) : timeThursday.ceil(d2);
}
function formatWeekNumberISO(d2, p2) {
  d2 = dISO(d2);
  return pad3(timeThursday.count(timeYear(d2), d2) + (timeYear(d2).getDay() === 4), p2, 2);
}
function formatWeekdayNumberSunday(d2) {
  return d2.getDay();
}
function formatWeekNumberMonday(d2, p2) {
  return pad3(timeMonday.count(timeYear(d2) - 1, d2), p2, 2);
}
function formatYear(d2, p2) {
  return pad3(d2.getFullYear() % 100, p2, 2);
}
function formatYearISO(d2, p2) {
  d2 = dISO(d2);
  return pad3(d2.getFullYear() % 100, p2, 2);
}
function formatFullYear(d2, p2) {
  return pad3(d2.getFullYear() % 1e4, p2, 4);
}
function formatFullYearISO(d2, p2) {
  var day = d2.getDay();
  d2 = day >= 4 || day === 0 ? timeThursday(d2) : timeThursday.ceil(d2);
  return pad3(d2.getFullYear() % 1e4, p2, 4);
}
function formatZone(d2) {
  var z3 = d2.getTimezoneOffset();
  return (z3 > 0 ? "-" : (z3 *= -1, "+")) + pad3(z3 / 60 | 0, "0", 2) + pad3(z3 % 60, "0", 2);
}
function formatUTCDayOfMonth(d2, p2) {
  return pad3(d2.getUTCDate(), p2, 2);
}
function formatUTCHour24(d2, p2) {
  return pad3(d2.getUTCHours(), p2, 2);
}
function formatUTCHour12(d2, p2) {
  return pad3(d2.getUTCHours() % 12 || 12, p2, 2);
}
function formatUTCDayOfYear(d2, p2) {
  return pad3(1 + utcDay.count(utcYear(d2), d2), p2, 3);
}
function formatUTCMilliseconds(d2, p2) {
  return pad3(d2.getUTCMilliseconds(), p2, 3);
}
function formatUTCMicroseconds(d2, p2) {
  return formatUTCMilliseconds(d2, p2) + "000";
}
function formatUTCMonthNumber(d2, p2) {
  return pad3(d2.getUTCMonth() + 1, p2, 2);
}
function formatUTCMinutes(d2, p2) {
  return pad3(d2.getUTCMinutes(), p2, 2);
}
function formatUTCSeconds(d2, p2) {
  return pad3(d2.getUTCSeconds(), p2, 2);
}
function formatUTCWeekdayNumberMonday(d2) {
  var dow = d2.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d2, p2) {
  return pad3(utcSunday.count(utcYear(d2) - 1, d2), p2, 2);
}
function UTCdISO(d2) {
  var day = d2.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d2) : utcThursday.ceil(d2);
}
function formatUTCWeekNumberISO(d2, p2) {
  d2 = UTCdISO(d2);
  return pad3(utcThursday.count(utcYear(d2), d2) + (utcYear(d2).getUTCDay() === 4), p2, 2);
}
function formatUTCWeekdayNumberSunday(d2) {
  return d2.getUTCDay();
}
function formatUTCWeekNumberMonday(d2, p2) {
  return pad3(utcMonday.count(utcYear(d2) - 1, d2), p2, 2);
}
function formatUTCYear(d2, p2) {
  return pad3(d2.getUTCFullYear() % 100, p2, 2);
}
function formatUTCYearISO(d2, p2) {
  d2 = UTCdISO(d2);
  return pad3(d2.getUTCFullYear() % 100, p2, 2);
}
function formatUTCFullYear(d2, p2) {
  return pad3(d2.getUTCFullYear() % 1e4, p2, 4);
}
function formatUTCFullYearISO(d2, p2) {
  var day = d2.getUTCDay();
  d2 = day >= 4 || day === 0 ? utcThursday(d2) : utcThursday.ceil(d2);
  return pad3(d2.getUTCFullYear() % 1e4, p2, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d2) {
  return +d2;
}
function formatUnixTimestampSeconds(d2) {
  return Math.floor(+d2 / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date) {
  return date.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}
var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n2 = specifier.length / 6 | 0, colors = new Array(n2), i2 = 0;
  while (i2 < n2) colors[i2] = "#" + specifier.slice(i2 * 6, ++i2 * 6);
  return colors;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/observable10.js
var observable10_default = colors_default("4269d0efb118ff725c6cc5b03ca951ff8ab7a463f297bbf59c6b4e9498a0");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme28) => rgbBasis(scheme28[scheme28.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c3 = cubehelix();

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c4 = rgb();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range3) {
  var n2 = range3.length;
  return function(t5) {
    return range3[Math.max(0, Math.min(n2 - 1, Math.floor(t5 * n2)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/force-graph/dist/force-graph.mjs
function styleInject2(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (typeof document === "undefined") {
    return;
  }
  var head2 = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head2.firstChild) {
      head2.insertBefore(style, head2.firstChild);
    } else {
      head2.appendChild(style);
    }
  } else {
    head2.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z2 = ".force-graph-container canvas {\n  display: block;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.force-graph-container .clickable {\n  cursor: pointer;\n}\n\n.force-graph-container .grabbable {\n  cursor: move;\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.force-graph-container .grabbable:active {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n";
styleInject2(css_248z2);
function _arrayLikeToArray7(r2, a3) {
  (null == a3 || a3 > r2.length) && (a3 = r2.length);
  for (var e3 = 0, n2 = Array(a3); e3 < a3; e3++) n2[e3] = r2[e3];
  return n2;
}
function _arrayWithHoles6(r2) {
  if (Array.isArray(r2)) return r2;
}
function _arrayWithoutHoles5(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray7(r2);
}
function _construct(t5, e3, r2) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o2 = [null];
  o2.push.apply(o2, e3);
  var p2 = new (t5.bind.apply(t5, o2))();
  return p2;
}
function _defineProperty3(e3, r2, t5) {
  return (r2 = _toPropertyKey5(r2)) in e3 ? Object.defineProperty(e3, r2, {
    value: t5,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e3[r2] = t5, e3;
}
function _isNativeReflectConstruct() {
  try {
    var t5 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t6) {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t5;
  })();
}
function _iterableToArray5(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _iterableToArrayLimit6(r2, l2) {
  var t5 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t5) {
    var e3, n2, i2, u2, a3 = [], f2 = true, o2 = false;
    try {
      if (i2 = (t5 = t5.call(r2)).next, 0 === l2) ;
      else for (; !(f2 = (e3 = i2.call(t5)).done) && (a3.push(e3.value), a3.length !== l2); f2 = true) ;
    } catch (r3) {
      o2 = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t5.return && (u2 = t5.return(), Object(u2) !== u2)) return;
      } finally {
        if (o2) throw n2;
      }
    }
    return a3;
  }
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys2(e3, r2) {
  var t5 = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e3);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e3, r3).enumerable;
    })), t5.push.apply(t5, o2);
  }
  return t5;
}
function _objectSpread22(e3) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t5 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys2(Object(t5), true).forEach(function(r3) {
      _defineProperty3(e3, r3, t5[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(t5)) : ownKeys2(Object(t5)).forEach(function(r3) {
      Object.defineProperty(e3, r3, Object.getOwnPropertyDescriptor(t5, r3));
    });
  }
  return e3;
}
function _slicedToArray6(r2, e3) {
  return _arrayWithHoles6(r2) || _iterableToArrayLimit6(r2, e3) || _unsupportedIterableToArray7(r2, e3) || _nonIterableRest6();
}
function _toConsumableArray5(r2) {
  return _arrayWithoutHoles5(r2) || _iterableToArray5(r2) || _unsupportedIterableToArray7(r2) || _nonIterableSpread5();
}
function _toPrimitive5(t5, r2) {
  if ("object" != typeof t5 || !t5) return t5;
  var e3 = t5[Symbol.toPrimitive];
  if (void 0 !== e3) {
    var i2 = e3.call(t5, r2);
    if ("object" != typeof i2) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t5);
}
function _toPropertyKey5(t5) {
  var i2 = _toPrimitive5(t5, "string");
  return "symbol" == typeof i2 ? i2 : i2 + "";
}
function _typeof3(o2) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof3(o2);
}
function _unsupportedIterableToArray7(r2, a3) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray7(r2, a3);
    var t5 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t5 && r2.constructor && (t5 = r2.constructor.name), "Map" === t5 || "Set" === t5 ? Array.from(r2) : "Arguments" === t5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t5) ? _arrayLikeToArray7(r2, a3) : void 0;
  }
}
var autoColorScale = ordinal(Paired_default);
function autoColorObjects(objects, colorByAccessor, colorField) {
  if (!colorByAccessor || typeof colorField !== "string") return;
  objects.filter(function(obj) {
    return !obj[colorField];
  }).forEach(function(obj) {
    obj[colorField] = autoColorScale(colorByAccessor(obj));
  });
}
function getDagDepths(_ref, idAccessor) {
  var nodes = _ref.nodes, links = _ref.links;
  var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$nodeFilter = _ref2.nodeFilter, nodeFilter = _ref2$nodeFilter === void 0 ? function() {
    return true;
  } : _ref2$nodeFilter, _ref2$onLoopError = _ref2.onLoopError, onLoopError = _ref2$onLoopError === void 0 ? function(loopIds) {
    throw "Invalid DAG structure! Found cycle in node path: ".concat(loopIds.join(" -> "), ".");
  } : _ref2$onLoopError;
  var graph = {};
  nodes.forEach(function(node) {
    return graph[idAccessor(node)] = {
      data: node,
      out: [],
      depth: -1,
      skip: !nodeFilter(node)
    };
  });
  links.forEach(function(_ref3) {
    var source = _ref3.source, target = _ref3.target;
    var sourceId = getNodeId(source);
    var targetId = getNodeId(target);
    if (!graph.hasOwnProperty(sourceId)) throw "Missing source node with id: ".concat(sourceId);
    if (!graph.hasOwnProperty(targetId)) throw "Missing target node with id: ".concat(targetId);
    var sourceNode = graph[sourceId];
    var targetNode = graph[targetId];
    sourceNode.out.push(targetNode);
    function getNodeId(node) {
      return _typeof3(node) === "object" ? idAccessor(node) : node;
    }
  });
  var foundLoops = [];
  traverse(Object.values(graph));
  var nodeDepths = Object.assign.apply(Object, [{}].concat(_toConsumableArray5(Object.entries(graph).filter(function(_ref4) {
    var _ref5 = _slicedToArray6(_ref4, 2), node = _ref5[1];
    return !node.skip;
  }).map(function(_ref6) {
    var _ref7 = _slicedToArray6(_ref6, 2), id2 = _ref7[0], node = _ref7[1];
    return _defineProperty3({}, id2, node.depth);
  }))));
  return nodeDepths;
  function traverse(nodes2) {
    var nodeStack = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var currentDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var _loop = function _loop2() {
      var node = nodes2[i2];
      if (nodeStack.indexOf(node) !== -1) {
        var loop = [].concat(_toConsumableArray5(nodeStack.slice(nodeStack.indexOf(node))), [node]).map(function(d2) {
          return idAccessor(d2.data);
        });
        if (!foundLoops.some(function(foundLoop) {
          return foundLoop.length === loop.length && foundLoop.every(function(id2, idx) {
            return id2 === loop[idx];
          });
        })) {
          foundLoops.push(loop);
          onLoopError(loop);
        }
        return 1;
      }
      if (currentDepth > node.depth) {
        node.depth = currentDepth;
        traverse(node.out, [].concat(_toConsumableArray5(nodeStack), [node]), currentDepth + (node.skip ? 0 : 1));
      }
    };
    for (var i2 = 0, l2 = nodes2.length; i2 < l2; i2++) {
      if (_loop()) continue;
    }
  }
}
var DAG_LEVEL_NODE_RATIO = 2;
var notifyRedraw = function notifyRedraw2(_2, state) {
  return state.onNeedsRedraw && state.onNeedsRedraw();
};
var updDataPhotons = function updDataPhotons2(_2, state) {
  if (!state.isShadow) {
    var linkParticlesAccessor = index4(state.linkDirectionalParticles);
    state.graphData.links.forEach(function(link) {
      var numPhotons = Math.round(Math.abs(linkParticlesAccessor(link)));
      if (numPhotons) {
        link.__photons = _toConsumableArray5(Array(numPhotons)).map(function() {
          return {};
        });
      } else {
        delete link.__photons;
      }
    });
  }
};
var CanvasForceGraph = index3({
  props: {
    graphData: {
      "default": {
        nodes: [],
        links: []
      },
      onChange: function onChange(_2, state) {
        state.engineRunning = false;
        updDataPhotons(_2, state);
      }
    },
    dagMode: {
      onChange: function onChange2(dagMode, state) {
        !dagMode && (state.graphData.nodes || []).forEach(function(n2) {
          return n2.fx = n2.fy = void 0;
        });
      }
    },
    dagLevelDistance: {},
    dagNodeFilter: {
      "default": function _default2(node) {
        return true;
      }
    },
    onDagError: {
      triggerUpdate: false
    },
    nodeRelSize: {
      "default": 4,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    // area per val unit
    nodeId: {
      "default": "id"
    },
    nodeVal: {
      "default": "val",
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeColor: {
      "default": "color",
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeAutoColorBy: {},
    nodeCanvasObject: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeCanvasObjectMode: {
      "default": function _default3() {
        return "replace";
      },
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    nodeVisibility: {
      "default": true,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkSource: {
      "default": "source"
    },
    linkTarget: {
      "default": "target"
    },
    linkVisibility: {
      "default": true,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkColor: {
      "default": "color",
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkAutoColorBy: {},
    linkLineDash: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkWidth: {
      "default": 1,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkCurvature: {
      "default": 0,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkCanvasObject: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkCanvasObjectMode: {
      "default": function _default4() {
        return "replace";
      },
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkDirectionalArrowLength: {
      "default": 0,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkDirectionalArrowColor: {
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    linkDirectionalArrowRelPos: {
      "default": 0.5,
      triggerUpdate: false,
      onChange: notifyRedraw
    },
    // value between 0<>1 indicating the relative pos along the (exposed) line
    linkDirectionalParticles: {
      "default": 0,
      triggerUpdate: false,
      onChange: updDataPhotons
    },
    // animate photons travelling in the link direction
    linkDirectionalParticleSpeed: {
      "default": 0.01,
      triggerUpdate: false
    },
    // in link length ratio per frame
    linkDirectionalParticleOffset: {
      "default": 0,
      triggerUpdate: false
    },
    // starting position offset along the link's length, like a pre-delay. Values between [0, 1]
    linkDirectionalParticleWidth: {
      "default": 4,
      triggerUpdate: false
    },
    linkDirectionalParticleColor: {
      triggerUpdate: false
    },
    linkDirectionalParticleCanvasObject: {
      triggerUpdate: false
    },
    globalScale: {
      "default": 1,
      triggerUpdate: false
    },
    d3AlphaMin: {
      "default": 0,
      triggerUpdate: false
    },
    d3AlphaDecay: {
      "default": 0.0228,
      triggerUpdate: false,
      onChange: function onChange3(alphaDecay, state) {
        state.forceLayout.alphaDecay(alphaDecay);
      }
    },
    d3AlphaTarget: {
      "default": 0,
      triggerUpdate: false,
      onChange: function onChange4(alphaTarget, state) {
        state.forceLayout.alphaTarget(alphaTarget);
      }
    },
    d3VelocityDecay: {
      "default": 0.4,
      triggerUpdate: false,
      onChange: function onChange5(velocityDecay, state) {
        state.forceLayout.velocityDecay(velocityDecay);
      }
    },
    warmupTicks: {
      "default": 0,
      triggerUpdate: false
    },
    // how many times to tick the force engine at init before starting to render
    cooldownTicks: {
      "default": Infinity,
      triggerUpdate: false
    },
    cooldownTime: {
      "default": 15e3,
      triggerUpdate: false
    },
    // ms
    onUpdate: {
      "default": function _default5() {
      },
      triggerUpdate: false
    },
    onFinishUpdate: {
      "default": function _default6() {
      },
      triggerUpdate: false
    },
    onEngineTick: {
      "default": function _default7() {
      },
      triggerUpdate: false
    },
    onEngineStop: {
      "default": function _default8() {
      },
      triggerUpdate: false
    },
    onNeedsRedraw: {
      triggerUpdate: false
    },
    isShadow: {
      "default": false,
      triggerUpdate: false
    }
  },
  methods: {
    // Expose d3 forces for external manipulation
    d3Force: function d3Force(state, forceName, forceFn) {
      if (forceFn === void 0) {
        return state.forceLayout.force(forceName);
      }
      state.forceLayout.force(forceName, forceFn);
      return this;
    },
    d3ReheatSimulation: function d3ReheatSimulation(state) {
      state.forceLayout.alpha(1);
      this.resetCountdown();
      return this;
    },
    // reset cooldown state
    resetCountdown: function resetCountdown(state) {
      state.cntTicks = 0;
      state.startTickTime = /* @__PURE__ */ new Date();
      state.engineRunning = true;
      return this;
    },
    isEngineRunning: function isEngineRunning(state) {
      return !!state.engineRunning;
    },
    tickFrame: function tickFrame(state) {
      !state.isShadow && layoutTick();
      paintLinks();
      !state.isShadow && paintArrows();
      !state.isShadow && paintPhotons();
      paintNodes();
      return this;
      function layoutTick() {
        if (state.engineRunning) {
          if (++state.cntTicks > state.cooldownTicks || /* @__PURE__ */ new Date() - state.startTickTime > state.cooldownTime || state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin) {
            state.engineRunning = false;
            state.onEngineStop();
          } else {
            state.forceLayout.tick();
            state.onEngineTick();
          }
        }
      }
      function paintNodes() {
        var getVisibility = index4(state.nodeVisibility);
        var getVal = index4(state.nodeVal);
        var getColor = index4(state.nodeColor);
        var getNodeCanvasObjectMode = index4(state.nodeCanvasObjectMode);
        var ctx = state.ctx;
        var padAmount = state.isShadow / state.globalScale;
        var visibleNodes = state.graphData.nodes.filter(getVisibility);
        ctx.save();
        visibleNodes.forEach(function(node) {
          var nodeCanvasObjectMode = getNodeCanvasObjectMode(node);
          if (state.nodeCanvasObject && (nodeCanvasObjectMode === "before" || nodeCanvasObjectMode === "replace")) {
            state.nodeCanvasObject(node, ctx, state.globalScale);
            if (nodeCanvasObjectMode === "replace") {
              ctx.restore();
              return;
            }
          }
          var r2 = Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize + padAmount;
          ctx.beginPath();
          ctx.arc(node.x, node.y, r2, 0, 2 * Math.PI, false);
          ctx.fillStyle = getColor(node) || "rgba(31, 120, 180, 0.92)";
          ctx.fill();
          if (state.nodeCanvasObject && nodeCanvasObjectMode === "after") {
            state.nodeCanvasObject(node, state.ctx, state.globalScale);
          }
        });
        ctx.restore();
      }
      function paintLinks() {
        var getVisibility = index4(state.linkVisibility);
        var getColor = index4(state.linkColor);
        var getWidth = index4(state.linkWidth);
        var getLineDash = index4(state.linkLineDash);
        var getCurvature = index4(state.linkCurvature);
        var getLinkCanvasObjectMode = index4(state.linkCanvasObjectMode);
        var ctx = state.ctx;
        var padAmount = state.isShadow * 2;
        var visibleLinks = state.graphData.links.filter(getVisibility);
        visibleLinks.forEach(calcLinkControlPoints);
        var beforeCustomLinks = [], afterCustomLinks = [], defaultPaintLinks = visibleLinks;
        if (state.linkCanvasObject) {
          var replaceCustomLinks = [], otherCustomLinks = [];
          visibleLinks.forEach(function(d2) {
            return ({
              before: beforeCustomLinks,
              after: afterCustomLinks,
              replace: replaceCustomLinks
            }[getLinkCanvasObjectMode(d2)] || otherCustomLinks).push(d2);
          });
          defaultPaintLinks = [].concat(_toConsumableArray5(beforeCustomLinks), afterCustomLinks, otherCustomLinks);
          beforeCustomLinks = beforeCustomLinks.concat(replaceCustomLinks);
        }
        ctx.save();
        beforeCustomLinks.forEach(function(link) {
          return state.linkCanvasObject(link, ctx, state.globalScale);
        });
        ctx.restore();
        var linksPerColor = index7(defaultPaintLinks, [getColor, getWidth, getLineDash]);
        ctx.save();
        Object.entries(linksPerColor).forEach(function(_ref) {
          var _ref2 = _slicedToArray6(_ref, 2), color2 = _ref2[0], linksPerWidth = _ref2[1];
          var lineColor = !color2 || color2 === "undefined" ? "rgba(0,0,0,0.15)" : color2;
          Object.entries(linksPerWidth).forEach(function(_ref3) {
            var _ref4 = _slicedToArray6(_ref3, 2), width = _ref4[0], linesPerLineDash = _ref4[1];
            var lineWidth = (width || 1) / state.globalScale + padAmount;
            Object.entries(linesPerLineDash).forEach(function(_ref5) {
              var _ref6 = _slicedToArray6(_ref5, 2);
              _ref6[0];
              var links = _ref6[1];
              var lineDashSegments = getLineDash(links[0]);
              ctx.beginPath();
              links.forEach(function(link) {
                var start2 = link.source;
                var end = link.target;
                if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
                ctx.moveTo(start2.x, start2.y);
                var controlPoints = link.__controlPoints;
                if (!controlPoints) {
                  ctx.lineTo(end.x, end.y);
                } else {
                  ctx[controlPoints.length === 2 ? "quadraticCurveTo" : "bezierCurveTo"].apply(ctx, _toConsumableArray5(controlPoints).concat([end.x, end.y]));
                }
              });
              ctx.strokeStyle = lineColor;
              ctx.lineWidth = lineWidth;
              ctx.setLineDash(lineDashSegments || []);
              ctx.stroke();
            });
          });
        });
        ctx.restore();
        ctx.save();
        afterCustomLinks.forEach(function(link) {
          return state.linkCanvasObject(link, ctx, state.globalScale);
        });
        ctx.restore();
        function calcLinkControlPoints(link) {
          var curvature = getCurvature(link);
          if (!curvature) {
            link.__controlPoints = null;
            return;
          }
          var start2 = link.source;
          var end = link.target;
          if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
          var l2 = Math.sqrt(Math.pow(end.x - start2.x, 2) + Math.pow(end.y - start2.y, 2));
          if (l2 > 0) {
            var a3 = Math.atan2(end.y - start2.y, end.x - start2.x);
            var d2 = l2 * curvature;
            var cp = {
              // control point
              x: (start2.x + end.x) / 2 + d2 * Math.cos(a3 - Math.PI / 2),
              y: (start2.y + end.y) / 2 + d2 * Math.sin(a3 - Math.PI / 2)
            };
            link.__controlPoints = [cp.x, cp.y];
          } else {
            var _d = curvature * 70;
            link.__controlPoints = [end.x, end.y - _d, end.x + _d, end.y];
          }
        }
      }
      function paintArrows() {
        var ARROW_WH_RATIO = 1.6;
        var ARROW_VLEN_RATIO = 0.2;
        var getLength = index4(state.linkDirectionalArrowLength);
        var getRelPos = index4(state.linkDirectionalArrowRelPos);
        var getVisibility = index4(state.linkVisibility);
        var getColor = index4(state.linkDirectionalArrowColor || state.linkColor);
        var getNodeVal = index4(state.nodeVal);
        var ctx = state.ctx;
        ctx.save();
        state.graphData.links.filter(getVisibility).forEach(function(link) {
          var arrowLength = getLength(link);
          if (!arrowLength || arrowLength < 0) return;
          var start2 = link.source;
          var end = link.target;
          if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
          var startR = Math.sqrt(Math.max(0, getNodeVal(start2) || 1)) * state.nodeRelSize;
          var endR = Math.sqrt(Math.max(0, getNodeVal(end) || 1)) * state.nodeRelSize;
          var arrowRelPos = Math.min(1, Math.max(0, getRelPos(link)));
          var arrowColor = getColor(link) || "rgba(0,0,0,0.28)";
          var arrowHalfWidth = arrowLength / ARROW_WH_RATIO / 2;
          var bzLine = link.__controlPoints && _construct(Bezier, [start2.x, start2.y].concat(_toConsumableArray5(link.__controlPoints), [end.x, end.y]));
          var getCoordsAlongLine = bzLine ? function(t5) {
            return bzLine.get(t5);
          } : function(t5) {
            return {
              // straight line: interpolate linearly
              x: start2.x + (end.x - start2.x) * t5 || 0,
              y: start2.y + (end.y - start2.y) * t5 || 0
            };
          };
          var lineLen = bzLine ? bzLine.length() : Math.sqrt(Math.pow(end.x - start2.x, 2) + Math.pow(end.y - start2.y, 2));
          var posAlongLine = startR + arrowLength + (lineLen - startR - endR - arrowLength) * arrowRelPos;
          var arrowHead = getCoordsAlongLine(posAlongLine / lineLen);
          var arrowTail = getCoordsAlongLine((posAlongLine - arrowLength) / lineLen);
          var arrowTailVertex = getCoordsAlongLine((posAlongLine - arrowLength * (1 - ARROW_VLEN_RATIO)) / lineLen);
          var arrowTailAngle = Math.atan2(arrowHead.y - arrowTail.y, arrowHead.x - arrowTail.x) - Math.PI / 2;
          ctx.beginPath();
          ctx.moveTo(arrowHead.x, arrowHead.y);
          ctx.lineTo(arrowTail.x + arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y + arrowHalfWidth * Math.sin(arrowTailAngle));
          ctx.lineTo(arrowTailVertex.x, arrowTailVertex.y);
          ctx.lineTo(arrowTail.x - arrowHalfWidth * Math.cos(arrowTailAngle), arrowTail.y - arrowHalfWidth * Math.sin(arrowTailAngle));
          ctx.fillStyle = arrowColor;
          ctx.fill();
        });
        ctx.restore();
      }
      function paintPhotons() {
        var getNumPhotons = index4(state.linkDirectionalParticles);
        var getSpeed = index4(state.linkDirectionalParticleSpeed);
        var getOffset = index4(state.linkDirectionalParticleOffset);
        var getDiameter = index4(state.linkDirectionalParticleWidth);
        var getVisibility = index4(state.linkVisibility);
        var getColor = index4(state.linkDirectionalParticleColor || state.linkColor);
        var ctx = state.ctx;
        ctx.save();
        state.graphData.links.filter(getVisibility).forEach(function(link) {
          var numCyclePhotons = getNumPhotons(link);
          if (!link.hasOwnProperty("__photons") || !link.__photons.length) return;
          var start2 = link.source;
          var end = link.target;
          if (!start2 || !end || !start2.hasOwnProperty("x") || !end.hasOwnProperty("x")) return;
          var particleSpeed = getSpeed(link);
          var particleOffset = Math.abs(getOffset(link));
          var photons = link.__photons || [];
          var photonR = Math.max(0, getDiameter(link) / 2) / Math.sqrt(state.globalScale);
          var photonColor = getColor(link) || "rgba(0,0,0,0.28)";
          ctx.fillStyle = photonColor;
          var bzLine = link.__controlPoints ? _construct(Bezier, [start2.x, start2.y].concat(_toConsumableArray5(link.__controlPoints), [end.x, end.y])) : null;
          var cyclePhotonIdx = 0;
          var needsCleanup = false;
          photons.forEach(function(photon) {
            var singleHop = !!photon.__singleHop;
            if (!photon.hasOwnProperty("__progressRatio")) {
              photon.__progressRatio = singleHop ? 0 : (cyclePhotonIdx + particleOffset) / numCyclePhotons;
            }
            !singleHop && cyclePhotonIdx++;
            photon.__progressRatio += particleSpeed;
            if (photon.__progressRatio >= 1) {
              if (!singleHop) {
                photon.__progressRatio = photon.__progressRatio % 1;
              } else {
                needsCleanup = true;
                return;
              }
            }
            var photonPosRatio = photon.__progressRatio;
            var coords = bzLine ? bzLine.get(photonPosRatio) : {
              // straight line: interpolate linearly
              x: start2.x + (end.x - start2.x) * photonPosRatio || 0,
              y: start2.y + (end.y - start2.y) * photonPosRatio || 0
            };
            if (state.linkDirectionalParticleCanvasObject) {
              state.linkDirectionalParticleCanvasObject(coords.x, coords.y, link, ctx, state.globalScale);
            } else {
              ctx.beginPath();
              ctx.arc(coords.x, coords.y, photonR, 0, 2 * Math.PI, false);
              ctx.fill();
            }
          });
          if (needsCleanup) {
            link.__photons = link.__photons.filter(function(photon) {
              return !photon.__singleHop || photon.__progressRatio <= 1;
            });
          }
        });
        ctx.restore();
      }
    },
    emitParticle: function emitParticle(state, link) {
      if (link) {
        !link.__photons && (link.__photons = []);
        link.__photons.push({
          __singleHop: true
        });
      }
      return this;
    }
  },
  stateInit: function stateInit() {
    return {
      forceLayout: simulation_default().force("link", link_default()).force("charge", manyBody_default()).force("center", center_default()).force("dagRadial", null).stop(),
      engineRunning: false
    };
  },
  init: function init3(canvasCtx, state) {
    state.ctx = canvasCtx;
  },
  update: function update4(state, changedProps) {
    state.engineRunning = false;
    state.onUpdate();
    if (state.nodeAutoColorBy !== null) {
      autoColorObjects(state.graphData.nodes, index4(state.nodeAutoColorBy), state.nodeColor);
    }
    if (state.linkAutoColorBy !== null) {
      autoColorObjects(state.graphData.links, index4(state.linkAutoColorBy), state.linkColor);
    }
    state.graphData.links.forEach(function(link) {
      link.source = link[state.linkSource];
      link.target = link[state.linkTarget];
    });
    state.forceLayout.stop().alpha(1).nodes(state.graphData.nodes);
    var linkForce = state.forceLayout.force("link");
    if (linkForce) {
      linkForce.id(function(d2) {
        return d2[state.nodeId];
      }).links(state.graphData.links);
    }
    var nodeDepths = state.dagMode && getDagDepths(state.graphData, function(node) {
      return node[state.nodeId];
    }, {
      nodeFilter: state.dagNodeFilter,
      onLoopError: state.onDagError || void 0
    });
    var maxDepth = Math.max.apply(Math, _toConsumableArray5(Object.values(nodeDepths || [])));
    var dagLevelDistance = state.dagLevelDistance || state.graphData.nodes.length / (maxDepth || 1) * DAG_LEVEL_NODE_RATIO * (["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? 0.7 : 1);
    if (["lr", "rl", "td", "bu"].includes(changedProps.dagMode)) {
      var resetProp = ["lr", "rl"].includes(changedProps.dagMode) ? "fx" : "fy";
      state.graphData.nodes.filter(state.dagNodeFilter).forEach(function(node) {
        return delete node[resetProp];
      });
    }
    if (["lr", "rl", "td", "bu"].includes(state.dagMode)) {
      var invert2 = ["rl", "bu"].includes(state.dagMode);
      var fixFn = function fixFn2(node) {
        return (nodeDepths[node[state.nodeId]] - maxDepth / 2) * dagLevelDistance * (invert2 ? -1 : 1);
      };
      var _resetProp = ["lr", "rl"].includes(state.dagMode) ? "fx" : "fy";
      state.graphData.nodes.filter(state.dagNodeFilter).forEach(function(node) {
        return node[_resetProp] = fixFn(node);
      });
    }
    state.forceLayout.force("dagRadial", ["radialin", "radialout"].indexOf(state.dagMode) !== -1 ? radial_default(function(node) {
      var nodeDepth = nodeDepths[node[state.nodeId]] || -1;
      return (state.dagMode === "radialin" ? maxDepth - nodeDepth : nodeDepth) * dagLevelDistance;
    }).strength(function(node) {
      return state.dagNodeFilter(node) ? 1 : 0;
    }) : null);
    for (var i2 = 0; i2 < state.warmupTicks && !(state.d3AlphaMin > 0 && state.forceLayout.alpha() < state.d3AlphaMin); i2++) {
      state.forceLayout.tick();
    }
    this.resetCountdown();
    state.onFinishUpdate();
  }
});
function linkKapsule(kapsulePropNames, kapsuleType) {
  var propNames = kapsulePropNames instanceof Array ? kapsulePropNames : [kapsulePropNames];
  var dummyK = new kapsuleType();
  dummyK._destructor && dummyK._destructor();
  return {
    linkProp: function linkProp(prop) {
      return {
        "default": dummyK[prop](),
        onChange: function onChange15(v2, state) {
          propNames.forEach(function(propName) {
            return state[propName][prop](v2);
          });
        },
        triggerUpdate: false
      };
    },
    linkMethod: function linkMethod(method2) {
      return function(state) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var returnVals = [];
        propNames.forEach(function(propName) {
          var kapsuleInstance = state[propName];
          var returnVal = kapsuleInstance[method2].apply(kapsuleInstance, args);
          if (returnVal !== kapsuleInstance) {
            returnVals.push(returnVal);
          }
        });
        return returnVals.length ? returnVals[0] : this;
      };
    }
  };
}
var HOVER_CANVAS_THROTTLE_DELAY = 800;
var ZOOM2NODES_FACTOR = 4;
var DRAG_CLICK_TOLERANCE_PX = 5;
var bindFG = linkKapsule("forceGraph", CanvasForceGraph);
var bindBoth = linkKapsule(["forceGraph", "shadowGraph"], CanvasForceGraph);
var linkedProps = Object.assign.apply(Object, _toConsumableArray5(["nodeColor", "nodeAutoColorBy", "nodeCanvasObject", "nodeCanvasObjectMode", "linkColor", "linkAutoColorBy", "linkLineDash", "linkWidth", "linkCanvasObject", "linkCanvasObjectMode", "linkDirectionalArrowLength", "linkDirectionalArrowColor", "linkDirectionalArrowRelPos", "linkDirectionalParticles", "linkDirectionalParticleSpeed", "linkDirectionalParticleOffset", "linkDirectionalParticleWidth", "linkDirectionalParticleColor", "linkDirectionalParticleCanvasObject", "dagMode", "dagLevelDistance", "dagNodeFilter", "onDagError", "d3AlphaMin", "d3AlphaDecay", "d3VelocityDecay", "warmupTicks", "cooldownTicks", "cooldownTime", "onEngineTick", "onEngineStop"].map(function(p2) {
  return _defineProperty3({}, p2, bindFG.linkProp(p2));
})).concat(_toConsumableArray5(["nodeRelSize", "nodeId", "nodeVal", "nodeVisibility", "linkSource", "linkTarget", "linkVisibility", "linkCurvature"].map(function(p2) {
  return _defineProperty3({}, p2, bindBoth.linkProp(p2));
}))));
var linkedMethods = Object.assign.apply(Object, _toConsumableArray5(["d3Force", "d3ReheatSimulation", "emitParticle"].map(function(p2) {
  return _defineProperty3({}, p2, bindFG.linkMethod(p2));
})));
function adjustCanvasSize(state) {
  if (state.canvas) {
    var curWidth = state.canvas.width;
    var curHeight = state.canvas.height;
    if (curWidth === 300 && curHeight === 150) {
      curWidth = curHeight = 0;
    }
    var pxScale = window.devicePixelRatio;
    curWidth /= pxScale;
    curHeight /= pxScale;
    [state.canvas, state.shadowCanvas].forEach(function(canvas) {
      canvas.style.width = "".concat(state.width, "px");
      canvas.style.height = "".concat(state.height, "px");
      canvas.width = state.width * pxScale;
      canvas.height = state.height * pxScale;
      if (!curWidth && !curHeight) {
        canvas.getContext("2d").scale(pxScale, pxScale);
      }
    });
    var k2 = transform(state.canvas).k;
    state.zoom.translateBy(state.zoom.__baseElem, (state.width - curWidth) / 2 / k2, (state.height - curHeight) / 2 / k2);
    state.needsRedraw = true;
  }
}
function resetTransform(ctx) {
  var pxRatio = window.devicePixelRatio;
  ctx.setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
}
function clearCanvas(ctx, width, height) {
  ctx.save();
  resetTransform(ctx);
  ctx.clearRect(0, 0, width, height);
  ctx.restore();
}
var forceGraph = index3({
  props: _objectSpread22({
    width: {
      "default": window.innerWidth,
      onChange: function onChange6(_2, state) {
        return adjustCanvasSize(state);
      },
      triggerUpdate: false
    },
    height: {
      "default": window.innerHeight,
      onChange: function onChange7(_2, state) {
        return adjustCanvasSize(state);
      },
      triggerUpdate: false
    },
    graphData: {
      "default": {
        nodes: [],
        links: []
      },
      onChange: function onChange8(d2, state) {
        [d2.nodes, d2.links].every(function(arr) {
          return (arr || []).every(function(d3) {
            return !d3.hasOwnProperty("__indexColor");
          });
        }) && state.colorTracker.reset();
        [{
          type: "Node",
          objs: d2.nodes
        }, {
          type: "Link",
          objs: d2.links
        }].forEach(hexIndex);
        state.forceGraph.graphData(d2);
        state.shadowGraph.graphData(d2);
        function hexIndex(_ref4) {
          var type = _ref4.type, objs = _ref4.objs;
          objs.filter(function(d3) {
            if (!d3.hasOwnProperty("__indexColor")) return true;
            var cur = state.colorTracker.lookup(d3.__indexColor);
            return !cur || !cur.hasOwnProperty("d") || cur.d !== d3;
          }).forEach(function(d3) {
            d3.__indexColor = state.colorTracker.register({
              type,
              d: d3
            });
          });
        }
      },
      triggerUpdate: false
    },
    backgroundColor: {
      onChange: function onChange9(color2, state) {
        state.canvas && color2 && (state.canvas.style.background = color2);
      },
      triggerUpdate: false
    },
    nodeLabel: {
      "default": "name",
      triggerUpdate: false
    },
    nodePointerAreaPaint: {
      onChange: function onChange10(paintFn, state) {
        state.shadowGraph.nodeCanvasObject(!paintFn ? null : function(node, ctx, globalScale) {
          return paintFn(node, node.__indexColor, ctx, globalScale);
        });
        state.flushShadowCanvas && state.flushShadowCanvas();
      },
      triggerUpdate: false
    },
    linkPointerAreaPaint: {
      onChange: function onChange11(paintFn, state) {
        state.shadowGraph.linkCanvasObject(!paintFn ? null : function(link, ctx, globalScale) {
          return paintFn(link, link.__indexColor, ctx, globalScale);
        });
        state.flushShadowCanvas && state.flushShadowCanvas();
      },
      triggerUpdate: false
    },
    linkLabel: {
      "default": "name",
      triggerUpdate: false
    },
    linkHoverPrecision: {
      "default": 4,
      triggerUpdate: false
    },
    minZoom: {
      "default": 0.01,
      onChange: function onChange12(minZoom, state) {
        state.zoom.scaleExtent([minZoom, state.zoom.scaleExtent()[1]]);
      },
      triggerUpdate: false
    },
    maxZoom: {
      "default": 1e3,
      onChange: function onChange13(maxZoom, state) {
        state.zoom.scaleExtent([state.zoom.scaleExtent()[0], maxZoom]);
      },
      triggerUpdate: false
    },
    enableNodeDrag: {
      "default": true,
      triggerUpdate: false
    },
    enableZoomInteraction: {
      "default": true,
      triggerUpdate: false
    },
    enablePanInteraction: {
      "default": true,
      triggerUpdate: false
    },
    enableZoomPanInteraction: {
      "default": true,
      triggerUpdate: false
    },
    // to be deprecated
    enablePointerInteraction: {
      "default": true,
      onChange: function onChange14(_2, state) {
        state.hoverObj = null;
      },
      triggerUpdate: false
    },
    autoPauseRedraw: {
      "default": true,
      triggerUpdate: false
    },
    onNodeDrag: {
      "default": function _default9() {
      },
      triggerUpdate: false
    },
    onNodeDragEnd: {
      "default": function _default10() {
      },
      triggerUpdate: false
    },
    onNodeClick: {
      triggerUpdate: false
    },
    onNodeRightClick: {
      triggerUpdate: false
    },
    onNodeHover: {
      triggerUpdate: false
    },
    onLinkClick: {
      triggerUpdate: false
    },
    onLinkRightClick: {
      triggerUpdate: false
    },
    onLinkHover: {
      triggerUpdate: false
    },
    onBackgroundClick: {
      triggerUpdate: false
    },
    onBackgroundRightClick: {
      triggerUpdate: false
    },
    showPointerCursor: {
      "default": true,
      triggerUpdate: false
    },
    onZoom: {
      triggerUpdate: false
    },
    onZoomEnd: {
      triggerUpdate: false
    },
    onRenderFramePre: {
      triggerUpdate: false
    },
    onRenderFramePost: {
      triggerUpdate: false
    }
  }, linkedProps),
  aliases: {
    // Prop names supported for backwards compatibility
    stopAnimation: "pauseAnimation"
  },
  methods: _objectSpread22({
    graph2ScreenCoords: function graph2ScreenCoords(state, x3, y3) {
      var t5 = transform(state.canvas);
      return {
        x: x3 * t5.k + t5.x,
        y: y3 * t5.k + t5.y
      };
    },
    screen2GraphCoords: function screen2GraphCoords(state, x3, y3) {
      var t5 = transform(state.canvas);
      return {
        x: (x3 - t5.x) / t5.k,
        y: (y3 - t5.y) / t5.k
      };
    },
    centerAt: function centerAt(state, x3, y3, transitionDuration) {
      if (!state.canvas) return null;
      if (x3 !== void 0 || y3 !== void 0) {
        var finalPos = Object.assign({}, x3 !== void 0 ? {
          x: x3
        } : {}, y3 !== void 0 ? {
          y: y3
        } : {});
        if (!transitionDuration) {
          setCenter(finalPos);
        } else {
          state.tweenGroup.add(new Tween(getCenter()).to(finalPos, transitionDuration).easing(Easing.Quadratic.Out).onUpdate(setCenter).start());
        }
        return this;
      }
      return getCenter();
      function getCenter() {
        var t5 = transform(state.canvas);
        return {
          x: (state.width / 2 - t5.x) / t5.k,
          y: (state.height / 2 - t5.y) / t5.k
        };
      }
      function setCenter(_ref5) {
        var x4 = _ref5.x, y4 = _ref5.y;
        state.zoom.translateTo(state.zoom.__baseElem, x4 === void 0 ? getCenter().x : x4, y4 === void 0 ? getCenter().y : y4);
        state.needsRedraw = true;
      }
    },
    zoom: function zoom(state, k2, transitionDuration) {
      if (!state.canvas) return null;
      if (k2 !== void 0) {
        if (!transitionDuration) {
          setZoom(k2);
        } else {
          state.tweenGroup.add(new Tween({
            k: getZoom()
          }).to({
            k: k2
          }, transitionDuration).easing(Easing.Quadratic.Out).onUpdate(function(_ref6) {
            var k3 = _ref6.k;
            return setZoom(k3);
          }).start());
        }
        return this;
      }
      return getZoom();
      function getZoom() {
        return transform(state.canvas).k;
      }
      function setZoom(k3) {
        state.zoom.scaleTo(state.zoom.__baseElem, k3);
        state.needsRedraw = true;
      }
    },
    zoomToFit: function zoomToFit(state) {
      var transitionDuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var padding = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10;
      for (var _len = arguments.length, bboxArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        bboxArgs[_key - 3] = arguments[_key];
      }
      var bbox = this.getGraphBbox.apply(this, bboxArgs);
      if (bbox) {
        var center = {
          x: (bbox.x[0] + bbox.x[1]) / 2,
          y: (bbox.y[0] + bbox.y[1]) / 2
        };
        var zoomK = Math.max(1e-12, Math.min(1e12, (state.width - padding * 2) / (bbox.x[1] - bbox.x[0]), (state.height - padding * 2) / (bbox.y[1] - bbox.y[0])));
        this.centerAt(center.x, center.y, transitionDuration);
        this.zoom(zoomK, transitionDuration);
      }
      return this;
    },
    getGraphBbox: function getGraphBbox(state) {
      var nodeFilter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
        return true;
      };
      var getVal = index4(state.nodeVal);
      var getR = function getR2(node) {
        return Math.sqrt(Math.max(0, getVal(node) || 1)) * state.nodeRelSize;
      };
      var nodesPos = state.graphData.nodes.filter(nodeFilter).map(function(node) {
        return {
          x: node.x,
          y: node.y,
          r: getR(node)
        };
      });
      return !nodesPos.length ? null : {
        x: [min(nodesPos, function(node) {
          return node.x - node.r;
        }), max(nodesPos, function(node) {
          return node.x + node.r;
        })],
        y: [min(nodesPos, function(node) {
          return node.y - node.r;
        }), max(nodesPos, function(node) {
          return node.y + node.r;
        })]
      };
    },
    pauseAnimation: function pauseAnimation(state) {
      if (state.animationFrameRequestId) {
        cancelAnimationFrame(state.animationFrameRequestId);
        state.animationFrameRequestId = null;
      }
      return this;
    },
    resumeAnimation: function resumeAnimation(state) {
      if (!state.animationFrameRequestId) {
        this._animationCycle();
      }
      return this;
    },
    _destructor: function _destructor() {
      this.pauseAnimation();
      this.graphData({
        nodes: [],
        links: []
      });
    }
  }, linkedMethods),
  stateInit: function stateInit2() {
    return {
      lastSetZoom: 1,
      zoom: zoom_default2(),
      forceGraph: new CanvasForceGraph(),
      shadowGraph: new CanvasForceGraph().cooldownTicks(0).nodeColor("__indexColor").linkColor("__indexColor").isShadow(true),
      colorTracker: new _default(),
      // indexed objects for rgb lookup
      tweenGroup: new Group()
    };
  },
  init: function init4(domNode, state) {
    var _this = this;
    domNode.innerHTML = "";
    var container = document.createElement("div");
    container.classList.add("force-graph-container");
    container.style.position = "relative";
    domNode.appendChild(container);
    state.canvas = document.createElement("canvas");
    if (state.backgroundColor) state.canvas.style.background = state.backgroundColor;
    container.appendChild(state.canvas);
    state.shadowCanvas = document.createElement("canvas");
    var ctx = state.canvas.getContext("2d");
    var shadowCtx = state.shadowCanvas.getContext("2d", {
      willReadFrequently: true
    });
    var pointerPos = {
      x: -1e12,
      y: -1e12
    };
    var getObjUnderPointer = function getObjUnderPointer2() {
      var obj = null;
      var pxScale = window.devicePixelRatio;
      var px = pointerPos.x > 0 && pointerPos.y > 0 ? shadowCtx.getImageData(pointerPos.x * pxScale, pointerPos.y * pxScale, 1, 1) : null;
      px && (obj = state.colorTracker.lookup(px.data));
      return obj;
    };
    select_default2(state.canvas).call(drag_default().subject(function() {
      if (!state.enableNodeDrag) {
        return null;
      }
      var obj = getObjUnderPointer();
      return obj && obj.type === "Node" ? obj.d : null;
    }).on("start", function(ev) {
      var obj = ev.subject;
      obj.__initialDragPos = {
        x: obj.x,
        y: obj.y,
        fx: obj.fx,
        fy: obj.fy
      };
      if (!ev.active) {
        obj.fx = obj.x;
        obj.fy = obj.y;
      }
      state.canvas.classList.add("grabbable");
    }).on("drag", function(ev) {
      var obj = ev.subject;
      var initPos = obj.__initialDragPos;
      var dragPos = ev;
      var k2 = transform(state.canvas).k;
      var translate = {
        x: initPos.x + (dragPos.x - initPos.x) / k2 - obj.x,
        y: initPos.y + (dragPos.y - initPos.y) / k2 - obj.y
      };
      ["x", "y"].forEach(function(c5) {
        return obj["f".concat(c5)] = obj[c5] = initPos[c5] + (dragPos[c5] - initPos[c5]) / k2;
      });
      if (!obj.__dragged && DRAG_CLICK_TOLERANCE_PX >= Math.sqrt(sum(["x", "y"].map(function(k3) {
        return Math.pow(ev[k3] - initPos[k3], 2);
      })))) return;
      state.forceGraph.d3AlphaTarget(0.3).resetCountdown();
      state.isPointerDragging = true;
      obj.__dragged = true;
      state.onNodeDrag(obj, translate);
    }).on("end", function(ev) {
      var obj = ev.subject;
      var initPos = obj.__initialDragPos;
      var translate = {
        x: obj.x - initPos.x,
        y: obj.y - initPos.y
      };
      if (initPos.fx === void 0) {
        obj.fx = void 0;
      }
      if (initPos.fy === void 0) {
        obj.fy = void 0;
      }
      delete obj.__initialDragPos;
      if (state.forceGraph.d3AlphaTarget()) {
        state.forceGraph.d3AlphaTarget(0).resetCountdown();
      }
      state.canvas.classList.remove("grabbable");
      state.isPointerDragging = false;
      if (obj.__dragged) {
        delete obj.__dragged;
        state.onNodeDragEnd(obj, translate);
      }
    }));
    state.zoom(state.zoom.__baseElem = select_default2(state.canvas));
    state.zoom.__baseElem.on("dblclick.zoom", null);
    state.zoom.filter(function(ev) {
      return (
        // disable zoom interaction
        !ev.button && state.enableZoomPanInteraction && (ev.type !== "wheel" || index4(state.enableZoomInteraction)(ev)) && (ev.type === "wheel" || index4(state.enablePanInteraction)(ev))
      );
    }).on("zoom", function(ev) {
      var t5 = ev.transform;
      [ctx, shadowCtx].forEach(function(c5) {
        resetTransform(c5);
        c5.translate(t5.x, t5.y);
        c5.scale(t5.k, t5.k);
      });
      state.isPointerDragging = true;
      state.onZoom && state.onZoom(_objectSpread22(_objectSpread22({}, t5), _this.centerAt()));
      state.needsRedraw = true;
    }).on("end", function(ev) {
      state.isPointerDragging = false;
      state.onZoomEnd && state.onZoomEnd(_objectSpread22(_objectSpread22({}, ev.transform), _this.centerAt()));
    });
    adjustCanvasSize(state);
    state.forceGraph.onNeedsRedraw(function() {
      return state.needsRedraw = true;
    }).onFinishUpdate(function() {
      if (transform(state.canvas).k === state.lastSetZoom && state.graphData.nodes.length) {
        state.zoom.scaleTo(state.zoom.__baseElem, state.lastSetZoom = ZOOM2NODES_FACTOR / Math.cbrt(state.graphData.nodes.length));
        state.needsRedraw = true;
      }
    });
    state.tooltip = new index5(container);
    ["pointermove", "pointerdown"].forEach(function(evType) {
      return container.addEventListener(evType, function(ev) {
        if (evType === "pointerdown") {
          state.isPointerPressed = true;
          state.pointerDownEvent = ev;
        }
        !state.isPointerDragging && ev.type === "pointermove" && state.onBackgroundClick && (ev.pressure > 0 || state.isPointerPressed) && (ev.pointerType === "mouse" || ev.movementX === void 0 || [ev.movementX, ev.movementY].some(function(m3) {
          return Math.abs(m3) > 1;
        })) && (state.isPointerDragging = true);
        var offset = getOffset(container);
        pointerPos.x = ev.pageX - offset.left;
        pointerPos.y = ev.pageY - offset.top;
        function getOffset(el) {
          var rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
          };
        }
      }, {
        passive: true
      });
    });
    container.addEventListener("pointerup", function(ev) {
      if (!state.isPointerPressed) {
        return;
      }
      state.isPointerPressed = false;
      if (state.isPointerDragging) {
        state.isPointerDragging = false;
        return;
      }
      var cbEvents = [ev, state.pointerDownEvent];
      requestAnimationFrame(function() {
        if (ev.button === 0) {
          if (state.hoverObj) {
            var fn = state["on".concat(state.hoverObj.type, "Click")];
            fn && fn.apply(void 0, [state.hoverObj.d].concat(cbEvents));
          } else {
            state.onBackgroundClick && state.onBackgroundClick.apply(state, cbEvents);
          }
        }
        if (ev.button === 2) {
          if (state.hoverObj) {
            var _fn = state["on".concat(state.hoverObj.type, "RightClick")];
            _fn && _fn.apply(void 0, [state.hoverObj.d].concat(cbEvents));
          } else {
            state.onBackgroundRightClick && state.onBackgroundRightClick.apply(state, cbEvents);
          }
        }
      });
    }, {
      passive: true
    });
    container.addEventListener("contextmenu", function(ev) {
      if (!state.onBackgroundRightClick && !state.onNodeRightClick && !state.onLinkRightClick) return true;
      ev.preventDefault();
      return false;
    });
    state.forceGraph(ctx);
    state.shadowGraph(shadowCtx);
    var refreshShadowCanvas = throttle_default(function() {
      clearCanvas(shadowCtx, state.width, state.height);
      state.shadowGraph.linkWidth(function(l2) {
        return index4(state.linkWidth)(l2) + state.linkHoverPrecision;
      });
      var t5 = transform(state.canvas);
      state.shadowGraph.globalScale(t5.k).tickFrame();
    }, HOVER_CANVAS_THROTTLE_DELAY);
    state.flushShadowCanvas = refreshShadowCanvas.flush;
    (this._animationCycle = function animate() {
      var doRedraw = !state.autoPauseRedraw || !!state.needsRedraw || state.forceGraph.isEngineRunning() || state.graphData.links.some(function(d2) {
        return d2.__photons && d2.__photons.length;
      });
      state.needsRedraw = false;
      if (state.enablePointerInteraction) {
        var obj = !state.isPointerDragging ? getObjUnderPointer() : null;
        if (obj !== state.hoverObj) {
          var prevObj = state.hoverObj;
          var prevObjType = prevObj ? prevObj.type : null;
          var objType = obj ? obj.type : null;
          if (prevObjType && prevObjType !== objType) {
            var fn = state["on".concat(prevObjType, "Hover")];
            fn && fn(null, prevObj.d);
          }
          if (objType) {
            var _fn2 = state["on".concat(objType, "Hover")];
            _fn2 && _fn2(obj.d, prevObjType === objType ? prevObj.d : null);
          }
          state.tooltip.content(obj ? index4(state["".concat(obj.type.toLowerCase(), "Label")])(obj.d) || null : null);
          state.canvas.classList[(obj && state["on".concat(objType, "Click")] || !obj && state.onBackgroundClick) && index4(state.showPointerCursor)(obj === null || obj === void 0 ? void 0 : obj.d) ? "add" : "remove"]("clickable");
          state.hoverObj = obj;
        }
        doRedraw && refreshShadowCanvas();
      }
      if (doRedraw) {
        clearCanvas(ctx, state.width, state.height);
        var globalScale = transform(state.canvas).k;
        state.onRenderFramePre && state.onRenderFramePre(ctx, globalScale);
        state.forceGraph.globalScale(globalScale).tickFrame();
        state.onRenderFramePost && state.onRenderFramePost(ctx, globalScale);
      }
      state.tweenGroup.update();
      state.animationFrameRequestId = requestAnimationFrame(animate);
    })();
  },
  update: function updateFn(state) {
  }
});

// node_modules/react-force-graph-2d/dist/react-force-graph-2d.mjs
var import_prop_types = __toESM(require_prop_types(), 1);
var commonPropTypes = {
  width: import_prop_types.default.number,
  height: import_prop_types.default.number,
  graphData: import_prop_types.default.shape({
    nodes: import_prop_types.default.arrayOf(import_prop_types.default.object).isRequired,
    links: import_prop_types.default.arrayOf(import_prop_types.default.object).isRequired
  }),
  backgroundColor: import_prop_types.default.string,
  nodeRelSize: import_prop_types.default.number,
  nodeId: import_prop_types.default.string,
  nodeLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  nodeVal: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  nodeVisibility: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string, import_prop_types.default.func]),
  nodeColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  nodeAutoColorBy: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  onNodeHover: import_prop_types.default.func,
  onNodeClick: import_prop_types.default.func,
  linkSource: import_prop_types.default.string,
  linkTarget: import_prop_types.default.string,
  linkLabel: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  linkVisibility: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string, import_prop_types.default.func]),
  linkColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  linkAutoColorBy: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  linkWidth: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkCurvature: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalArrowLength: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalArrowColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalArrowRelPos: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalParticles: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalParticleSpeed: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalParticleOffset: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalParticleWidth: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkDirectionalParticleColor: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  onLinkHover: import_prop_types.default.func,
  onLinkClick: import_prop_types.default.func,
  dagMode: import_prop_types.default.oneOf(["td", "bu", "lr", "rl", "zin", "zout", "radialin", "radialout"]),
  dagLevelDistance: import_prop_types.default.number,
  dagNodeFilter: import_prop_types.default.func,
  onDagError: import_prop_types.default.func,
  d3AlphaMin: import_prop_types.default.number,
  d3AlphaDecay: import_prop_types.default.number,
  d3VelocityDecay: import_prop_types.default.number,
  warmupTicks: import_prop_types.default.number,
  cooldownTicks: import_prop_types.default.number,
  cooldownTime: import_prop_types.default.number,
  onEngineTick: import_prop_types.default.func,
  onEngineStop: import_prop_types.default.func,
  getGraphBbox: import_prop_types.default.func
};
var pointerBasedPropTypes = {
  zoomToFit: import_prop_types.default.func,
  onNodeRightClick: import_prop_types.default.func,
  onNodeDrag: import_prop_types.default.func,
  onNodeDragEnd: import_prop_types.default.func,
  onLinkRightClick: import_prop_types.default.func,
  linkHoverPrecision: import_prop_types.default.number,
  onBackgroundClick: import_prop_types.default.func,
  onBackgroundRightClick: import_prop_types.default.func,
  showPointerCursor: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.func]),
  enablePointerInteraction: import_prop_types.default.bool,
  enableNodeDrag: import_prop_types.default.bool
};
var threeBasedPropTypes = {
  showNavInfo: import_prop_types.default.bool,
  nodeOpacity: import_prop_types.default.number,
  nodeResolution: import_prop_types.default.number,
  nodeThreeObject: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.func]),
  nodeThreeObjectExtend: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string, import_prop_types.default.func]),
  nodePositionUpdate: import_prop_types.default.func,
  linkOpacity: import_prop_types.default.number,
  linkResolution: import_prop_types.default.number,
  linkCurveRotation: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.func]),
  linkMaterial: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.func]),
  linkThreeObject: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.func]),
  linkThreeObjectExtend: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.string, import_prop_types.default.func]),
  linkPositionUpdate: import_prop_types.default.func,
  linkDirectionalArrowResolution: import_prop_types.default.number,
  linkDirectionalParticleResolution: import_prop_types.default.number,
  linkDirectionalParticleThreeObject: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.func]),
  forceEngine: import_prop_types.default.oneOf(["d3", "ngraph"]),
  ngraphPhysics: import_prop_types.default.object,
  numDimensions: import_prop_types.default.oneOf([1, 2, 3])
};
var ForceGraph2DPropTypes = Object.assign({}, commonPropTypes, pointerBasedPropTypes, {
  linkLineDash: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.number), import_prop_types.default.string, import_prop_types.default.func]),
  nodeCanvasObjectMode: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  nodeCanvasObject: import_prop_types.default.func,
  nodePointerAreaPaint: import_prop_types.default.func,
  linkCanvasObjectMode: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  linkCanvasObject: import_prop_types.default.func,
  linkPointerAreaPaint: import_prop_types.default.func,
  linkDirectionalParticleCanvasObject: import_prop_types.default.func,
  autoPauseRedraw: import_prop_types.default.bool,
  minZoom: import_prop_types.default.number,
  maxZoom: import_prop_types.default.number,
  enableZoomInteraction: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.func]),
  enablePanInteraction: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.func]),
  onZoom: import_prop_types.default.func,
  onZoomEnd: import_prop_types.default.func,
  onRenderFramePre: import_prop_types.default.func,
  onRenderFramePost: import_prop_types.default.func
});
Object.assign({}, commonPropTypes, pointerBasedPropTypes, threeBasedPropTypes, {
  enableNavigationControls: import_prop_types.default.bool,
  controlType: import_prop_types.default.oneOf(["trackball", "orbit", "fly"]),
  rendererConfig: import_prop_types.default.object,
  extraRenderers: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    render: import_prop_types.default.func.isRequired
  }))
});
Object.assign({}, commonPropTypes, threeBasedPropTypes, {
  nodeDesc: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  linkDesc: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func])
});
Object.assign({}, commonPropTypes, threeBasedPropTypes, {
  markerAttrs: import_prop_types.default.object,
  yOffset: import_prop_types.default.number,
  glScale: import_prop_types.default.number
});
var ForceGraph2D = index(forceGraph, {
  methodNames: [
    // bind methods
    "emitParticle",
    "d3Force",
    "d3ReheatSimulation",
    "stopAnimation",
    "pauseAnimation",
    "resumeAnimation",
    "centerAt",
    "zoom",
    "zoomToFit",
    "getGraphBbox",
    "screen2GraphCoords",
    "graph2ScreenCoords"
  ]
});
ForceGraph2D.displayName = "ForceGraph2D";
ForceGraph2D.propTypes = ForceGraph2DPropTypes;
export {
  ForceGraph2D as default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

lodash-es/lodash.default.js:
lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=react-force-graph-2d.js.map
