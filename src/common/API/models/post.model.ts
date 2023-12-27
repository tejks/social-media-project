export interface IPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  published: boolean;
  userId: string;
}

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface GetAllPostsResponse {
  posts: IPost[];
}
