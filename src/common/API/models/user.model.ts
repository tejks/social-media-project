export interface IUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
}

enum Role {
  USER,
  ADMIN,
}

export interface GetAllUsersResponse {
  users: IUser[];
}
