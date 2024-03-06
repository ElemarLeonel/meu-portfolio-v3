export interface Post {
  tags: Tags;
  published_date: PublishedDate;
  image: Image;
  category: Category;
  active: Active;
  slug: Slug;
  title: Title;
}

export interface Tags {
  id: string;
  type: string;
  multi_select: any[];
}

export interface PublishedDate {
  id: string;
  type: string;
  date: any[];
}

export interface Image {
  id: string;
  type: string;
  files: any[];
}

export interface Category {
  id: string;
  type: string;
  select: any[];
}

export interface Active {
  id: string;
  type: string;
  checkbox: boolean;
}

export interface Slug {
  id: string;
  type: string;
  rich_text: any[];
}

export interface Title {
  id: string;
  type: string;
  title: any[];
}
