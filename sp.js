var milkcocoa = new MilkCocoa('uniihu5ewpf.mlkcca.com');
var chatDataStore = milkcocoa.dataStore("reaction");




function clickEvent(){
  dataSend();
}

function dataSend(){
	chatDataStore.send({message: 'like'});
}
