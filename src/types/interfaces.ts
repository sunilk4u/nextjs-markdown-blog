export interface postPreview {
  title: string;
  subtitle?: string;
  date: string;
  categories: string[];
  slug?: string;
  description?: string;
}

export interface postData {
  content: string;
  data: postPreview;
}

export interface categoryData {
  allCategories: string[];
  data: {
    [key: string]: string[];
  };
}

export interface mdnJsonData {
    [key: string]: any;
}

export interface markdownData {
    data: any;
    content: string;
}

export interface genParamSlug {
    slug: string
}
export interface genParamPageno {
    pageno: string
}
