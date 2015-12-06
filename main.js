var milkcocoa = new MilkCocoa('uniihu5ewpf.mlkcca.com');
var ds = milkcocoa.dataStore("reaction");


ds.on('send', function(pushed){
  switch (pushed.value.message) {
      case 'hee':
        return sound1();
        return makeHeeFn();
      case 'wow':
        return sound2();
      case 'eh':
        return sound3();
      case '888':
        return sound4();
  }
});


function makeHeeFn() {
      var el = document.createElement('div');
      el.textContent = ('へぇ〜');
      el.classList.add('hee');
      el.style.top = getRandPer() + '%';
document.body.appendChild(el);
    el.addEventListener("animationend", function callback(event) {
      document.body.removeChild(el);
      el.removeEventListener("animationend", callback);
    }, false);

    };



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


 

