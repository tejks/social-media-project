export interface IPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  userId: string;
  likes: number;
  isLiked: boolean;
  comments: number;
  user: {
    username: string;
    id: string;
  };
}

export interface CreatePostDto {
  title: string;
  content: string;
}

export interface GetAllPostsResponse {
  posts: IPost[];
}
