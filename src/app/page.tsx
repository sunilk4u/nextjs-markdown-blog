import { getHomePostMetaData } from "@/components/getPostMetaData";
import Pagination from "@/components/pagination";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

const HomePage = () => {
  const data: postPreview[] = getHomePostMetaData();
  const postPerPage: number = parseInt(process.env.postperpage as string) || 5;
  const homePosts = data.slice(0, postPerPage);
  const currPage = 1;

  return (
    <>
      <div className="m-4">
        {homePosts.map((post: any) => (
          <PostPreview key={post.slug} post={post} />
        ))}
        {(postPerPage < data.length) && (<Pagination totalPosts={data.length} currentPage={currPage} slug={`posts`} />)}
      </div>
    </>
  );
};

export default HomePage;
