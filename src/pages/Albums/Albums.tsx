import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllAlbumsQuery } from '@common/API/services/album';

import ImageSkeleton from '@/components/elements/Skeleton/ImageSkeleton';
import ScrollToTop from '@/components/ScrollToTop';
// import { IAlbum } from '@/common/API/models/album.model';
// import {AlbumElement} from '@components/elements/Albums/AlbumElement';


const Albums: React.FC = () => {
  const navigate = useNavigate();
  const { data: albums, isLoading: isAlbumsLoading } = useGetAllAlbumsQuery();


  // if (isAlbumsLoading) return 'Loading...';
  if (isAlbumsLoading) return "is Loading...";
  console.log(albums);

  return <div className="items-center justify-items-center w-full">
{/* px-4 md:max-w-4xl md:px-24 lg:px-16 xl:px-24 */}
    <div className="posts__context flex flex-col justify-center container mx-auto">
      <h1 className="posts__header mt-32 text-3xl font-semibold text-white">Albums</h1>
      <hr className="my-4 border-gray-800" />
      <div className="grid grid-cols-3 items-center justify-items-center text-white m-0 ">
        {albums && !isAlbumsLoading
          ? albums.map((item, index) => (
            <div className="text-center m-8">
              <h3 className="text-lg font-semibold mb-0.5">{item.title}</h3>
              <a href={item.cover_photo.links.html} target="_blank">
              <img className="w-full h-56 w-80 object-cover mb-4 rounded-md" src={item.cover_photo.urls.regular} alt="zdj"/>
              </a>
            </div>
          ))
          : Array.from(Array(24).keys()).map((_, index) => (
            <ImageSkeleton key={index} size={Math.random() > 0.5 ? 'sm' : 'lg'} />
          ))}

        <ScrollToTop />

      </div>



    </div>

  </div>;
};


export default Albums;
<section id="photos-section" className="container mx-auto columns-1 px-4 pt-32 sm:w-5/6 sm:columns-2 lg:w-4/5 lg:columns-3 2xl:w-3/4 2xl:columns-4"></section>
