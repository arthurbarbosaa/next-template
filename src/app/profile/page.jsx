import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h1>User Profile</h1>
      <br />
      <div>{JSON.stringify(session)}</div>
    </>
  );
}
