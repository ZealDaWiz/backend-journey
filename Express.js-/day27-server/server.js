const http = require('http');

/* http is a toolbox that comes built into Node — you don't install it, it's already
there. require('http') opens that toolbox and puts its tools into a variable called
http, so you can use them below.
Think of it as pulling the "server-building kit" off the shelf.*/

const server = http.createServer((req, res) => {
  res.end('Hello, how can i help you!');
});

/* http.createServer() is one of the tools from that kit. It builds a server,
but building it is not the same as turning it on.
This line creates the server and tells it:
"whenever a request comes in, run this function" (the (req, res) => {...} part).
The result gets saved into a variable called server.
At this point, the server exists, but it's not listening for anything yet, like a phone
that's built but not plugged in. */

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

/* This is the line that actually switches it on. .listen(3000, ...) tells the server:
"start waiting for requests, specifically on door number 3000."
That number is called a port — think of it as one specific door into your computer,
out of thousands of possible doors.
Once this line runs, your server is truly live and waiting. */

