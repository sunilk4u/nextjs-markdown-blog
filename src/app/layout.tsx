import Footer from "@/components/footer"
import Header from "@/components/header"
import NavBar from "@/components/navbar"

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
        <Footer />
      </body>
    </html>
  )
}
