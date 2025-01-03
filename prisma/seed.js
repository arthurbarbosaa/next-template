const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const initialPosts = [
  {
    title: "Post 1",
    slug: "post-1",
    content: "Cnteudo alatorio",
    author: {
      connectOrCreate: {
        where: {
          email: "jon",
        },
        create: {
          email: "jon",
          hashedPassword: "jon123",
        },
      },
    },
  },
];

async function main() {
  console.log("Start seeding 🌱");
  for (const post of initialPosts) {
    const newPost = await prisma.post.create({
      data: post,
    });
    console.log(`Post created: ${newPost.id}`);
  }
  console.log("End seeding");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
