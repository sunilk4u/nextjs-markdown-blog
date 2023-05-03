import { getHomePostMetaData } from "@/components/getPostMetaData";
import PostPreview from "@/components/postPreview";
import { postPreview } from "@/types/interfaces";

const HomePage = () => {
  const data: postPreview[] = getHomePostMetaData();
  
  return (
    <div>
      {data.map((post) => (
        <PostPreview key={post.slug} post={post}/>
      ))}
    </div>
  );
};

export default HomePage;
