export interface postPreview {
    title: string;
    subtitle?: string;
    date: string;
    categories: string[];
    slug?: string;
}

export interface postData {
    content: string;
    data: postPreview;
}