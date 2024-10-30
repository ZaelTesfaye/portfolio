import React from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Bath, BedDouble, Car, House} from "lucide-react";


const Filter = ({setBedroom, setBathroom, setParking, setHomeType}) => {
    return (
        <div className={"flex gap-10"}>
            <Select onValueChange={setBedroom}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Bed"/>
                </SelectTrigger>
                <SelectContent >
                    <SelectItem className="flex flex-row gap-5 text-gray-500  cursor-pointer" value="2">
                        <div className={"flex gap-5"}>

                            <h2>2+</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="3">
                        <div className={"flex gap-5"}>

                            <h2>3+</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="4">
                        <div className={"flex gap-5"}>

                            <h2>4+</h2>
                        </div>

                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="5">
                        <div className={"flex gap-5"}>

                            <h2>5+</h2>
                        </div>

                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="0">
                        <div className={"flex gap-5"}>

                            <h2>All</h2>
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
            <Select onValueChange={setParking}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Parking"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className="flex flex-row gap-5 text-gray-500  cursor-pointer" value="1">
                        <div className={"flex gap-5"}>

                            <h2>2+</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="2">
                        <div className={"flex gap-5"}>

                            <h2>3+</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="3">
                        <div className={"flex gap-5"}>

                            <h2>4+</h2>
                        </div>

                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="4">
                        <div className={"flex gap-5"}>

                            <h2>5+</h2>
                        </div>

                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="0">
                        <div className={"flex gap-5"}>

                            <h2>All</h2>
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
            <Select onValueChange={setBathroom}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Bathroom"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 w-36 cursor-pointer" value="1">
                        <div className={"flex gap-5"}>

                            <h2>2+</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="2">
                        <div className={"flex gap-5"}>

                            <h2>3+</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="3">
                        <div className={"flex gap-5"}>

                            <h2>4+</h2>
                        </div>

                    </SelectItem>
                    <SelectItem className="grid grid-cols-6 gap-5 text-gray-500 cursor-pointer" value="4">
                        <div className={"flex gap-5"}>

                            <h2>5+</h2>
                        </div>

                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="0">
                        <div className={"flex gap-5"}>

                            <h2>All</h2>
                        </div>
                    </SelectItem>

                </SelectContent>
            </Select>
            <Select onValueChange={setHomeType}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Home Type"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem className="flex flex-row gap-5 text-gray-500  cursor-pointer" value="Town House">
                        <div className={"flex gap-5"}>

                            <h2>Town House</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="Single Family">
                        <div className={"flex gap-5"}>

                            <h2>Single Family</h2>
                        </div>
                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="Condo">
                        <div className={"flex gap-5"}>

                            <h2>Condo</h2>
                        </div>

                    </SelectItem>
                    <SelectItem className="flex flex-row gap-5 text-gray-500 cursor-pointer" value="all">
                        <div className={"flex gap-5"}>

                            <h2>All</h2>
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Filter;