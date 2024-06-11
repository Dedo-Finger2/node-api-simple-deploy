import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", (request, response) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return response.status(201).send();
});

server.get("/videos", (request, response) => {
  const { search } = request.query;

  const videos = database.list(search);

  return response.status(200).send({ videos });
});

server.put("/videos/:id", (request, response) => {
  const { id } = request.params;
  const { title, description, duration } = request.body;

  database.update(id, {
    title,
    description,
    duration,
  });

  return response.status(204).send();
});

server.delete("/videos/:id", (request, response) => {
  const { id } = request.params;

  database.delete(id);

  return response.status(200).send();
});

server.listen({ port: 3333 }, () => {
  console.log("🚀 Running...");
});
