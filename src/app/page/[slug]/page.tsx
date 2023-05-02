import { getPageContentData } from "@/components/getPostMetaData";
import Markdown from "markdown-to-jsx";

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
