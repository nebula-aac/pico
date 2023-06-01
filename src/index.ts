import { IncomingMessage, ServerResponse, createServer } from "node:http";

export function startServer(port: number) {
    const server = createServer((req: IncomingMessage, res: ServerResponse) => {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end('Hello World!');
    });

    server.listen(port, () => {
        console.log(`Server is running on port ${port}...`);
    })
}