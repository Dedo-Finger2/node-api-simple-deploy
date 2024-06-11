import { fastify } from "fastify";

const server = fastify();

server.post("/videos", () => {
  
});

server.get("/videos", () => {

});

server.put("/videos/:id", () => {

});

server.delete("/videos/:id", () => {

});

server.listen({ port: 3333 }, () => {
  console.log("🚀 Running...");
});
