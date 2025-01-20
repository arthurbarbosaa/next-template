import Appbar from "@/components/Appbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Appbar />
      <main className="min-h-screen bg-default-50">{children}</main>
    </>
  );
}
