import { getAllCategoriesData, getPostContentData } from "@/components/getPostMetaData";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const categoryData = getAllCategoriesData();
  const categoryPostsData: postPreview[] = [];

  categoryData.data[params.slug + ''].forEach((post: string) => {
    const metaData: any = getPostContentData(post);

    categoryPostsData.push(metaData.data);
  })

  return (
    <div>
      {categoryPostsData.map((post) => (
        <PostPreview key={post.slug} post={post}/>
      ))}
    </div>
  );
};
export default CategoryPage;
