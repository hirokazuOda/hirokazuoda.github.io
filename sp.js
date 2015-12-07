'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }


var milkcocoa = new MilkCocoa('uniihu5ewpf.mlkcca.com');
var ds = milkcocoa.dataStore("reaction");



var buttons = [].concat(_toConsumableArray(document.querySelectorAll('.reaction-btn')));
Bacon.fromArray(buttons).flatMap(function (event) {
	var _e = event[0];
  return Bacon.fromEventTarget(_e, 'click');
}).map(function (event) {
	var _e = event[0];
  return _e.target.value;
}).onValue(function (value) {
  return ds.send({ to: 'pc', type: value });
});


