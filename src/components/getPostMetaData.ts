import { postData, postPreview } from "@/types/interfaces";
import fs from "fs";
import matter from "gray-matter";

const files = fs.readdirSync("src/posts");
const mdPosts = files.filter((file) => file.endsWith(".md"));

const allCategories: string[] = [];
const categoryData: any = {
  allCategories,
  data: {},
};

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

export const getPostContentData = (slug: string): postData => {
  const postData: any = matter.read("src/posts/" + slug + ".md");

  return postData;
};

export const getPostCategories = () => {
  mdPosts.map((post) => {
    const postData = matter.read("src/posts/" + post);

    postData.data.categories.forEach((category: string) => {
      if (!allCategories.includes(category)) {
        allCategories.push(category);
        categoryData.data[category] = [];
      }
      categoryData.data[category].push(post);
    });
  });

  return categoryData;
};
