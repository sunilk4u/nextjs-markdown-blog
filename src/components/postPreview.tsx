import { postPreview } from "@/types/interfaces";
import Link from "next/link";

const PostPreview = ({ post }: { post: postPreview }) => {
  // console.log(post);
  
  return (
    <div key={post.slug} className="border hover:shadow-sm border-gray-400 rounded-xl m-4 p-2 hover:bg-gray-200">
      <Link href={`${post.slug}`}>
        <h2 className="text-green-600 font-semibold text-xl px-2 pt-2">{post.title}</h2>
        <p className="text-gray-600 px-2 pt-2">{post.date}</p>
        {post.subtitle && <p className="px-2 pt-2">{post.subtitle}</p>}
      </Link>
    </div>
  );
};

export default PostPreview;
