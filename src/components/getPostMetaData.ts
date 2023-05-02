import { postPreview } from "@/types/interfaces";
import fs from "fs";
import matter from "gray-matter";

const files = fs.readdirSync("src/posts");
const mdPosts = files.filter((file) => file.endsWith(".md"));

export const getHomePostMetaData = (): postPreview[] => {
  const allPostMetaData: postPreview[] = mdPosts.map((post) => {
    const metaData = matter.read("src/posts/" + post);
    const data: any = metaData.data;
    return data;
  });
  
  return allPostMetaData;
};