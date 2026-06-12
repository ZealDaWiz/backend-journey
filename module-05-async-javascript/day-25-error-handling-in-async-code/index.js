async function checkUser (username) {
   try {
       const response = await fetch(`https://api.github.com/users/${username}`, {
              headers: { 'User-Agent': 'Node.js' }
       });

       console.log('Status code:', response.status);
       console.log('response.ok:', response.ok);

       const data = await response.json();
          console.log('Data:', data);

   } catch(error) {
          console.log('Caught an error:', error.message);
   }
}

checkUser('torvalds');
checkUser('this-user-definitely-does-not-exist-99999');
