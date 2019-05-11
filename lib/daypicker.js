(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["DayPicker"] = factory(require("react"));
	else
		root["DayPicker"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(38);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = proxyReactComponents;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactProxy = __webpack_require__(62);

var _globalWindow = __webpack_require__(166);

var _globalWindow2 = _interopRequireDefault(_globalWindow);

var componentProxies = undefined;
if (_globalWindow2['default'].__reactComponentProxies) {
  componentProxies = _globalWindow2['default'].__reactComponentProxies;
} else {
  componentProxies = {};
  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
    configurable: true,
    enumerable: false,
    writable: false,
    value: componentProxies
  });
}

function proxyReactComponents(_ref) {
  var filename = _ref.filename;
  var components = _ref.components;
  var imports = _ref.imports;
  var locals = _ref.locals;

  var _imports = _slicedToArray(imports, 1);

  var React = _imports[0];

  var _locals = _slicedToArray(locals, 1);

  var hot = _locals[0].hot;

  if (!React.Component) {
    throw new Error('imports[0] for react-transform-hmr does not look like React.');
  }

  if (!hot || typeof hot.accept !== 'function') {
    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
  }

  if (Object.keys(components).some(function (key) {
    return !components[key].isInFunction;
  })) {
    hot.accept(function (err) {
      if (err) {
        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
        console.error(err);
      }
    });
  }

  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);

  return function wrapWithProxy(ReactClass, uniqueId) {
    var _components$uniqueId = components[uniqueId];
    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
    var _components$uniqueId$displayName = _components$uniqueId.displayName;
    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;

    if (isInFunction) {
      return ReactClass;
    }

    var globalUniqueId = filename + '$' + uniqueId;
    if (componentProxies[globalUniqueId]) {
      (function () {
        console.info('[React Transform HMR] Patching ' + displayName);
        var instances = componentProxies[globalUniqueId].update(ReactClass);
        setTimeout(function () {
          return instances.forEach(forceUpdate);
        });
      })();
    } else {
      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
    }

    return componentProxies[globalUniqueId].get();
  };
}

module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(78),
    getValue = __webpack_require__(83);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["isDate"] = isDate;
