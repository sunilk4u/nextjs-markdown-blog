import { getPageContentData } from "@/components/getPostMetaData";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPageContentData(params.slug);
  return {
    title: data.data.title,
    description: data.data.description ?? ""
  };
}

export default function pagelayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}