import { getPostContentData } from "@/components/getPostMetaData";
import { postData } from "@/types/interfaces";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

const Post = ({ params }: { params: { slug: string } }) => {
  const slug: string = params.slug;
  const postData: postData = getPostContentData(slug);

  return (
    <article className="w-[90%] mx-auto">
      <h1 className="text-[3.5rem] font-semibold my-1 py-1">
        {postData.data.title}
      </h1>
      <ul className="flex uppercase gap-5 text-white my-3">
        {postData.data.categories.map((category: string) => (
          <Link
            key={category}
            href={`category/${category.replaceAll(" ", "-")}`}
          >
            <li className="bg-green-700 px-3 py-2 rounded-lg" key={category}>
              {category}
            </li>
          </Link>
        ))}
      </ul>
      <div className="content prose md:max-w-none prose-xl prose-headings:underline prose-a:text-green-600">
        <Markdown>{postData.content}</Markdown>
      </div>
    </article>
  );
};

export default Post;
