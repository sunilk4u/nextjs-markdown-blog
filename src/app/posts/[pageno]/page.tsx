import { getHomePostMetaData } from "@/components/getPostMetaData";
import Pagination from "@/components/pagination";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

export const generateStaticParams = async () => {
  const posts: postPreview[] = getHomePostMetaData();
  const postPerPage: any = process.env.postperpage;
  const totalPages = Math.ceil(posts.length / postPerPage);
  const slugs = [];
  for (let i = 2; i <= totalPages; i++) {
    slugs.push({
      slug: `posts/${i}`,
    });
  }
  return slugs;
};

const PostPages = ({ params }: { params: { pageno: string } }) => {
  const data: postPreview[] = getHomePostMetaData();
  const postPerPage: any = process.env.postperpage;
  const currPost = (parseInt(params.pageno) - 1) * postPerPage;
  const greater =
    postPerPage > data.length - currPost
      ? data.length - currPost + currPost
      : postPerPage;
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
        />
      </div>
    </>
  );
};

export default PostPages;
