const fetchSimulator = (url) => {
   return new Promise((resolve, reject) => {
    setTimeout (() => {
     console.log('run after 2 seconds');
     resolve({url: url, data: "response from " + url, status: 200});
    }, 2000);
  });
}

async function showResult(url) {
   try {
       const result = await fetchSimulator(url);
         console.log(result);
   } catch(error) {
         console.log('Error:', error.message);
   }
}

showResult("https://api.example.com");

// ===== Using https module =====
const https = require('https');

https.get({
  hostname: 'api.github.com',
  path: '/users/torvalds',
  headers: {
    'User-Agent': 'Node.js'
  }
}, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
     const obj = JSON.parse(data);
         console.log('Name:', obj.name);
         console.log('Location:', obj.location);
         console.log('Public repos:', obj.public_repos);
  });
});
