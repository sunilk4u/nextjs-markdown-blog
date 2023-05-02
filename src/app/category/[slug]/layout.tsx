export const metadata = {
    title: "test",
    description: "test",
  };
  
  export default function postlayout({children}: {children: React.ReactNode}) {
    return (
      <div>
        {children}
      </div>
    )
  }