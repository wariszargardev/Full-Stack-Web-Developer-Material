// When ever 404 it will return promise resolve 
// A fetch() promise will reject only when there is a network issue or cors issue

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
}

const response = await fetch(url, {headers})

fetch(url, {
    headers,
    method: 'POST',
    body: JSON.stringify({
        name: 'John',
        age: 30
    })
})



