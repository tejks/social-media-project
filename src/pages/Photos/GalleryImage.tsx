import clsx from 'clsx';
import React, { forwardRef, useEffect, useState } from 'react';
import { Blurhash } from 'react-blurhash';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  hash?: string;
  width?: string;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const GalleryImage = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, hash, width, height, src, alt, onClick, ...rest }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const img = new Image();
      img.onload = () => {
        setIsLoaded(true);
      };
      img.src = src;
    }, [src]);

    return (
      <>
        {!isLoaded && hash && (
          <Blurhash
            hash={hash}
            width={width ?? 400}
            height={height ?? 300}
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
