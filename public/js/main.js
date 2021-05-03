window.addEventListener('load', async (e) => {

	const query = "{student {first, last, dob, course {name,description, teacher {id, first, last}}}}";
	let q = await fetch('/gql');


	let data = await q.json();


	console.log(data);
});
