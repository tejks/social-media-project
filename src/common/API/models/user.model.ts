export interface IUser {
  id: string;
  email: string;
  username: string;
  role: Role;
  imageUrl: string;
}

export interface AuthUser {
  userId: string;
  email: string;
  role: Role;
  imageUrl: string;
}

enum Role {
  USER,
  ADMIN,
}

export interface GetAllUsersResponse {
  users: IUser[];
}
