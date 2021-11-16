import NavBar from "./NavBar";
import Footer from "./Footer";

export default function layouts({children}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
