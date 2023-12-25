import React, { useState, useEffect } from 'react';
import GalleryImage from './GalleryImage';
import ImageModal from '../../components/ImageModal';
import { IUnsplashPhoto } from '../../common/API/models/photo.model';
import { useGetRandomPhotosQuery } from '../../common/API/services/photos';

const Photos: React.FC = () => {
  const { data, isLoading } = useGetRandomPhotosQuery();
  const [photos, setPhotos] = useState<IUnsplashPhoto[] | null>(data ?? []);
  const [selectedImage, setSelectedImage] = useState<IUnsplashPhoto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = (imageData: IUnsplashPhoto) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (data) setPhotos(data);
    console.log('updated');
  }, [data]);

  return (
    <>
      {isModalOpen === true && selectedImage !== null && <ImageModal onClose={closeModal} imageData={selectedImage} />}
      <section id='photos-section' className="w-full m-auto p-4 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 sm:w-5/6 lg:w-4/5 xl:w-3/4">
        {photos && !isLoading ? (
          photos?.map((item, index) => (
            <GalleryImage
              key={index}
              src={item.urls.small}
              alt={item.description}
              width="100%"
              hash={item.blur_hash}
              onClick={() => openModal(item)}
              className="mb-4 w-full rounded-xl"
              loading="lazy"
            />
          ))
        ) : (
          <div>Not found</div>
        )}
      </section>
    </>
  );
};

export default Photos;
