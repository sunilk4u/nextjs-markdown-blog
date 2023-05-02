import { postPreview } from "@/types/interfaces";
import Link from "next/link";

const PostPreview = ({ post }: { post: postPreview }) => {
  // console.log(post);
  
  return (
    <div key={post.slug}>
      <Link href={`${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        {post.subtitle && <p>{post.subtitle}</p>}
      </Link>
    </div>
  );
};

export default PostPreview;