/* harmony export (immutable) */ __webpack_exports__["addMonths"] = addMonths;
/* harmony export (immutable) */ __webpack_exports__["isSameDay"] = isSameDay;
/* harmony export (immutable) */ __webpack_exports__["isSameMonth"] = isSameMonth;
/* harmony export (immutable) */ __webpack_exports__["isDayBefore"] = isDayBefore;
/* harmony export (immutable) */ __webpack_exports__["isDayAfter"] = isDayAfter;
/* harmony export (immutable) */ __webpack_exports__["isPastDay"] = isPastDay;
/* harmony export (immutable) */ __webpack_exports__["isFutureDay"] = isFutureDay;
/* harmony export (immutable) */ __webpack_exports__["isDayBetween"] = isDayBetween;
/* harmony export (immutable) */ __webpack_exports__["addDayToRange"] = addDayToRange;
/* harmony export (immutable) */ __webpack_exports__["isDayInRange"] = isDayInRange;
/* harmony export (immutable) */ __webpack_exports__["getWeekNumber"] = getWeekNumber;
/**
 * Clone a date object.
 *
 * @export
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `true` if the passed value is a valid JavaScript Date object.
 *
 * @export
 * @param {any} value
 * @returns {Boolean}
 */
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * Return `d` as a new date with `n` months added.
 *
 * @export
 * @param {Date} d
 * @param {number} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if two dates fall in the same month.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameMonth(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Returns `true` if the first day is before the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayBefore(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

/**
 * Returns `true` if the first day is after the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayAfter(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 > day2;
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return isDayBefore(d, today);
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @export
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  date.setHours(0, 0, 0, 0);
  return isDayAfter(date, d1) && isDayBefore(date, d2) || isDayAfter(date, d2) && isDayBefore(date, d1);
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @export
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && isDayBefore(day, from)) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (isDayBefore(to, from)) {
      to = from;
      from = day;
    }
  }

  return { from: from, to: to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

/**
 * Return the year's week number (as per ISO, i.e. with the week starting from monday)
 * for the given day.
 *
 * @export
 * @param {Date} day
 * @returns {Number}
 */
function getWeekNumber(day) {
  var date = clone(day);
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  return Math.ceil(((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  getWeekNumber: getWeekNumber,
  isDate: isDate,
  isDayAfter: isDayAfter,
  isDayBefore: isDayBefore,
  isDayBetween: isDayBetween,
  isDayInRange: isDayInRange,
  isFutureDay: isFutureDay,
  isPastDay: isPastDay,
  isSameDay: isSameDay,
  isSameMonth: isSameMonth
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    getRawTag = __webpack_require__(79),
    objectToString = __webpack_require__(80);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isLength = __webpack_require__(28);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ESC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TAB; });
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;
var ENTER = 13;
var SPACE = 32;
var ESC = 27;
var TAB = 9;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(68),
    listCacheDelete = __webpack_require__(69),
    listCacheGet = __webpack_require__(70),
    listCacheHas = __webpack_require__(71),
    listCacheSet = __webpack_require__(72);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(16);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(92);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(110),
    baseKeys = __webpack_require__(116),
    isArrayLike = __webpack_require__(12);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Proxy object to map classnames when css modules are not used

/* harmony default export */ __webpack_exports__["a"] = ({
  container: 'DayPicker',
  wrapper: 'DayPicker-wrapper',
  interactionDisabled: 'DayPicker--interactionDisabled',
  months: 'DayPicker-Months',
  month: 'DayPicker-Month',

  navBar: 'DayPicker-NavBar',
  navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
  navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
  navButtonInteractionDisabled: 'DayPicker-NavButton--interactionDisabled',

  caption: 'DayPicker-Caption',
  weekdays: 'DayPicker-Weekdays',
  weekdaysRow: 'DayPicker-WeekdaysRow',
  weekday: 'DayPicker-Weekday',
  body: 'DayPicker-Body',
  week: 'DayPicker-Week',
  weekNumber: 'DayPicker-WeekNumber',
  day: 'DayPicker-Day',
  footer: 'DayPicker-Footer',
  todayButton: 'DayPicker-TodayButton',

  // default modifiers
  today: 'today',
  selected: 'selected',
  disabled: 'disabled',
  outside: 'outside'
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cancelEvent;
/* unused harmony export getFirstDayOfMonth */
/* unused harmony export getDaysInMonth */
/* harmony export (immutable) */ __webpack_exports__["d"] = getModifiersFromProps;
/* harmony export (immutable) */ __webpack_exports__["c"] = getFirstDayOfWeekFromProps;
/* harmony export (immutable) */ __webpack_exports__["h"] = isRangeOfDates;
/* harmony export (immutable) */ __webpack_exports__["e"] = getMonthsDiff;
/* harmony export (immutable) */ __webpack_exports__["f"] = getWeekArray;
/* harmony export (immutable) */ __webpack_exports__["j"] = startOfMonth;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDayNodes;
/* harmony export (immutable) */ __webpack_exports__["i"] = nodeListToArray;
/* harmony export (immutable) */ __webpack_exports__["g"] = hasOwnProp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateUtils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LocaleUtils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classNames__ = __webpack_require__(22);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getModifiersFromProps(props) {
  var modifiers = _extends({}, props.modifiers);
  if (props.selectedDays) {
    modifiers[props.classNames.selected] = props.selectedDays;
  }
  if (props.disabledDays) {
    modifiers[props.classNames.disabled] = props.disabledDays;
  }
  return modifiers;
}

function getFirstDayOfWeekFromProps(props) {
  var firstDayOfWeek = props.firstDayOfWeek,
      _props$locale = props.locale,
      locale = _props$locale === undefined ? 'en' : _props$locale,
      _props$localeUtils = props.localeUtils,
      localeUtils = _props$localeUtils === undefined ? {} : _props$localeUtils;

  if (!isNaN(firstDayOfWeek)) {
    return firstDayOfWeek;
  }
  if (localeUtils.getFirstDayOfWeek) {
    return localeUtils.getFirstDayOfWeek(locale);
  }
  return 0;
}

function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}

function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
}

function getWeekArray(d) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(__WEBPACK_IMPORTED_MODULE_1__LocaleUtils__["getFirstDayOfWeek"])();
  var fixedWeeks = arguments[2];

  var daysInMonth = getDaysInMonth(d);
  var dayArray = [];

  var week = [];
  var weekArray = [];

  for (var i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  var firstWeek = weekArray[0];
  for (var _i = 7 - firstWeek.length; _i > 0; _i -= 1) {
    var outsideDate = Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["clone"])(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2 += 1) {
    var _outsideDate = Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["clone"])(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  // add extra weeks to reach 6 weeks
  if (fixedWeeks && weekArray.length < 6) {
    var lastExtraWeek = void 0;

    for (var _i3 = weekArray.length; _i3 < 6; _i3 += 1) {
      lastExtraWeek = weekArray[weekArray.length - 1];
      var lastDay = lastExtraWeek[lastExtraWeek.length - 1];
      var extraWeek = [];

      for (var j = 0; j < 7; j += 1) {
        var _outsideDate2 = Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["clone"])(lastDay);
        _outsideDate2.setDate(lastDay.getDate() + j + 1);
        extraWeek.push(_outsideDate2);
      }

      weekArray.push(extraWeek);
    }
  }

  return weekArray;
}

function startOfMonth(d) {
  var newDate = Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["clone"])(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}

function getDayNodes(node, classNames) {
  var outsideClassName = void 0;
  if (classNames === __WEBPACK_IMPORTED_MODULE_2__classNames__["a" /* default */]) {
    // When using CSS modules prefix the modifier as required by the BEM syntax
    outsideClassName = classNames.day + '--' + classNames.outside;
  } else {
    outsideClassName = '' + classNames.outside;
  }
  var dayQuery = classNames.day.replace(/ /g, '.');
  var outsideDayQuery = outsideClassName.replace(/ /g, '.');
  var selector = '.' + dayQuery + ':not(.' + outsideDayQuery + ')';
  return node.querySelectorAll(selector);
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList, 0);
}

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(84),
    mapCacheDelete = __webpack_require__(91),
    mapCacheGet = __webpack_require__(93),
    mapCacheHas = __webpack_require__(94),
    mapCacheSet = __webpack_require__(95);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(112),
    isObjectLike = __webpack_require__(7);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(20);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["formatDay"] = formatDay;
/* harmony export (immutable) */ __webpack_exports__["formatMonthTitle"] = formatMonthTitle;
/* harmony export (immutable) */ __webpack_exports__["formatWeekdayShort"] = formatWeekdayShort;
/* harmony export (immutable) */ __webpack_exports__["formatWeekdayLong"] = formatWeekdayLong;
/* harmony export (immutable) */ __webpack_exports__["getFirstDayOfWeek"] = getFirstDayOfWeek;
/* harmony export (immutable) */ __webpack_exports__["getMonths"] = getMonths;
var WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDay(day) {
  return day.toDateString();
}

function formatMonthTitle(d) {
  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["dayMatchesModifier"] = dayMatchesModifier;
/* harmony export (immutable) */ __webpack_exports__["getModifiersForDay"] = getModifiersForDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateUtils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers__ = __webpack_require__(23);



/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function dayMatchesModifier(day, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function (mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isSameDay"])(day, mod);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__Helpers__["h" /* isRangeOfDates */])(mod)) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayInRange"])(day, mod);
    }
    if (mod.after && mod.before && Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayAfter"])(mod.before, mod.after)) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayAfter"])(day, mod.after) && Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayBefore"])(day, mod.before);
    }
    if (mod.after && mod.before && (Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayAfter"])(mod.after, mod.before) || Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isSameDay"])(mod.after, mod.before))) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayAfter"])(day, mod.after) || Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayBefore"])(day, mod.before);
    }
    if (mod.after) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayAfter"])(day, mod.after);
    }
    if (mod.before) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__DateUtils__["isDayBefore"])(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return mod.daysOfWeek.some(function (dayOfWeek) {
        return day.getDay() === dayOfWeek;
      });
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

/* harmony default export */ __webpack_exports__["default"] = ({ dayMatchesModifier: dayMatchesModifier, getModifiersForDay: getModifiersForDay });

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPicker", function() { return DayPicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Caption__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navbar__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Month__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Weekday__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Helpers__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DateUtils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__LocaleUtils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ModifiersUtils__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__classNames__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__keys__ = __webpack_require__(13);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return __WEBPACK_IMPORTED_MODULE_8__DateUtils__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LocaleUtils", function() { return __WEBPACK_IMPORTED_MODULE_9__LocaleUtils__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ModifiersUtils", function() { return __WEBPACK_IMPORTED_MODULE_10__ModifiersUtils__; });



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DayPicker: {
    displayName: 'DayPicker'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/DayPicker.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

















var DayPicker = _wrapComponent('DayPicker')((_temp = _class = function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.dayPicker = null;

    _this.showNextMonth = function (callback) {
      if (!_this.allowNextMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var nextMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](_this.state.currentMonth, deltaMonths);
      _this.showMonth(nextMonth, callback);
    };

    _this.showPreviousMonth = function (callback) {
      if (!_this.allowPreviousMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var previousMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](_this.state.currentMonth, -deltaMonths);
      _this.showMonth(previousMonth, callback);
    };

    _this.handleKeyDown = function (e) {
      e.persist();

      switch (e.keyCode) {
        case __WEBPACK_IMPORTED_MODULE_12__keys__["d" /* LEFT */]:
          if (_this.props.dir === 'rtl') {
            _this.showNextMonth();
          } else {
            _this.showPreviousMonth();
          }
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          break;
        case __WEBPACK_IMPORTED_MODULE_12__keys__["e" /* RIGHT */]:
          if (_this.props.dir === 'rtl') {
            _this.showPreviousMonth();
          } else {
            _this.showNextMonth();
          }
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          break;
        case __WEBPACK_IMPORTED_MODULE_12__keys__["h" /* UP */]:
          _this.showPreviousYear();
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          break;
        case __WEBPACK_IMPORTED_MODULE_12__keys__["a" /* DOWN */]:
          _this.showNextYear();
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          break;
        default:
          break;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.handleDayKeyDown = function (day, modifiers, e) {
      e.persist();

      switch (e.keyCode) {
        case __WEBPACK_IMPORTED_MODULE_12__keys__["d" /* LEFT */]:
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          if (_this.props.dir === 'rtl') {
            _this.focusNextDay(e.target);
          } else {
            _this.focusPreviousDay(e.target);
          }
          break;
        case __WEBPACK_IMPORTED_MODULE_12__keys__["e" /* RIGHT */]:
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          if (_this.props.dir === 'rtl') {
            _this.focusPreviousDay(e.target);
          } else {
            _this.focusNextDay(e.target);
          }
          break;
        case __WEBPACK_IMPORTED_MODULE_12__keys__["h" /* UP */]:
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          _this.focusPreviousWeek(e.target);
          break;
        case __WEBPACK_IMPORTED_MODULE_12__keys__["a" /* DOWN */]:
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          _this.focusNextWeek(e.target);
          break;
        case __WEBPACK_IMPORTED_MODULE_12__keys__["b" /* ENTER */]:
        case __WEBPACK_IMPORTED_MODULE_12__keys__["f" /* SPACE */]:
          __WEBPACK_IMPORTED_MODULE_7__Helpers__["a" /* cancelEvent */](e);
          if (_this.props.onDayClick) {
            _this.handleDayClick(day, modifiers, e);
          }
          break;
        default:
          break;
      }
      if (_this.props.onDayKeyDown) {
        _this.props.onDayKeyDown(day, modifiers, e);
      }
    };

    _this.handleDayClick = function (day, modifiers, e) {
      e.persist();

      if (modifiers[_this.props.classNames.outside] && _this.props.enableOutsideDaysClick) {
        _this.handleOutsideDayClick(day);
      }
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, modifiers, e);
      }
    };

    _this.handleTodayButtonClick = function (e) {
      var today = new Date();
      var month = new Date(today.getFullYear(), today.getMonth());
      _this.showMonth(month);
      e.target.blur();
      if (_this.props.onTodayButtonClick) {
        e.persist();
        _this.props.onTodayButtonClick(new Date(today.getFullYear(), today.getMonth(), today.getDate()), __WEBPACK_IMPORTED_MODULE_10__ModifiersUtils__["getModifiersForDay"](today, _this.props.modifiers), e);
      }
    };

    var currentMonth = _this.getCurrentMonthFromProps(props);
    _this.state = { currentMonth: currentMonth };
    return _this;
  }

  DayPicker.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    // Changing the `month` props means changing the current displayed month
    if (prevProps.month !== this.props.month && !__WEBPACK_IMPORTED_MODULE_8__DateUtils__["isSameMonth"](prevProps.month, this.props.month)) {
      var currentMonth = this.getCurrentMonthFromProps(this.props);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ currentMonth: currentMonth });
    }
  };

  /**
   * Return the month to be shown in the calendar based on the component props.
   *
   * @param {Object} props
   * @returns Date
   * @memberof DayPicker
   * @private
   */


  DayPicker.prototype.getCurrentMonthFromProps = function getCurrentMonthFromProps(props) {
    var initialMonth = __WEBPACK_IMPORTED_MODULE_7__Helpers__["j" /* startOfMonth */](props.month || props.initialMonth);
    var currentMonth = initialMonth;

    if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
      var fromMonth = __WEBPACK_IMPORTED_MODULE_7__Helpers__["j" /* startOfMonth */](props.fromMonth);
      var diffInMonths = __WEBPACK_IMPORTED_MODULE_7__Helpers__["e" /* getMonthsDiff */](fromMonth, currentMonth);
      currentMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](fromMonth, Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths);
    } else if (props.toMonth && props.numberOfMonths > 1 && __WEBPACK_IMPORTED_MODULE_7__Helpers__["e" /* getMonthsDiff */](currentMonth, props.toMonth) <= 0) {
      currentMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](__WEBPACK_IMPORTED_MODULE_7__Helpers__["j" /* startOfMonth */](props.toMonth), 1 - this.props.numberOfMonths);
    }
    return currentMonth;
  };

  DayPicker.prototype.getNextNavigableMonth = function getNextNavigableMonth() {
    return __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](this.state.currentMonth, this.props.numberOfMonths);
  };

  DayPicker.prototype.getPreviousNavigableMonth = function getPreviousNavigableMonth() {
    return __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](this.state.currentMonth, -1);
  };

  DayPicker.prototype.allowPreviousMonth = function allowPreviousMonth() {
    var previousMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](this.state.currentMonth, -1);
    return this.allowMonth(previousMonth);
  };

  DayPicker.prototype.allowNextMonth = function allowNextMonth() {
    var nextMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](this.state.currentMonth, this.props.numberOfMonths);
    return this.allowMonth(nextMonth);
  };

  DayPicker.prototype.allowMonth = function allowMonth(d) {
    var _props = this.props,
        fromMonth = _props.fromMonth,
        toMonth = _props.toMonth,
        canChangeMonth = _props.canChangeMonth;

    if (!canChangeMonth || fromMonth && __WEBPACK_IMPORTED_MODULE_7__Helpers__["e" /* getMonthsDiff */](fromMonth, d) < 0 || toMonth && __WEBPACK_IMPORTED_MODULE_7__Helpers__["e" /* getMonthsDiff */](toMonth, d) > 0) {
      return false;
    }
    return true;
  };

  DayPicker.prototype.allowYearChange = function allowYearChange() {
    return this.props.canChangeMonth;
  };

  DayPicker.prototype.showMonth = function showMonth(d, callback) {
    var _this2 = this;

    if (!this.allowMonth(d)) {
      return;
    }
    this.setState({ currentMonth: __WEBPACK_IMPORTED_MODULE_7__Helpers__["j" /* startOfMonth */](d) }, function () {
      if (callback) {
        callback();
      }
      if (_this2.props.onMonthChange) {
        _this2.props.onMonthChange(_this2.state.currentMonth);
      }
    });
  };

  DayPicker.prototype.showNextYear = function showNextYear() {
    if (!this.allowYearChange()) {
      return;
    }
    var nextMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](this.state.currentMonth, 12);
    this.showMonth(nextMonth);
  };

  DayPicker.prototype.showPreviousYear = function showPreviousYear() {
    if (!this.allowYearChange()) {
      return;
    }
    var nextMonth = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](this.state.currentMonth, -12);
    this.showMonth(nextMonth);
  };

  DayPicker.prototype.focusFirstDayOfMonth = function focusFirstDayOfMonth() {
    __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](this.dayPicker, this.props.classNames)[0].focus();
  };

  DayPicker.prototype.focusLastDayOfMonth = function focusLastDayOfMonth() {
    var dayNodes = __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](this.dayPicker, this.props.classNames);
    dayNodes[dayNodes.length - 1].focus();
  };

  DayPicker.prototype.focusPreviousDay = function focusPreviousDay(dayNode) {
    var _this3 = this;

    var dayNodes = __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](this.dayPicker, this.props.classNames);
    var dayNodeIndex = __WEBPACK_IMPORTED_MODULE_7__Helpers__["i" /* nodeListToArray */](dayNodes).indexOf(dayNode);
    if (dayNodeIndex === -1) return;
    if (dayNodeIndex === 0) {
      this.showPreviousMonth(function () {
        return _this3.focusLastDayOfMonth();
      });
    } else {
      dayNodes[dayNodeIndex - 1].focus();
    }
  };

  DayPicker.prototype.focusNextDay = function focusNextDay(dayNode) {
    var _this4 = this;

    var dayNodes = __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](this.dayPicker, this.props.classNames);
    var dayNodeIndex = __WEBPACK_IMPORTED_MODULE_7__Helpers__["i" /* nodeListToArray */](dayNodes).indexOf(dayNode);
    if (dayNodeIndex === -1) return;
    if (dayNodeIndex === dayNodes.length - 1) {
      this.showNextMonth(function () {
        return _this4.focusFirstDayOfMonth();
      });
    } else {
      dayNodes[dayNodeIndex + 1].focus();
    }
  };

  DayPicker.prototype.focusNextWeek = function focusNextWeek(dayNode) {
    var _this5 = this;

    var dayNodes = __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](this.dayPicker, this.props.classNames);
    var dayNodeIndex = __WEBPACK_IMPORTED_MODULE_7__Helpers__["i" /* nodeListToArray */](dayNodes).indexOf(dayNode);
    var isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

    if (isInLastWeekOfMonth) {
      this.showNextMonth(function () {
        var daysAfterIndex = dayNodes.length - dayNodeIndex;
        var nextMonthDayNodeIndex = 7 - daysAfterIndex;
        __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](_this5.dayPicker, _this5.props.classNames)[nextMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex + 7].focus();
    }
  };

  DayPicker.prototype.focusPreviousWeek = function focusPreviousWeek(dayNode) {
    var _this6 = this;

    var dayNodes = __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](this.dayPicker, this.props.classNames);
    var dayNodeIndex = __WEBPACK_IMPORTED_MODULE_7__Helpers__["i" /* nodeListToArray */](dayNodes).indexOf(dayNode);
    var isInFirstWeekOfMonth = dayNodeIndex <= 6;

    if (isInFirstWeekOfMonth) {
      this.showPreviousMonth(function () {
        var previousMonthDayNodes = __WEBPACK_IMPORTED_MODULE_7__Helpers__["b" /* getDayNodes */](_this6.dayPicker, _this6.props.classNames);
        var startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
        var previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
        previousMonthDayNodes[previousMonthDayNodeIndex].focus();
      });
    } else {
      dayNodes[dayNodeIndex - 7].focus();
    }
  };

  // Event handlers

  DayPicker.prototype.handleOutsideDayClick = function handleOutsideDayClick(day) {
    var currentMonth = this.state.currentMonth;
    var numberOfMonths = this.props.numberOfMonths;

    var diffInMonths = __WEBPACK_IMPORTED_MODULE_7__Helpers__["e" /* getMonthsDiff */](currentMonth, day);
    if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
      this.showNextMonth();
    } else if (diffInMonths < 0) {
      this.showPreviousMonth();
    }
  };

  DayPicker.prototype.renderNavbar = function renderNavbar() {
    var _props2 = this.props,
        labels = _props2.labels,
        locale = _props2.locale,
        localeUtils = _props2.localeUtils,
        canChangeMonth = _props2.canChangeMonth,
        navbarElement = _props2.navbarElement,
        attributes = _objectWithoutProperties(_props2, ['labels', 'locale', 'localeUtils', 'canChangeMonth', 'navbarElement']);

    if (!canChangeMonth) return null;

    var props = {
      month: this.state.currentMonth,
      classNames: this.props.classNames,
      className: this.props.classNames.navBar,
      nextMonth: this.getNextNavigableMonth(),
      previousMonth: this.getPreviousNavigableMonth(),
      showPreviousButton: this.allowPreviousMonth(),
      showNextButton: this.allowNextMonth(),
      onNextClick: this.showNextMonth,
      onPreviousClick: this.showPreviousMonth,
      dir: attributes.dir,
      labels: labels,
      locale: locale,
      localeUtils: localeUtils
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(navbarElement) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(navbarElement, props) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(navbarElement, props);
  };

  DayPicker.prototype.renderMonths = function renderMonths() {
    var months = [];
    var firstDayOfWeek = __WEBPACK_IMPORTED_MODULE_7__Helpers__["c" /* getFirstDayOfWeekFromProps */](this.props);
    for (var i = 0; i < this.props.numberOfMonths; i += 1) {
      var month = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["addMonths"](this.state.currentMonth, i);
      months.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Month__["a" /* default */], _extends({
        key: i
      }, this.props, {
        month: month,
        firstDayOfWeek: firstDayOfWeek,
        onDayKeyDown: this.handleDayKeyDown,
        onDayClick: this.handleDayClick
      })));
    }

    if (this.props.reverseMonths) {
      months.reverse();
    }
    return months;
  };

  DayPicker.prototype.renderFooter = function renderFooter() {
    if (this.props.todayButton) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: this.props.classNames.footer },
        this.renderTodayButton()
      );
    }
    return null;
  };

  DayPicker.prototype.renderTodayButton = function renderTodayButton() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      {
        type: 'button',
        tabIndex: 0,
        className: this.props.classNames.todayButton,
        'aria-label': this.props.todayButton,
        onClick: this.handleTodayButtonClick
      },
      this.props.todayButton
    );
  };

  DayPicker.prototype.render = function render() {
    var _this7 = this;

    var className = this.props.classNames.container;

    if (!this.props.onDayClick) {
      className = className + ' ' + this.props.classNames.interactionDisabled;
    }
    if (this.props.className) {
      className = className + ' ' + this.props.className;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      _extends({}, this.props.containerProps, {
        className: className,
        ref: function ref(el) {
          return _this7.dayPicker = el;
        },
        lang: this.props.locale
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: this.props.classNames.wrapper,
          tabIndex: this.props.canChangeMonth && typeof this.props.tabIndex !== 'undefined' ? this.props.tabIndex : -1,
          onKeyDown: this.handleKeyDown,
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur
        },
        this.renderNavbar(),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: this.props.classNames.months },
          this.renderMonths()
        ),
        this.renderFooter()
      )
    );
  };

  return DayPicker;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.VERSION = '7.3.0', _class.propTypes = {
  // Rendering months
  initialMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  month: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  numberOfMonths: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  fromMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  toMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  canChangeMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  reverseMonths: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  pagedNavigation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  todayButton: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  showWeekNumbers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  showWeekDays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  // Modifiers
  selectedDays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array]),
  disabledDays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array]),

  modifiers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  modifiersStyles: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,

  // Localization
  dir: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  firstDayOfWeek: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf([0, 1, 2, 3, 4, 5, 6]),
  labels: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    nextMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    previousMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }),
  locale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  localeUtils: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    formatMonthTitle: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    formatWeekdayShort: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    formatWeekdayLong: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
    getFirstDayOfWeek: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
  }),
  months: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  weekdaysLong: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  weekdaysShort: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),

  // Customization
  showOutsideDays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  enableOutsideDaysClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  fixedWeeks: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  // CSS and HTML
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    body: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    container: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    day: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    disabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    footer: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    interactionDisabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    months: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    month: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    navBar: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    outside: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    selected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    today: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    todayButton: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    week: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    wrapper: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
  }),
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  containerProps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  tabIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,

  // Custom elements
  renderDay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  renderWeek: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  weekdayElement: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])]),
  navbarElement: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])]),
  captionElement: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])]),

  // Events
  onBlur: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onKeyDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayKeyDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseEnter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseLeave: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseUp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayTouchStart: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayTouchEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onMonthChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onCaptionClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onWeekClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onTodayButtonClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
}, _class.defaultProps = {
  classNames: __WEBPACK_IMPORTED_MODULE_11__classNames__["a" /* default */],
  tabIndex: 0,
  initialMonth: new Date(),
  numberOfMonths: 1,
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  locale: 'en',
  localeUtils: __WEBPACK_IMPORTED_MODULE_9__LocaleUtils__,
  showOutsideDays: false,
  enableOutsideDaysClick: true,
  fixedWeeks: false,
  canChangeMonth: true,
  reverseMonths: false,
  pagedNavigation: false,
  showWeekNumbers: false,
  showWeekDays: true,
  renderDay: function renderDay(day) {
    return day.getDate();
  },
  renderWeek: function renderWeek(weekNumber) {
    return weekNumber;
  },
  weekdayElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Weekday__["a" /* default */], null),
  navbarElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Navbar__["a" /* default */], { classNames: __WEBPACK_IMPORTED_MODULE_11__classNames__["a" /* default */] }),
  captionElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Caption__["a" /* default */], { classNames: __WEBPACK_IMPORTED_MODULE_11__classNames__["a" /* default */] })
}, _temp));




