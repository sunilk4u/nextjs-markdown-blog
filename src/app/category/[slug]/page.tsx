import {
  getAllCategoriesData,
  getPostContentData,
  sortPostsByDate,
} from "@/components/getPostMetaData";
import Pagination from "@/components/pagination";
import PostPreview from "@/components/postPreview";
import { categoryData, postData, postPreview } from "@/types/interfaces";



const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const categoryData: categoryData = getAllCategoriesData();

  const categoryPostsData: postPreview[] = await Promise.all(
    categoryData.data[params.slug + ""].map(async (post: string) => {
      const metaData = await getPostContentData(post);
      return metaData.data;
    })
  );

  sortPostsByDate(categoryPostsData);

  const postPerPage: number = parseInt(process.env.postperpage as string) || 5;
  const greater =
    postPerPage > categoryPostsData.length
      ? categoryPostsData.length
      : postPerPage;
  const homePosts: postPreview[] = categoryPostsData.slice(0, greater);
  const currPage = 1;

  return (
    <div>
      {homePosts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
      {postPerPage < categoryPostsData.length && (
        <Pagination
          totalPosts={categoryPostsData.length}
          currentPage={currPage}
          slug={`category/${params.slug}`}
        />
      )}
    </div>
  );
};
export default CategoryPage;
