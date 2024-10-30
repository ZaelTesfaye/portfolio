'use client'

import React, {useEffect, useState} from 'react';
import {Label} from "@/components/ui/label"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Formik} from "formik";
import {redirect, useRouter} from "next/navigation";
import {createClient} from "@/utils/supabase/client";
import {updateListing} from "@/app/edit-listing/[id]/actions";
import {useToast} from "@/hooks/use-toast";
import FIleUpload from "@/components/FIleUpload";
import {Button} from "@/components/ui/button";
import {CgSpinner} from "react-icons/cg";
interface ListingData {
    [key: string]: any; // Define the structure of formData if known, or use this to accept any key-value pair
}

const Page = ({params}: { params: { id: string } }) => {
    const [images, setImages] = useState<FileList | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);
        const {toast} = useToast();
        const router = useRouter();

        const supabase = createClient();
        const submitHandler = async (values: ListingData ) => {

            setIsLoading(true);
            const updatedList = await updateListing(values, params.id);
            if (updatedList.status) {
                images && Array.from(images).forEach((image) => {
                        const file = image as File;
                        const fileName = Date.now().toString();
                        const fileExt = fileName.split(".").pop()

                        const uploadFile = async () => {
                            const {data, error} = await supabase
                                .storage
                                .from("listingImages")
                                .upload(`${fileName}`, file, {
                                    contentType: `image/${fileExt}`,
                                    upsert: false,
                                })
                            if (error || !data) {
                                return toast({title: "Error", description: "failed to upload file"})
                            }
                        }
                        uploadFile();

                        const imageUrl = process.env.NEXT_PUBLIC_IMAGE_URL + fileName;
                        const storeImageUrl = async () =>{

                        const {data, error} = await supabase
                            .from("listingImages")
                            .insert({url: imageUrl, listing_id: params.id} )
                            .select()

                            if(error) {
                                console.log(error);
                                setIsLoading(false)
                                return
                            }
                            setIsLoading(false)
                        }
                        storeImageUrl();

                    }
                )
            }
        router.push("/");
        }

        useEffect(() => {

            const fetchListing = async () => {
                const {data, error} = await supabase
                    .from('listing')
                    .select("*")
                    .eq('id', params.id)

                if (error) return router.push('/error');
                if (data.length === 0) return router.push('/not-found');

                const {data: userData, error: userError} = await supabase.auth.getUser()

                if (userError) return redirect("/error");
                if (!(data[0].createdBy === userData.user.email)) router.push('/');
            }
            fetchListing();
        }, [])

        return (
            <div>
                <h2 className={"font-bold pl-16 pt-8 text-xl"}>Enter Details</h2>

                <Formik initialValues={{
                    type: "",
                    propertyType: ""
                }}
                        onSubmit={submitHandler}>

                    {({values, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className={"grid grid-cols-1 md:grid-cols-3 px-24 py-10 gap-10"}>
                                <div className="flex flex-col gap-5">
                                    <h4>Rent or Sell?</h4>
                                    <RadioGroup defaultValue="option-one flex flex-col gap-5"
                                                onValueChange={(v) => values.type = v} name={"type"}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="rent" id="option-one"/>
                                            <Label htmlFor="option-one">Rent</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="sell" id="option-two"/>
                                            <Label htmlFor="option-two">Sell</Label>
                                        </div>
                                    </RadioGroup>

                                </div>
                                <div>
                                    <h2>Property Type</h2>
                                    <Select name={"propertyType"} onValueChange={(e) => values.propertyType = e}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Theme"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Single Family">Single Family</SelectItem>
                                            <SelectItem value="Town House">Town House</SelectItem>
                                            <SelectItem value="Condo">Condo</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </div>
                            </div>
                            <div className={"grid grid-cols-1 md:grid-cols-3 px-24 py-10 gap-10"}>
                                <div>
                                    <h2>Bedroom</h2>
                                    <Input type="number" name="bedroom" onChange={handleChange}
                                           placeholder={"Ex: 1500 sq ft"}/>
                                </div>
                                <div>
                                    <h2>Bathroom</h2>
                                    <Input type="number" name="bathroom" onChange={handleChange}
                                           placeholder={"Ex: 1500 sq ft"}/>
                                </div>
                                <div>
                                    <h2>Built in</h2>
                                    <Input type="number" name="builtIn" onChange={handleChange}
                                           placeholder={"Ex: 1500 sq ft"}/>
                                </div>
                                <div>
                                    <h2>Parking</h2>
                                    <Input type="number" name="parking" onChange={handleChange}
                                           placeholder={"Ex: 1500 sq ft"}/>
                                </div>
                                <div>
                                    <h2>Lot Size (Sq.ft)</h2>
                                    <Input type="number" name="lotSize" onChange={handleChange}
                                           placeholder={"Ex: 1500 sq ft"}/>
                                </div>
                                <div>
                                    <h2>Area (Sq.ft)</h2>
                                    <Input type="number" name="area" onChange={handleChange}
                                           placeholder={"Ex: 1500 sq ft"}/>
                                </div>

                                <div>
                                    <h2>Selling Price</h2>
                                    <Input type="number" name="price" onChange={handleChange}
                                           placeholder={"Ex: 1500 sq ft"}/>
                                </div>

                                <div>
                                    <h2>HOA (per Month)</h2>
                                    <Input type="number" name="hoa" onChange={handleChange} placeholder={"Ex: 1500 sq ft"}/>
                                </div>

                            </div>

                            <div className={"flex flex-col gap-10 pl-24 mb-20 "}>
                                <div className={"flex flex-col gap-5 w-[600px] "}>
                                    <h2> Description </h2>
                                    <Textarea name="description" onChange={handleChange} className={"h-36"}/>
                                </div>
                                <div className={"w-11/12"}>
                                    <FIleUpload setImages={(values) => setImages(values)}/>
                                </div>


                                <Button type="submit" className={`${isLoading && "hover:bg-blue-400 bg-blue-400"} w-2/12`}>
                                    {isLoading && <CgSpinner className={"animate-spin mr-2"}/>}  Submit
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
                <div>

                </div>
            </div>
        );
    }
;

export default Page;