DayPicker.DateUtils = __WEBPACK_IMPORTED_MODULE_8__DateUtils__;
DayPicker.LocaleUtils = __WEBPACK_IMPORTED_MODULE_9__LocaleUtils__;
DayPicker.ModifiersUtils = __WEBPACK_IMPORTED_MODULE_10__ModifiersUtils__;



/* harmony default export */ __webpack_exports__["default"] = (DayPicker);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = supportsProtoAssignment;
var x = {};
var y = { supports: true };
try {
  x.__proto__ = y;
} catch (err) {}

function supportsProtoAssignment() {
  return x.supports || false;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(66),
    baseMatchesProperty = __webpack_require__(125),
    identity = __webpack_require__(30),
    isArray = __webpack_require__(2),
    property = __webpack_require__(135);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(14),
    stackClear = __webpack_require__(73),
    stackDelete = __webpack_require__(74),
    stackGet = __webpack_require__(75),
    stackHas = __webpack_require__(76),
    stackSet = __webpack_require__(77);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObject = __webpack_require__(11);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(96),
    isObjectLike = __webpack_require__(7);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(43),
    arraySome = __webpack_require__(99),
    cacheHas = __webpack_require__(44);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(25),
    setCacheAdd = __webpack_require__(97),
    setCacheHas = __webpack_require__(98);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(113);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(114),
    baseUnary = __webpack_require__(49),
    nodeUtil = __webpack_require__(115);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(54),
    toKey = __webpack_require__(21);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isKey = __webpack_require__(29),
    stringToPath = __webpack_require__(127),
    toString = __webpack_require__(130);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(58),
    eq = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(59);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(30),
    overRest = __webpack_require__(146),
    setToString = __webpack_require__(148);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/*
  Used to create /lib/daypicker.min.js (e.g. for unpkg)
*/

/* eslint-disable no-var */
/* eslint-env node */

var DayPicker = __webpack_require__(33).default;
DayPicker.Input = __webpack_require__(173).default;

module.exports = DayPicker;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getForceUpdate = exports.createProxy = undefined;

var _supportsProtoAssignment = __webpack_require__(34);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

var _createClassProxy = __webpack_require__(63);

var _createClassProxy2 = _interopRequireDefault(_createClassProxy);

var _reactDeepForceUpdate = __webpack_require__(165);

var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!(0, _supportsProtoAssignment2.default)()) {
  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
}

exports.createProxy = _createClassProxy2.default;
exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = proxyClass;
exports.default = createClassProxy;

var _find = __webpack_require__(64);

var _find2 = _interopRequireDefault(_find);

var _createPrototypeProxy = __webpack_require__(142);

var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);

var _bindAutoBindMethods = __webpack_require__(163);

var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);

var _deleteUnknownAutoBindMethods = __webpack_require__(164);

var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);

var _supportsProtoAssignment = __webpack_require__(34);

var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];

function isEqualDescriptor(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

// This was originally a WeakMap but we had issues with React Native:
// https://github.com/gaearon/react-proxy/issues/50#issuecomment-192928066
var allProxies = [];
function findProxy(Component) {
  var pair = (0, _find2.default)(allProxies, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var key = _ref2[0];
    return key === Component;
  });
  return pair ? pair[1] : null;
}
function addProxy(Component, proxy) {
  allProxies.push([Component, proxy]);
}

