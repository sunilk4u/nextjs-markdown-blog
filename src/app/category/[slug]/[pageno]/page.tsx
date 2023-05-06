import {
  getAllCategoriesData,
  getPostContentData,
  sortPostsByDate,
} from "@/components/getPostMetaData";
import Pagination from "@/components/pagination";
import PostPreview from "@/components/postPreview";
import { categoryData, genParamPageno, postPreview } from "@/types/interfaces";

export const generateStaticParams = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const dataIn: categoryData = getAllCategoriesData();
  const data = dataIn.data[params.slug];
  const postPerPage: number = parseInt(process.env.postperpage as string) || 5;
  
  const totalPages = Math.ceil(data.length / postPerPage);
  const slugs: genParamPageno[] = [];
  for (let i = 2; i <= totalPages; i++) {
    slugs.push({
      pageno: `${i}`,
    });
  }
  return slugs;
};


const CategoryPage = async ({
  params,
}: {
  params: { pageno: string; slug: string };
}) => {
  const dataIn: categoryData = getAllCategoriesData();
  const data = dataIn.data;
  
  const postPerPage: number = parseInt(process.env.postperpage as string) || 5;
  const currPost = (parseInt(params.pageno) - 1) * postPerPage;
  const dataLen = data[params.slug].length;
  const greater =
    postPerPage >= dataLen - currPost
      ? dataLen - currPost + currPost
      : postPerPage + currPost;

  const categoryPostsData: postPreview[] = await Promise.all(
    data[params.slug].map(async (post: string) => {
      const metaData: any = await getPostContentData(post);
      return metaData.data;
    })
  );
    
  sortPostsByDate(categoryPostsData);

  const homePosts: postPreview[] = categoryPostsData.slice(currPost, greater);

  return (
    <>
      <div className="m-4">
        {homePosts.map((post: any) => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Pagination
          totalPosts={dataLen}
          currentPage={parseInt(params.pageno)}
          slug={`category/${params.slug}`}
        />
      </div>
    </>
  );
};
export default CategoryPage;
