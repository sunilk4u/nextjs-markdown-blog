import { postPreview } from "@/types/interfaces";
import fs from "fs";
import matter from "gray-matter";

const files = fs.readdirSync("src/posts");
const mdPosts = files.filter((file) => file.endsWith(".md"));

export const getHomePostMetaData = (): postPreview[] => {
  const allPostMetaData: postPreview[] = mdPosts.map((post) => {
    const metaData = matter.read("src/posts/" + post);
    const slug = post.replace(".md", "");
    metaData.data.slug = slug;
    const data: any = metaData.data;
    return data;
  });
  
  return allPostMetaData;
};

export const getPostContentData = (slug: string) => {
  const postData = matter.read("src/posts/" + slug + ".md");

  return postData.content;
}