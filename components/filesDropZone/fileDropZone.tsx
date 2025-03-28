"use client";

import { cn } from "@/lib/utils";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { useEffect, useRef, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

export default function FileDropZone({
  isDropZoneOpen,
  setIsDropZoneOpen,
}: {
  isDropZoneOpen: boolean;
  setIsDropZoneOpen: (isOpen: boolean) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    },
    [setFiles]
  );
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
      className={cn(
        "absolute top-0 left-0 translate-x-1/2 translate-y-1/2 w-1/2 h-1/2",
        !isDropZoneOpen && "hidden"
      )}
    >
      <div
        onClick={() => setIsDropZoneOpen(false)}
        className="z-[1000px] absolute top-0 right-0 mr-5 mt-4 cursor-pointer transition-colors duration-300 hover:text-red-600"
      >
        <IoIosCloseCircle size={40} />
      </div>
      <div
        {...getRootProps({
          ref: dropZoneRef,
          className:
            "h-full w-full bg-gray-200 flex flex-col justify-center items-center shadow-transition rounded-4xl overflow-hidden",
        })}
      >
        <h2 className="h2">File Drop Zone</h2>
        {files.length > 0 && (
          <div className="w-3/4 mx-auto">
            <h4 className="h4 text-center">selected files: </h4>
            <ul className="list-disc list-inside">
              {files.map((file) => (
                <div key={file.name} className="flex justify-between my-1">
                  <li>{file.name}</li>
                  <Button
                    onClick={(event) => {
                      event.stopPropagation();
                      setFiles((prevFiles) =>
                        prevFiles.filter(
                          (prevFile) => prevFile.name !== file.name
                        )
                      );
                    }}
                    variant="destructive"
                    size="sm"
                  >
                    <p className="p">remove</p>
                  </Button>
                </div>
              ))}
            </ul>
          </div>
        )}
        {files.length === 0 && <RiUploadCloud2Fill size={175} />}
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="p mt-10">Drop the files here ...</p>
        ) : (
          <p className="p mt-10">
            Drag and drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
}
