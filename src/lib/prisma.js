const { PrismaClient } = require("@prisma/client");

const prismaClientSingleton = () => {
  return new PrismaClient();
};

if (typeof global !== "undefined" && process.env.NODE_ENV !== "production") {
  global.prismaGlobal = global.prismaGlobal || prismaClientSingleton();
}

const prisma = global.prismaGlobal || prismaClientSingleton();

module.exports = prisma;
