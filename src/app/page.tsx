import { getHomePostMetaData } from "@/components/getPostMetaData";
import Pagination from "@/components/pagination";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

const HomePage = () => {
  const data: postPreview[] = getHomePostMetaData();
  const postPerPage: any = process.env.postperpage;
  const homePosts = data.slice(0, postPerPage);
  const currPage = 1;

  return (
    <>
      <div className="m-4">
        {homePosts.map((post: any) => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Pagination totalPosts={data.length} currentPage={currPage} />
      </div>
    </>
  );
};

export default HomePage;
