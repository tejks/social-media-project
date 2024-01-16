import clsx from 'clsx';
import React, { forwardRef, useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  hash?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const GalleryImage = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, src, height, hash, alt, onClick, ...rest }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
      };
    }, [src]);

    return (
      <>
        {!isLoaded && hash && (
          <Blurhash
            hash={hash}
            width={'100%'}
            height={height ? height * 0.6 : height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}

        <img
          className={clsx('cursor-pointer', isLoaded ? 'inline' : 'hidden', className)}
          ref={ref}
          src={src}
          alt={alt}
          onClick={onClick}
          {...rest}
        />
      </>
    );
  },
);

export default GalleryImage;