function proxyClass(InitialComponent) {
  // Prevent double wrapping.
  // Given a proxy class, return the existing proxy managing it.
  var existingProxy = findProxy(InitialComponent);
  if (existingProxy) {
    return existingProxy;
  }

  var prototypeProxy = (0, _createPrototypeProxy2.default)();
  var CurrentComponent = undefined;
  var ProxyComponent = undefined;

  var staticDescriptors = {};
  function wasStaticModifiedByUser(key) {
    // Compare the descriptor with the one we previously set ourselves.
    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
  }

  function instantiate(factory, context, params) {
    var component = factory();

    try {
      return component.apply(context, params);
    } catch (err) {
      (function () {
        // Native ES6 class instantiation
        var instance = new (Function.prototype.bind.apply(component, [null].concat(_toConsumableArray(params))))();

        Object.keys(instance).forEach(function (key) {
          if (RESERVED_STATICS.indexOf(key) > -1) {
            return;
          }
          context[key] = instance[key];
        });
      })();
    }
  }

  try {
    // Create a proxy constructor with matching name
    ProxyComponent = new Function('factory', 'instantiate', 'return function ' + (InitialComponent.name || 'ProxyComponent') + '() {\n         return instantiate(factory, this, arguments);\n      }')(function () {
      return CurrentComponent;
    }, instantiate);
  } catch (err) {
    // Some environments may forbid dynamic evaluation
    ProxyComponent = function ProxyComponent() {
      return instantiate(function () {
        return CurrentComponent;
      }, this, arguments);
    };
  }

  // Point proxy constructor to the proxy prototype
  ProxyComponent.prototype = prototypeProxy.get();

  // Proxy toString() to the current constructor
  ProxyComponent.toString = function toString() {
    return CurrentComponent.toString();
  };

  function update(NextComponent) {
    if (typeof NextComponent !== 'function') {
      throw new Error('Expected a constructor.');
    }

    // Prevent proxy cycles
    var existingProxy = findProxy(NextComponent);
    if (existingProxy) {
      return update(existingProxy.__getCurrent());
    }

    // Save the next constructor so we call it
    CurrentComponent = NextComponent;

    // Update the prototype proxy with new methods
    var mountedInstances = prototypeProxy.update(NextComponent.prototype);

    // Set up the constructor property so accessing the statics work
    ProxyComponent.prototype.constructor = ProxyComponent;

    // Set up the same prototype for inherited statics
    ProxyComponent.__proto__ = NextComponent.__proto__;

    // Copy static methods and properties
    Object.getOwnPropertyNames(NextComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextComponent, key), {
        configurable: true
      });

      // Copy static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        Object.defineProperty(ProxyComponent, key, staticDescriptor);
        staticDescriptors[key] = staticDescriptor;
      }
    });

    // Remove old static methods and properties
    Object.getOwnPropertyNames(ProxyComponent).forEach(function (key) {
      if (RESERVED_STATICS.indexOf(key) > -1) {
        return;
      }

      // Skip statics that exist on the next class
      if (NextComponent.hasOwnProperty(key)) {
        return;
      }

      // Skip non-configurable statics
      var descriptor = Object.getOwnPropertyDescriptor(ProxyComponent, key);
      if (descriptor && !descriptor.configurable) {
        return;
      }

      // Delete static unless user has redefined it at runtime
      if (!wasStaticModifiedByUser(key)) {
        delete ProxyComponent[key];
        delete staticDescriptors[key];
      }
    });

    // Try to infer displayName
    ProxyComponent.displayName = NextComponent.displayName || NextComponent.name;

    // We might have added new methods that need to be auto-bound
    mountedInstances.forEach(_bindAutoBindMethods2.default);
    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);

    // Let the user take care of redrawing
    return mountedInstances;
  };

  function get() {
    return ProxyComponent;
  }

  function getCurrent() {
    return CurrentComponent;
  }

  update(InitialComponent);

  var proxy = { get: get, update: update };
  addProxy(ProxyComponent, proxy);

  Object.defineProperty(proxy, '__getCurrent', {
    configurable: false,
    writable: false,
    enumerable: false,
    value: getCurrent
  });

  return proxy;
}

function createFallback(Component) {
  var CurrentComponent = Component;

  return {
    get: function get() {
      return CurrentComponent;
    },
    update: function update(NextComponent) {
      CurrentComponent = NextComponent;
    }
  };
}

function createClassProxy(Component) {
  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(65),
    findIndex = __webpack_require__(138);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(35),
    isArrayLike = __webpack_require__(12),
    keys = __webpack_require__(19);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(67),
    getMatchData = __webpack_require__(124),
    matchesStrictComparable = __webpack_require__(52);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(36),
    baseIsEqual = __webpack_require__(41);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(15);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(14);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(14),
    Map = __webpack_require__(24),
    MapCache = __webpack_require__(25);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(37),
    isMasked = __webpack_require__(81),
    isObject = __webpack_require__(11),
    toSource = __webpack_require__(40);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(82);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(85),
    ListCache = __webpack_require__(14),
    Map = __webpack_require__(24);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(86),
    hashDelete = __webpack_require__(87),
    hashGet = __webpack_require__(88),
    hashHas = __webpack_require__(89),
    hashSet = __webpack_require__(90);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(17);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(18);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(36),
    equalArrays = __webpack_require__(42),
    equalByTag = __webpack_require__(100),
    equalObjects = __webpack_require__(104),
    getTag = __webpack_require__(119),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(46),
    isTypedArray = __webpack_require__(48);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    Uint8Array = __webpack_require__(101),
    eq = __webpack_require__(16),
    equalArrays = __webpack_require__(42),
    mapToArray = __webpack_require__(102),
    setToArray = __webpack_require__(103);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(105);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(106),
    getSymbols = __webpack_require__(107),
    keys = __webpack_require__(19);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    isArray = __webpack_require__(2);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(108),
    stubArray = __webpack_require__(109);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(111),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(46),
    isIndex = __webpack_require__(27),
    isTypedArray = __webpack_require__(48);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(9),
    isLength = __webpack_require__(28),
    isObjectLike = __webpack_require__(7);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(38);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)(module)))

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(50),
    nativeKeys = __webpack_require__(117);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(118);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(120),
    Map = __webpack_require__(24),
    Promise = __webpack_require__(121),
    Set = __webpack_require__(122),
    WeakMap = __webpack_require__(123),
    baseGetTag = __webpack_require__(9),
    toSource = __webpack_require__(40);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(6),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(51),
    keys = __webpack_require__(19);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(41),
    get = __webpack_require__(126),
    hasIn = __webpack_require__(132),
    isKey = __webpack_require__(29),
    isStrictComparable = __webpack_require__(51),
    matchesStrictComparable = __webpack_require__(52),
    toKey = __webpack_require__(21);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(53);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(128);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(129);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(25);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(131);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    arrayMap = __webpack_require__(55),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(133),
    hasPath = __webpack_require__(134);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(54),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(2),
    isIndex = __webpack_require__(27),
    isLength = __webpack_require__(28),
    toKey = __webpack_require__(21);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(136),
    basePropertyDeep = __webpack_require__(137),
    isKey = __webpack_require__(29),
    toKey = __webpack_require__(21);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(53);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(56),
    baseIteratee = __webpack_require__(35),
    toInteger = __webpack_require__(139);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(140);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(141);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11),
    isSymbol = __webpack_require__(20);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrototypeProxy;

var _assign = __webpack_require__(143);

var _assign2 = _interopRequireDefault(_assign);

var _difference = __webpack_require__(153);

var _difference2 = _interopRequireDefault(_difference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrototypeProxy() {
  var proxy = {};
  var current = null;
  var mountedInstances = [];

  /**
   * Creates a proxied toString() method pointing to the current version's toString().
   */
  function proxyToString(name) {
    // Wrap to always call the current version
    return function toString() {
      if (typeof current[name] === 'function') {
        return current[name].toString();
      } else {
        return '<method was deleted>';
      }
    };
  }

  /**
   * Creates a proxied method that calls the current version, whenever available.
   */
  function proxyMethod(name) {
    // Wrap to always call the current version
    var proxiedMethod = function proxiedMethod() {
      if (typeof current[name] === 'function') {
        return current[name].apply(this, arguments);
      }
    };

    // Copy properties of the original function, if any
    (0, _assign2.default)(proxiedMethod, current[name]);
    proxiedMethod.toString = proxyToString(name);

    return proxiedMethod;
  }

  /**
   * Augments the original componentDidMount with instance tracking.
   */
  function proxiedComponentDidMount() {
    mountedInstances.push(this);
    if (typeof current.componentDidMount === 'function') {
      return current.componentDidMount.apply(this, arguments);
    }
  }
  proxiedComponentDidMount.toString = proxyToString('componentDidMount');

  /**
   * Augments the original componentWillUnmount with instance tracking.
   */
  function proxiedComponentWillUnmount() {
    var index = mountedInstances.indexOf(this);
    // Unless we're in a weird environment without componentDidMount
    if (index !== -1) {
      mountedInstances.splice(index, 1);
    }
    if (typeof current.componentWillUnmount === 'function') {
      return current.componentWillUnmount.apply(this, arguments);
    }
  }
  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');

  /**
   * Defines a property on the proxy.
   */
  function defineProxyProperty(name, descriptor) {
    Object.defineProperty(proxy, name, descriptor);
  }

  /**
   * Defines a property, attempting to keep the original descriptor configuration.
   */
  function defineProxyPropertyWithValue(name, value) {
    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};

    var _ref$enumerable = _ref.enumerable;
    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
    var _ref$writable = _ref.writable;
    var writable = _ref$writable === undefined ? true : _ref$writable;


    defineProxyProperty(name, {
      configurable: true,
      enumerable: enumerable,
      writable: writable,
      value: value
    });
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindMap() {
    if (!current.__reactAutoBindMap) {
      return;
    }

    var __reactAutoBindMap = {};
    for (var name in current.__reactAutoBindMap) {
      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
        __reactAutoBindMap[name] = proxy[name];
      }
    }

    return __reactAutoBindMap;
  }

  /**
   * Creates an auto-bind map mimicking the original map, but directed at proxy.
   */
  function createAutoBindPairs() {
    var __reactAutoBindPairs = [];

    for (var i = 0; i < current.__reactAutoBindPairs.length; i += 2) {
      var name = current.__reactAutoBindPairs[i];
      var method = proxy[name];

      if (typeof method === 'function') {
        __reactAutoBindPairs.push(name, method);
      }
    }

    return __reactAutoBindPairs;
  }

  /**
   * Applies the updated prototype.
   */
  function update(next) {
    // Save current source of truth
    current = next;

    // Find changed property names
    var currentNames = Object.getOwnPropertyNames(current);
    var previousName = Object.getOwnPropertyNames(proxy);
    var removedNames = (0, _difference2.default)(previousName, currentNames);

    // Remove properties and methods that are no longer there
    removedNames.forEach(function (name) {
      delete proxy[name];
    });

    // Copy every descriptor
    currentNames.forEach(function (name) {
      var descriptor = Object.getOwnPropertyDescriptor(current, name);
      if (typeof descriptor.value === 'function') {
        // Functions require additional wrapping so they can be bound later
        defineProxyPropertyWithValue(name, proxyMethod(name));
      } else {
        // Other values can be copied directly
        defineProxyProperty(name, descriptor);
      }
    });

    // Track mounting and unmounting
    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);

    if (current.hasOwnProperty('__reactAutoBindMap')) {
      defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());
    }

    if (current.hasOwnProperty('__reactAutoBindPairs')) {
      defineProxyPropertyWithValue('__reactAutoBindPairs', createAutoBindPairs());
    }

    // Set up the prototype chain
    proxy.__proto__ = next;

    return mountedInstances;
  }

  /**
   * Returns the up-to-date proxy prototype.
   */
  function get() {
    return proxy;
  }

  return {
    update: update,
    get: get
  };
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(57),
    copyObject = __webpack_require__(144),
    createAssigner = __webpack_require__(145),
    isArrayLike = __webpack_require__(12),
    isPrototype = __webpack_require__(50),
    keys = __webpack_require__(19);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(57),
    baseAssignValue = __webpack_require__(58);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(60),
    isIterateeCall = __webpack_require__(152);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(147);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(149),
    shortOut = __webpack_require__(151);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(150),
    defineProperty = __webpack_require__(59),
    identity = __webpack_require__(30);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(16),
    isArrayLike = __webpack_require__(12),
    isIndex = __webpack_require__(27),
    isObject = __webpack_require__(11);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(154),
    baseFlatten = __webpack_require__(160),
    baseRest = __webpack_require__(60),
    isArrayLikeObject = __webpack_require__(162);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(43),
    arrayIncludes = __webpack_require__(155),
    arrayIncludesWith = __webpack_require__(159),
    arrayMap = __webpack_require__(55),
    baseUnary = __webpack_require__(49),
    cacheHas = __webpack_require__(44);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(156);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(56),
    baseIsNaN = __webpack_require__(157),
    strictIndexOf = __webpack_require__(158);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 158 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(45),
    isFlattenable = __webpack_require__(161);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(2);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(12),
    isObjectLike = __webpack_require__(7);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindAutoBindMethods;
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of React source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * Original:
 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
 */

