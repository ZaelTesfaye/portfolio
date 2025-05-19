'use client'
import React, {useState} from 'react';
import projects from "../../constants/projects";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../../components/ui/carousel";
import {Button} from "../../components/ui/button";
import Link from "next/link";

const Page = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const previewItem = usePathname().split("/")[1]; // Get the first path segment
    const previewItemDetails = projects.find(project => project.preview?.previewPath === previewItem); // Correct access to previewPath

    if (!previewItemDetails) {
        return <div>Project not found</div>; // Fallback if no project is found
    }

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <header
                className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-11/12 px-2 sm:pl-8 md:pl-24 py-4 sm:py-8 z-10 fixed top-0 left-0 right-0 bg-white shadow-md">
                <Button variant={"outline"}
                        className="text-lg sm:text-xl md:text-3xl font-semibold">
                    <Link href={"/"}>Z.T</Link>
                </Button>
            </header>
            <div className={"m-4 sm:m-10 mt-28 sm:mt-32 md:m-32"}>
                <div className={"flex flex-col md:flex-row justify-between md:mr-32"}>
                    <div className={"flex flex-row gap-2 sm:gap-3 mb-5"}>
                        <Image className={"rounded-full"} src={previewItemDetails.preview?.previewIcon}
                               alt={previewItemDetails.alt} width={60} height={60}/>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-xl sm:text-3xl"}>{previewItemDetails.title}</h1>
                            <h1 className={"text-base sm:text-lg text-gray-500"}>Zeal Tesfaye</h1>
                        </div>
                    </div>
                    <div>
                        <Button className={"ml-0 sm:ml-32 mb-6 sm:mb-10 md:mb-0 md:ml-0 text-xs sm:text-base"}>
                            <Link target="_blank" rel="noopener noreferrer"
                                  href={"https://drive.google.com/file/d/1DBFsw5GAQP-AUv0FvwvgTyaiocXH01iv/view?usp=sharing"}>Download
                                App </Link>
                        </Button>
                    </div>
                </div>
                <div className={"mx-2 sm:mx-10 md:mx-28"}>
                    <p className={"text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base"}>{previewItemDetails.preview?.previewDescription}</p>
                    <div className={"flex flex-row gap-2 sm:gap-5"}>
                        <Carousel opts={{align: "start",}} className="w-full">
                            <CarouselContent className="px-2 sm:px-10 py-2 sm:py-4">
                                {previewItemDetails.preview?.previewImages?.map((image, index) => (
                                    <CarouselItem
                                        className="md:basis-1/2 lg:basis-1/3 transform transition-transform duration-500"
                                        key={index}>
                                        <Image
                                            key={index}
                                            className={"rounded-2xl border-2 sm:border-4 border-blue-600 cursor-pointer"}
                                            src={image}
                                            alt={`Preview Image ${index + 1}`}
                                            width={180}
                                            height={180}
                                            onClick={() => handleImageClick(image)}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                                <CarouselPrevious
                                    className="text-2xl sm:text-4xl p-2 sm:p-3 text-white hover:bg-blue-500 bg-blue-500 rounded-full shadow-lg"/>
                            </div>
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                                <CarouselNext
                                    className="text-2xl sm:text-4xl p-2 sm:p-3 text-white hover:bg-blue-500 bg-blue-500 rounded-full shadow-lg"/>
                            </div>
                        </Carousel>
                    </div>
                </div>
                {isModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 px-2 sm:px-0"
                        onClick={handleBackgroundClick}
                    >
                        <div className="relative ">
                            <Image
                                src={selectedImage}
                                alt="Selected Image"
                                layout="intrinsic"
                                width={250}
                                height={500}
                                className="rounded-lg py-1 object-contain max-h-[80vh] max-w-[90vw] sm:max-h-screen sm:max-w-screen"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>

    );
};

export default Page;
