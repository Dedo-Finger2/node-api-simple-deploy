import { fastify } from "fastify";
// import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./database-postgres.js";

const server = fastify();

// const database = new DatabaseMemory();
const database = new DatabasePostgres();

server.post("/videos", async (request, response) => {
  const { title, description, duration } = request.body;

  await database.create({
    title,
    description,
    duration,
  });

  return response.status(201).send();
});

server.get("/videos", async (request, response) => {
  const { search } = request.query;

  const videos = await database.list(search);

  return response.status(200).send({ videos });
});

server.put("/videos/:id", async (request, response) => {
  const { id } = request.params;
  const { title, description, duration } = request.body;

  await database.update(id, {
    title,
    description,
    duration,
  });

  return response.status(204).send();
});

server.delete("/videos/:id", async (request, response) => {
  const { id } = request.params;

  await database.delete(id);

  return response.status(200).send();
});

server.listen({ port: 3333 }, () => {
  console.log("🚀 Running...");
});
