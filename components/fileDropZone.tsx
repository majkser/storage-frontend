import { cn } from "@/lib/utils";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileDropZone({
  isDropZoneOpen,
  setIsDropZoneOpen,
}: {
  isDropZoneOpen: boolean;
  setIsDropZoneOpen: (isOpen: boolean) => void;
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropZoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropZoneRef.current &&
        !dropZoneRef.current.contains(event.target as Node)
      ) {
        setIsDropZoneOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropZoneOpen, setIsDropZoneOpen]);

  return (
    <div
      {...getRootProps({
        ref: dropZoneRef,
        className: cn(
          "absolute top-0 left-0 translate-x-1/2 translate-y-1/2 w-1/2 h-1/2 bg-gray-200 flex flex-col justify-center items-center shadow-brand rounded-2xl",
          !isDropZoneOpen && "hidden"
        ),
      })}
    >
      <h2 className="h2">File Drop Zone</h2>
      <RiUploadCloud2Fill size={175} />
      <div
        onClick={() => setIsDropZoneOpen(false)}
        className="absolute top-0 right-0 mr-5 mt-4 cursor-pointer transition-colors duration-300 hover:text-red-600"
      >
        <IoIosCloseCircle size={40} />
      </div>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="p">Drop the files here ...</p>
      ) : (
        <p className="p">
          Drag and drop some files here, or click to select files
        </p>
      )}
    </div>
  );
}
