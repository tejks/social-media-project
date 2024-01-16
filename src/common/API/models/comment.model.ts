export interface IComment {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  userId: string;
  postId: string;
  user: {
    username: string;
    id: string;
    imageUrl: string;
  };
}

export interface GetAllCommentsResponse {
  posts: IComment[];
}
