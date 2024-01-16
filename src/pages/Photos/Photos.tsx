import { IUnsplashPhoto } from '@common/API/models/photo.model';
import { useGetRandomPhotosQuery } from '@common/API/services/photos';
import ImageModal from '@components/ImageModal';
import ScrollToTop from '@components/ScrollToTop';
import ImageSkeleton from '@components/elements/Skeleton/ImageSkeleton';
import { useState } from 'react';
import GalleryImage from './GalleryImage';

const Photos: React.FC = () => {
  const { data: photos, isLoading } = useGetRandomPhotosQuery();
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

  const calculateAspectRatioFit = (srcWidth: number, srcHeight: number, maxWidth: number) => {
    const ratio = Math.min(maxWidth / srcWidth);

    return { width: srcWidth * ratio, height: srcHeight * ratio };
  };

  return (
    <>
      {isModalOpen === true && selectedImage !== null && <ImageModal onClose={closeModal} imageData={selectedImage} />}
      <section
        id="photos-section"
        className="container mx-auto columns-1 px-4 pt-32 sm:w-5/6 sm:columns-2 lg:w-4/5 lg:columns-3 2xl:w-3/4 2xl:columns-4"
      >
        {photos && !isLoading
          ? photos.map((item, index) => (
              <GalleryImage
                key={index}
                src={item.urls.small}
                alt={item.description}
                hash={item.blur_hash}
                width={calculateAspectRatioFit(item.width, item.height, 640).width}
                height={calculateAspectRatioFit(item.width, item.height, 640).height}
                onClick={() => openModal(item)}
                className="mb-4 w-full rounded-xl"
                loading="lazy"
              />
            ))
          : Array.from(Array(24).keys()).map((_, index) => (
              <ImageSkeleton key={index} size={Math.random() > 0.5 ? 'sm' : 'lg'} />
            ))}

        <ScrollToTop />
      </section>
    </>
  );
};

export default Photos;
