"use strict";var readline=_interopRequireWildcard(require("readline"));function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.OptionEvent=void 0;function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d["default"]=a,c&&c.set(a,d),d}var onConsoleEvent=function(a,b){return new Promise(function(c){var d=readline.createInterface({input:process.stdin,output:process.stdout});d.question("".concat(a.green),function(a){b&&console.log({opt:a}),d.close(),c(a)})})},OptionEvent={Read:function Read(){return onConsoleEvent("Seleccione una Opcion:",!0)},Pause:function Pause(){return onConsoleEvent("Presione Enter Para continuar:",!1)}};exports.OptionEvent=OptionEvent;