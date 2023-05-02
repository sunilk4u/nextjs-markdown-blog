import fs from "fs";

const getPostMetaData = () => {
  const files = fs.readdirSync("src/posts");
  const mdPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = mdPosts.map((post) => post.replace(".md", ""));

  return slugs;
};

const HomePage = () => {
  const data = getPostMetaData();
  return (
    <div>
      {data.map((post) => (
        <h2 key={post}>{post}</h2>
      ))}
    </div>
  );
};

export default HomePage;
