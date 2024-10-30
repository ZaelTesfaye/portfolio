"use client"

import React, {useState} from 'react';
import Image from "next/image";
interface FileUploadProps {
    setImages: (files: FileList) => void; // Specify the type for setImages
}

const FIleUpload: React.FC<FileUploadProps>  = ({setImages}) => {
    const [imagePreview, setImagePreview] = useState<string[]>([]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if(files) {
            setImages(files)
            const previews = Array.from(files).map((file) =>
                URL.createObjectURL(file)
            )
            setImagePreview(previews);
        }

    }
    return (
        <div className="flex flex-col gap-10 w-full">
            <div className={"grid grid-cols-8 gap-10"}>
                {imagePreview.map((image, index) =>
                    <div key={index}>
                        <Image src={image} alt={"Preview Image"} width={100} height={100}
                               className={"rounded-lg hover:scale-150 "}/>
                    </div>
                )}
            </div>
            <label htmlFor="dropzone-file"
                   className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">

                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or
                        drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX.
                        800x400px)</p>
                </div>
                <h2>Upload property image</h2>
                <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileUpload}
                       accept={"image/jpeg, image/png, image,jpg "}/>
            </label>
        </div>

    );
};

export default FIleUpload;