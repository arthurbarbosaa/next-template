import Appbar from "@/components/Appbar";

export default function AppLayout({ children }) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
    </>
  );
}
