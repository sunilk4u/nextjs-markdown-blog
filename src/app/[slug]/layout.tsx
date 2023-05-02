export const metadata = {
  title: "test",
  description: "test",
};

export default function postlayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}