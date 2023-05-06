import { getAllCategories } from "@/components/getPostMetaData";

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

export const generateStaticParams = async () => {
  const catData: string[] = getAllCategories();

  return catData.map((cat: string) => ({
    slug: cat.replaceAll(" ", "-"),
  }));
};

export default function postlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
