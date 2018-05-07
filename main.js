const ul = document.getElementById('authors'); // Get the list where we will place our authors
const booksurl = 'http://fakerestapi.azurewebsites.net/api/Books';
const authorInfoUrl = 'http://fakerestapi.azurewebsites.net/authors/books'
let i =0;
fetch(booksurl, {
	method: 'GET', 
	headers: new Headers({
		'Content-Type': 'application/json'
	})
})
.then(function(response) { 
    
    return response.json();

})
.then(function(jsonResponse){

    console.log(jsonResponse);
    console.log(jsonResponse.length, jsonResponse[0]);

    for(let i=0; i<12; i++){

        getBookAuthorByBookId(jsonResponse[i].ID)
    }
});

const getBookAuthorByBookId = (bookId) => {

fetch(`http://fakerestapi.azurewebsites.net/authors/books/${bookId}`, {
	method: 'GET', 
	headers: new Headers({
		'Content-Type': 'application/json'
	})
})
.then(function(authorResponse) { 
    
    return authorResponse.json();
   
})
.then(function(jsonAuthorResponse){

    for(let i=0; i<jsonAuthorResponse.length; i++){

    console.log(jsonAuthorResponse[i].FirstName);
    }
        
});
}
