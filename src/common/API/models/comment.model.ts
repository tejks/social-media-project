export interface IComment {
  id: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  userId: string;
  postId: string;
  User: {
    username: string;
  }
}

export interface GetAllCommentsResponse {
  posts: IComment[];
}
