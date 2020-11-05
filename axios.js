//library for making http requests. certain advantages over fetch including it parses data so do not have to use JSON function to parse 
//include axios cdn in html file before app.js script to be able to use
axios
	.get('https://swapi.dev/api/planets/')
	.then((res)=>{
		console.log(res.data);
	})
	.catch((err)=>{
		console.log(err);
	})

// .get()
// .then((res)=>{})
// .catch((err)=>{})