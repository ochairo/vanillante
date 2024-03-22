import cors from "@fastify/cors";
import Fastify from "fastify";
import { readFileSync } from "fs";

const fastify = Fastify({
  logger: true,
});

await fastify.register(cors, {
  origin: "*",
});

// Declare a route
fastify.get("/showcase/get", async function handler() {
  const data = readFileSync("src/mock/data/showcase/get/success.json", "utf8");
  const response = await JSON.parse(data);
  return response;
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
