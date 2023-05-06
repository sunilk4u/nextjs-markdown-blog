import { getAllPages, getPageContentData } from "@/components/getPostMetaData";
import { postData } from "@/types/interfaces";
import Markdown from "markdown-to-jsx";

export const generateStaticParams = async () => {
  const pageData: string[] = getAllPages();

  return pageData.map((page) => ({
    slug: page,
  }));
};

const Page = ({ params }: { params: { slug: string } }) => {
  const slug: string = params.slug;
  const pageData: postData = getPageContentData(slug);

  return (
    <article>
      <h1 className="text-[3.5rem] font-semibold my-1 py-1">
        {pageData.data.title}
      </h1>
      <div className="content prose md:max-w-none prose-xl prose-headings:underline prose-a:text-green-600">
        <Markdown>{pageData.content}</Markdown>
      </div>
    </article>
  );
};

export default Page;
