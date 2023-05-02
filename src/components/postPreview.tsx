import { postPreview } from "@/types/interfaces";
import Link from "next/link";

const PostPreview = ({ post }: { post: postPreview }) => {
  return (
    <div>
      <Link href={post.slug}>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
        {post.subtitle && <p>{post.subtitle}</p>}
      </Link>
    </div>
  );
};

export default PostPreview;
