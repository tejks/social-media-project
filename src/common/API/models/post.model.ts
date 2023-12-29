export interface IPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  userId: string;
  _count: {
    PostLike: number;
  }
}

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface GetAllPostsResponse {
  posts: IPost[];
}
