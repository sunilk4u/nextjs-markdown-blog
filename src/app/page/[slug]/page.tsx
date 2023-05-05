import { getAllPages, getPageContentData } from "@/components/getPostMetaData";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const pageData = getAllPages();

  return pageData.map((page) => ({
    slug: page,
  }))
}

const Page = ({params}: {params: {slug: string}}) => {
  const slug: string = params.slug;
  const pageData = getPageContentData(slug);
    
  return (
    <div>
      <Markdown>{pageData.content}</Markdown>
    </div>
  );
};

export default Page;
