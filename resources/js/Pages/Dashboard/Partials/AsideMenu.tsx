import { Button } from "@/Components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, DotIcon } from "lucide-react";
import React from "react";

export default function AsideMenu() {
    return (
        <div className="flex flex-col px-6 w-64 space-y-12">
            <div className="flex  items-center h-20 font-black text-4xl">
                <div className="">
                    <h1>LOGO HERE</h1>
                </div>
            </div>
            <div className="">
                <div className="flex justify-between hover:bg-white rounded-md py-3 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8 rounded-lg">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Dashboard</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="flex flex-col justify-between  rounded-md">
                    <div className="flex justify-between bg-white rounded-md py-3 px-4">
                        <div className="flex items-center gap-4 text-sm font-semibold">
                            <Button size="icon" className="h-8 w-8">
                                <ChevronRightIcon className="h-8" />
                            </Button>
                            <p>Rentals</p>
                        </div>
                        <div className="items-center flex">
                            <ChevronLeftIcon className=" h-4 w-4" />
                        </div>
                    </div>
                    <div className="text-sm">
                        <ul className="px-4">
                            <li className="flex items-center gap-4">
                                <DotIcon className="h-9 w-8  flex-shrink-0" />
                                <span>New Rental</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <DotIcon className="h-9 w-8  flex-shrink-0" />
                                <span>Rental List</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <DotIcon className="h-9 w-8  flex-shrink-0" />
                                <span>Rental Reports</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between hover:bg-white rounded-md py-3 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Vehicles</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-white rounded-md py-3 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Reports</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
                <div className="flex justify-between hover:bg-white rounded-md py-3 px-4">
                    <div className="flex items-center gap-4 text-sm font-semibold">
                        <Button size="icon" className="h-8 w-8">
                            <ChevronRightIcon className="h-8" />
                        </Button>
                        <p>Settings</p>
                    </div>
                    <div className="items-center flex">
                        <ChevronLeftIcon className=" h-4 w-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
