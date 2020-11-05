//using fetch api to make requests

// fetch('https://swapi.dev/api/planets/').then((response)=>{
// 	console.log(response.json());
// })

//The above code will not work as response is a body stream object and hence another promise has to be instroduced

fetch('https://swapi.dev/api/planets').then((response)=>{
	if(!response)=>{
		throw new Error('Status Code Error:${response.status}');
	response.json().then((data)=>{
		for(let planet of data.results){
			console.log(planet.name);
		}
	});
})
.catch((err)=>{
	console.log('SOMETHING WENT WRONG');
	console.log(err);

});

//chaing fetch requests together using .then


fetch('https://swapi.dev/api/planets')

	.then((response)=>{
		if(!response.ok)
			throw new Error('Status Code Error:${response.status}'); //ACTIVATES CATCH

		return response.json();
	})

	//chain another .then
	.then((data)=>{
		console.log('FETCHED ALL PLANETS');
		const filmURL = data.results[0].films[0];
		return fetch(fileURL) //fetching another API endpoing
	})

	.then((response)=>{
		if(!response.ok)
			throw new Error("STATUS CODE ERROR");
		return response.json();

	})

	.catch((err)=> {
		console.log("Something when wrong");
		console.log(err);
	})