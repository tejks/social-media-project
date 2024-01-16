import { DropzoneOptions, useDropzone } from 'react-dropzone';

type DropzoneProps = DropzoneOptions;

const Dropzone: React.FC<DropzoneProps> = (options) => {
  const { getRootProps, getInputProps } = useDropzone(options);

  return (
    <label
      htmlFor="dropzone-file"
      {...getRootProps({ className: 'dropzone' })}
      className="cursor-pointer rounded-lg border-2 border-dashed border-[#FB9D1F] px-5 py-3 hover:border-[#1C5C75] lg:px-10 lg:py-16"
    >
      <div className="flex flex-col items-center justify-center">
        <svg
          className="mb-2 h-6 w-6 text-white lg:mb-4 lg:h-8 lg:w-8"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="flex text-xs font-light text-white lg:mb-2 lg:text-sm lg:font-normal">
          <span className="font-semibold">Click to upload</span>
          <p className="hidden lg:block">&nbsp;or drag and drop</p>
          <p className="lg:hidden">&nbsp;avatar</p>
        </p>
        <p className="hidden text-xs font-light text-white lg:block lg:font-normal">PNG, JPG (MAX. 800x400px)</p>
      </div>
      <input {...getInputProps()} id="dropzone-file" type="file" className="hidden" />
    </label>
  );
};

export default Dropzone;
