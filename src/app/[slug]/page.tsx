import { getPostContentData } from "@/components/getPostMetaData";
import { postData } from "@/types/interfaces";
import Markdown from "markdown-to-jsx";

const Post = ({ params }: { params: { slug: string } }) => {
  const slug: string = params.slug;
  const postData: postData = getPostContentData(slug);
  
  return (
    <div>
      {postData.data.categories.map((category: string) => (<li key={category}>{category}</li>))}
      <Markdown>{postData.content}</Markdown>
    </div>
  );
};

export default Post;