function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);

  boundMethod.__reactBoundContext = component;
  boundMethod.__reactBoundMethod = method;
  boundMethod.__reactBoundArguments = null;

  var componentName = component.constructor.displayName,
      _bind = boundMethod.bind;

  boundMethod.bind = function (newThis) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (newThis !== component && newThis !== null) {
      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
    } else if (!args.length) {
      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
      return boundMethod;
    }

    var reboundMethod = _bind.apply(boundMethod, arguments);
    reboundMethod.__reactBoundContext = component;
    reboundMethod.__reactBoundMethod = method;
    reboundMethod.__reactBoundArguments = args;

    return reboundMethod;
  };

  return boundMethod;
}

function bindAutoBindMethodsFromMap(component) {
  for (var autoBindKey in component.__reactAutoBindMap) {
    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
      return;
    }

    // Tweak: skip methods that are already bound.
    // This is to preserve method reference in case it is used
    // as a subscription handler that needs to be detached later.
    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = component.__reactAutoBindMap[autoBindKey];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

function bindAutoBindMethods(component) {
  if (component.__reactAutoBindPairs) {
    bindAutoBindMethodsFromArray(component);
  } else if (component.__reactAutoBindMap) {
    bindAutoBindMethodsFromMap(component);
  }
}

function bindAutoBindMethodsFromArray(component) {
  var pairs = component.__reactAutoBindPairs;

  if (!pairs) {
    return;
  }

  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];

    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
      continue;
    }

    var method = pairs[i + 1];

    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteUnknownAutoBindMethods;
function shouldDeleteClassicInstanceMethod(component, name) {
  if (component.__reactAutoBindMap && component.__reactAutoBindMap.hasOwnProperty(name)) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component.__reactAutoBindPairs && component.__reactAutoBindPairs.indexOf(name) >= 0) {
    // It's a known autobound function, keep it
    return false;
  }

  if (component[name].__reactBoundArguments !== null) {
    // It's a function bound to specific args, keep it
    return false;
  }

  // It's a cached bound method for a function
  // that was deleted by user, so we delete it from component.
  return true;
}

function shouldDeleteModernInstanceMethod(component, name) {
  var prototype = component.constructor.prototype;

  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);

  if (!prototypeDescriptor || !prototypeDescriptor.get) {
    // This is definitely not an autobinding getter
    return false;
  }

  if (prototypeDescriptor.get().length !== component[name].length) {
    // The length doesn't match, bail out
    return false;
  }

  // This seems like a method bound using an autobinding getter on the prototype
  // Hopefully we won't run into too many false positives.
  return true;
}

function shouldDeleteInstanceMethod(component, name) {
  var descriptor = Object.getOwnPropertyDescriptor(component, name);
  if (typeof descriptor.value !== 'function') {
    // Not a function, or something fancy: bail out
    return;
  }

  if (component.__reactAutoBindMap || component.__reactAutoBindPairs) {
    // Classic
    return shouldDeleteClassicInstanceMethod(component, name);
  } else {
    // Modern
    return shouldDeleteModernInstanceMethod(component, name);
  }
}

/**
 * Deletes autobound methods from the instance.
 *
 * For classic React classes, we only delete the methods that no longer exist in map.
 * This means the user actually deleted them in code.
 *
 * For modern classes, we delete methods that exist on prototype with the same length,
 * and which have getters on prototype, but are normal values on the instance.
 * This is usually an indication that an autobinding decorator is being used,
 * and the getter will re-generate the memoized handler on next access.
 */
function deleteUnknownAutoBindMethods(component) {
  var names = Object.getOwnPropertyNames(component);

  names.forEach(function (name) {
    if (shouldDeleteInstanceMethod(component, name)) {
      delete component[name];
    }
  });
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = getForceUpdate;
function traverseRenderedChildren(internalInstance, callback, argument) {
  callback(internalInstance, argument);

  if (internalInstance._renderedComponent) {
    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
  } else {
    for (var key in internalInstance._renderedChildren) {
      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
      }
    }
  }
}

function setPendingForceUpdate(internalInstance) {
  if (internalInstance._pendingForceUpdate === false) {
    internalInstance._pendingForceUpdate = true;
  }
}

function forceUpdateIfPending(internalInstance, React) {
  if (internalInstance._pendingForceUpdate === true) {
    var publicInstance = internalInstance._instance;
    React.Component.prototype.forceUpdate.call(publicInstance);
  }
}

function deepForceUpdateStack(instance, React) {
  var internalInstance = instance._reactInternalInstance;
  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
  traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
}

function deepForceUpdate(instance, React) {
  var root = instance._reactInternalFiber || instance._reactInternalInstance;
  if (typeof root.tag !== 'number') {
    // Traverse stack-based React tree.
    return deepForceUpdateStack(instance, React);
  }

  var node = root;
  while (true) {
    if (node.stateNode !== null && typeof node.type === 'function') {
      var publicInstance = node.stateNode;
      var updater = publicInstance.updater;

      if (typeof publicInstance.forceUpdate === 'function') {
        publicInstance.forceUpdate();
      } else if (updater && typeof updater.enqueueForceUpdate === 'function') {
        updater.enqueueForceUpdate(publicInstance);
      }
    }
    if (node.child) {
      node.child['return'] = node;
      node = node.child;
      continue;
    }
    if (node === root) {
      return undefined;
    }
    while (!node.sibling) {
      if (!node['return'] || node['return'] === root) {
        return undefined;
      }
      node = node['return'];
    }
    node.sibling['return'] = node['return'];
    node = node.sibling;
  }
}

function getForceUpdate(React) {
  return function (instance) {
    deepForceUpdate(instance, React);
  };
}

module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(39)))

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocaleUtils__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys__ = __webpack_require__(13);



var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Caption: {
    displayName: 'Caption'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/Caption.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}








var Caption = _wrapComponent('Caption')((_temp = _class = function (_Component) {
  _inherits(Caption, _Component);

  function Caption(props) {
    _classCallCheck(this, Caption);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  Caption.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.locale !== this.props.locale || nextProps.classNames !== this.props.classNames || nextProps.date.getMonth() !== this.props.date.getMonth() || nextProps.date.getFullYear() !== this.props.date.getFullYear();
  };

  Caption.prototype.handleKeyUp = function handleKeyUp(e) {
    if (e.keyCode === __WEBPACK_IMPORTED_MODULE_4__keys__["b" /* ENTER */]) {
      this.props.onClick(e);
    }
  };

  Caption.prototype.render = function render() {
    var _props = this.props,
        classNames = _props.classNames,
        date = _props.date,
        months = _props.months,
        locale = _props.locale,
        localeUtils = _props.localeUtils,
        onClick = _props.onClick;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classNames.caption, role: 'heading' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { onClick: onClick, onKeyUp: this.handleKeyUp },
        months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
      )
    );
  };

  return Caption;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  date: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  months: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  locale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  localeUtils: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    caption: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }).isRequired
}, _class.defaultProps = {
  localeUtils: __WEBPACK_IMPORTED_MODULE_3__LocaleUtils__["default"]
}, _temp));

/* harmony default export */ __webpack_exports__["a"] = (Caption);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classNames__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys__ = __webpack_require__(13);



var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Navbar: {
    displayName: 'Navbar'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/Navbar.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}







