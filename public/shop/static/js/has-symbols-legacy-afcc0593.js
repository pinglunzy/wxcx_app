!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}System.register([],(function(e,o){"use strict";return{execute:function(){var o="undefined"!=typeof Symbol&&Symbol,r=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"===t(Symbol.iterator))return!0;var e={},o=Symbol("test"),r=Object(o);if("string"==typeof o)return!1;if("[object Symbol]"!==Object.prototype.toString.call(o))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(o in e[o]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==o)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,o))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var y=Object.getOwnPropertyDescriptor(e,o);if(42!==y.value||!0!==y.enumerable)return!1}return!0};e("h",(function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"===t(o("foo"))&&("symbol"===t(Symbol("bar"))&&r())))}))}}}))}();