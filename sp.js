var milkcocoa = new MilkCocoa('uniihu5ewpf.mlkcca.com');
var chatDataStore = milkcocoa.dataStore("reaction");


var buttons = [].concat(_toConsumableArray(document.querySelectorAll('.reaction-btn')));
Bacon.fromArray(buttons).flatMap(function (e) {
  return Bacon.fromEventTarget(e, 'click');
}).map(function (e) {
  return e.target.value;
}).onValue(function (value) {
  return ds.send({ to: 'pc', type: value });
});


