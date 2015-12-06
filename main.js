'use strict';

(function () {
  'use strict';

var milkcocoa = new MilkCocoa('uniihu5ewpf.mlkcca.com');
var ds = milkcocoa.dataStore("reaction");


var stream = Bacon.fromBinder(function (callback) {
   ds.on('send', callback);
  (function () {
   return ds.off('send');
  });
  }).filter(function (data) {
    return data.value.to == 'pc';
  });

stream.map(function (data) {
  switch (data.value.type) {
      case 'like':
        return makeLikeFn();
      case 'hee':
        return makeHeeFn();
      case 'OK':
        return makeOKFn();
      case 'question':
        return makeQFn();
      }
  }).onValue(function (fn) {
    var el = fn();
    showAndRemove(el);
});


function makeLikeFn() {

    // 対象となるID名
  var id = 'sound-file1' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;

    return function(){
      var el = document.createElement('div');
      el.classList.add('like');
      el.style.top = getRandPer() + '%';
      el.style.left = getRandPer() + '%';
      return el;
    };

}

function makeHeeFn() {

    // 対象となるID名
  var id = 'sound-file2' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;

    return function(){
      var el = document.createElement('div');
      el.classList.add('like');
      el.style.top = getRandPer() + '%';
      el.style.left = getRandPer() + '%';
      return el;
    };

}

function makeOKFn() {

    // 対象となるID名
  var id = 'sound-file3' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;

    return function(){
      var el = document.createElement('div');
      el.classList.add('like');
      el.style.top = getRandPer() + '%';
      el.style.left = getRandPer() + '%';
      return el;
    };

}

function makeQFn() {

    // 対象となるID名
  var id = 'sound-file4' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;

    return function(){
      var el = document.createElement('div');
      el.classList.add('like');
      el.style.top = getRandPer() + '%';
      el.style.left = getRandPer() + '%';
      return el;
    };

}


  function showAndRemove(el) {
    document.body.appendChild(el);
    el.addEventListener("animationend", function callback(event) {
      document.body.removeChild(el);
      el.removeEventListener("animationend", callback);
    }, false);
  }

  function getRandPer() {
    return Math.floor(Math.random() * 95);
  }


})();
 

