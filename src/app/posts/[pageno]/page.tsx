import { getHomePostMetaData } from "@/components/getPostMetaData";
import Pagination from "@/components/pagination";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

export const generateStaticParams = async () => {
  const posts: postPreview[] = getHomePostMetaData();
  const postPerPage: number = parseInt(process.env.postperpage as string) || 5;
  const totalPages = Math.ceil(posts.length / postPerPage);
  const slugs = [];
  for (let i = 2; i <= totalPages; i++) {
    slugs.push({
      pageno: `${i}`,
    });
  }
  return slugs;
};

const PostPages = ({ params }: { params: { pageno: string } }) => {
  const data: postPreview[] = getHomePostMetaData();
  const postPerPage: number = parseInt(process.env.postperpage as string) || 5; 
  const currPost = (parseInt(params.pageno) - 1) * postPerPage;
  const greater =
    postPerPage >= data.length - currPost
      ? data.length - currPost + currPost
      : postPerPage + currPost;
  const homePosts = data.slice(currPost, greater);
  
  return (
    <>
      <div className="m-4">
        {homePosts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Pagination
          totalPosts={data.length}
          currentPage={parseInt(params.pageno)}
          slug={`posts`}
        />
      </div>
    </>
  );
};

export default PostPages;
