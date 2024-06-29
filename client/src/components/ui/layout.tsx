import Footer from "./footer";
import { Toaster } from "./toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
      <Toaster />
      <Footer />
    </div>
  )
}

export default Layout;
