import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import SiteLinksInfo from "@/components/siteLinksInfo";
import "../styles/globals.css";
import NavbarCategories from "@/components/navbarCategories";

export const metadata = {
  title: process.env.HomePage_Title,
  description: process.env.HomePage_Description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar>
          <NavbarCategories />
        </NavBar>
        <div className="container mx-auto my-10 md:grid md:grid-cols-3 md:gap-12">
          <div className="md:col-span-2">{children}</div>
          <div className="hidden md:block"><Sidebar /></div>
        </div>
        <SiteLinksInfo />
        <Footer />
      </body>
    </html>
  );
}
