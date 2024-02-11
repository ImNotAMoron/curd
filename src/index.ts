import server from "./server/server";

server.listen(80);

server.get("/", (_req, res) => {
    res.sendJson({message: "Hi!"})
})
