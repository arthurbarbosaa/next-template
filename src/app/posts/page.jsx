import prisma from "@/lib/db";
import Link from "next/link";

export default async function Posts() {
  const user = await prisma.user.findUnique({
    where: {
      email: "jon ",
    },
    include: {
      posts: true,
    },
  });

  return (
    <>
      <h1>All posts ()</h1>
      <ul>
        {user?.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`} className="underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
