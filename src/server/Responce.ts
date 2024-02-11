import http from "http";

class Response {
    serverResponse: http.ServerResponse;

    constructor(serverResponse: http.ServerResponse) {
        this.serverResponse = serverResponse;
    }

    sendJson(obj: any) {
        this.serverResponse.writeHead(200, {'Content-Type': 'application/json'});
        this.serverResponse.end(JSON.stringify({
            data: obj,
        }));
    }
}

export default Response;
