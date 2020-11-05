// const myReq = new XMLHttpRequest();

//2 callback functions

// myReq.onload = function(){
// 	const data = JSON.parse(this.responseTest);
// 	console.log(data);
// };

// myReq.onerror = function(err){
// 	console.log('ERROR',err);
// };

// myReq.open('get',"https://icanhazdadjoke.com/",true);
// myReq.setRequestHeader('Accept','application/json');
// myReq.send();

const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',function() {
	console.log('IT WORKED');
	const data = JSON.parse(this.responseText)
	console.log(data)
});
firstReq.addEventListener('error',() => {
	console.log('ERROR');
});
firstReq.open('GET','https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request Sent');