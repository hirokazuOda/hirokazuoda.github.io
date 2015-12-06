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
      case 'wow':
        return sound2();
      case 'eh':
        return sound3();
      case '888':
        return sound4();
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

function getRandPer() {
    return Math.floor(Math.random() * 95);
  }


function sound1()
{
  // 対象となるID名
  var id = 'sound-file1' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;

}

function sound2()
{
  // 対象となるID名
  var id = 'sound-file1' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;
}

function sound3()
{
  // 対象となるID名
  var id = 'sound-file1' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;
}

function sound4()
{
  // 対象となるID名
  var id = 'sound-file1' ;

  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
    document.getElementById( id ).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;
}

  function showAndRemove(el) {
    document.body.appendChild(el);
    el.addEventListener("animationend", function callback(event) {
      document.body.removeChild(el);
      el.removeEventListener("animationend", callback);
    }, false);
  }

})();
 

