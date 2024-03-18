import Fastify from "fastify";
import { readFileSync } from "fs";
const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get(
  "/user/00001/items/favorite/get",
  async function handler(request, reply) {
    const data = readFileSync(
      "src/mock/data/user/00001/items/favorite/get.json",
      "utf8"
    );
    const response = await JSON.parse(data);
    return response;
  }
);

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
