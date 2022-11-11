class Fetch {
  get(url, path, token) {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        if (token) {
          'Authorization': 'Bearer ' + token
        }
      }
    })

  }
}