var Navbar = _wrapComponent('Navbar')((_temp2 = _class = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== __WEBPACK_IMPORTED_MODULE_4__keys__["b" /* ENTER */] && e.keyCode !== __WEBPACK_IMPORTED_MODULE_4__keys__["f" /* SPACE */]) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== __WEBPACK_IMPORTED_MODULE_4__keys__["b" /* ENTER */] && e.keyCode !== __WEBPACK_IMPORTED_MODULE_4__keys__["f" /* SPACE */]) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Navbar.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
  };

  Navbar.prototype.render = function render() {
    var _props = this.props,
        classNames = _props.classNames,
        className = _props.className,
        showPreviousButton = _props.showPreviousButton,
        showNextButton = _props.showNextButton,
        labels = _props.labels,
        dir = _props.dir;


    var previousClickHandler = void 0;
    var nextClickHandler = void 0;
    var previousKeyDownHandler = void 0;
    var nextKeyDownHandler = void 0;
    var shouldShowPrevious = void 0;
    var shouldShowNext = void 0;

    if (dir === 'rtl') {
      previousClickHandler = this.handleNextClick;
      nextClickHandler = this.handlePreviousClick;
      previousKeyDownHandler = this.handleNextKeyDown;
      nextKeyDownHandler = this.handlePreviousKeyDown;
      shouldShowNext = showPreviousButton;
      shouldShowPrevious = showNextButton;
    } else {
      previousClickHandler = this.handlePreviousClick;
      nextClickHandler = this.handleNextClick;
      previousKeyDownHandler = this.handlePreviousKeyDown;
      nextKeyDownHandler = this.handleNextKeyDown;
      shouldShowNext = showNextButton;
      shouldShowPrevious = showPreviousButton;
    }

    var previousClassName = shouldShowPrevious ? classNames.navButtonPrev : classNames.navButtonPrev + ' ' + classNames.navButtonInteractionDisabled;

    var nextClassName = shouldShowNext ? classNames.navButtonNext : classNames.navButtonNext + ' ' + classNames.navButtonInteractionDisabled;

    var previousButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
      tabIndex: '0',
      role: 'button',
      'aria-label': labels.previousMonth,
      key: 'previous',
      className: previousClassName,
      onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
      onClick: shouldShowPrevious ? previousClickHandler : undefined
    });

    var nextButton = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
      tabIndex: '0',
      role: 'button',
      'aria-label': labels.nextMonth,
      key: 'right',
      className: nextClassName,
      onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
      onClick: shouldShowNext ? nextClickHandler : undefined
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: className || classNames.navBar },
      dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
    );
  };

  return Navbar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    navBar: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    navButtonPrev: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    navButtonNext: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }),
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  showPreviousButton: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  showNextButton: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  onPreviousClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onNextClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  dir: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  labels: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    previousMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    nextMonth: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  })
}, _class.defaultProps = {
  classNames: __WEBPACK_IMPORTED_MODULE_3__classNames__["a" /* default */],
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
}, _temp2));

/* harmony default export */ __webpack_exports__["a"] = (Navbar);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Weekdays__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Day__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keys__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ModifiersUtils__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Helpers__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DateUtils__ = __webpack_require__(8);



var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Month: {
    displayName: 'Month'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/Month.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}












var Month = _wrapComponent('Month')((_temp2 = _class = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    var _temp, _this, _ret;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderDay = function (day) {
      var monthNumber = _this.props.month.getMonth();
      var propModifiers = __WEBPACK_IMPORTED_MODULE_7__Helpers__["d" /* getModifiersFromProps */](_this.props);
      var dayModifiers = __WEBPACK_IMPORTED_MODULE_6__ModifiersUtils__["getModifiersForDay"](day, propModifiers);
      if (__WEBPACK_IMPORTED_MODULE_8__DateUtils__["isSameDay"](day, new Date()) && !Object.prototype.hasOwnProperty.call(propModifiers, _this.props.classNames.today)) {
        dayModifiers.push(_this.props.classNames.today);
      }
      if (day.getMonth() !== monthNumber) {
        dayModifiers.push(_this.props.classNames.outside);
      }

      var isOutside = day.getMonth() !== monthNumber;
      var tabIndex = -1;
      // Focus on the first day of the month
      if (_this.props.onDayClick && !isOutside && day.getDate() === 1) {
        tabIndex = _this.props.tabIndex; // eslint-disable-line prefer-destructuring
      }
      var key = '' + day.getFullYear() + day.getMonth() + day.getDate();
      var modifiers = {};
      dayModifiers.forEach(function (modifier) {
        modifiers[modifier] = true;
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__Day__["a" /* default */],
        {
          key: '' + (isOutside ? 'outside-' : '') + key,
          classNames: _this.props.classNames,
          day: day,
          modifiers: modifiers,
          modifiersStyles: _this.props.modifiersStyles,
          empty: isOutside && !_this.props.showOutsideDays && !_this.props.fixedWeeks,
          tabIndex: tabIndex,
          ariaLabel: _this.props.localeUtils.formatDay(day, _this.props.locale),
          ariaDisabled: isOutside || dayModifiers.indexOf('disabled') > -1,
          ariaSelected: dayModifiers.indexOf('selected') > -1,
          onClick: _this.props.onDayClick,
          onFocus: _this.props.onDayFocus,
          onKeyDown: _this.props.onDayKeyDown,
          onMouseEnter: _this.props.onDayMouseEnter,
          onMouseLeave: _this.props.onDayMouseLeave,
          onMouseDown: _this.props.onDayMouseDown,
          onMouseUp: _this.props.onDayMouseUp,
          onTouchEnd: _this.props.onDayTouchEnd,
          onTouchStart: _this.props.onDayTouchStart
        },
        _this.props.renderDay(day, modifiers)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Month.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        classNames = _props.classNames,
        month = _props.month,
        months = _props.months,
        fixedWeeks = _props.fixedWeeks,
        captionElement = _props.captionElement,
        weekdayElement = _props.weekdayElement,
        locale = _props.locale,
        localeUtils = _props.localeUtils,
        weekdaysLong = _props.weekdaysLong,
        weekdaysShort = _props.weekdaysShort,
        firstDayOfWeek = _props.firstDayOfWeek,
        onCaptionClick = _props.onCaptionClick,
        showWeekNumbers = _props.showWeekNumbers,
        showWeekDays = _props.showWeekDays,
        onWeekClick = _props.onWeekClick;


    var captionProps = {
      date: month,
      classNames: classNames,
      months: months,
      localeUtils: localeUtils,
      locale: locale,
      onClick: onCaptionClick ? function (e) {
        return onCaptionClick(month, e);
      } : undefined
    };
    var caption = __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(captionElement) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(captionElement, captionProps) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(captionElement, captionProps);

    var weeks = __WEBPACK_IMPORTED_MODULE_7__Helpers__["f" /* getWeekArray */](month, firstDayOfWeek, fixedWeeks);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classNames.month, role: 'grid' },
      caption,
      showWeekDays && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Weekdays__["a" /* default */], {
        classNames: classNames,
        weekdaysShort: weekdaysShort,
        weekdaysLong: weekdaysLong,
        firstDayOfWeek: firstDayOfWeek,
        showWeekNumbers: showWeekNumbers,
        locale: locale,
        localeUtils: localeUtils,
        weekdayElement: weekdayElement
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classNames.body, role: 'rowgroup' },
        weeks.map(function (week) {
          var weekNumber = void 0;
          if (showWeekNumbers) {
            weekNumber = __WEBPACK_IMPORTED_MODULE_8__DateUtils__["getWeekNumber"](week[6]);
          }
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              key: week[0].getTime(),
              className: classNames.week,
              role: 'row'
            },
            showWeekNumbers && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                className: classNames.weekNumber,
                tabIndex: onWeekClick ? 0 : -1,
                role: 'gridcell',
                onClick: onWeekClick ? function (e) {
                  return onWeekClick(weekNumber, week, e);
                } : undefined,
                onKeyUp: onWeekClick ? function (e) {
                  return e.keyCode === __WEBPACK_IMPORTED_MODULE_5__keys__["b" /* ENTER */] && onWeekClick(weekNumber, week, e);
                } : undefined
              },
              _this2.props.renderWeek(weekNumber, week, month)
            ),
            week.map(_this2.renderDay)
          );
        })
      )
    );
  };

  return Month;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    body: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    month: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    outside: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    today: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    week: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }).isRequired,
  tabIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,

  month: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date).isRequired,
  months: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),

  modifiersStyles: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,

  showWeekDays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  showOutsideDays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  renderDay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
  renderWeek: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,

  captionElement: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)]).isRequired,
  weekdayElement: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)]),

  fixedWeeks: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  showWeekNumbers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  locale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  localeUtils: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  weekdaysLong: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  weekdaysShort: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  firstDayOfWeek: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,

  onCaptionClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayKeyDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseEnter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseLeave: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayMouseUp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayTouchEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayTouchStart: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onWeekClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
}, _temp2));

/* harmony default export */ __webpack_exports__["a"] = (Month);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);



var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Weekdays: {
    displayName: 'Weekdays'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/Weekdays.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}




var Weekdays = _wrapComponent('Weekdays')((_temp = _class = function (_Component) {
  _inherits(Weekdays, _Component);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Weekdays.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  };

  Weekdays.prototype.render = function render() {
    var _props = this.props,
        classNames = _props.classNames,
        firstDayOfWeek = _props.firstDayOfWeek,
        showWeekNumbers = _props.showWeekNumbers,
        weekdaysLong = _props.weekdaysLong,
        weekdaysShort = _props.weekdaysShort,
        locale = _props.locale,
        localeUtils = _props.localeUtils,
        weekdayElement = _props.weekdayElement;

    var days = [];
    for (var i = 0; i < 7; i += 1) {
      var weekday = (i + firstDayOfWeek) % 7;
      var elementProps = {
        key: i,
        className: classNames.weekday,
        weekday: weekday,
        weekdaysLong: weekdaysLong,
        weekdaysShort: weekdaysShort,
        localeUtils: localeUtils,
        locale: locale
      };
      var element = __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(weekdayElement) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(weekdayElement, elementProps) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(weekdayElement, elementProps);
      days.push(element);
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classNames.weekdays, role: 'rowgroup' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classNames.weekdaysRow, role: 'row' },
        showWeekNumbers && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: classNames.weekday }),
        days
      )
    );
  };

  return Weekdays;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    weekday: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    weekdays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
    weekdaysRow: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }).isRequired,

  firstDayOfWeek: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number.isRequired,
  weekdaysLong: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  weekdaysShort: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  showWeekNumbers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  locale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  localeUtils: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  weekdayElement: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)])
}, _temp));

/* harmony default export */ __webpack_exports__["a"] = (Weekdays);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DateUtils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Helpers__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classNames__ = __webpack_require__(22);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Day: {
    displayName: 'Day'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/Day.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}

/* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */








function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}

