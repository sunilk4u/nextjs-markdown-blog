import { postData, postPreview } from "@/types/interfaces";
import fs from "fs";
import matter from "gray-matter";

const files = fs.readdirSync("src/posts");
const mdPosts = files.filter((file) => file.endsWith(".md"));


export const initializeCategoryData = () => {
  const allCategories: string[] = [];
  const categoryData: any = {
    allCategories,
    data: {},
  };
  
  mdPosts.map((post) => {
    const postData = matter.read("src/posts/" + post);

    postData.data.categories.forEach((category: string) => {
      category = category.replaceAll(" ", "-");
      if (!allCategories.includes(category)) {
        allCategories.push(category);
        categoryData.data[category + ""] = [];
      }
      categoryData.data[category + ""].push(post.replaceAll(".md", ""));
    });
  });

  return categoryData;
};

export const getHomePostMetaData = (): postPreview[] => {
  const allPostMetaData: postPreview[] = mdPosts.map((post) => {
    const metaData = matter.read("src/posts/" + post);
    const slug = post.replace(".md", "");
    metaData.data.slug = slug;
    const data: any = metaData.data;
    return data;
  });
  sortPostsByDate(allPostMetaData);
  return allPostMetaData;
};

export const getPostContentData = async (slug: string) => {
  const postData: any = matter.read("src/posts/" + slug + ".md");
  postData.data.slug = slug;
  return postData;
};

export const getAllPages = () => {
  const files = fs.readdirSync("src/blogPages");
  const mdPages = files.filter((file) => file.endsWith(".md"));
  const allPages = mdPages.map((page) => page.replace(".md", ""));

  return allPages;
};

export const getPageContentData = (slug: string): postData => {
  const postData: any = matter.read("src/blogPages/" + slug + ".md");

  return postData;
};

export const getAllCategories = async () => {
  const data = await initializeCategoryData();

  return data.allCategories;
};

export const getAllCategoriesData = async () => {
  const data = await initializeCategoryData();

  return data;
};

export const sortPostsByDate = (posts: any[]) => {
  posts.sort((a, b) => {
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)

    if(aDate > bDate) return -1;
    else if(bDate > aDate) return 1;
    else return 0;
  });
}