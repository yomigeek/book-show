function update(id, payload) {
  if (!payload) {
    throw new Error('You must provide a payload when updating a book');
  }

  const requestOptions = {
    method: 'PUT',
    body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
  };
  
  return fetch(`http://fakerestapi.azurewebsites.net/api/Books/${id}`, requestOptions).then(res =>
            res.json()
        );
}