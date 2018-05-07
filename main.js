 const books = document.querySelector('book-card');
 const url = 'http://fakerestapi.azurewebsites.net/api/Books';
 let i = 0;
 function getBooks(url) {
 fetch(url, {
     method: 'GET',
     headers: new Headers({
       'Content-Type': 'application/json'
     })
   })
   .then(response => {
     return response.json();
    })
   .then(jsonResponse => {
     for (let i = 0; i < 12; i++) {
       console.log(jsonResponse[i]);
     }
   });
  }
