export interface IAlbum {
  id: number;
  title: string;
  description: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  total_photos: number;
  private: boolean;
  share_key: string;
  cover_photo: {
    id: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    likes: number;
    liked_by_user: boolean;
    description: string;
    user: {
      id: string;
      username: string;
      name: string;
      portfolio_url: string;
      bio: string;
      location: string;
      total_likes: number;
      total_photos: number;
      total_collections: number;
      profile_image: {
        small: string;
        medium: string;
        large: string;
      },
      links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
      }
    },
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    },
    links: {
      self: string;
      html: string;
      download: string;
    }
  },
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    },
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    }
  },
  links: {
    self: string;
    html: string;
    photos: string;
    related: string;
  }
}


export interface GetAllAlbumsResponse {
  albums: IAlbum[];
}
