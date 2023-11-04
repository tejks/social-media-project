export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface GetAllAlbumsResponse {
  albums: Album[];
}

// export interface AlbumService {}
