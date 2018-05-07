const ul = document.getElementById('Books'); 
const url = 'http://fakerestapi.azurewebsites.net/api';
const item = Books;
var id = event.target.getAttribute("ID")



function deleteBooks(item, url, id) {
  return fetch(url + '/' + item + id, {
    method: 'delete'
  })
  .then(response => response.json());
}