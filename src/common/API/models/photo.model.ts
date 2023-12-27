export interface IUnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  views: number;
  description: string;
  slug: string;
  sponsorship: string;
  exif: {
    make: string;
    model: string;
    exposure_time: number;
    aperture: number;
    focal_length: number;
    iso: number;
  };

  location: {
    name: string;
    city: string;
    country: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };

  current_user_collections: {
    id: number;
    title: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    cover_photo: null;
    user: null;
  }[];

  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };

  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };

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
    instagram_username: string;
    twitter_username: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
    };
  };
}

export interface GetAllPhotosResponse {
  photos: IUnsplashPhoto[];
}