var Day = _wrapComponent('Day')((_temp = _class = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Day.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this2 = this;

    var propNames = Object.keys(this.props);
    var nextPropNames = Object.keys(nextProps);
    if (propNames.length !== nextPropNames.length) {
      return true;
    }
    return propNames.some(function (name) {
      if (name === 'modifiers' || name === 'modifiersStyles' || name === 'classNames') {
        var prop = _this2.props[name];
        var nextProp = nextProps[name];
        var modifiers = Object.keys(prop);
        var nextModifiers = Object.keys(nextProp);
        if (modifiers.length !== nextModifiers.length) {
          return true;
        }
        return modifiers.some(function (mod) {
          return !Object(__WEBPACK_IMPORTED_MODULE_4__Helpers__["g" /* hasOwnProp */])(nextProp, mod) || prop[mod] !== nextProp[mod];
        });
      }
      if (name === 'day') {
        return !Object(__WEBPACK_IMPORTED_MODULE_3__DateUtils__["isSameDay"])(_this2.props[name], nextProps[name]);
      }
      return !Object(__WEBPACK_IMPORTED_MODULE_4__Helpers__["g" /* hasOwnProp */])(nextProps, name) || _this2.props[name] !== nextProps[name];
    });
  };

  Day.prototype.render = function render() {
    var _props = this.props,
        classNames = _props.classNames,
        modifiersStyles = _props.modifiersStyles,
        day = _props.day,
        tabIndex = _props.tabIndex,
        empty = _props.empty,
        modifiers = _props.modifiers,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onMouseUp = _props.onMouseUp,
        onMouseDown = _props.onMouseDown,
        onClick = _props.onClick,
        onKeyDown = _props.onKeyDown,
        onTouchStart = _props.onTouchStart,
        onTouchEnd = _props.onTouchEnd,
        onFocus = _props.onFocus,
        ariaLabel = _props.ariaLabel,
        ariaDisabled = _props.ariaDisabled,
        ariaSelected = _props.ariaSelected,
        children = _props.children;


    var className = classNames.day;
    if (classNames !== __WEBPACK_IMPORTED_MODULE_5__classNames__["a" /* default */]) {
      // When using CSS modules prefix the modifier as required by the BEM syntax
      className += ' ' + Object.keys(modifiers).join(' ');
    } else {
      className += Object.keys(modifiers).map(function (modifier) {
        return ' ' + className + '--' + modifier;
      }).join('');
    }

    var style = void 0;
    if (modifiersStyles) {
      Object.keys(modifiers).filter(function (modifier) {
        return !!modifiersStyles[modifier];
      }).forEach(function (modifier) {
        style = _extends({}, style, modifiersStyles[modifier]);
      });
    }

    if (empty) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { 'aria-disabled': true, className: className, style: style });
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: className,
        tabIndex: tabIndex,
        style: style,
        role: 'gridcell',
        'aria-label': ariaLabel,
        'aria-disabled': ariaDisabled,
        'aria-selected': ariaSelected,
        onClick: handleEvent(onClick, day, modifiers),
        onKeyDown: handleEvent(onKeyDown, day, modifiers),
        onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
        onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
        onMouseUp: handleEvent(onMouseUp, day, modifiers),
        onMouseDown: handleEvent(onMouseDown, day, modifiers),
        onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
        onTouchStart: handleEvent(onTouchStart, day, modifiers),
        onFocus: handleEvent(onFocus, day, modifiers)
      },
      children
    );
  };

  return Day;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    day: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }).isRequired,

  day: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node.isRequired,

  ariaDisabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  ariaLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  ariaSelected: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  empty: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  modifiers: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  modifiersStyles: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onKeyDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onMouseEnter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onMouseLeave: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onMouseDown: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onMouseUp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onTouchEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onTouchStart: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  tabIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
}, _class.defaultProps = {
  tabIndex: -1
}, _class.defaultProps = {
  modifiers: {},
  modifiersStyles: {},
  empty: false
}, _temp));

/* harmony default export */ __webpack_exports__["a"] = (Day);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);



var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Weekday: {
    displayName: 'Weekday'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/Weekday.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}




var Weekday = _wrapComponent('Weekday')((_temp = _class = function (_Component) {
  _inherits(Weekday, _Component);

  function Weekday() {
    _classCallCheck(this, Weekday);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Weekday.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  };

  Weekday.prototype.render = function render() {
    var _props = this.props,
        weekday = _props.weekday,
        className = _props.className,
        weekdaysLong = _props.weekdaysLong,
        weekdaysShort = _props.weekdaysShort,
        localeUtils = _props.localeUtils,
        locale = _props.locale;

    var title = void 0;
    if (weekdaysLong) {
      title = weekdaysLong[weekday];
    } else {
      title = localeUtils.formatWeekdayLong(weekday, locale);
    }
    var content = void 0;
    if (weekdaysShort) {
      content = weekdaysShort[weekday];
    } else {
      content = localeUtils.formatWeekdayShort(weekday, locale);
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: className, role: 'columnheader' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'abbr',
        { title: title },
        content
      )
    );
  };

  return Weekday;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  weekday: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  locale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  localeUtils: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,

  weekdaysLong: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
  weekdaysShort: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string)
}, _temp));

/* harmony default export */ __webpack_exports__["a"] = (Weekday);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_TIMEOUT", function() { return HIDE_TIMEOUT; });
/* harmony export (immutable) */ __webpack_exports__["OverlayComponent"] = OverlayComponent;
/* harmony export (immutable) */ __webpack_exports__["defaultFormat"] = defaultFormat;
/* harmony export (immutable) */ __webpack_exports__["defaultParse"] = defaultParse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transform_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DayPicker__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateUtils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ModifiersUtils__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys__ = __webpack_require__(13);



var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _components = {
  DayPickerInput: {
    displayName: 'DayPickerInput'
  }
};

var _reactTransformHmr2 = __WEBPACK_IMPORTED_MODULE_1_react_transform_hmr___default()({
  filename: 'C:/Code/projects/ReactJS/react-daypicker/src/DayPickerInput.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_0_react___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(Component, id);
  };
}









// When clicking on a day cell, overlay will be hidden after this timeout
var HIDE_TIMEOUT = 100;

/**
 * The default component used as Overlay.
 *
 * @param {Object} props
 */
function OverlayComponent(_ref) {
  var input = _ref.input,
      selectedDay = _ref.selectedDay,
      month = _ref.month,
      children = _ref.children,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ['input', 'selectedDay', 'month', 'children', 'classNames']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    _extends({ className: classNames.overlayWrapper }, props),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classNames.overlay },
      children
    )
  );
}

OverlayComponent.displayName = 'OverlayComponent';
OverlayComponent.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
  selectedDay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
  month: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};

/**
 * The default function used to format a Date to String, passed to the `format`
 * prop.
 * @param {Date} d
 * @return {String}
 */
function defaultFormat(d) {
  if (Object(__WEBPACK_IMPORTED_MODULE_4__DateUtils__["isDate"])(d)) {
    var year = d.getFullYear();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    return year + '-' + month + '-' + day;
  }
  return '';
}

/**
 * The default function used to parse a String as Date, passed to the `parse`
 * prop.
 * @param {String} str
 * @return {Date}
 */
function defaultParse(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  var split = str.split('-');
  if (split.length !== 3) {
    return undefined;
  }
  var year = parseInt(split[0], 10);
  var month = parseInt(split[1], 10) - 1;
  var day = parseInt(split[2], 10);
  if (isNaN(year) || String(year).length > 4 || isNaN(month) || isNaN(day) || day <= 0 || day > 31 || month < 0 || month >= 12) {
    return undefined;
  }

  return new Date(year, month, day);
}

