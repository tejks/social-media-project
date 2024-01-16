import { useState } from 'react';
import Dropzone from './Dropzone';

type AvatarDropzoneProps = {
  onDrop: (acceptedFiles: File) => void;
  onClear?: () => void;
};

const AvatarDropzone: React.FC<AvatarDropzoneProps> = ({ onDrop, onClear }) => {
  const [image, setImage] = useState<string | null>(null);

  const onImageDrop = (acceptedFile: File[]) => {
    setImage(URL.createObjectURL(acceptedFile[0]));
    onDrop(acceptedFile[0]);
  };

  const onImageClear = () => {
    setImage(null);
    onClear && onClear();
  };

  return (
    <div className="mt-2 flex flex-col justify-center lg:mt-0">
      {!image ? (
        <Dropzone onDrop={onImageDrop} maxFiles={1} />
      ) : (
        <div
          className="relative flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] p-1 lg:p-2"
          onClick={onImageClear}
        >
          <img src={image} alt="avatar" className="h-20 w-20 rounded-full object-cover lg:h-64 lg:w-64" />
          <div className="absolute flex h-full w-full cursor-pointer justify-center rounded-full bg-black opacity-0 hover:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-16">
              <path
                stroke="#FB9D1F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarDropzone;
