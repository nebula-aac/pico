import { createServer, IncomingMessage, ServerResponse } from "node:http";

const server = createServer(function (req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.end('Hello World!');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})