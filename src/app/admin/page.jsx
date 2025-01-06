import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1>Admin Painel</h1>
      <br />
      <div>{JSON.stringify(session)}</div>
    </>
  );
}
