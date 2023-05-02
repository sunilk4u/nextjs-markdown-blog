export const metadata = {
  title: "test",
  description: "test",
};

export default function pagelayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}