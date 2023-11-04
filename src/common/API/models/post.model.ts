export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface GetAllPostsResponse {
  posts: IPost[];
}

export interface IPostService {
  getAllPosts: () => HttpPromise<GetAllPostsResponse>;
}
