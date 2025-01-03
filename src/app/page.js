import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to my Blog</h1>
      <Link href="/posts" className="underline">
        View Posts
      </Link>
      <br></br>
      <Link href="/create" className="underline">
        Create Post
      </Link>
    </main>
  );
}
