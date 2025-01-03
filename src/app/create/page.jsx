import { createPost } from "@/actions/actions";

export default async function CreatePage() {
  return (
    <>
      <h1>Create a new Post</h1>
      <form action={createPost}>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <textarea name="content" placeholder="Content"></textarea>
        <br />
        <button type="submit">Create Post</button>
      </form>
    </>
  );
}
