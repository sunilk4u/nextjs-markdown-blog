import {
  getAllCategories,
  getAllCategoriesData,
  getPostContentData,
  initializeCategoryData,
} from "@/components/getPostMetaData";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

export const generateStaticParams = async () => {
  const catData = await getAllCategories();

  return catData.map((cat: string) => ({
    slug: cat.replaceAll(" ", "-"),
  }));
};

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const categoryData = await getAllCategoriesData();

  const categoryPostsData: postPreview[] = await Promise.all(
    categoryData.data[params.slug + ""].map(async (post: string) => {
      const metaData: any = await getPostContentData(post);
      return metaData.data;
    })
  );

  return (
    <div>
      {categoryPostsData.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
};
export default CategoryPage;
