import http from "http";
import Responce from "./Responce";
class Server {
    http: http.Server
    router: Map<string, (req: http.IncomingMessage, res: Responce) => void>
    get(path: string, callback: (req: http.IncomingMessage, res: Responce) => void) {
        this.router.set(path, callback);
    }
    constructor() {
        this.http = http.createServer((req, res) => {
            const cb = this.router.get(req.url);
            if(!cb) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    data: 'Not found',
                }));
            }
            else cb(req, new Responce(res));
        });
    }
    listen(port = 80) {
        this.router = new Map<string, (req: http.IncomingMessage, res: Responce) => void>();
        this.http.listen(port);
        console.log(`App is listening on http://localhost:${port}`);
    }
}
export default new Server();
