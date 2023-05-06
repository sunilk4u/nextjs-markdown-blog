import { getPostContentData } from "@/components/getPostMetaData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostContentData(params.slug);
  return {
    title: (data.data.title as string) || "title",
    description: (data.data.description as string) || "description",
  };
}

export default function postlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
