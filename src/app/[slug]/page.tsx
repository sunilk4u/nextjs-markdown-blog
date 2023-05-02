import { getPostContentData } from "@/components/getPostMetaData";
import Markdown from "markdown-to-jsx";

const Post = ({ params }: { params: { slug: string } }) => {
  const slug: string = params.slug;
  const postData = getPostContentData(slug);
  
  return (
    <div>
      <Markdown>{postData}</Markdown>
    </div>
  );
};

export default Post;
