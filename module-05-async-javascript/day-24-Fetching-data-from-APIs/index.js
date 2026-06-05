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
