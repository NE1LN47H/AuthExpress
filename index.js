const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log('success');
    res.writeHead(200, {'content-type':'application/json'});
    res.end("success")
});

app.get('/auth', (req, res) => {
    console.log('success');
    res.writeHead(200, {'content-type':'application/json'});
    res.end("success")
});

app.post('/auth/login', (req, res) => {
    const {username, password} = req.body;
    if(username === "neil" && password === "1234") {
    console.log('login successfull');
    res.writeHead(201, {'content-type': 'text/html'});
    res.end("Login Successfull");
    } else {
    console.log('login unauthorized');
    res.writeHead(405, {'content-type': 'text/html'});
    res.end("Login Unauthorized");
    }
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`);
})