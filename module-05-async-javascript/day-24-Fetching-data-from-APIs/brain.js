const https = require('https');

const checkRepoCount = (count) => {
   return new Promise((resolve, reject) => {
     if (count > 5) resolve(`Active developer with ${count} repos`);
     else reject(new Error('Low repo count'));
   });
}

async function showRepoCount(count) {
    try {
        const result = await checkRepoCount(count);
            console.log(result);
    } catch(error) {
            console.log('Error:', error.message);
    }
}

https.get({
   hostname: 'api.github.com',
   path: '/users/torvalds',
   headers: {
    'User-Agent': 'Node.js'
   }
 }, (response) => {
       let data = ' ';

       response.on('data', (chunk) => {
            data += chunk;
       });

       response.on('end', () => {
            const obj = JSON.parse(data);
               console.log('Name:', obj.name);
               console.log('Public repos:', obj.public_repos);
               showRepoCount(obj.public_repos);
      });
});

