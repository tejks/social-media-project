import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IUnsplashPhoto } from '@common/API/models/photo.model';
import GalleryImage from '@pages/Photos/GalleryImage';

interface ModalProps {
  onClose: () => void;
  imageData: IUnsplashPhoto;
}

function ImageModal({ onClose, imageData }: ModalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div
        className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-30 h-full w-full bg-black/50 backdrop-blur-sm transition-all duration-1000"
        onClick={() => {
          onClose();
        }}
      ></div>

      {!isLoaded && (
        <div
          role="status"
          className="fixed left-1/2 top-1/2 z-50 flex h-full -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          <svg
            aria-hidden="true"
            className="h-16 w-16 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={clsx(
          `fixed inset-x-0 top-1/2 z-50 m-auto w-fit -translate-y-1/2 bg-[#081b22] sm:w-fit sm:rounded-lg sm:shadow`,
          !isLoaded ? 'hidden' : 'block',
        )}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-2 py-1 sm:py-2 lg:py-3 2xl:p-4">
          <div className="max-w-[88%]">
            <div className="border-slate-500 px-1 py-1 text-xs sm:border-b-[1px] 2xl:text-sm">
              <p className="inline overflow-hidden text-ellipsis font-semibold capitalize text-gray-200">
                {imageData.user.name}{' '}
              </p>
              <Link to={imageData.user.links.html}>
                <p className="inline font-normal text-gray-400">@{imageData.user.username}</p>
              </Link>
            </div>
          </div>
          <button
            type="button"
            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-[#FB9D1F] hover:text-gray-900"
            data-modal-hide="default-modal"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
              className="h-4 w-4"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </header>

        {/* Body - image */}
        <div className="flex flex-grow items-center justify-center overflow-hidden">
          {imageData !== null && (
            <Link to={imageData.urls.raw} className="m-auto overflow-y-auto">
              <GalleryImage
                src={imageData.urls.regular}
                alt={imageData.description}
                className="max-h-[70vh] w-full object-contain object-center sm:max-h-[80vh]"
                onLoad={() => setIsLoaded(true)}
              />
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="group flex w-1/3 items-center justify-center py-2 text-sm font-medium hover:bg-[#b005052d] sm:w-1/5"
          >
            <span className="relative flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#b00505"
                className="h-4 w-4 group-hover:fill-[#b00505] md:h-5 md:w-5 2xl:h-6 2xl:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="text-xs text-gray-200 group-hover:text-[#b00505fb] group-hover:brightness-125">
                {imageData.likes}
              </span>
            </span>
          </button>
          <button
            type="button"
            className="group flex w-1/3 items-center justify-center py-2 text-sm font-medium hover:bg-[#0588b02d] sm:w-1/5"
          >
            <span className="relative flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#0588b0"
                className="h-4 w-4 group-hover:fill-[#0588b0] md:h-5 md:w-5 2xl:h-6 2xl:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              <span className="text-xs text-gray-200 group-hover:text-[#0588b0] group-hover:brightness-125">
                {imageData.views}
              </span>
            </span>
          </button>
          <button
            type="button"
            className="group flex w-1/3 items-center justify-center py-2 text-sm font-medium hover:bg-[#05b0602d] sm:w-1/5"
          >
            <span className="relative flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 stroke-[#05b060] group-hover:fill-[#05b060] md:h-5 md:w-5 2xl:h-6 2xl:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              <span className="text-xs text-gray-200 group-hover:text-[#05b060] group-hover:brightness-125">
                {imageData.downloads}
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageModal;
