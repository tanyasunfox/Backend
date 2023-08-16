import http from 'http';
import fs from 'fs';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req);

    res.setHeader('Content-Type','text/html');

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Hello from Tanya');
    }  //no code will work after res.end 
    else if (req.url == '/about') {
        res.statusCode = 200;
        const file=fs.readFileSync('text.txt');
        res.end(file);
    }
    else{
        res.statusCode=404;
        res.end('<h>Wrong page</h>')
    }
});

server.listen(port, () => {
    console.log(`port listened in ${port}`);
});
