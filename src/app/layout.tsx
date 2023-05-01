import Footer from "@/components/footer"
import Header from "@/components/header"
import NavBar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import SiteLinksInfo from "@/components/siteLinksInfo"
import "../styles/globals.css";

export const metadata = {
  title: process.env.HomePage_Title,
  description: process.env.HomePage_Description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <NavBar />
        {children}
        <Sidebar />
        <SiteLinksInfo />
        <Footer />
      </body>
    </html>
  )
}
