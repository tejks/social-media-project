export interface IComment {
  id: string;
  createdAt: string;
  updatedAt: string;
  text: string;
  userId: string;
  postId: string;
}

export interface GetAllCommentsResponse {
  posts: IComment[];
}
