export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: "Category: " + params.slug.replaceAll("-", " "),
    description: "Category description" + params.slug.replaceAll("-", " "),
  };
}

export default function postlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
