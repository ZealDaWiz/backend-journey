async function getUser() {
    try {
        const response = await fetch('https://api.github.com/users/torvalds', {headers: {'User-Agent': 'Node.js'}});
        const data = await response.json();
             console.log('Name:', data.name);
             console.log('Location:', data.location);
             console.log('Public repos:', data.public_repos);

    } catch(error) {
         console.log('Error:', error.message);
    }
}


getUser();