var DayPickerInput = _wrapComponent('DayPickerInput')((_temp = _class = function (_React$Component) {
  _inherits(DayPickerInput, _React$Component);

  function DayPickerInput(props) {
    _classCallCheck(this, DayPickerInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.input = null;
    _this.daypicker = null;
    _this.clickTimeout = null;
    _this.hideTimeout = null;
    _this.inputBlurTimeout = null;
    _this.inputFocusTimeout = null;


    _this.state = _this.getInitialStateFromProps(props);
    _this.state.showOverlay = props.showOverlay;

    _this.hideAfterDayClick = _this.hideAfterDayClick.bind(_this);
    _this.handleInputClick = _this.handleInputClick.bind(_this);
    _this.handleInputFocus = _this.handleInputFocus.bind(_this);
    _this.handleInputBlur = _this.handleInputBlur.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleInputKeyDown = _this.handleInputKeyDown.bind(_this);
    _this.handleInputKeyUp = _this.handleInputKeyUp.bind(_this);
    _this.handleDayClick = _this.handleDayClick.bind(_this);
    _this.handleMonthChange = _this.handleMonthChange.bind(_this);
    _this.handleOverlayFocus = _this.handleOverlayFocus.bind(_this);
    _this.handleOverlayBlur = _this.handleOverlayBlur.bind(_this);
    return _this;
  }

  DayPickerInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var newState = {};

    // Current props
    var _props = this.props,
        value = _props.value,
        formatDate = _props.formatDate,
        format = _props.format,
        dayPickerProps = _props.dayPickerProps;

    // Update the input value if the `value` prop has changed

    if (value !== prevProps.value) {
      if (Object(__WEBPACK_IMPORTED_MODULE_4__DateUtils__["isDate"])(value)) {
        newState.value = formatDate(value, format, dayPickerProps.locale);
      } else {
        newState.value = value;
      }
    }

    // Update the month if the months from props changed
    var prevMonth = prevProps.dayPickerProps.month;
    if (dayPickerProps.month && dayPickerProps.month !== prevMonth && !Object(__WEBPACK_IMPORTED_MODULE_4__DateUtils__["isSameMonth"])(dayPickerProps.month, prevMonth)) {
      newState.month = dayPickerProps.month;
    }

    // Updated the selected days from props if they changed
    if (prevProps.dayPickerProps.selectedDays !== dayPickerProps.selectedDays) {
      newState.selectedDays = dayPickerProps.selectedDays;
    }

    if (Object.keys(newState).length > 0) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(newState);
    }
  };

  DayPickerInput.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.clickTimeout);
    clearTimeout(this.hideTimeout);
    clearTimeout(this.inputFocusTimeout);
    clearTimeout(this.inputBlurTimeout);
    clearTimeout(this.overlayBlurTimeout);
  };

  DayPickerInput.prototype.getInitialMonthFromProps = function getInitialMonthFromProps(props) {
    var dayPickerProps = props.dayPickerProps,
        format = props.format;

    var day = void 0;
    if (props.value) {
      if (Object(__WEBPACK_IMPORTED_MODULE_4__DateUtils__["isDate"])(props.value)) {
        day = props.value;
      } else {
        day = props.parseDate(props.value, format, dayPickerProps.locale);
      }
    }
    return dayPickerProps.initialMonth || dayPickerProps.month || day || new Date();
  };

  DayPickerInput.prototype.getInitialStateFromProps = function getInitialStateFromProps(props) {
    var dayPickerProps = props.dayPickerProps,
        formatDate = props.formatDate,
        format = props.format;
    var value = props.value;

    if (props.value && Object(__WEBPACK_IMPORTED_MODULE_4__DateUtils__["isDate"])(props.value)) {
      value = formatDate(props.value, format, dayPickerProps.locale);
    }
    return {
      value: value,
      month: this.getInitialMonthFromProps(props),
      selectedDays: dayPickerProps.selectedDays
    };
  };

  DayPickerInput.prototype.getInput = function getInput() {
    return this.input;
  };

  DayPickerInput.prototype.getDayPicker = function getDayPicker() {
    return this.daypicker;
  };

  /**
   * Update the component's state and fire the `onDayChange` event passing the
   * day's modifiers to it.
   *
   * @param {Date} day - Will be used for changing the month
   * @param {String} value - Input field value
   * @private
   */


  DayPickerInput.prototype.updateState = function updateState(day, value, callback) {
    var _this2 = this;

    var _props2 = this.props,
        dayPickerProps = _props2.dayPickerProps,
        onDayChange = _props2.onDayChange;

    this.setState({ month: day, value: value, typedValue: undefined }, function () {
      if (callback) {
        callback();
      }
      if (!onDayChange) {
        return;
      }
      var modifiersObj = _extends({
        disabled: dayPickerProps.disabledDays,
        selected: dayPickerProps.selectedDays
      }, dayPickerProps.modifiers);
      var modifiers = Object(__WEBPACK_IMPORTED_MODULE_5__ModifiersUtils__["getModifiersForDay"])(day, modifiersObj).reduce(function (obj, modifier) {
        var _extends2;

        return _extends({}, obj, (_extends2 = {}, _extends2[modifier] = true, _extends2));
      }, {});
      onDayChange(day, modifiers, _this2);
    });
  };

  /**
   * Show the Day Picker overlay.
   *
   * @memberof DayPickerInput
   */


  DayPickerInput.prototype.showDayPicker = function showDayPicker() {
    var _this3 = this;

    var _props3 = this.props,
        parseDate = _props3.parseDate,
        format = _props3.format,
        dayPickerProps = _props3.dayPickerProps;
    var _state = this.state,
        value = _state.value,
        showOverlay = _state.showOverlay;

    if (showOverlay) {
      return;
    }
    // Reset the current displayed month when showing the overlay
    var month = value ? parseDate(value, format, dayPickerProps.locale) // Use the month in the input field
    : this.getInitialMonthFromProps(this.props); // Restore the month from the props
    this.setState(function (state) {
      return {
        showOverlay: true,
        month: month || state.month
      };
    }, function () {
      if (_this3.props.onDayPickerShow) _this3.props.onDayPickerShow();
    });
  };

  /**
   * Hide the Day Picker overlay
   *
   * @memberof DayPickerInput
   */


  DayPickerInput.prototype.hideDayPicker = function hideDayPicker() {
    var _this4 = this;

    if (this.state.showOverlay === false) {
      return;
    }
    this.setState({ showOverlay: false }, function () {
      if (_this4.props.onDayPickerHide) _this4.props.onDayPickerHide();
    });
  };

  DayPickerInput.prototype.hideAfterDayClick = function hideAfterDayClick() {
    var _this5 = this;

    if (!this.props.hideOnDayClick) {
      return;
    }
    this.hideTimeout = setTimeout(function () {
      return _this5.hideDayPicker();
    }, HIDE_TIMEOUT);
  };

  DayPickerInput.prototype.handleInputClick = function handleInputClick(e) {
    this.showDayPicker();
    if (this.props.inputProps.onClick) {
      e.persist();
      this.props.inputProps.onClick(e);
    }
  };

  DayPickerInput.prototype.handleInputFocus = function handleInputFocus(e) {
    var _this6 = this;

    this.showDayPicker();
    // Set `overlayHasFocus` after a timeout so the overlay can be hidden when
    // the input is blurred
    this.inputFocusTimeout = setTimeout(function () {
      _this6.overlayHasFocus = false;
    }, 2);
    if (this.props.inputProps.onFocus) {
      e.persist();
      this.props.inputProps.onFocus(e);
    }
  };

  // When the input is blurred, the overlay should disappear. However the input
  // is blurred also when the user interacts with the overlay (e.g. the overlay
  // get the focus by clicking it). In these cases, the overlay should not be
  // hidden. There are different approaches to avoid hiding the overlay when
  // this happens, but the only cross-browser hack we’ve found is to set all
  // these timeouts in code before changing `overlayHasFocus`.


  DayPickerInput.prototype.handleInputBlur = function handleInputBlur(e) {
    var _this7 = this;

    this.inputBlurTimeout = setTimeout(function () {
      if (!_this7.overlayHasFocus) {
        _this7.hideDayPicker();
      }
    }, 1);
    if (this.props.inputProps.onBlur) {
      e.persist();
      this.props.inputProps.onBlur(e);
    }
  };

  DayPickerInput.prototype.handleOverlayFocus = function handleOverlayFocus(e) {
    e.preventDefault();
    this.overlayHasFocus = true;
    if (!this.props.keepFocus || !this.input || typeof this.input.focus !== 'function') {
      return;
    }
    this.input.focus();
  };

  DayPickerInput.prototype.handleOverlayBlur = function handleOverlayBlur() {
    var _this8 = this;

    // We need to set a timeout otherwise IE11 will hide the overlay when
    // focusing it
    this.overlayBlurTimeout = setTimeout(function () {
      _this8.overlayHasFocus = false;
    }, 3);
  };

  DayPickerInput.prototype.handleInputChange = function handleInputChange(e) {
    var _props4 = this.props,
        dayPickerProps = _props4.dayPickerProps,
        format = _props4.format,
        inputProps = _props4.inputProps,
        onDayChange = _props4.onDayChange,
        parseDate = _props4.parseDate;

    if (inputProps.onChange) {
      e.persist();
      inputProps.onChange(e);
    }
    var value = e.target.value;

    if (value.trim() === '') {
      this.setState({ value: value, typedValue: undefined });
      if (onDayChange) onDayChange(undefined, {}, this);
      return;
    }
    var day = parseDate(value, format, dayPickerProps.locale);
    if (!day) {
      // Day is invalid: we save the value in the typedValue state
      this.setState({ value: value, typedValue: value });
      if (onDayChange) onDayChange(undefined, {}, this);
      return;
    }
    this.updateState(day, value);
  };

  DayPickerInput.prototype.handleInputKeyDown = function handleInputKeyDown(e) {
    if (e.keyCode === __WEBPACK_IMPORTED_MODULE_6__keys__["g" /* TAB */]) {
      this.hideDayPicker();
    } else {
      this.showDayPicker();
    }
    if (this.props.inputProps.onKeyDown) {
      e.persist();
      this.props.inputProps.onKeyDown(e);
    }
  };

  DayPickerInput.prototype.handleInputKeyUp = function handleInputKeyUp(e) {
    if (e.keyCode === __WEBPACK_IMPORTED_MODULE_6__keys__["c" /* ESC */]) {
      this.hideDayPicker();
    } else {
      this.showDayPicker();
    }
    if (this.props.inputProps.onKeyUp) {
      e.persist();
      this.props.inputProps.onKeyUp(e);
    }
  };

  DayPickerInput.prototype.handleMonthChange = function handleMonthChange(month) {
    var _this9 = this;

    this.setState({ month: month }, function () {
      if (_this9.props.dayPickerProps && _this9.props.dayPickerProps.onMonthChange) {
        _this9.props.dayPickerProps.onMonthChange(month);
      }
    });
  };

  DayPickerInput.prototype.handleDayClick = function handleDayClick(day, modifiers, e) {
    var _this10 = this;

    var _props5 = this.props,
        clickUnselectsDay = _props5.clickUnselectsDay,
        dayPickerProps = _props5.dayPickerProps,
        onDayChange = _props5.onDayChange,
        formatDate = _props5.formatDate,
        format = _props5.format;

    if (dayPickerProps.onDayClick) {
      dayPickerProps.onDayClick(day, modifiers, e);
    }

    // Do nothing if the day is disabled
    if (modifiers.disabled || dayPickerProps && dayPickerProps.classNames && modifiers[dayPickerProps.classNames.disabled]) {
      return;
    }

    // If the clicked day is already selected, remove the clicked day
    // from the selected days and empty the field value
    if (modifiers.selected && clickUnselectsDay) {
      var selectedDays = this.state.selectedDays;

      if (Array.isArray(selectedDays)) {
        selectedDays = selectedDays.slice(0);
        var selectedDayIdx = selectedDays.indexOf(day);
        selectedDays.splice(selectedDayIdx, 1);
      } else if (selectedDays) {
        selectedDays = null;
      }
      this.setState({ value: '', typedValue: undefined, selectedDays: selectedDays }, this.hideAfterDayClick);
      if (onDayChange) {
        onDayChange(undefined, modifiers, this);
      }
      return;
    }

    var value = formatDate(day, format, dayPickerProps.locale);
    this.setState({ value: value, typedValue: undefined, month: day }, function () {
      if (onDayChange) {
        onDayChange(day, modifiers, _this10);
      }
      _this10.hideAfterDayClick();
    });
  };

  DayPickerInput.prototype.renderOverlay = function renderOverlay() {
    var _this11 = this;

    var _props6 = this.props,
        classNames = _props6.classNames,
        dayPickerProps = _props6.dayPickerProps,
        parseDate = _props6.parseDate,
        formatDate = _props6.formatDate,
        format = _props6.format;
    var _state2 = this.state,
        selectedDays = _state2.selectedDays,
        value = _state2.value;

    var selectedDay = void 0;
    if (!selectedDays && value) {
      var day = parseDate(value, format, dayPickerProps.locale);
      if (day) {
        selectedDay = day;
      }
    } else if (selectedDays) {
      selectedDay = selectedDays;
    }
    var onTodayButtonClick = void 0;
    if (dayPickerProps.todayButton) {
      // Set the current day when clicking the today button
      onTodayButtonClick = function onTodayButtonClick() {
        return _this11.updateState(new Date(), formatDate(new Date(), format, dayPickerProps.locale), _this11.hideAfterDayClick);
      };
    }
    var Overlay = this.props.overlayComponent;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Overlay,
      {
        classNames: classNames,
        month: this.state.month,
        selectedDay: selectedDay,
        input: this.input,
        tabIndex: 0 // tabIndex is necessary to catch focus/blur events on Safari
        , onFocus: this.handleOverlayFocus,
        onBlur: this.handleOverlayBlur
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DayPicker__["default"], _extends({
        ref: function ref(el) {
          return _this11.daypicker = el;
        },
        onTodayButtonClick: onTodayButtonClick
      }, dayPickerProps, {
        month: this.state.month,
        selectedDays: selectedDay,
        onDayClick: this.handleDayClick,
        onMonthChange: this.handleMonthChange
      }))
    );
  };

  DayPickerInput.prototype.render = function render() {
    var _this12 = this;

    var Input = this.props.component;
    var inputProps = this.props.inputProps;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: this.props.classNames.container, style: this.props.style },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Input, _extends({
        ref: function ref(el) {
          return _this12.input = el;
        },
        placeholder: this.props.placeholder
      }, inputProps, {
        value: this.state.typedValue || this.state.value,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        onKeyUp: this.handleInputKeyUp,
        onClick: !inputProps.disabled ? this.handleInputClick : undefined
      })),
      this.state.showOverlay && this.renderOverlay()
    );
  };

  return DayPickerInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component), _class.propTypes = {
  value: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date)]),
  inputProps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  placeholder: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,

  format: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string)]),

  formatDate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  parseDate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  showOverlay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  dayPickerProps: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  hideOnDayClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  clickUnselectsDay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  keepFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,
  overlayComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,

  style: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  classNames: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    container: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    overlayWrapper: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    overlay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired
  }),

  onDayChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayPickerHide: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onDayPickerShow: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onBlur: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onKeyUp: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
}, _class.defaultProps = {
  dayPickerProps: {},
  value: '',
  placeholder: 'YYYY-M-D',
  format: 'L',
  formatDate: defaultFormat,
  parseDate: defaultParse,
  showOverlay: false,
  hideOnDayClick: true,
  clickUnselectsDay: false,
  keepFocus: true,
  component: 'input',
  inputProps: {},
  overlayComponent: OverlayComponent,
  classNames: {
    container: 'DayPickerInput',
    overlayWrapper: 'DayPickerInput-OverlayWrapper',
    overlay: 'DayPickerInput-Overlay'
  }
}, _temp));

/* harmony default export */ __webpack_exports__["default"] = (DayPickerInput);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)(module)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=daypicker.js.map