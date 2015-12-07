'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }


var milkcocoa = new MilkCocoa('uniihu5ewpf.mlkcca.com');
var ds = milkcocoa.dataStore("reaction");



var buttons = [].concat(_toConsumableArray(document.querySelectorAll('.reaction-btn')));
Bacon.fromArray(buttons).flatMap(function (event) {
  return Bacon.fromEventTarget(event, 'click');
}).map(function (event) {
  return event.target.value;
}).onValue(function (value) {
  return ds.send({ to: 'pc', type: value });
});


