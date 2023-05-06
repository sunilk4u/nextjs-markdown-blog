import { getPageContentData } from "@/components/getPostMetaData";
import { postData } from "@/types/interfaces";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data: postData = getPageContentData(params.slug);
  return {
    title: data.data.title as string || "title",
    description: data.data.description as string || "description"
  };
}

export default function pagelayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      {children}
    </main>
  )
}