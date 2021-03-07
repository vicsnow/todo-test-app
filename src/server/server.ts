import http, { IncomingMessage, ServerResponse } from 'http';
const serverMeta = {
    port: 8080,
    host: 'localhost'
}
const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200)
    res.end('heelloo from server')
}
const server = http.createServer(requestListener)
server.listen(serverMeta.port, serverMeta.host, () => {
    console.log(`Server is running on http://${serverMeta.host}:${serverMeta.port}`);
});
export default server
