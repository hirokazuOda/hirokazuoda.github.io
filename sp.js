var milkcocoa = new MilkCocoa('uniihu5ewpf.mlkcca.com');
var chatDataStore = milkcocoa.dataStore("reaction");


function clickEvent1(){
  dataSend();
}

function dataSend(){
	chatDataStore.send({message: 'hee'});
}

function clickEvent2(){
  dataSend();
}

function dataSend(){
	chatDataStore.send({message: 'wow'});
}

function clickEvent3(){
  dataSend();
}

function dataSend(){
	chatDataStore.send({message: 'eh'});
}

function clickEvent4(){
  dataSend();
}

function dataSend(){
	chatDataStore.send({message: '888'});
}
