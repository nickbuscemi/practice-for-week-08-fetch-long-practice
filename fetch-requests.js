/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
const body = "name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery"

fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
})
.then(response => console.log(response))
.catch(error => console.log('Error:', error));


/* ============================== Phase 2 ============================== */

// Your code here

fetch('http://localhost:5000/products', {
  method: 'POST',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: body
})
.then(response => {
  console.log('Status Code:', response.status);
  console.log('Content-Type:', response.headers.get('Content-Type'));
  console.log('URL:', response.url);
  console.log('Redirected:', response.redirected);
})
.catch(error => console.error('Error:', error));



/* ============================== Phase 3 ============================== */

// Your code here
const params = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
  });
  
  fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  })
  .then(response => {
    console.log('Status Code:', response.status);
    console.log('Content-Type:', response.headers.get('Content-Type'));
    console.log('URL:', response.url);
    console.log('Redirected:', response.redirected);
  })
  .catch(error => console.error('Error:', error));
  