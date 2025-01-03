import prisma from "@/lib/db";

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return (
    <>
      <h1 className="font-semibold">{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
}
