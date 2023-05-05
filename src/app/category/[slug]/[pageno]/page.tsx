import {
  getAllCategoriesData,
  getPostContentData,
  sortPostsByDate,
} from "@/components/getPostMetaData";
import Pagination from "@/components/pagination";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

// export const generateStaticParams = async () => {};

const CategoryPage = async ({
  params,
}: {
  params: { pageno: string; slug: string };
}) => {
  const dataIn = getAllCategoriesData();
  const data = dataIn.data;
  const postPerPage: number = parseInt(process.env.postperpage as string) || 5;
  const currPost = (parseInt(params.pageno) - 1) * postPerPage;
  const greater =
    postPerPage >= data[params.slug].length - currPost
      ? data[params.slug].length - currPost + currPost
      : postPerPage + currPost;

  const categoryPostsData: postPreview[] = await Promise.all(
    data[params.slug].map(async (post: string) => {
      const metaData: any = await getPostContentData(post);
      return metaData.data;
    })
  );

  sortPostsByDate(categoryPostsData);

  const homePosts = categoryPostsData.slice(currPost, greater);

  return (
    <>
      <div className="m-4">
        {homePosts.map((post: any) => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Pagination
          totalPosts={data[params.slug].length}
          currentPage={parseInt(params.pageno)}
          slug={`category/${params.slug}`}
        />
      </div>
    </>
  );
};
export default CategoryPage;
